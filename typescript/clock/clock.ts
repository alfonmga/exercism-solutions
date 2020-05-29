const ONE_MINUTE_IN_MS = 60 * 1000;

class Clock {
  time: Date;

  constructor(initialHour: number, initialMinutes?: number) {
    this.time = new Date();
    this.time.setHours(initialHour, initialMinutes || 0);
  }

  plus(minutes: number): Clock {
    this.time.setTime(this.time.getTime() + minutes * ONE_MINUTE_IN_MS);
    return this;
  }
  minus(minutes: number): Clock {
    this.time.setTime(this.time.getTime() - minutes * ONE_MINUTE_IN_MS);
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
