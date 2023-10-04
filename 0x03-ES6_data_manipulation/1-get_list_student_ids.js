export default function getListStudentIds(studentArray) {
  // Check if studentArray is an array
  if (!Array.isArray(studentArray)) {
    return [];
  }

  // Use map to extract ids and return a new array
  return studentArray.map((student) => student.id);
}
