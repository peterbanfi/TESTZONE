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
    
    moveOne(i,speedX,speedY){
        this.data[i].positionY+=this.data[i].speed*speedY;
        this.data[i].positionX+=this.data[i].speed*speedX;
        let x=document.querySelector(`#chicken${i}`);
        x.style.top=chick.data[i].positionY + "px";
        x.style.left=chick.data[i].positionX + "px";
    }
    moveTillX(i,dif){
        this.data[i].positionX+=dif;
        let x=document.querySelector(`#chicken${i}`);
        x.style.left=chick.data[i].positionX + "px";
        
    }
    moveTillY(i,dif){
        this.data[i].positionY+=dif;
        let x=document.querySelector(`#chicken${i}`);
        x.style.top=chick.data[i].positionY + "px";
        
    }
}
class Barrier {
    constructor(){
        this.data=[];
    }
    newBarrier(height,width,type,positionX,positionY){
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
chick.newChicken(100,100,1,100,100,50);
/* chick.newChicken(100,100,1,200,200,50);
chick.newChicken(100,100,1,400,400,50); */
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
let barrier =new Barrier();
for (let i =0;i<15;i++){
    barrier.newBarrier(100,100,1,Math.round(Math.random()*1500),Math.round(Math.random()*800));
}

for(let i in barrier.data){
    let x=document.createElement('img');
    x.src='../tree.png';
    x.style.top=barrier.data[i].positionY + "px";
    x.style.left=barrier.data[i].positionX + "px";
    x.style.height=barrier.data[i].height + "px";
    x.style.width=barrier.data[i].width + "px";
    x.id="barrier"+i;
    document.body.appendChild(x);
}
function checkMove(foo,speedX,speedY){
    let newPosX=chick.data[foo].speed*speedX+chick.data[foo].positionX;
    let newPosY= chick.data[foo].speed*speedY+chick.data[foo].positionY;
    let h=chick.data[foo].height;
    let w=chick.data[foo].width;
    for(let i in barrier.data){
        
        if((barrier.data[i].positionX<newPosX || barrier.data[i].positionX<newPosX+w)
             && (barrier.data[i].positionX+barrier.data[i].width>newPosX  ||barrier.data[i].positionX+barrier.data[i].width>newPosX+w )
             && (barrier.data[i].positionY<newPosY ||barrier.data[i].positionY<newPosY+h)
             && (barrier.data[i].positionY+barrier.data[i].height>newPosY ||barrier.data[i].positionY+barrier.data[i].height>newPosY+h)){
            return speedX==0?barrier.data[i].positionY-newPosY-chick.data[foo].speed*speedY:barrier.data[i].positionX-newPosX-chick.data[foo].speed*speedX;
        }
       
    }
    return true;
}
window.addEventListener('keydown', function (e) {
    //bal
    if (e.keyCode == 37){
        let result =checkMove(0,-1,0);
        if(result===true){
            chick.moveOne(0,-1,0);
        }else{
            chick.moveTillX(0,result);
        }
        
    }
    //jobb
    if (e.keyCode == 39){
        let result =checkMove(0,1,0);
        if(result===true){
            chick.moveOne(0,1,0);
        }else{
            chick.moveTillX(0,result);
        }
    }
    //fel
    if (e.keyCode == 38){
        let result =checkMove(0,0,-1);
        if(result===true){
            chick.moveOne(0,0,-1);
        }else{
            chick.moveTillY(0,result);
        }
    }
    //le
    if (e.keyCode == 40){
        let result =checkMove(0,0,1);
        if(result===true){
            chick.moveOne(0,0,1);
        }else{
            chick.moveTillY(0,result);
        }
    }
}, true);
