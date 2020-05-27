enum COLOR_CODED_BANDS {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

type Color = keyof typeof COLOR_CODED_BANDS;

export class ResistorColor {
  private colors: Color[];

  constructor(colors: Color[]) {
    this.colors = colors;
    if (!this.validateInitialColorsValue()) {
      throw new Error("At least two colors need to be present");
    }
  }

  private validateInitialColorsValue(): boolean {
    return this.colors.length >= 2;
  }

  value(): number {
    return Number(
      this.colors
        .slice(0, 2)
        .map((c) => COLOR_CODED_BANDS[c])
        .join("")
    );
  }
}
