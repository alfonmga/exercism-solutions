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

  indexOf(key: number): number {
    if (!this.list || this.list.length === 0) {
      return -1;
    }
    [];

    let left = 0;
    let right = this.list.length - 1;
    let middle = 0;

    while (left <= right) {
      middle = Math.floor((left + right) / 2);

      if (key < this.list[middle]) {
        right = middle - 1;
      } else if (key > this.list[middle]) {
        left = middle + 1;
      } else {
        return middle;
      }
    }

    return -1;
  }
}