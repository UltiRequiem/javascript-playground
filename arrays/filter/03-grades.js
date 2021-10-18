import { STUDENTS } from "../data.js";

/**
 * @param {Array} students
 * @param {number} minGrade
 */
export default function approvedStudents(students, minGrade) {
  return students.filter((student) => student.grade >= minGrade);
}

console.log(approvedStudents(STUDENTS, 90));
