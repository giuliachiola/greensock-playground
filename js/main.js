/* Run in command line
browser - sync start--server--files "js/*.js"
*/

// #animation - 1
let yellowPath = document.querySelectorAll('#animation-1 #yellow path');
let greenPath = document.querySelectorAll('#animation-1 #green path');
let orangePath = document.querySelectorAll('#animation-1 #orange path');
let lightbluePath = document.querySelectorAll('#animation-1 #lightblue path');
let red = document.querySelectorAll('#animation-1 #red');
let redPath = document.querySelectorAll('#animation-1 #red path');
let violetPath = document.querySelectorAll('#animation-1 #violet path');

// #animation-2
let yellowPath2 = document.querySelectorAll('#animation-2 #yellow path');
let greenPath2 = document.querySelectorAll('#animation-2 #green path');
let orangePath2 = document.querySelectorAll('#animation-2 #orange path');
let lightbluePath2 = document.querySelectorAll('#animation-2 #lightblue path');
let red2 = document.querySelectorAll('#animation-2 #red');
let redPath2 = document.querySelectorAll('#animation-2 #red path');
let violetPath2 = document.querySelectorAll('#animation-2 #violet path');

// --------------------------------------------  #animation - 1 --------------------------------------------
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

// ------- orange

TweenMax.set(orangePath, { // se mi serve settare valore iniziale prima dell'animazione
  scale: 3
})

TweenMax.to(orangePath, 1, {
  scale: 1,
  ease: Back.easeOut.config(4)
}, 1)

// ------- light blue

TweenMax.staggerFrom(lightbluePath, 0.75, {
  y: 200,
  autoAlpha: 0
}, -0.15);
TweenMax.from(lightbluePath, 1.5, {
  y: 100,
  ease: Back.easeOut.config(4)
});

// ------- red
TweenMax.from(red, 2, {
  scale: 0,
  rotation: "120",
  //ease: SteppedEase.config(12),
  y: -500
})

TweenMax.staggerFrom(redPath, 0.5, {
  scale: 0,
  rotation: "120",
  ease: Back.easeOut.config(1.7),
  y: -500,
  delay: 1
}, 0.1)

// -------- violet

TweenMax.fromTo(violetPath, 2, {
  y: -345
}, {
  y: -3,
  x: -3,
  ease: Elastic.easeOut.config(1, 0.4)
})

TweenMax.fromTo(violetPath, 5.5, {
  rotation: 40
}, {
  rotation: -15,
  scale: 1.1,
  ease: Elastic.easeOut,
  transformOrigin: 'left top'
}, 0)

TweenMax.fromTo(violetPath, 5.5, {
  rotation: 40
}, {
    rotation: 0,
    scale: 1.1,
    ease: Elastic.easeOut,
    transformOrigin: 'left top'
  }, 0)


// --------------------------------------------  #animation - 2 --------------------------------------------

