class Clock {
  hour: number = 0;
  minutes: number = 0;

  constructor(initialHour: number, initialMinutes?: number) {
    this.increaseClockHours(initialHour);
    if (initialMinutes) {
      this.increaseClockMinutes(initialMinutes);
    }
  }

  increaseClockHours(hours: number) {
    let currentHour = this.hour;
    currentHour += hours > 24 ? currentHour / (hours * (hours / 24)) : hours;

    this.hour = currentHour;
  }

  increaseClockMinutes(minutes: number) {
    this.minutes += minutes;
  }

  plus(minutes: number): Clock {
    this.minutes += minutes;
    return this;
  }
  minus(minutes: number): Clock {
    this.minutes += minutes;
    return this;
  }
  equals(clock: Clock): boolean {
    return this === clock;
  }

  private outputHour(): string {
    let currentHour = this.hour;
    if (currentHour === 24) {
      currentHour = 0;
    }

    return currentHour >= 10 ? currentHour.toString() : `0${currentHour}`;
  }

  private outputMinutes(): string {
    return this.minutes >= 10 ? this.minutes.toString() : `0${this.minutes}`;
  }

  toString(): string {
    return `${this.outputHour()}:${this.outputMinutes()}`;
  }
}

export default Clock;
