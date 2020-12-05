const ArgumentError = new Error("ArgumentError");

class WordProblem {
  private OPERATION_KEYWORDS = [
    "plus",
    "minus",
    "multiplied",
    "divided",
    "raised",
  ];
  question: string;

  constructor(question: string) {
    this.question = question;
  }

  answer(): number {
    let answer: number | undefined = undefined;

    const questionChunks = this.question
      .replace("?", "")
      .replace(/th/g, "")
      .split(" ")
      .filter((str) => {
        if (!Number.isNaN(Number(str))) {
          return true;
        }
        return this.OPERATION_KEYWORDS.includes(str);
      });

    for (const [idx, questionChunk] of questionChunks.entries()) {
      switch (questionChunk) {
        case "plus":
          if (idx === 1) {
            answer =
              Number(questionChunks[idx - 1]) + Number(questionChunks[idx + 1]);
            continue;
          }
          answer! += Number(questionChunks[idx + 1]);
          break;
        case "minus":
          if (idx === 1) {
            answer =
              Number(questionChunks[idx - 1]) - Number(questionChunks[idx + 1]);
            continue;
          }
          answer! -= Number(questionChunks[idx + 1]);
          break;
        case "multiplied":
          if (idx === 1) {
            answer =
              Number(questionChunks[idx - 1]) * Number(questionChunks[idx + 1]);
            continue;
          }
          answer! *= Number(questionChunks[idx + 1]);
          break;
        case "divided":
          if (idx === 1) {
            answer =
              Number(questionChunks[idx - 1]) / Number(questionChunks[idx + 1]);
            continue;
          }
          answer! /= Number(questionChunks[idx + 1]);
          break;
        case "raised":
          if (idx === 1) {
            answer =
              Number(questionChunks[idx - 1]) **
              Number(questionChunks[idx + 1]);
            continue;
          }
          answer! **= Number(questionChunks[idx + 1]);
          break;
      }
    }

    if (answer === undefined) {
      throw ArgumentError;
    }

    return answer;
  }
}

export { ArgumentError, WordProblem };
