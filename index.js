class SortedList {
  comparar(a, b) {
    return a - b;
  }
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(this.comparar);
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length > 0) {
      return Math.max.apply(null, this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min.apply(null, this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    let sum_total = 0;
    if (this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        sum_total += this.items[i];
      }
      return sum_total;
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
