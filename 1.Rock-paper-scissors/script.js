let userChoice;
let computerChoice;

// Create array of weapons for computer
const options = ["rock", "paper", "scissors"];

// Get the Play button
const playButton = document.getElementById("play");

// Create user buttons by looping through the options array. Place them before the Play button.
options.forEach((option) => {
  let userButton = document.createElement("button");
  let gamebox = document.querySelector(".gamebox");
  gamebox.insertBefore(userButton, playButton);
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

// Add event listener to user buttons
const userButtons = document.querySelectorAll(".userButton");

userButtons.forEach((userButton) => {
  userButton.addEventListener("click", (event) => {
    userChoice = event.target.id;
    console.log(userChoice);
    // event.target.classList.add('selected');
    // allow play button to be clicked?
  });
});

// Handle event
playButton.addEventListener("click", () => {
  // Create function to get computer's choice. Generate random number between 0 and 2 for the weapon array index.
  const getComputerChoice = () => {
    computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
  };

  // Check choices. NOTE: hide for production.
  console.log(`computer choice: ${getComputerChoice()}`);
  console.log(`user choice: ${userChoice}`);

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

// NOTE: play button should be disabled. Once user makes a choice, other choices are disabled and play button is made available. Then user has to click on play button and trigger other event, which compares values.

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

// When user presses PLAY, computer chooses weapon randomly - event

// Add result message
const resultMessage = document.querySelector(".resultMessage");
// CHANGE TO DISPLAY RESULT
// resultMessage.innerHTML = 'This is the result!'
// CHANGE STYLING. ADD IMAGE?

// Fix styling

// Clean code

// Write readme
