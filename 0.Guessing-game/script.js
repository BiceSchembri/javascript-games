// Add heading, box for game, credits
const heading = document.createElement('h1');
heading.innerText = ('How many pastéis de nata are there?');

const gamebox = document.createElement('div');
gamebox.classList.add('gamebox');

const footer = document.createElement('footer');
const credits = document.createElement('p');
credits.innerHTML = ('Image by <a href="https://www.freepik.com/free-vector/background-seamless-pattern-vector-with-cute-memphis_15841841.htm#query=background%20pattern&position=30&from_view=search&track=sph">rawpixel.com</a> on Freepik');
footer.appendChild(credits);

document.body.append(heading, gamebox, footer);

// Add submit form for user to enter number
const form = document.createElement('form');
const label = document.createElement('label');
const input = document.createElement('input');
const button = document.createElement('button');

form.append(label, input, button);
gamebox.appendChild(form);

// Set attributes for elements

label.setAttribute('id', 'userGuessInput');

input.setAttribute('id', 'userGuessInput');
input.setAttribute('name', 'userGuessInput');
input.setAttribute('type', 'number');
input.setAttribute('min', 1);
input.setAttribute('max', 28);

button.setAttribute('type', 'submit');
button.setAttribute('role', 'button');

// Add inner text to form elements
label.innerText = ("Guess the number! Hint: it's between 1 and 28");
button.innerText = ('Guess');

// Add random number generator (1 to 28)
const randomNum = Math.floor(Math.random() * 29) + 1;

// Add event listener and define callback
form.addEventListener('submit', (event) => {

    // Prevent default reloading of page on submit (used when testing options). 
    // NOTE: remove for actual game to reload after a guess is submitted and the alert is displayed. 
    // event.preventDefault();

    // Get submitted number
    let userGuess = input.value;

    // If correct, show Right message
    if (userGuess == randomNum) {
        let messageRight = (`Awesome! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`)
        alert(messageRight);
    }

    // If incorrect by 1, show Almost message

    else if ((randomNum-userGuess)==1 || (userGuess-randomNum)==1) {
        let messageAlmost = ('So close, but you just missed it! Are you in a class that started on the thirteenth or what?');
        alert(messageAlmost);
    }

    // If incorrect by more than 1, show Wrong message
    else {
        let messageWrong = (`Bummer... You guessed ${userGuess} and the secret number was ${randomNum}`);
        alert(messageWrong);
    }
});

// CHECKING RANDOM NUMBER FOR TESTING (delete for game production!)
// console.log(randomNum);

