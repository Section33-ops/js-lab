function fetchGpa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3.7);
    }, 1000);
  });
}

async function getGpa() {
  const gpa = await fetchGpa();
  console.log(`Gpa: ${gpa}`);
}

getGpa();

// Sequential Task Runner
function loadGameData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data Loaded');
    }, 2000);
  });
}

function startGame() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Game Started');
    }, 1000);
  });
}

async function runGame() {
  const loadGameDataResult = await loadGameData();
  console.log(loadGameDataResult);

  const startGameResult = await startGame();
  console.log(startGameResult);
}

runGame();

// Handling Rejection
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Connection Failed!');
    }, 1000);
  });
}

async function handleData() {
  try {
    const getDataResult = await getData();
    console.log(getDataResult);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

handleData();
