const students = ["Park", "Kim", "Lee", "Kang"];

// students.forEach(function (student) {
//   document.write(`${student}, `);
// });

// students.forEach((student) => {
//   document.write(`${student}, `);
// });

for (const student of students) {
  document.write(`${student}, `);
}
