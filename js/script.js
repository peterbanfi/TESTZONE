"use strict";
//Jack
let jack = document.getElementById('jack');
let style = window.getComputedStyle(jack);
let posTop = parseInt(style.getPropertyValue('top').slice(0, -2));
let posLeft = parseInt(style.getPropertyValue('left').slice(0, -2));

//Wolf
let wolf = document.getElementById('wolf');
let styleWolf = window.getComputedStyle(wolf);
let posTopWolf = parseInt(styleWolf.getPropertyValue('top').slice(0, -2));
let posLeftWolf = parseInt(styleWolf.getPropertyValue('left').slice(0, -2));

/**
 * keyState saves keycodes and their values which is a boolean
 */
let keyState = {};
window.addEventListener('keydown', function (e) {
    keyState[e.keyCode || e.which] = true;
}, true);
window.addEventListener('keyup', function (e) {
    keyState[e.keyCode || e.which] = false;
}, true);

// i know its ugly
function gameLoop() {
    // to left
    if (keyState[37]) {
        posLeft = posLeft - 20;
        jack.style.transform = "scaleX(1)";
        jack.classList.add('jack-left');
        jack.style.left = `${posLeft}px`;
        console.log('to left: ', posLeft);
    }
    if (!keyState[37]) {
        jack.style.background = "url('/img/jack1.png')";
        jack.classList.remove('jack-left');
    }
    //to right
    if (keyState[39]) {
        posLeft = posLeft + 20;
        jack.style.transform = "scaleX(-1)";
        jack.classList.add('jack-right');
        jack.style.left = `${posLeft}px`;
        console.log('to right: ', posLeft);
    }
    if (!keyState[39]) {
        jack.style.background = "url('/img/jack1.png')";
        jack.classList.remove('jack-right');
    }
    //to down
    if (keyState[40]) {
        posTop = posTop + 20;
        jack.style.transform = "scaleX(-1)";
        jack.classList.add('jack-right');
        jack.style.top = `${posTop}px`;
        console.log('to down: ', posTop);
    }
    if (!keyState[40]) {
        jack.style.background = "url('/img/jack1.png')";
        jack.classList.remove('jack-right');
    }
    //to up
    if (keyState[38]) {
        posTop = posTop - 20;
        jack.style.transform = "scaleX(-1)";
        jack.classList.add('jack-right');
        jack.style.top = `${posTop}px`;
        console.log('to up: ', posTop);
    }
    if (!keyState[38]) {
        jack.style.background = "url('/img/jack1.png')";
        jack.classList.remove('jack-right');
    }
    // jump
    if (keyState[32]) {
        jack.style.background = "url('/img/jack3.png')";
        jack.classList.add('jack-jump');
        jack.style.top = `${posTop}px`;
        console.log('to down: ', posTop);
    }
    if (!keyState[32]) {
        jack.style.background = "url('/img/jack1.png')";
        jack.classList.remove('jack-jump');
    }
    setTimeout(gameLoop, 100);
}


gameLoop();

//WOLF
window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "d":
            classChanger();
            posLeftWolf = posLeftWolf + 5;
            wolf.style.transform = "scaleX(1)";
            wolf.style.left = `${posLeftWolf}px`;
            console.log('to right: ', posLeftWolf);
            break;
        case "a":
            classChanger();
            posLeftWolf = posLeftWolf - 5;
            wolf.style.transform = "scaleX(-1)";
            wolf.style.left = `${posLeftWolf}px`;
            console.log('to left: ', posLeftWolf);
            break;
        case "w":
            classChanger();
            posTopWolf = posTopWolf - 5;
            wolf.style.transform = "scaleX(1)";
            wolf.style.top = `${posTopWolf}px`;
            console.log('to up: ', posTopWolf);
            break;
        case "s":
            classChanger();
            posTopWolf = posTopWolf + 5;
            wolf.style.transform = "scaleX(-1)";
            wolf.style.top = `${posTopWolf}px`;
            console.log('to down: ', posTopWolf);
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);
window.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "d":
            wolfStand();
            break;
        case "a":
            wolfStand();
            break;
        case "w":
            wolfStand();
            break;
        case "s":
            wolfStand();
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);

function classChanger() {
    if ($("#wolf").hasClass("wolf-03")) {
        wolf.classList.remove('wolf-03');
        wolf.classList.add('wolf-04');
    } else if ($("#wolf").hasClass("wolf-04")) {
        wolf.classList.remove('wolf-04');
        wolf.classList.add('wolf-01');
    } else if ($("#wolf").hasClass("wolf-01")) {
        wolf.classList.remove('wolf-01');
        wolf.classList.add('wolf-02');
    } else if ($("#wolf").hasClass("wolf-02")) {
        wolf.classList.remove('wolf-02');
        wolf.classList.add('wolf-03');
    }
}

function wolfStand() {
    wolf.classList.add('wolf-02');
    wolf.classList.remove('wolf-01');
    wolf.classList.remove('wolf-03');
    wolf.classList.remove('wolf-04');
}