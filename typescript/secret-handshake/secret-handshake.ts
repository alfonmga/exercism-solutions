const SECRET_HANDSHAKE_REVERSE_EVENT_BIT = 0b10000;
const SECRET_HANDSHAKE_EVENTS_MAPPING: Map<number, string> = new Map([
  [0b1, "wink"],
  [0b10, "double blink"],
  [0b100, "close your eyes"],
  [0b1000, "jump"],
]);

class HandShake {
  private secret: number;

  constructor(secret: number) {
    this.secret = secret;
  }

  commands(): string[] {
    const result: string[] = [];
    const reverse = Boolean(this.secret & SECRET_HANDSHAKE_REVERSE_EVENT_BIT);
    for (const [bit, secretEventString] of SECRET_HANDSHAKE_EVENTS_MAPPING) {
      if (this.secret & bit) {
        if (reverse) {
          result.unshift(secretEventString);
          continue;
        }

        result.push(secretEventString);
      }
    }

    return result;
  }
}

export default HandShake;
