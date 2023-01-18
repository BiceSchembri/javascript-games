// Change index document title
document.title = 'Rock Paper Scissors';

// Add a link to css file in the index.html head
const stylesheet = document.createElement('link');
stylesheet.setAttribute('rel', 'stylesheet');
stylesheet.setAttribute('type', 'text/css');
stylesheet.setAttribute('href', './style.css');
document.head.append(stylesheet);
