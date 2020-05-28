class Matrix {
  rows: Array<Array<number>> = [];
  columns: Array<Array<number>> = [];

  constructor(matrixInput: string) {
    const matrixRows = matrixInput
      .split("\n")
      .map((row) => row.split(" ").map((n) => Number(n)));

    const matrixColumns: number[][] = [];
    for (let i = 0; i < matrixRows.length; i += 1) {
      matrixColumns.push([]);
    }

    for (let i = 0; i < matrixRows.length; i += 1) {
      const currentMatrixColumnsLength = matrixRows[i].length;
      for (let j = 0; j < currentMatrixColumnsLength; j += 1) {
        matrixColumns[j].push(matrixRows[i][j]);
      }
    }

    this.rows = matrixRows;
    this.columns = matrixColumns;
  }
}

export default Matrix;
