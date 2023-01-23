const form = document.querySelector('form');
const input = document.querySelector('input');

// Add random number generator (1 to 28)
const randomNum = Math.floor(Math.random() * 28) + 1;

// Add event listener and define callback
form.addEventListener('submit', (event) => {

    // Prevent default reloading of page on submit. Used for testing, not for production. 
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