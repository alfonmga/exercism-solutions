const isArrayNumberSortedUtil = (array: number[]) =>
  array.every((v, i) => i === 0 || v >= array[i - 1]);

export default class BinarySearch {
  private list?: number[];

  constructor(list: number[]) {
    if (isArrayNumberSortedUtil(list)) {
      this.list = list;
    }
  }

  get array(): number[] | undefined {
    return this.list;
  }

  indexOf(searchNumber: number): number {
    if (!this.list || this.list.length === 0) {
      return -1;
    }

    let left = 0;
    let right = this.list.length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (searchNumber < this.list[middle]) {
        right = middle - 1;
      } else if (searchNumber > this.list[middle]) {
        left = middle + 1;
      } else {
        return middle;
      }
    }

    return -1;
  }
}
