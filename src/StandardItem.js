var { Item } = require('../src/item.js');

class StandardItem extends Item {
  constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
  }

  maxQuality = 50
  minQuality = 0
  qualityModifier = () => {
    return -1
  }

}

module.exports = {StandardItem};