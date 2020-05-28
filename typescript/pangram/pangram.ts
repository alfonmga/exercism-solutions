const LAST_ASCII_CHAR_CODE = 127; // The first 128 Unicode code points are a direct match of the ASCII character encoding.
const ENGLISH_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class Pangram {
  private readonly sentence: string;

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  isPangram(): boolean {
    const ENGLISH_ALPHABET_LENGTH = ENGLISH_ALPHABET.length;

    const SENTENCE_LETTERS_OCURRENCE_COUNT_DICT = this.sentence
      .replace(" ", "")
      .toUpperCase()
      .split("")
      .filter((c) => c.charCodeAt(0) < LAST_ASCII_CHAR_CODE)
      .filter((c) => ENGLISH_ALPHABET.includes(c))
      .reduce((accumulator, currentCharacter) => {
        accumulator[currentCharacter] = accumulator[currentCharacter]
          ? (accumulator[currentCharacter] += 1)
          : 1;

        return accumulator;
      }, {} as { [index: string]: number });
    const NUM_UNIQUE_ENGLISH_ALPHABET_LETTERS_FOUND_IN_SENTENCE = Object.keys(
      SENTENCE_LETTERS_OCURRENCE_COUNT_DICT
    ).length;

    return (
      ENGLISH_ALPHABET_LENGTH ===
      NUM_UNIQUE_ENGLISH_ALPHABET_LETTERS_FOUND_IN_SENTENCE
    );
  }
}

export default Pangram;
