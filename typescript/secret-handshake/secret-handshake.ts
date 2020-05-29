const decimalNumberToBinaryUtil = (n: number) => (n >>> 0).toString(2);

const SECRET_HANDSHAKE: { [key: number]: string } = {
  1: "wink",
  10: "double blink",
  100: "close your eyes",
  1000: "jump",
  10000: "_REVERSE_ACTIONS_",
};

class HandShake {
  private binary: string;

  constructor(decimalN: number) {
    this.binary = decimalNumberToBinaryUtil(decimalN);
  }

  commands(): string[] {
    const sendActions: string[] = [];
    let gas = Number(this.binary);

    for (const action of Object.keys(SECRET_HANDSHAKE).sort(
      (a, b) => Number(b) - Number(a)
    )) {
      if (gas >= Number(action)) {
        gas -= Number(action);
        sendActions.unshift(SECRET_HANDSHAKE[Number(action)]);
      }
    }

    if (sendActions.includes("_REVERSE_ACTIONS_")) {
      sendActions.splice(sendActions.indexOf("_REVERSE_ACTIONS_"), 1);
      sendActions.reverse();
    }

    return sendActions;
  }
}

export default HandShake;
