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

// Select all buttons with a forEach method
const userButtons = document.querySelectorAll(".userButton");
userButtons.forEach((userButton) => {
  //Add event listener to each button
  userButton.addEventListener("click", (event) => {
    // When clicking on the button, the button id (rock, paper, or scissors) will be returned as userChoice.
    userChoice = event.target.id;
    return userChoice;
    // event.target.classList.add('selected');
    // display choice in text
  });
});

// Add event listener to the Play button
const playButton = document.getElementById("play");

playButton.addEventListener("click", () => {

  // Create function to get computer's choice. Generate random number between 0 and 2 which will determine the option's array index.
  const getComputerChoice = () => {
    computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
  };

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
});

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
// CHANGE STYLING. ADD IMAGE?

// Fix styling

// Clean code

// Write readme
