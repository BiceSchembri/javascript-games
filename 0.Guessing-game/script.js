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

label.setAttribute('id', 'userGuess');
input.setAttribute('type', 'number');
input.setAttribute('id', 'userGuess');

input.setAttribute('name', 'userGuess');
input.setAttribute('min', 1);
input.setAttribute('max', 28);

button.setAttribute('type', 'submit');
button.setAttribute('role', 'button');

// Add inner text to elements
label.innerText = ("Guess the number! Hint: it's between 1 and 28");
button.innerText = ('button');

// Add random number generator (1 to 28)
const randomNum = Math.floor(Math.random() * 29);

// button.addEventListener(onclick, () => {console.log('hello there')} );

// Prevent default reloading of page on submit and test
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('number has been submitted');
});

// Compare submitted number with random number

// If correct, show message 1

// If incorrect by one, show message 2

// Else, show message 3

