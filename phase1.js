const prompt = require("prompt-sync")();


const player1 = {
    name: '',
    score: 0
};
const player2 = {
    name: '',
    score: 0
};
function getRandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
player1['name'] = prompt('Please enter a your name: ');
player2['name'] = prompt('Please enter a your name: ');
console.log(`Hi ${player1.name} and ${player2.name}, let's play!`);

for (let i = 1; i < 6; i++) {
    const randomNumber = getRandomNumber(-5,13);
    if (randomNumber % 2 === 0) {
        player1.score += 1;
        console.log(`Round #${i}, random number is ${randomNumber}, ${player1.name} scored!`);
        console.log(`Status: ${player1.name} ${player1.score}, ${player2.name} ${player2.score}`);
        if (player1.score === 3) {
            console.log(`${player1.name} Wins!`);
            break;
        }
    }
    else if (randomNumber % 2 !== 0) {
        player2.score += 1;
        console.log(`Round #${i}, random number is ${randomNumber}, ${player2.name} scored!`);
        console.log(`Status: ${player1.name} ${player1.score}, ${player2.name} ${player2.score}`);
        if (player2.score === 3) {
            console.log(`${player2.name} Wins!`);
            break;
        }
    }
}