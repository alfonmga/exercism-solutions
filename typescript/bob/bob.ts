const ENGLISH_ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const BOB_RESPONSES = {
  QUESTION: "Sure.",
  YELL: "Whoa, chill out!",
  ADDRESS: "Fine. Be that way!",
  ELSE: "Whatever.",
};

type BOB_RESPONSE_TYPES = "QUESTION" | "YELL" | "ADDRESS" | "ELSE";

class Bob {
  private analyzeStr(str: string): BOB_RESPONSE_TYPES {
    const isEndingInExclamation = str.charAt(str.length - 1) === "!";
    const isEndingInQuestionMark = str.charAt(str.length - 1) === "?";
    const hasAllLettersUppercase =
      str
        .replace(" ", "")
        .toUpperCase()
        .split("")
        .filter((c) => ENGLISH_ALPHABET.includes(c))
        .join("") ===
      str
        .replace(" ", "")
        .split("")
        .filter((c) => ENGLISH_ALPHABET.includes(c))
        .join("");

    if (
      (isEndingInExclamation && hasAllLettersUppercase) ||
      (hasAllLettersUppercase && !isEndingInQuestionMark)
    ) {
      return "YELL";
    }
    if (isEndingInQuestionMark) {
      return "QUESTION";
    }

    return "ELSE";
  }

  private getBobResponseByType(type: BOB_RESPONSE_TYPES): string {
    return BOB_RESPONSES[type];
  }

  hey(str: string): string {
    return this.getBobResponseByType(this.analyzeStr(str));
  }
}

export default Bob;
