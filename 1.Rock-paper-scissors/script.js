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
rockButton.classList.add('userButton');
rockButton.innerHTML = '&#129704;'

const paperButton = document.createElement('button');
paperButton.setAttribute('id', 'paper');
paperButton.setAttribute('type', 'button');
paperButton.classList.add('userButton');
paperButton.innerHTML = '&#129531';

const scissorsButton =  document.createElement('button');
scissorsButton.setAttribute('id', 'scissors');
scissorsButton.setAttribute('type', 'button');
scissorsButton.classList.add('userButton');
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

// ***end of HTML static creation***

// Add user choices with one event listener per button.
let userButtons = document.querySelectorAll('button');
userButtons.forEach(userButton => {
    userButton.addEventListener('click', (event) => {
        let userChoice = event.target.id;
        console.log(userChoice);
        event.target.classList.add('selected');
    })
});

// Create array of weapons for computer
const weapons = [
    'rock',
    'paper',
    'scissors'
];

// Create function to get computer's choice. Generate random number between 0 and 2 for the weapon array index.

const getComputerChoice = () => {
    let computerChoice = weapons[Math.floor(Math.random() * 3)];
    return computerChoice;
}

getComputerChoice();

// Check computer choice. 
// NOTE: hide for production.
console.log(getComputerChoice());

// User selects button - event
playButton.addEventListener('click', () => {});


// NOTE: play button should be disabled. Once user makes a choice, other choices are disabled and play button is made available. Then user has to click on play button and trigger other event, which compares values. 

// if (!userChoice) {
//     alert('you must choose a weapon')
// }

//     else if (userChoice===computerChoice) {
//         alert('draw!');
//     }
//     else if (((userChoice==='paper')&&(computerChoice==='scissors')) || ((userChoice==='rock')&&(computerChoice==='paper')) || ((userChoice==='scissors')&&(computerChoice==='rock'))) {
//         alert('you lose!');
//     }
//     else {
//         alert('you win!');
//     }
// });





// When user presses PLAY, computer chooses weapon randomly - event

// Change inner HTML of result message

// Fix styling

// Clean code

// Write readme