const applicants = [
  { name: "Elena", skills: ["Python", "Data Science", "SQL"] },
  { name: "Devon", skills: ["JavaScript", "React", "HTML"] },
  { name: "Amara", skills: ["Java", "C#", "C++"] },
  { name: "Hiro", skills: ["Ruby", "DevOps", "JavaScript"] },
  { name: "Sofia", skills: ["JavaScript", "TypeScript", "Node.js"] },
];

function findJavaScriptDevs(candidateList) {
  const hiredDevs = [];

  for (let i = 0; i < candidateList.length; i++) {
    const candidate = candidateList[i];
    const candidateName = candidate.name;
    const candidateSkills = candidate.skills;

    for (let i = 0; i < candidateSkills.length; i++) {
      const skill = candidateSkills[i];
      if (skill != "JavaScript") {
        continue;
      } else {
        console.log(`${candidateName} knows JavaScript`);
        hiredDevs.push(candidateName);
      }
    }
  }
  console.log(hiredDevs);
}

findJavaScriptDevs(applicants);
