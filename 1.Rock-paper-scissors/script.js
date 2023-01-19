// Define choices (will be used in functions later on)
let userChoice;
let computerChoice;

// Create array of weapons for computer
const options = ["rock", "paper", "scissors"];

// Create user buttons by looping through the options array. Place them in their div.
options.forEach((option) => {
  let userButton = document.createElement("button");
  let userButtonsBox = document.querySelector(".userButtonsBox");
  userButtonsBox.appendChild(userButton);
  userButton.setAttribute("id", option);
  userButton.classList.add("userButton");
});

// Get rock, paper, scissors buttons and set their content.
const rockButton = document.getElementById("rock");
rockButton.innerHTML = "&#129704";
const paperButton = document.getElementById("paper");
paperButton.innerHTML = "&#129531";
const scissorsButton = document.getElementById("scissors");
scissorsButton.innerHTML = "&#9986";

// Define function for user choice event. When function is called, the id of the target (rock, paper, scissors) is set as userChoice.

const userChooses = (e) => {
  userChoice = e.target.id;
  return userChoice;
  // event.target.classList.add('selected');
  // display choice in text
};

// Select all buttons with a forEach method and add an event listener. When a button is clicked, the userChooses function is called.
const userButtons = document.querySelectorAll(".userButton");
userButtons.forEach((userButton) => {
  userButton.addEventListener("click", userChooses);
//   userButton.addEventListener("click", selectedButton);
});

// Create function to get computer's choice. Generate random number between 0 and 2 (which will determine the option's array index).
const getComputerChoice = () => {
  computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
};

// Create function for the Play button event.
const playGame = () => {
  getComputerChoice();

  // Check choices. NOTE: hide for production.
  console.log(`computer choice: ${getComputerChoice()}`);
  console.log(`user choice: ${userChoice}`);

  // Compare user's choice with computer's choice to determine the winner.
  if (!userChoice) {
    alert("you must choose a weapon");
  } else if (userChoice === computerChoice) {
    alert("draw!");
  } else if (
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    alert("you lose!");
  } else {
    alert("you win!");
  }
};

// Add event listener to the Play button.
const playButton = document.getElementById("play");
playButton.addEventListener("click", playGame);

// const getResult = () => {
//     switch (userChoice + computerChoice) {
//         case 'scissorspaper':
//         case 'rockscissors':
//         case 'paperrock':
//             resultMessage.innerHTML = 'You win!'
//             break
//         case 'paperscissors':
//         case 'scissorsrock':
//         case 'rockpaper':
//             resultMessage.innerHTML = 'You lose!'
//             break
//         case 'scissorsscissors':
//             case 'rockrock':
//                 case 'paperpaper':
//                     resultMessage.innerHTML = "Draw!"
//                     break
//     }
// }

// Add result message
const resultMessage = document.querySelector(".resultMessage");
// CHANGE TO DISPLAY RESULT
// resultMessage.innerHTML = 'This is the result!'