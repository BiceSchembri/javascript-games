// Change index document title
document.title = 'Rock Paper Scissors';

// Add a link to css file in the index.html head
const stylesheet = document.createElement('link');
stylesheet.setAttribute('rel', 'stylesheet');
stylesheet.setAttribute('type', 'text/css');
stylesheet.setAttribute('href', './style.css');
document.head.append(stylesheet);

// Add header, main, footer
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');
document.body.append(header, main, footer);

// Add heading in header
const heading = document.createElement('h1');
heading.innerText = 'Rock Paper Scissors';
header.appendChild(heading);

// Add credits in footer
const credits = document.createElement('p');
credits.innerHTML = '2023 - Beatrice'
footer.appendChild(credits);

// Add gamebox
const gamebox = document.createElement('div');
gamebox.classList.add('gamebox');
main.appendChild(gamebox);

// Add rock, paper, scissors buttons + play button
const rockButton = document.createElement('button');
rockButton.setAttribute('id', 'rock');
rockButton.setAttribute('type', 'button');
rockButton.innerHTML = '&#129704;'

const paperButton = document.createElement('button');
paperButton.setAttribute('id', 'paper');
paperButton.setAttribute('type', 'button');
paperButton.innerHTML = '&#129531';

const scissorsButton =  document.createElement('button');
scissorsButton.setAttribute('id', 'scissors');
scissorsButton.setAttribute('type', 'button');
scissorsButton.innerHTML = '&#9986';

const playButton = document.createElement('button');
playButton.setAttribute('id', 'play');
playButton.setAttribute('type', 'button');
playButton.innerHTML = 'PLAY';

gamebox.append(rockButton, paperButton, scissorsButton, playButton);

// Add result message with basic styling
const messageBox = document.createElement('div');
const message = document.createElement('p');
message.innerText = 'This is the result!'
messageBox.appendChild(message);
main.appendChild(messageBox);

// Add user choice
let userChoice = '';

rockButton.addEventListener('click', () => {
    let userChoice = 'rock';
    console.log(userChoice);
});

paperButton.addEventListener('click', () => {
    let userChoice = 'paper';
    console.log(userChoice);
});

scissorsButton.addEventListener('click', () => {
    let userChoice = 'scissors';
    console.log(userChoice);
});


// Create array of weapons
const weapons = [
    'rock',
    'paper',
    'scissors'
];

console.log(weapons[0]);

// User selects button - event



// When user presses PLAY, computer chooses weapon randomly - event

// Change inner HTML of result message

// Fix styling

// Clean code

// Write readme