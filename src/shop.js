var { Item } = require('../src/item.js');

class Shop {
  constructor(items = []) {
      this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {

      let Accumulator = 1
      Accumulator *= item.name.toLowerCase().startsWith("conjured") ? 2 : 1
      Accumulator *= item.sellIn <= 0 ? 2 : 1
      item.quality += item.qualityModifier() * Accumulator

      if (Number.isInteger(item.sellIn)) item.sellIn --
      if (item.quality <= item.minQuality) item.quality = item.minQuality
      if (item.quality >= item.maxQuality) item.quality = item.maxQuality
    })
    return this.items
  }

}

module.exports = {Shop};