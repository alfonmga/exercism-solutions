const ArgumentError = new Error("ArgumentError");

class WordProblem {
  question: string;

  constructor(question: string) {
    this.question = question;
  }

  answer(): number {
    return 1;
  }
}

export { ArgumentError, WordProblem };
