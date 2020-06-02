const A_CHAR_CODE = "a".charCodeAt(0);
const Z_CHAR_CODE = "z".charCodeAt(0);

class SimpleCipher {
  key: string;

  constructor(key?: string) {
    this.key = key || this.keyGenerator();
  }

  private keyGenerator(): string {
    let res = "";
    for (let i = 0; i < 100; i++) {
      res += String.fromCharCode(
        Math.floor(Math.random() * (A_CHAR_CODE - Z_CHAR_CODE + 1)) +
          Z_CHAR_CODE
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
    let offset = keyLetter.charCodeAt(0) - A_CHAR_CODE;

    if (action === "decode") {
      offset *= -1;
    }

    let charCode = inputLetter.charCodeAt(0) + offset;
    if (charCode < A_CHAR_CODE) {
      charCode += Z_CHAR_CODE - A_CHAR_CODE + 1;
    }
    if (charCode > Z_CHAR_CODE) {
      charCode -= Z_CHAR_CODE - A_CHAR_CODE + 1;
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
