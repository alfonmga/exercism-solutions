class Node<T> {
  data: T;
  next?: Node<T>;
  prev?: Node<T>;

  constructor(data: T) {
    this.data = data;
  }
}

class LinkedList<T> {
  firstNode?: Node<T>;
  lastNode?: Node<T>;

  push(data: T): void {
    const newNode = new Node<T>(data);

    if (this.firstNode === undefined) {
      this.firstNode = newNode;
    }

    if (this.lastNode) {
      const currentLastNode = this.lastNode;
      newNode.prev = currentLastNode;
      currentLastNode.next = newNode;
    }

    this.lastNode = newNode;
  }

  pop(): T {
    const lastNode = this.lastNode!;

    if (lastNode.prev) {
      const prevLastNode = lastNode.prev;
      prevLastNode.next = undefined;

      this.lastNode = prevLastNode;
      return lastNode.data;
    }

    this.firstNode = undefined;
    this.lastNode = undefined;
    return lastNode.data;
  }

  shift(): T {
    const firstNode = this.firstNode!;

    if (firstNode.next) {
      const nextFirstNode = this.firstNode!.next;
      nextFirstNode!.prev = undefined;

      this.firstNode = nextFirstNode;
      return firstNode.data;
    }

    this.firstNode = undefined;
    this.lastNode = undefined;
    return firstNode.data;
  }

  unshift(data: T): void {
    const newNode = new Node<T>(data);

    if (this.firstNode === undefined) {
      this.firstNode = newNode;
      this.lastNode = newNode;
      return;
    }

    const currentFirstNode = this.firstNode;
    currentFirstNode.prev = newNode;

    newNode.next = currentFirstNode;
    this.firstNode = newNode;
  }

  count(): number {
    if (!this.firstNode) {
      return 0;
    }

    let count = 0;
    let node: Node<T> | undefined = this.firstNode;
    while (node !== undefined) {
      count += 1;
      node = node.next;
    }

    return count;
  }

  delete(value: T): void {
    let node: Node<T> | undefined = this.firstNode;
    while (node !== undefined) {
      if (node.data === value) {
        if (node.prev) {
          if (node.next) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
          }
        } else {
          if (node.next) {
            node.next.prev = undefined;
          } else {
            this.firstNode = undefined;
            this.lastNode = undefined;
          }
        }
      }

      node = node.next;
    }
  }
}

export default LinkedList;
