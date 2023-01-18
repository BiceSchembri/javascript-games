// Add heading and box for game
const heading = document.createElement('h1');
heading.innerText = ('How many pastéis de nata are there?');

const gamebox = document.createElement('div');
gamebox.classList.add('gamebox');

document.body.append(heading, gamebox);

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

// Add inner text to elements
label.innerText = ("Guess the number! Hint: it's between 1 and 28");
button.innerText = ('Guess');

// Add random number generator (1 to 28)
const randomNum = Math.floor(Math.random() * 29);

// Add event listener and define callback
form.addEventListener('submit', (event) => {

    // Prevent default reloading of page on submit and test
    event.preventDefault();


    // Get submitted number
    // let userGuess = 

    // Compare submitted number with random number

    // If correct, show message 1
    let messageRight = (`Awesome! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`)
    alert(messageRight);

    // If incorrect by one, show message 2
    let messageWrong = (`Bummer... You guessed ${userGuess} and the secret number was ${randomNum}`);
    alert(messageWrong)

    // Else, show message 3
    let messageAlmost = ('So close, but you just missed it! Are you in a class that started on the thirteenth or what?');
    alert(messageAlmost);

    console.log('number has been submitted');
});



