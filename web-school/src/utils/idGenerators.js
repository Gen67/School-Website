export function generateStudentIdNo(existingStudents) {
  let id;
  do {
    id = "STU-" + Math.floor(1000 + Math.random() * 9000);
  } while (existingStudents.some((s) => s.idNo === id));
  return id;
}

export function generateStudentNo(existingStudents) {
  const max = existingStudents.reduce((m, s) => Math.max(m, parseInt(s.studentNo, 10)), 0);
  return String(max + 1).padStart(4, "0");
}
