const ENGLISH_ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const BOB_RESPONSES = {
  QUESTION: "Sure.",
  YELL: "Whoa, chill out!",
  YELL_QUESTION: "Calm down, I know what I'm doing!",
  ADDRESS: "Fine. Be that way!",
  ELSE: "Whatever.",
};

type BOB_RESPONSE_TYPES = keyof typeof BOB_RESPONSES;

class Bob {
  private analyzeStr(str: string): BOB_RESPONSE_TYPES {
    const strWithoutWhiteSpaces = str.replace(/\s/g, "");
    const isStrEndingInExclamation =
      strWithoutWhiteSpaces.charAt(strWithoutWhiteSpaces.length - 1) === "!";
    const isStrEndingInQuestionMark =
      strWithoutWhiteSpaces.charAt(strWithoutWhiteSpaces.length - 1) === "?";
    const strWithoutNonEnglishAlphabetLettersFrom = strWithoutWhiteSpaces
      .split("")
      .filter((c) => ENGLISH_ALPHABET.includes(c.toLowerCase()))
      .join("");
    const isStrYelling =
      strWithoutNonEnglishAlphabetLettersFrom.toUpperCase() ===
      strWithoutNonEnglishAlphabetLettersFrom;
    const hasStrAnyEnglishAlphabetLetter =
      strWithoutNonEnglishAlphabetLettersFrom.length > 0;

    if (
      hasStrAnyEnglishAlphabetLetter &&
      isStrYelling &&
      (isStrEndingInExclamation || !isStrEndingInQuestionMark)
    ) {
      return "YELL";
    }
    if (
      hasStrAnyEnglishAlphabetLetter &&
      isStrYelling &&
      isStrEndingInQuestionMark
    ) {
      return "YELL_QUESTION";
    }
    if (isStrEndingInQuestionMark) {
      return "QUESTION";
    }
    if (strWithoutWhiteSpaces.length === 0) {
      return "ADDRESS";
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
