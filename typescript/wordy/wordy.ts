const ArgumentError = new Error("ArgumentError");

class WordProblem {
  constructor(question: string) {}

  answer(): number {
    return 1;
  }
}

export { ArgumentError, WordProblem };
