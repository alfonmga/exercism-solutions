class Clock {
  time: Date;

  constructor(initialHour: number, initialMinutes?: number) {
    this.time = new Date();
    this.time.setHours(initialHour, initialMinutes || 0);
  }

  plus(minutes: number): Clock {
    this.time.setTime(this.time.getTime() + minutes * 60 * 1000);
    return this;
  }
  minus(minutes: number): Clock {
    this.time.setTime(this.time.getTime() - minutes * 60 * 1000);
    return this;
  }
  equals(clock: Clock): boolean {
    return this.toString() === clock.toString();
  }
  toString(): string {
    return `${String(this.time.getHours()).padStart(2, "0")}:${String(
      this.time.getMinutes()
    ).padStart(2, "0")}`;
  }
}

export default Clock;
