const jokePara = document.querySelector('#joke-para');
const punchlinePara = document.querySelector('#punchline');

async function fetchJoke() {
  try {
    const response = await fetch(
      'https://official-joke-api.appspot.com/jokes/programming/random',
    );
    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    console.log(data);

    jokePara.innerText = data[0].setup;
    punchlinePara.innerText = data[0].punchline;
  } catch (error) {
    console.log(error);
  }
}
