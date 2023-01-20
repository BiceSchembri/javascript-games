// Declare variables (will be used in functions later on)
let userChoice;
let computerChoice;
const choiceDisplayBox = document.getElementById("choiceDisplayBox");
const userChoiceCaption = document.getElementById("userChoiceCaption");
const userChoiceImg = document.getElementById("userChoiceImg");
const computerChoiceCaption = document.getElementById("computerChoiceCaption");
const computerChoiceImg = document.getElementById("computerChoiceImg");
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const playGameButton = document.getElementById("playGame");
const playAgainButton = document.getElementById("playAgain");

// Create an array of options to choose from
const options = ["rock", "paper", "scissors"];

// Create user buttons by looping through the options array. Place them in their User Buttons Box.
options.forEach((option) => {
  let userButton = document.createElement("button");
  let userButtonsBox = document.getElementById("userButtonsBox");
  userButtonsBox.appendChild(userButton);
  userButton.setAttribute("id", option);
  userButton.classList.add("userButton");
});

// Get the newly created rock, paper, scissors buttons and set their inner content (icons).
const rockButton = document.getElementById("rock");
rockButton.innerHTML = "&#129704";
const paperButton = document.getElementById("paper");
paperButton.innerHTML = "&#129531";
const scissorsButton = document.getElementById("scissors");
scissorsButton.innerHTML = "&#9986";

// Define user choice event. The id of the target element (rock, paper, scissors) is set as userChoice. The user choice is displayed with a caption and a gif (which are named according to the array items).
const getUserChoice = (e) => {
  userChoice = e.target.id;
  choiceDisplayBox.style.display = 'flex';
  userChoiceCaption.innerHTML = `You chose: ${userChoice}`;
  userChoiceImg.setAttribute("src", `./img/${userChoice}.gif`);
  userChoiceImg.setAttribute("alt", `gif of a ${userChoice}`);
};

// Select all user buttons with a forEach method. 
const userButtons = document.querySelectorAll(".userButton");

// Add an event listener to all user buttons. When a button is clicked, the getUserChoice function is called.
userButtons.forEach((userButton) => {
  userButton.addEventListener("click", getUserChoice);
  return userChoice;
});

// Create a function for the computer to choose an option. It generates a random number between 0 and 2, which determines an array index and chooses an item.
const getComputerChoice = () => {
  computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
};

// Create a function to display the computer choice
const displayComputerChoice = () => {
  computerChoiceCaption.innerHTML = `Computer chose: ${computerChoice}`;
  computerChoiceImg.setAttribute("src", `./img/${computerChoice}.gif`);
  computerChoiceImg.setAttribute("alt", `gif of a ${computerChoice}`);
};

// Create function to make the PlayGame button disappear and the PlayAgain button appear after each game.

const displayPlayAgain = () => {
  playGameButton.style.display = "none";
playAgainButton.style.display = "inline-block";
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
  resultMessage.innerHTML = "Sorry! You lost";
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

// Create an event for the PlayGame button.
const playGame = () => {

  // Get the computer choice: rock, paper, scissors
  getComputerChoice();

  // Alert user if they haven't made a choice yet.
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
playGameButton.addEventListener("click", playGame);

// Add event for PlayAgain button. PlayAgain starts a new round. The scores are kept. 
const playAgain = (e) => {

  if (e.target.id == 'playAgain') {

  // The user choice and computer choice are reset.
  userChoice = null;
  computerChoice = null;

  // The previous user choice and computer choice gifs + captions are hidden.
  userChoiceCaption.innerHTML = ``;
  userChoiceImg.removeAttribute("src");
  userChoiceImg.removeAttribute("alt");
  computerChoiceCaption.innerHTML = ``;
  computerChoiceImg.removeAttribute("src");
  computerChoiceImg.removeAttribute("alt");

  // The result message goes back to its default state
  resultMessage.classList.remove("draw");
  resultMessage.classList.remove("lose");
  resultMessage.classList.remove("win");
  resultMessage.classList.add("default");
  resultMessage.innerHTML = "The result will be announced here";

  // The PlayAgain Button disappears. The PlayGame button reappears.
  playGameButton.style.display = 'inline-block';
  playAgainButton.style.display = 'none';
  }
};

// Add event listener to the PlayAgain button (via bubbling, since it is a dynamically created element).
document.addEventListener('click', playAgain);
