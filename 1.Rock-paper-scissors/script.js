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

  // Display user choice with a caption and a gif
  let userChoiceCaption = document.getElementById("userChoiceCaption");
  userChoiceCaption.innerHTML = `You chose: ${userChoice}`;
  let userChoiceImg = document.getElementById("userChoiceImg");
  userChoiceImg.setAttribute("src", `./img/${userChoice}.gif`);
  userChoiceImg.setAttribute("alt", `gif of a ${userChoice}`);
};

// Select all buttons with a forEach method and add an event listener. When a button is clicked, the userChooses function is called.
const userButtons = document.querySelectorAll(".userButton");
userButtons.forEach((userButton) => {
  userButton.addEventListener("click", userChooses);
  return userChoice;
});

// Create function to allow the computer to choose an option: generate random number between 0 and 2 (which will determine the option's array index).
const getComputerChoice = () => {
  computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
};

// Create functiona for win/lose/draw cases
const resultMessage = document.querySelector(".resultMessage");

const win = () => {
  resultMessage.classList.remove("lose");
  resultMessage.classList.remove("draw");
  resultMessage.classList.add("win");
  resultMessage.innerHTML = "Yay! You win";
};
const lose = () => {
  resultMessage.classList.remove("win");
  resultMessage.classList.remove("draw");
  resultMessage.classList.add("lose");
  resultMessage.innerHTML = "Oh no! You lost";
};
const draw = () => {
  resultMessage.classList.remove("win");
  resultMessage.classList.remove("lose");
  resultMessage.classList.add("draw");
  resultMessage.innerHTML = "It's a draw";
};

const displayComputerChoice = () => {
  let computerChoiceCaption = document.getElementById("computerChoiceCaption");
  computerChoiceCaption.innerHTML = `Computer chose: ${computerChoice}`;
  let computerChoiceImg = document.getElementById("computerChoiceImg");
  computerChoiceImg.setAttribute("src", `./img/${computerChoice}.gif`);
  computerChoiceImg.setAttribute("alt", `gif of a ${computerChoice}`);
};

// Create function for the Play button event. It calls other functions and contains a switch statement.
const playGame = () => {
  // Get the computer choice: rock, paper, scissors
  getComputerChoice();

  // Check choices. NOTE: hide for production.
  // console.log(`user choice: ${userChoice}`);
  // console.log(`computer choice: ${getComputerChoice()}`);

  // Alert user if they haven't made a choice yet
  if (!userChoice) {
    alert("First make your choice!");
  }

  // Add switch statements for win/lose/draw scenarios

  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      win();
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      lose();
      break;
    case "scissorsscissors":
    case "rockrock":
    case "paperpaper":
      draw();
  }

  // Display computer choice next to user choice with gif and caption
  displayComputerChoice();
};

// Add event listener to the Play button.
const playButton = document.getElementById("play");
playButton.addEventListener("click", playGame);
