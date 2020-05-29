// @TODO: Refactor to use Date object
class Clock {
  hour: number;
  minutes: number = 0;

  constructor(initialHour: number, initialMinutes?: number) {
    this.hour = initialHour;

    if (initialMinutes) {
      this.minutes = initialMinutes;
    }

    this.adjustHours();
    this.adjustMinutes();
  }

  adjustHours() {
    if (0 < this.hour && this.hour < 25) {
      return;
    }

    const newHour = Math.floor(this.hour % 24);
    this.hour = newHour < 0 ? Math.abs(24 - Math.abs(newHour)) : newHour;
  }

  adjustMinutes() {
    if (0 < this.minutes && this.minutes < 60) {
      return;
    }

    const extraHoursInCurrentMinutes = Math.floor(this.minutes / 60);
    this.hour +=
      (extraHoursInCurrentMinutes + 24 * (extraHoursInCurrentMinutes % 24)) %
      24;

    this.minutes = Math.round(
      (this.minutes / 60 - extraHoursInCurrentMinutes) * 60
    );
  }

  plus(minutes: number): Clock {
    this.minutes += minutes;
    this.adjustHours();
    this.adjustMinutes();
    return this;
  }
  minus(minutes: number): Clock {
    this.minutes -= minutes;
    this.adjustHours();
    this.adjustMinutes();
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
