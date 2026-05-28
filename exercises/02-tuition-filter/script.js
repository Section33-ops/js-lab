const studentRoster = [
  { name: "Amina", balance: 5000, hasGrant: true },
  { name: "Jordan", balance: 4500, hasGrant: false },
  { name: "Kwame", balance: 6000, hasGrant: true },
  { name: "Chloe", balance: 3000, hasGrant: false },
];

function processTuition(roster) {
  let actionRequired = [];
  roster.forEach((student) => {
    if (student.hasGrant === true) {
      student.balance -= 1500;
      if (student.balance > 4000) {
        actionRequired.push(student.name);
      }
    }
  });
  console.log(`Action required: ${actionRequired}`);
}

// processTuition(studentRoster);

// const studentHasGrant = studentRoster.filter((student) => student.hasGrant);
// console.log(studentHasGrant);

// // Debt check
// const studentOwes = studentRoster.filter((student) => student.balance >= 4500);
// console.log(studentOwes);

// //Self funded students
// const SelfFundedStudent = studentRoster.filter((student) => !student.hasGrant);
// console.log(SelfFundedStudent);

// //High risk list
// const highRiskStudents = studentRoster.filter(
//   (student) => !student.hasGrant && student.balance >= 4500,
// );
// console.log(highRiskStudents);

// // Name tag generator
// const studentNameTags = studentRoster.map((student) => student.name);

// console.log(studentNameTags);

// // Tuition Hike
// const studentTuitionIncrease = studentRoster.map((student) => ({
//   ...student,
//   balance: student.balance * 1.1,
// }));
// console.log(studentTuitionIncrease);

// // Grant bonus
// const grantBonus = studentRoster.map((student) =>
//   student.hasGrant ? { ...student, balance: student.balance - 500 } : student,
// );
// console.log(grantBonus);

// Collection Notice
const collectNoticeForStudents = studentRoster
  .filter((student) => student.balance > 4000)
  .map((student) => `Urgent: ${student.name}, please pay your balance`);
console.log(collectNoticeForStudents);
