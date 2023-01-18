// Add box for game
const gamebox = document.createElement('div');
gamebox.classList.add('gamebox');
document.body.appendChild(gamebox);

// Add random number generator (1 to 28)
const randomNum = Math.floor(Math.random() * 29);

// Add submit form for user to enter number
const form = document.createElement('form');
const label = document.createElement('label');
const input = document.createElement('input');
const button = document.createElement('button');
form.append(label, input, button);
gamebox.appendChild(form);

// Add types etc to form elements

// label for:id
// input type:number, id, name, minmax
// button type:submit, role:button



// Prevent default reloading of page on submit and test
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('cat');
});

// Compare submitted number with random number

// If correct, show message 1

// If incorrect by one, show message 2

// Else, show message 3

