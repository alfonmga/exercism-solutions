const SECONDS_IN_ONE_DAY = 60 * 60 * 24;

const EATH_ORBITAL_PERIOD_IN_EARTH_DAYS = 365.25;
const PLANETS_ORBITAL_PERIOD_IN_EARTH_YEARS = {
  EARTH: 1,
  MERCURY: 0.2408467,
  VENUS: 0.61519726,
  MARS: 1.8808158,
  JUPITER: 11.862615,
  SATURN: 29.447498,
  URANUS: 84.016846,
  NEPTUNE: 164.79132,
};

type PLANET =
  | "EARTH"
  | "MERCURY"
  | "VENUS"
  | "MARS"
  | "JUPITER"
  | "SATURN"
  | "URANUS"
  | "NEPTUNE";

class SpaceAge {
  private readonly OUTPUT_AGE_DECIMAL_POINT_BASE = 100;

  seconds: number;

  constructor(ageInSeconds: number) {
    this.seconds = ageInSeconds;
  }

  private outputAge(age: number): number {
    return (
      Math.round(age * this.OUTPUT_AGE_DECIMAL_POINT_BASE) /
      this.OUTPUT_AGE_DECIMAL_POINT_BASE
    );
  }

  private getPlanetOrbitalPeriodInEarthDays(planet: PLANET): number {
    return (
      PLANETS_ORBITAL_PERIOD_IN_EARTH_YEARS[planet] *
      EATH_ORBITAL_PERIOD_IN_EARTH_DAYS
    );
  }

  private calculateAgeInPlanet(planet: PLANET): number {
    const ageInDays = this.seconds / SECONDS_IN_ONE_DAY;

    switch (planet) {
      case "EARTH":
        return this.outputAge(ageInDays / EATH_ORBITAL_PERIOD_IN_EARTH_DAYS);

      default:
        return this.outputAge(
          ageInDays / this.getPlanetOrbitalPeriodInEarthDays(planet)
        );
    }
  }

  onEarth(): number {
    return this.calculateAgeInPlanet("EARTH");
  }

  onMercury(): number {
    return this.calculateAgeInPlanet("MERCURY");
  }

  onVenus(): number {
    return this.calculateAgeInPlanet("VENUS");
  }

  onMars(): number {
    return this.calculateAgeInPlanet("MARS");
  }

  onJupiter(): number {
    return this.calculateAgeInPlanet("JUPITER");
  }

  onSaturn(): number {
    return this.calculateAgeInPlanet("SATURN");
  }

  onUranus(): number {
    return this.calculateAgeInPlanet("URANUS");
  }

  onNeptune(): number {
    return this.calculateAgeInPlanet("NEPTUNE");
  }
}

export default SpaceAge;
