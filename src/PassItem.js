var { Item } = require('./item.js');

class PassItem extends Item {
  constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
  }

  maxQuality = 50
  minQuality = 0

  qualityModifier = () => {
    if ((this.sellIn <= 10) && (this.sellIn > 5)) {
      return 2;
    }
    else if ((this.sellIn <= 5) && (this.sellIn > 0)) {
      return 3;
    }
    else if (this.sellIn <= 0) {
      return -this.quality;
    }
    return 1
  }
}

module.exports = {PassItem};