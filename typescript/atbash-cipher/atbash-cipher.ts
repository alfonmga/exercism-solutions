const ENGLISH_ALPHABET = "abcdefghijklmnopqrstuvwxyz";

class AtbashCipher {
  private readonly PLAIN = ENGLISH_ALPHABET.split("");
  private readonly CIPHER = [...ENGLISH_ALPHABET.split("")].reverse();
  private readonly CIPHER_MAX_GROUP_STRING_LENGTH = 5;

  encode(message: string): string {
    return message
      .replace(/\s/g, "")
      .replace(/\./g, "")
      .replace(/,/g, "")
      .split("")
      .map((character) => {
        const encodedCharacter = this.CIPHER[
          this.PLAIN.indexOf(character.toLowerCase())
        ];
        return encodedCharacter ? encodedCharacter : character;
      })
      .join("")
      .match(new RegExp(`.{1,${this.CIPHER_MAX_GROUP_STRING_LENGTH}}`, "g"))!
      .join(" ");
  }

  decode(encodedMessage: string): string {
    return encodedMessage
      .replace(/\s/g, "")
      .split("")
      .map((character) => {
        const decodedCharacter = this.PLAIN[this.CIPHER.indexOf(character)];
        return decodedCharacter ? decodedCharacter : character;
      })
      .join("");
  }
}

export default AtbashCipher;
