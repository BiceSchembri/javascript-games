# BeCode - Gent campus

Junior Web Developer course

December 2022 - June 2023

Cursist: **Beatrice Schembri**

---

## 1. The Field


---

### JavaScript Games

Start date: 18/01/2023

Objective: create simple games in vanilla JavaScript.

---

#### 0.Guessing Game

See [here](https://github.com/becodeorg/GNT-Verou-4/blob/main/1.The-Field/11.Games/0.Guessing-game.md) for full explanation and requirements.

Deployed on [Netlify](https://guessing-game-nr.netlify.app/).

**Objective**
Create a game in which the user has to guess a number and gets alerted with the result.

**Features**
The user enters and submits their guess via a form (input).
A function generates a random number between 1 and 28. An event listener is added to the submit button in the form. An "if...else if" statement allows for three outcomes: correct guess; incorrect guess by 1; incorrect guess by more than 1.
An alert message informs the user of the result.

---

#### 1.Rock Paper Scissors

See [here](https://github.com/becodeorg/GNT-Verou-4/blob/main/1.The-Field/11.Games/1.Rock-paper-scissors.md) for full explanation and requirements.

Deployed on [Netlify](https://rock-paper-scissors-gify.netlify.app/).

**Objective**
Create a game of rock paper scissors between the user and the computer.
The user can select a 'rock', a 'paper' or a 'scissors' button, then press the 'play' button to let the machine make its choice and display the result. At the end of the game, the user can choose to play again. The score is displayed and updated after each game.  

**Features**
An array determines the machine's choice between the three options. 
The same array is used to dynamically create the user's choice buttons.
The user can select one of the three buttons to log their choice. The selection can be changed and the choice updated. The click triggers an event: the user's choice is displayed on the screen via a caption and a gif (the name and content of which reflect the id of the user's choice).

When the user selects the 'play' button, another event is triggered, with multiple effects:
- the machine randomly chooses an option;
- the result is determined with a switch statement (comparing user choice + computer choice in all possible combinations of the three options)
The possible outcomes are
1. win
2. lose
3. draw

Each outcome determines more effects:
- the computer's choice is displayed with a caption and a gif next to the user's choice;
- a message appears stating the result (the format changes depending on the result);
- the score is updated (parseInt is used to turn the string argument in the HTML element into an integer, to allow addition);
- the 'play' button disappears, and the 'play again' button is displayed.

An event listener is also added to the 'play again' button. Since it is a dynamically created element, event bubbling is used to target it.
If the user clicks on the 'play again' button, the triggered event has the following effects:
- the user's and computer's choices are reset;
- the gifs and captions are hidden (their attributes are left empty);
- the 'play again' button disappears, and the 'play' button is displayed again.

---