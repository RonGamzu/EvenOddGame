const prompt = require("prompt-sync")();

const playersArray = [];
let winner = null;
const numberOfPlayers = 
  prompt("How many players you are (up to 7 and no less than 2)? ")

for (let i = 0; i < numberOfPlayers; i++) {
  const playerName = prompt("Please enter a your name: ");
  playersArray.push({ name: playerName, score: 0, wins: 0 });
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound() {
  const firstPlayer = playersArray[getRandomNumber(0, playersArray.length - 1)];
  let secondPlayer = playersArray[getRandomNumber(0, playersArray.length - 1)];
  while (firstPlayer.name === secondPlayer.name) {
    secondPlayer = playersArray[getRandomNumber(0, playersArray.length - 1)];
  }
  firstPlayer.score = 0;
  secondPlayer.score = 0;
  for (let i = 0; i < numberOfPlayers; i++) {
    const randomNumber = getRandomNumber(-5, 13);
    if (randomNumber % 2 === 0) {
        firstPlayer.score += 1;
      console.log(
        `Round #${i}, random number is ${randomNumber}, ${firstPlayer.name} scored!`
      );
      console.log(
        `Status: ${firstPlayer.name} ${firstPlayer.score}, ${secondPlayer.name} ${secondPlayer.score}`
      );
      if (firstPlayer.score === Math.floor(numberOfPlayers / 2) + 1) {
        console.log(`${firstPlayer.name} Wins!`);
        firstPlayer.wins += 1;
        if (firstPlayer.wins === Math.floor(numberOfPlayers / 2) + 1) {
          winner = firstPlayer;
          console.log(`the winner is ${firstPlayer.name} with ${firstPlayer.wins} wins`);
        }
        break;
      }
    } else if (randomNumber % 2 !== 0) {
        secondPlayer.score += 1;
      console.log(
        `Round #${i}, random number is ${randomNumber}, ${secondPlayer.name} scored!`
      );
      console.log(
        `Status: ${firstPlayer.name} ${firstPlayer.score}, ${secondPlayer.name} ${secondPlayer.score}`
      );
      if (secondPlayer.score === Math.floor(numberOfPlayers / 2) + 1) {
        console.log(`${secondPlayer.name} Wins!`);
        secondPlayer.wins += 1;
        if (secondPlayer.wins === Math.floor(numberOfPlayers / 2) + 1) {
            winner = secondPlayer;
            console.log(`the winner is ${secondPlayer.name} with ${secondPlayer.wins} wins`);
          }
        break;
      }
    }
  }
}



while (winner === null) {
    playRound()
}