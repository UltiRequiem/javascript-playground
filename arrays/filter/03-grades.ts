import { STUDENTS } from "../data.ts";
import type { Student } from "../data.ts";

export default function approvedStudents(
  students: Student[],
  minGrade: number,
) {
  return students.filter((student) => student.grade >= minGrade);
}

console.log(approvedStudents(STUDENTS, 90));
