class Clock {
  hour: number;
  minutes: number;
  constructor(initialHour: number, initialMinutes?: number) {
    this.hour = initialHour;
    this.minutes = initialMinutes || 0;
  }
  plus(n: number): Clock {
    return this;
  }
  minus(n: number): Clock {
    return this;
  }
  equals(clock: Clock): boolean {}
  toString(): string {
    return `${this.hour}:${this.minutes}`;
  }
}

export default Clock;
