/* class item {
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
class staticItem extends item {
    constructor(height,width,type,pos){
        super(height,width);
        this.type=type;
        this.position = this.position;
    }
}
class chicken extends item {
    constructor(height,width,type){
        super(height,width);
        this.type=type;
        this.position = this.position;
    }
}
class wolf extends item {
    constructor(height,width,type){
        super(height,width);
        this.type=type;
        this.position = this.position;
    }
}
 */
class chicken {
    constructor(){
        this.data=[];
    }
    newChicken(height,width,type,positionX,positionY,speed){
        this.data.push({
            height,
            width,
            type,
            positionX,
            positionY,
            speed
        });
    }
    
    moveOne(i){
        this.data[i].positionY+=this.data[i].speed;
        this.data[i].positionX+=this.data[i].speed;
        let x=document.querySelector(`#chicken${i}`);
        x.style.top=chick.data[i].positionY + "px";
        x.style.left=chick.data[i].positionX + "px";
    }
}
let chick = new chicken();
chick.newChicken(100,100,1,100,100,50);
chick.newChicken(100,100,1,200,200,50);
chick.newChicken(100,100,1,400,400,50);
for(let i in chick.data){
    let x=document.createElement('img');
    x.src='../chicken.png';
    x.style.top=chick.data[i].positionY + "px";
    x.style.left=chick.data[i].positionX + "px";
    x.style.height=chick.data[i].height + "px";
    x.style.width=chick.data[i].width + "px";
    x.id="chicken"+i;
    document.body.appendChild(x);
}
function mozog(){
    chick.moveOne(0);
    console.log(chick.data[0]);
}
