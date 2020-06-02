class SimpleCipher {
  key: string;

  constructor(key?: string) {
    this.key = key || this.keyGenerator();
  }

  private keyGenerator(): string {
    let res = "";
    const aCharCode = "a".charCodeAt(0);
    const zCharCode = "z".charCodeAt(0);
    for (let i = 0; i < 100; i++) {
      res += String.fromCharCode(
        Math.floor(Math.random() * (aCharCode - zCharCode + 1)) + zCharCode
      );
    }
    return res;
  }
  private convertLetter({
    inputLetter,
    keyLetter,
    action,
  }: {
    inputLetter: string;
    keyLetter: string;
    action: "encode" | "decode";
  }): string {
    const aCharCode = "a".charCodeAt(0);
    const zCharCode = "z".charCodeAt(0);

    let offset = keyLetter.charCodeAt(0) - aCharCode;

    if (action === "decode") {
      offset *= -1;
    }

    let charCode = inputLetter.charCodeAt(0) + offset;
    if (charCode < aCharCode) {
      charCode += zCharCode - aCharCode + 1;
    }
    if (charCode > zCharCode) {
      charCode -= zCharCode - aCharCode + 1;
    }

    return String.fromCharCode(charCode);
  }

  private convert(action: "encode" | "decode", str: string): string {
    return Array.from(str, (inputLetter, index) =>
      this.convertLetter({
        action,
        inputLetter: inputLetter,
        keyLetter: this.key[index % this.key.length],
      })
    ).join("");
  }

  encode(str: string): string {
    return this.convert("encode", str);
  }

  decode(str: string): string {
    return this.convert("decode", str);
  }
}

export default SimpleCipher;
