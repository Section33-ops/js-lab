/*
let person = {
  name: 'Brad',
  age: 35,
  address: {
    street: '5 main st',
    city: 'Boston',
  },
  children: ['Brianna', 'Nicholas'],
};

// person = JSON.stringify(person);
// console.log(person);
// person = JSON.parse(person);

const people = [
  { name: 'Brad', age: 35 },
  {
    name: 'John',
    age: 40,
  },
  {
    name: 'Sara',
    age: 25,
  },
];

// console.log(people[1].age);

let output = '';
for (var i = 0; i < people.length; i++) {
  // console.log(people[i].name);
  output += `<li> ${people[i].name}</li>`;
}

document.getElementById('people').innerHTML = output;
*/

// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     var response = JSON.parse(xhttp.responseText);
//     // console.log(response.people);
//     var people = response.people;
//     var output = '';
//     for (var i = 0; i < people.length; i++) {
//       // console.log(people[i].name);
//       output += `<li> ${people[i].name}</li>`;
//     }

//     document.getElementById('people').innerHTML = output;
//   }
// };
// xhttp.open('GET', 'people.json', true);
// xhttp.send();

async function getPeople() {
  try {
    const response = await fetch('./people.json');

    if (!response.ok) {
      throw new Error('Could not fetch file');
    }

    const data = await response.json();

    const people = data.people;

    let output = '';
    for (const person of people) {
      output += `<li> ${person.name}</li>`;
    }

    document.getElementById('people').innerHTML = output;
  } catch (error) {
    console.log(error);
  }
}

getPeople();
