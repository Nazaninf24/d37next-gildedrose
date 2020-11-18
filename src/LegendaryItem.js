var { Item } = require('../src/item.js');

class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
  }

  qualityModifier = () => {
    return 0
  }}

module.exports = {LegendaryItem}; 