const GCD = (a: number, b: number): number => (b === 0 ? a : GCD(b, a % b));

class Rational {
  a: number;
  b: number;

  constructor(a1: number, b1: number) {
    this.a = a1;
    this.b = b1;
  }

  add({ a: a2, b: b2 }: Rational): Rational {
    this.a = this.a * b2 + a2 * this.b;
    this.b = this.b * b2;
    this.reduce();
    return new Rational(this.a, this.b);
  }

  sub({ a: a2, b: b2 }: Rational): Rational {
    this.a = this.a * b2 - a2 * this.b;
    this.b = this.b * b2;
    this.reduce();
    return new Rational(this.a, this.b);
  }

  mul({ a: a2, b: b2 }: Rational): Rational {
    this.a = this.a * a2;
    this.b = this.b * b2;
    this.reduce();
    return new Rational(this.a, this.b);
  }

  div({ a: a2, b: b2 }: Rational): Rational {
    this.a = this.a * b2;
    this.b = a2 * this.b;
    this.reduce();
    return new Rational(this.a, this.b);
  }

  abs(): Rational {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }

  exprational(x: number): Rational {
    this.a = this.a ** x;
    this.b = this.b ** x;
    return new Rational(this.a, this.b);
  }

  expreal(x: number): number {
    const xpowa = Math.pow(x, this.a);

    if (this.b == 2) {
      return Math.sqrt(xpowa);
    }
    if (this.b == 3) {
      return Math.cbrt(xpowa); // https://stackoverflow.com/a/26958154/3971297
    }

    return Math.pow(xpowa, 1.0 / this.b);
  }

  reduce(): Rational {
    const gdc = GCD(this.a, this.b);
    this.a = this.a / gdc;
    this.b = this.b / gdc;

    if (this.b < 0) {
      this.a = this.a / -1;
      this.b = this.b / -1;
    }

    return this;
  }
}

export default Rational;
