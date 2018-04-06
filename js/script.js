"use strict";

let jack = document.getElementById('jack');
let style = window.getComputedStyle(jack);
let posTop = parseInt(style.getPropertyValue('top').slice(0, -2));
let posLeft = parseInt(style.getPropertyValue('left').slice(0, -2));
console.log(typeof posRight, posLeft);


let keyState = {};
window.addEventListener('keydown', function (e) {
    keyState[e.keyCode || e.which] = true;
}, true);
window.addEventListener('keyup', function (e) {
    keyState[e.keyCode || e.which] = false;
}, true);


/*     window.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowLeft":
                posLeft = posLeft - 2;
                jack.style.transform = "scaleX(1)";
                jack.classList.add('jack-left');
                jack.style.left = `${posLeft}px`;
                console.log('to left: ', posLeft);
                break;
            case "ArrowRight":
                posLeft = posLeft + 2;
                jack.style.transform = "scaleX(-1)";
                jack.classList.add('jack-right');
                jack.style.left = `${posLeft}px`;
                console.log('to right: ', posLeft);
                break;
            case "ArrowUp":
                posTop = posTop - 2;
                jack.style.transform = "scaleX(-1)";
                jack.classList.add('jack-right');
                jack.style.top = `${posTop}px`;
                console.log('to up: ', posTop);
                break;
            case "ArrowDown":
                posTop = posTop + 2;
                jack.style.transform = "scaleX(-1)";
                jack.classList.add('jack-right');
                jack.style.top = `${posTop}px`;
                console.log('to down: ', posTop);
                break;
            case " ":
                jack.style.background = "url('/img/jack3.png')";
                jack.classList.add('jack-jump');
                jack.style.top = `${posTop}px`;
                console.log('to down: ', posTop);
                break;
            default:
                return;
        }
        event.preventDefault();
    }, true);
    window.addEventListener("keyup", function (event) {
        switch (event.key) {
            case "ArrowLeft":
                jack.style.background = "url('/img/jack1.png')";
                jack.classList.remove('jack-left');
                break;
            case "ArrowRight":
                jack.style.background = "url('/img/jack1.png')";
                jack.classList.remove('jack-right');
                break;
            case "ArrowUp":
                jack.style.background = "url('/img/jack1.png')";
                jack.classList.remove('jack-right');
                break;
            case "ArrowDown":
                jack.style.background = "url('/img/jack1.png')";
                jack.classList.remove('jack-right');
                break;
            case " ":
                jack.style.background = "url('/img/jack1.png')";
                jack.classList.remove('jack-jump');
                break;
            default:
                return;
        }
        event.preventDefault();
    }, true); */
function gameLoop() {
    //to left
    if (keyState[37]) {
        posLeft = posLeft - 20;
        jack.style.transform = "scaleX(1)";
        jack.classList.add('jack-left');
        jack.style.left = `${posLeft}px`;
        console.log('to left: ', posLeft);
        console.log(keyState[37]);
    }
    if (!keyState[37]) {
        jack.style.background = "url('/img/jack1.png')";
        jack.classList.remove('jack-left');
        console.log(keyState[37]);
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
        console.log('to down: ', posTop);
    }
    if (!keyState[38]) {
        jack.style.background = "url('/img/jack1.png')";
        jack.classList.remove('jack-right');
    }
    setTimeout(gameLoop, 100);
}


gameLoop();