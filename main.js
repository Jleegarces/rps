userInput = prompt('Choose: rock, paper, scissors');
userInput = userInput.toLowerCase();

var getUserChoice = function (userInput) {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else {
    console.log('err')
  };
};
console.log(getUserChoice(userInput));

random = Math.floor(Math.random() * 3);

var getComputerChoice = function (random) {

   if (random === 0) {
   return 'paper'
 } else if (random === 1) {
   return 'rock'
 } else {
   return 'scissors'
 };

};
console.log(getComputerChoice(random));


var determineWinner = function (getUserChoice, getComputerChoice) {
  if (getUserChoice === getComputerChoice) {
    return 'Tie!'
  } else if (getUserChoice === 'rock' && getComputerChoice === 'paper') {
    return 'You Lose!'
  } else if (getUserChoice === 'scissors' && getComputerChoice === 'rock') {
    return 'You Lose!'
  } else if (getUserChoice === 'paper' && getComputerChoice === 'scissors') {
    return 'You Lose!'
  } else {
    return 'You Win!'
  }

};
console.log(determineWinner(getUserChoice, getComputerChoice));

// var playGame = function (userChoice, computerChoice) {
//   var userChoice = getUserChoice();
//   console.log(userChoice)
//   var computerChoice = getComputerChoice();
//   console.log(computerChoice)
// }
// playGame();





// userInput = userInput.toLowerCase();

