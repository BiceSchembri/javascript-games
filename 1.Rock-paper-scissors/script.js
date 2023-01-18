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
credits.innerHTML = 'Pics by... 2023 - Beatrice'
footer.appendChild(credits);

// Add gamebox
const gamebox = document.createElement('div');
gamebox.classList.add('gamebox');
main.appendChild(gamebox);