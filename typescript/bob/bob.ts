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
    const stringWithoutWhiteSpaces = str.replace(/\s/g, "");
    const isEndingInExclamation =
      stringWithoutWhiteSpaces.charAt(stringWithoutWhiteSpaces.length - 1) ===
      "!";
    const isEndingInQuestionMark =
      stringWithoutWhiteSpaces.charAt(stringWithoutWhiteSpaces.length - 1) ===
      "?";
    const strStrippedNonEnglishAlphabetLetters = stringWithoutWhiteSpaces
      .split("")
      .filter((c) => ENGLISH_ALPHABET.includes(c.toLowerCase()))
      .join("");
    const hasAllLettersUppercase =
      strStrippedNonEnglishAlphabetLetters.toUpperCase() ===
      strStrippedNonEnglishAlphabetLetters;
    const hasAnyEnglishAlphabetLetter =
      strStrippedNonEnglishAlphabetLetters.length > 0;

    if (
      hasAnyEnglishAlphabetLetter &&
      hasAllLettersUppercase &&
      (isEndingInExclamation || !isEndingInQuestionMark)
    ) {
      return "YELL";
    }
    if (
      hasAnyEnglishAlphabetLetter &&
      hasAllLettersUppercase &&
      isEndingInQuestionMark
    ) {
      return "YELL_QUESTION";
    }
    if (isEndingInQuestionMark) {
      return "QUESTION";
    }
    if (stringWithoutWhiteSpaces.length === 0) {
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
