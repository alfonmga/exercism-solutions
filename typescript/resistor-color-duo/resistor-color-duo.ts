const COLOR_CODED_BANDS = {
  BLACK: 0,
  BROWN: 1,
  RED: 2,
  ORANGE: 3,
  YELLOW: 4,
  GREEN: 5,
  BLUE: 6,
  VIOLET: 7,
  GREY: 8,
  WHITE: 9,
};

type Color =
  | "black"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "violet"
  | "grey"
  | "white";

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
        .map(
          (c) =>
            COLOR_CODED_BANDS[c.toUpperCase() as keyof typeof COLOR_CODED_BANDS]
        )
        .join("")
    );
  }
}
