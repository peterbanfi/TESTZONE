class chicken {
    constructor() {
        this.data = [];
    }
    newChicken(height, width, type, positionX, positionY, speed) {
        this.data.push({
            height,
            width,
            type,
            positionX,
            positionY,
            speed
        });
    }

    moveOne(i, speedX, speedY) {
        this.data[i].positionY += this.data[i].speed * speedY;
        this.data[i].positionX += this.data[i].speed * speedX;
        let x = document.querySelector(`#chicken${i}`);
        x.style.top = chick.data[i].positionY + "px";
        x.style.left = chick.data[i].positionX + "px";
        /* console.log(chick.data[i].positionX, chick.data[i].positionY); */
    }
    moveTillX(i, dif) {
        this.data[i].positionX += dif;
        let x = document.querySelector(`#chicken${i}`);
        x.style.left = chick.data[i].positionX + "px";

    }
    moveTillY(i, dif) {
        this.data[i].positionY += dif;
        let x = document.querySelector(`#chicken${i}`);
        x.style.top = chick.data[i].positionY + "px";

    }
}
class Barrier {
    constructor() {
        this.data = [];
    }
    newBarrier(height, width, type, positionX, positionY) {
        this.data.push({
            height,
            width,
            type,
            positionX,
            positionY,
        });
    }
}
let chick = new chicken();
chick.newChicken(30, 30, 1, 100, 100, 25);
chick.newChicken(100, 100, 1, 200, 200, 50);
chick.newChicken(100, 100, 1, 400, 400, 50);
for (let i in chick.data) {
    let x = document.createElement('img');
    x.src = '../chicken.png';
    x.style.top = chick.data[i].positionY + "px";
    x.style.left = chick.data[i].positionX + "px";
    x.style.height = chick.data[i].height + "px";
    x.style.width = chick.data[i].width + "px";
    x.id = "chicken" + i;
    document.body.appendChild(x);
}
let barrier = new Barrier();
for (let i = 0; i < 10; i++) {
    barrier.newBarrier(50, 50, 1, Math.round(Math.random() * 1500), Math.round(Math.random() * 800));
}
for (let i = 0; i < 5; i++) {
    barrier.newBarrier(100, 100, 1, Math.round(Math.random() * 1500), Math.round(Math.random() * 800));
}
for (let i in barrier.data) {
    let x = document.createElement('img');
    x.src = '../tree.png';
    x.style.top = barrier.data[i].positionY + "px";
    x.style.left = barrier.data[i].positionX + "px";
    x.style.height = barrier.data[i].height + "px";
    x.style.width = barrier.data[i].width + "px";
    x.id = "barrier" + i;
    document.body.appendChild(x);
}

function roundCheck(foo, speedX, speedY) {
    let newPosX = chick.data[foo].speed * speedX + chick.data[foo].positionX;
    let newPosY = chick.data[foo].speed * speedY + chick.data[foo].positionY;
    let cradius = chick.data[foo].height / 2;
    for (let i in barrier.data) {
        let bradius = barrier.data[i].height / 2;
        let difX = (barrier.data[i].positionX - newPosX) ** 2;
        let difY = (barrier.data[i].positionY - newPosY) ** 2;
        let difference = Math.sqrt(difX + difY);

        if (difference < cradius + bradius) {
            difference = cradius + bradius;
            if (speedX != 0) {
                let eredmenyX = (barrier.data[i].positionX - Math.sqrt(difference ** 2 - (barrier.data[i].positionY - chick.data[foo].positionY) ** 2) * speedX - chick.data[foo].positionX);
                console.log(difference, eredmenyX);
                return eredmenyX;
            } else {
                let eredmenyY = (barrier.data[i].positionY - Math.sqrt(difference ** 2 - (barrier.data[i].positionX - chick.data[foo].positionX) ** 2) * speedY - chick.data[foo].positionY);
                console.log(difference, eredmenyY);
                return eredmenyY;
            }
        }
    }
    return true;
}

/* function checkMove(foo, speedX, speedY) {
    let newPosX = chick.data[foo].speed * speedX + chick.data[foo].positionX;
    let newPosY = chick.data[foo].speed * speedY + chick.data[foo].positionY;
    let h = chick.data[foo].height;
    let w = chick.data[foo].width;
    for (let i in barrier.data) {

        if ((barrier.data[i].positionX < newPosX || barrier.data[i].positionX < newPosX + w) &&
            (barrier.data[i].positionX + barrier.data[i].width > newPosX || barrier.data[i].positionX + barrier.data[i].width > newPosX + w) &&
            (barrier.data[i].positionY < newPosY || barrier.data[i].positionY < newPosY + h) &&
            (barrier.data[i].positionY + barrier.data[i].height > newPosY || barrier.data[i].positionY + barrier.data[i].height > newPosY + h)) {
            return speedX == 0 ? barrier.data[i].positionY - newPosY - chick.data[foo].speed * speedY : barrier.data[i].positionX - newPosX - chick.data[foo].speed * speedX;
        }

    }
    return true;
} */
window.addEventListener('keydown', function (e) {
    //bal
    if (e.keyCode == 37) {
        for (let i in chick.data) {
            let result = roundCheck(i, -1, 0);
            /* console.log(result); */
            if (result === true) {
                chick.moveOne(i, -1, 0);
            } else {
                chick.moveTillX(i, result);
            }
        }

    }
    //jobb
    if (e.keyCode == 39) {
        for (let i in chick.data) {
            let result = roundCheck(i, 1, 0);
            /* console.log(result); */
            if (result === true) {
                chick.moveOne(i, 1, 0);
            } else {
                chick.moveTillX(i, result);
            }
        }
    }
    //fel
    if (e.keyCode == 38) {
        for (let i in chick.data) {
            let result = roundCheck(i, 0, -1);
            /* console.log(result); */
            if (result === true) {
                chick.moveOne(i, 0, -1);
            } else {
                chick.moveTillY(i, result);
            }
        }
    }
    //le
    if (e.keyCode == 40) {
        for (let i in chick.data) {
            let result = roundCheck(i, 0, 1);
            /* console.log(result); */
            if (result === true) {
                chick.moveOne(i, 0, 1);
            } else {
                chick.moveTillY(i, result);
            }
        }
    }
}, true);