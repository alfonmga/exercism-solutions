const ENGLISH_ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const BOB_RESPONSES = {
  QUESTION: "Sure.",
  YELL: "Whoa, chill out!",
  YELL_QUESTION: "Calm down, I know what I'm doing!",
  ADDRESS: "Fine. Be that way!",
  ELSE: "Whatever.",
} as const;

type BOB_RESPONSE_TYPE = keyof typeof BOB_RESPONSES;

class Bob {
  private getBobResponseTypeFromPhraseAnalysis(
    phrase: string
  ): BOB_RESPONSE_TYPE {
    const strWithoutWhiteSpaces = phrase.replace(/\s/g, "");
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

    if (isStrEndingInQuestionMark) {
      if (hasStrAnyEnglishAlphabetLetter && isStrYelling) {
        return "YELL_QUESTION";
      }
      if (isStrEndingInQuestionMark) {
        return "QUESTION";
      }
    }

    if (strWithoutWhiteSpaces.length === 0) {
      return "ADDRESS";
    }

    return "ELSE";
  }

  hey(phrase: string): string {
    return BOB_RESPONSES[this.getBobResponseTypeFromPhraseAnalysis(phrase)];
  }
}

export default Bob;
