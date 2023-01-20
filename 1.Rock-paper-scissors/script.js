// Declare variables (will be used in functions later on)
let userChoice;
let computerChoice;
const choiceDisplayBox = document.getElementById("choiceDisplayBox");
const userChoiceCaption = document.getElementById("userChoiceCaption");
const userChoiceImg = document.getElementById("userChoiceImg");
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const playButton = document.getElementById("play");

// Create array of weapons for computer
const options = ["rock", "paper", "scissors"];

// Create user buttons by looping through the options array. Place them in their div.
options.forEach((option) => {
  let userButton = document.createElement("button");
  let userButtonsBox = document.getElementById("userButtonsBox");
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
  choiceDisplayBox.style.display = 'flex';
  userChoiceCaption.innerHTML = `You chose: ${userChoice}`;
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

// Create function to display computer choice
const displayComputerChoice = () => {
  let computerChoiceCaption = document.getElementById("computerChoiceCaption");
  computerChoiceCaption.innerHTML = `Computer chose: ${computerChoice}`;
  let computerChoiceImg = document.getElementById("computerChoiceImg");
  computerChoiceImg.setAttribute("src", `./img/${computerChoice}.gif`);
  computerChoiceImg.setAttribute("alt", `gif of a ${computerChoice}`);
};

// Play Again starts a new round. The previous user choice and computer choice are hidden, the button goes back to its original styling and text PLAY, but the scores are kept.
const playAgain = () => {
  choiceDisplayBox.style.display = 'none';
  resultMessage.classList.remove("draw");
  resultMessage.classList.remove("lose");
  resultMessage.classList.remove("win");
  resultMessage.classList.add("default");
  resultMessage.innerHTML = "The result will be announced here";
  playButton.classList.remove('playAgain');
  playButton.classList.add('playButton');
  playButton.innerHTML = "PLAY";
  playButton.addEventListener('click', playGame);
};

// Define function to change Play to Play Again once game is played.
const displayPlayAgain = () => {
  playButton.classList.remove('playButton');
  playButton.classList.add('playAgain');
  playButton.innerHTML = "ONE MORE?";
  playButton.removeEventListener('click', playGame);
  playButton.addEventListener('click', playAgain);
};

// Create functions for win/lose/draw cases
const resultMessage = document.getElementById("resultMessage");
resultMessage.innerHTML = "The result will be announced here";

const win = () => {
  displayComputerChoice();
  resultMessage.classList.remove("default");
  resultMessage.classList.remove("lose");
  resultMessage.classList.remove("draw");
  resultMessage.classList.add("win");
  resultMessage.innerHTML = "Yay! You win";
  userScore.innerHTML = parseInt(userScore.innerHTML)+1;
  displayPlayAgain();
};

const lose = () => {
  displayComputerChoice();
  resultMessage.classList.remove("default");
  resultMessage.classList.remove("win");
  resultMessage.classList.remove("draw");
  resultMessage.classList.add("lose");
  resultMessage.innerHTML = "Oh no! You lost";
  computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
  displayPlayAgain();
};

const draw = () => {
  displayComputerChoice();
  resultMessage.classList.remove("default");
  resultMessage.classList.remove("win");
  resultMessage.classList.remove("lose");
  resultMessage.classList.add("draw");
  resultMessage.innerHTML = "It's a draw";
  displayPlayAgain();
};

// Create event function for the Play button event, and add previous functions to it.
const playGame = () => {
  // Get the computer choice: rock, paper, scissors
  getComputerChoice();

  // Alert user if they haven't made a choice yet, and prevent them from continuing if they don't (aka do not compare choices).
  if (!userChoice) {
    alert("First make your choice!");
  } else {
    // Add switch statement to execute win/lose/draw functions
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
  }
};

// Add event listener to the Play button.
playButton.addEventListener("click", playGame);
