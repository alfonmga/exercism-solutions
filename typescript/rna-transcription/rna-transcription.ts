enum DNA_NUCLEOTIDES {
  A = "A",
  C = "C",
  G = "G",
  T = "T",
}
enum RNA_NUCLEOTIDES {
  A = "A",
  C = "C",
  G = "G",
  U = "U",
}

type DNA_NUCLEOTIDES_WITH_COMPLIMENT_RNA_NUCLEOTIDES =
  | DNA_NUCLEOTIDES.G
  | DNA_NUCLEOTIDES.C
  | DNA_NUCLEOTIDES.T
  | DNA_NUCLEOTIDES.A;

type DNA_STRAND = string;
type RNA_STRAND = string;

class Transcriptor {
  private isValidDNAStrand(s: string): boolean {
    return s.split("").every((v) => v in DNA_NUCLEOTIDES);
  }

  private getComplementRNANucleotideFromDNANucleotide(
    dnaNucleotide: DNA_NUCLEOTIDES_WITH_COMPLIMENT_RNA_NUCLEOTIDES
  ): RNA_NUCLEOTIDES {
    switch (dnaNucleotide) {
      case DNA_NUCLEOTIDES.G:
        return RNA_NUCLEOTIDES.C;
      case DNA_NUCLEOTIDES.C:
        return RNA_NUCLEOTIDES.G;
      case DNA_NUCLEOTIDES.T:
        return RNA_NUCLEOTIDES.A;
      case DNA_NUCLEOTIDES.A:
        return RNA_NUCLEOTIDES.U;
    }
  }

  toRna(inputDNAStrand: string): RNA_STRAND {
    if (!this.isValidDNAStrand(inputDNAStrand)) {
      throw new Error("Invalid input DNA.");
    }
    const dnaStrand: DNA_STRAND = inputDNAStrand;

    return dnaStrand
      .split("")
      .map((v) => {
        const currentDNANucleotide = v as DNA_NUCLEOTIDES;
        const hasComplimentRNANucleotide = currentDNANucleotide as DNA_NUCLEOTIDES_WITH_COMPLIMENT_RNA_NUCLEOTIDES;

        return hasComplimentRNANucleotide
          ? this.getComplementRNANucleotideFromDNANucleotide(
              currentDNANucleotide
            )
          : currentDNANucleotide;
      })
      .join("");
  }
}

export default Transcriptor;
