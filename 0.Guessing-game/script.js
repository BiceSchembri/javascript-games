const form = document.querySelector("form");
const input = document.querySelector("input");

// Add random number generator.
// This formula returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.

const getRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// Add event listener and define callback
form.addEventListener("submit", (event) => {
  // Prevent default reloading of page on submit. Used for testing, not for production.
  // event.preventDefault();

  // Generate random number between 1 and 28 included
  const myRandomNum = getRandomBetween(1, 29);

  // Get submitted number
  let userGuess = input.value;

  // If correct, show Right message
  if (userGuess == myRandomNum) {
    let messageRight = `Awesome! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`;
    alert(messageRight);
  }

  // If incorrect by 1, show Almost message
  else if (myRandomNum - userGuess == 1 || userGuess - myRandomNum == 1) {
    let messageAlmost =
      "So close, but you just missed it! Are you in a class that started on the thirteenth or what?";
    alert(messageAlmost);
  }

  // If incorrect by more than 1, show Wrong message
  else {
    let messageWrong = `Bummer... You guessed ${userGuess} and the secret number was ${myRandomNum}`;
    alert(messageWrong);
  }
});
