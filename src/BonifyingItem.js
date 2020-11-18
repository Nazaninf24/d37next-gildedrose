var { Item } = require('./item.js');

class BonifyingItem extends Item {
  constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
  }

  maxQuality = 50
  minQuality = 0
  
  qualityModifier = () => {
    return 1
  }
}

module.exports = {BonifyingItem};