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

processTuition(studentRoster);
