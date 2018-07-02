let yellowPath = document.querySelectorAll('#yellow path');
let greenPath = document.querySelectorAll('#green path');
let orangePath = document.querySelectorAll('#orange path');
let lightbluePath = document.querySelectorAll('#lightblue path');
let redPath = document.querySelectorAll('#red path');
let violetPath = document.querySelectorAll('#violet path');

// ------- yellow

TweenMax.staggerFrom(yellowPath, 1, {
  y: '-=40',
  autoAlpha: 0,
  ease: Power4.easeInOut
}, 0.3);

// ------- green

TweenMax.from(greenPath, 1, {
  x: -200,
  autoAlpha: 0,
  ease: Power4.easeInOut
}, 0.3);

// -- orange

TweenMax.set(orangePath, { // se mi serve settare valore iniziale prima dell'animazione
  scale: 3
})

TweenMax.to(orangePath, 1, {
  scale: 1,
  ease: Back.easeOut.config(4)
}, 1)
