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
  let choiceDisplayBox = document.getElementById('choiceDisplayBox');
  choiceDisplayBox.classList.remove('hidden');
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

// Create function to display computer choice
const displayComputerChoice = () => {
  let computerChoiceCaption = document.getElementById("computerChoiceCaption");
  computerChoiceCaption.innerHTML = `Computer chose: ${computerChoice}`;
  let computerChoiceImg = document.getElementById("computerChoiceImg");
  computerChoiceImg.setAttribute("src", `./img/${computerChoice}.gif`);
  computerChoiceImg.setAttribute("alt", `gif of a ${computerChoice}`);
};

// Create function to play again after one round
const displayPlayAgain = () => {
    const playAgainButton = document.createElement('button');
    playAgainButton.setAttribute('id', 'playAgain');
    playAgainButton.innerHTML = 'ONE MORE?';
    let gameButtonsBox = document.querySelector('.gameButtonsBox');
    gameButtonsBox.appendChild(playAgainButton);
}

// Create functions for win/lose/draw cases
const resultMessage = document.querySelector(".resultMessage");

const win = () => {
  displayComputerChoice();
  resultMessage.classList.remove("lose");
  resultMessage.classList.remove("draw");
  resultMessage.classList.add("win");
  resultMessage.innerHTML = "Yay! You win";
  displayPlayAgain();
};

const lose = () => {
  displayComputerChoice();
  resultMessage.classList.remove("win");
  resultMessage.classList.remove("draw");
  resultMessage.classList.add("lose");
  resultMessage.innerHTML = "Oh no! You lost";
  displayPlayAgain();
};

const draw = () => {
  displayComputerChoice();
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
const playButton = document.getElementById("play");
playButton.addEventListener("click", playGame);

// Add Play Again event function. Starts a new round
const playAgain = (e) => {
    if (e.target.id == 'playAgain') {
        document.body.style.backgroundColor = 'red';
        // choiceDisplayBox.classList.add('hidden');
        // removes itself
    }
};

// Add event listener for Play Again Button
document.addEventListener('click', playAgain);


// Since we have to bind an event to dynamically created elements, we use bubbling. We target the parent element (or whole document), then we check if a user clicks on the element with the specified class.