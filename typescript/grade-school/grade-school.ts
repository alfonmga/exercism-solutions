type GradeSchoolDatabaseGradeID = string;

class GradeSchool {
  SCHOOL_DATABASE: Map<GradeSchoolDatabaseGradeID, string[]> = new Map();

  sortStudentsGradeAlpabethically(gradeId: GradeSchoolDatabaseGradeID): void {
    this.SCHOOL_DATABASE.get(gradeId)!.sort((a, b) => {
      const nameA = a.toUpperCase();
      const nameB = b.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  getDatabaseGradeIdFromGradeNumber(grade: number): GradeSchoolDatabaseGradeID {
    return grade.toString();
  }

  addStudent(studentName: string, grade: number): void {
    const gradeId = this.getDatabaseGradeIdFromGradeNumber(grade);

    if (!this.SCHOOL_DATABASE.has(gradeId)) {
      this.SCHOOL_DATABASE.set(gradeId, []);
    }

    this.SCHOOL_DATABASE.get(gradeId)!.push(studentName);
    this.sortStudentsGradeAlpabethically(gradeId);
  }

  studentsInGrade(grade: number): string[] {
    const gradeId = this.getDatabaseGradeIdFromGradeNumber(grade);

    const gradeStudents = this.SCHOOL_DATABASE.get(gradeId);
    return gradeStudents ? gradeStudents.slice() : [];
  }

  studentRoster(): Map<string, string[]> {
    return new Map(
      JSON.parse(JSON.stringify(Array.from(this.SCHOOL_DATABASE)))
    );
  }
}

export default GradeSchool;
