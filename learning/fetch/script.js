// https://official-joke-api.appspot.com/jokes/programming/random

// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
//   .then((response) => {
//     if(!response.ok) {
//       throw new Error('Could not fetch resource')
//     }
//     return response.json()
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

fetchData();

async function fetchData() {
  try {
    const response = await fetch(
      'https://official-joke-api.appspot.com/jokes/programming/rando',
    );

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
