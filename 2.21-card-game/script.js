// Create arrays of suits and values

const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardDeck = [];

// Object constructor function to make cards
const getCardDeck = () => {
  for (let suit of suits) {
    for (let value of values) {
      let card = {
        value: value,
        suit: suit,
      };
      cardDeck.push(card);
    }
  }
  return cardDeck;
};

getCardDeck();

// Check created card deck in console
console.log(cardDeck);

// Create a shuffled deck with the Fisher-Yates algorithm
const mixedDeck = []

// fisher-yates shuffle (create copy to keep original array in order)

// const shuffleDeck = () => {
//     let i = cardDeck.length;
//     while (--i>0) {
//         let randomIndex = Math.floor(Math.random()*(i+1));
//         [cardDeck[randomIndex], cardDeck[i]] = [cardDeck[i], cardDeck[randomIndex]];
//     }
//     console.table(cardDeck);
// }

// shuffleButton.addEventListener('click', shuffleDeck);

// let shuffledCardDeck;

// Maybe better to start with only player!
// decide how many decks; if player and dealer play with same deck; in which order they play; if house always wins in case of draw (if both bust?)

// Console log test card
// console.log(`${cardDeck[2].cardValue[3]} of ${cardDeck[2].cardColor}`);



const cardTable = document.getElementById('cardTable');
const shuffleButton = document.createElement('button');
shuffleButton.innerHTML = 'SHUFFLE'
shuffleButton.setAttribute('id', 'shuffleButton');
cardTable.appendChild(shuffleButton);






confirm('Would you like to draw a card?');

// splice array after cards are picked

const pickACard = () => {
    let randomCardColor = Math.floor(Math.random() * 4);
    let randomCardValue = Math.floor(Math.random() * 13);
    let randomCard = `${cardDeck[randomCardColor].cardValue[randomCardValue]} of ${cardDeck[randomCardColor].cardColor}`;
    console.log(randomCard);
}
const dealButton = document.getElementById('dealButton');
dealButton.addEventListener('click', pickACard);

