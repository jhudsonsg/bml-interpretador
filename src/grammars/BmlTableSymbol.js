export default class BmlTableSymbol {
  constructor() {
    this.map = new Map();
  }

  add(key, value) {
    this.map.set(key, value);
  }
}