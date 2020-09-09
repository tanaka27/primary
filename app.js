var c = document.getElementById("myCanvas");
var right=document.getElementById("right");
var left=document.getElementById("left");
var start=document.getElementsByClassName("expl");
const Pnumbers=[2,7,11,13,17,19,23,29,31,37,57
                ,41,53,59,79,101,211,257,277,337,541
                ,571,809,1069,1453,1613];
const nPnumbers=[4,8,24,32,44,39,51,44,88,69
                ,78,102,111,99,65,123,144,342,177,203
                ,207,183,387,407,415,543,657,819,978,1000
                ,1145,1011,1032,1089,1205,1238,1421];
var onon=false;
var score=0;
var ctx = c.getContext("2d");
var life=5;
var puttingRight=false;
var puttingLeft=false;
var timer=0;
function reloading(){
  document.location.reload();
}
function one(time){
  if(time>1000){
    ctx.font="30px Arial";
    ctx.fillStyle="red";
    ctx.fillText(1,c.width/2,(time-1000)/3);
    if((c.width/2>iX&&c.width/2<=iX+76)||(c.width/2+60>iX&&c.width/2+50<iX+152)){
      if(Math.floor((time-1000)/3)===c.height-50){
          life=0;
         onon=true;
       }
    }
  }
}
function king(tt){
  if(tt>600&&c.width/2,(tt-6000)/3<c.height-50){
    ctx.font="30px Arial";
    ctx.fillStyle="red";
    ctx.fillText("2^82589933 − 1 ",c.width/2,(tt-6000));
    if((c.width/2>iX&&c.width/2<=iX+76)||(c.width/2+60>iX&&c.width/2+50<iX+152)){
      if(Math.floor((tt-6000))===c.height-50)score+=99999999999999;
    }
  }
}
function fallN(s){
   if(numbers.jadgeC[s]){
     numbers.ny[s]+=numbers.pSpeed[s];
}else{
   numbers.nx[s]=Math.random()*(c.width-80);
   numbers.ny[s]=0;
   numbers.contain[s]=getNum(s);
   if(Math.random()>0.997){
   numbers.jadgeC[s]=true;
    }
  }
  if(numbers.ny[s]+60>c.height){
    numbers.jadgeC[s]=false;
    getJadge(s);

  }
  ctx.font="30px Arial";
  ctx.fillStyle="red";
  ctx.fillText(numbers.contain[s],numbers.nx[s],numbers.ny[s]);

}
var numbers={contain:[0,0,0,0]
           ,jadgeC:[false,false,false,false]
           ,nx:[0,0,0,0]
           ,ny:[0,0,0,0]
           ,pSpeed:[0.5,0.4,0.3,0.4]
           ,createN:[function(){fallN(0)},function(){fallN(1)},function(){fallN(2)},function(){fallN(3)}]};
var heart=new Image();
heart.src="heart.png"
var img=new Image();
var iX=c.width/2-76;
var iY=c.height-125;
function getJadge(j){
  if(numbers.contain[j]>1000){
    if((numbers.nx[j]>iX&&numbers.nx[j]<=iX+76)||(numbers.nx[j]+120>iX&&numbers.nx[j]+120<iX+152)){
      if(j%2===0){score+=numbers.contain[j];
      }else{score-=numbers.contain[j];}
    }else{
      if(j%2===0)life--;
    }
  }else if(numbers.contain[j]>100){
  if((numbers.nx[j]>iX&&numbers.nx[j]<=iX+76)||(numbers.nx[j]+90>iX+60&&numbers.nx[j]+90<iX+152)){
    if(j%2===0){score+=numbers.contain[j];
    }else{score-=numbers.contain[j];}
  }else{
    if(j%2===0)life--;
  }
  }else if(numbers.contain[j]>10){
  if((numbers.nx[j]>iX&&numbers.nx[j]<=iX+76)||(numbers.nx[j]+60>iX&&numbers.nx[j]+60<iX+152)){
    if(j%2===0){score+=numbers.contain[j];
    }else{score-=numbers.contain[j];}
  }else{
    if(j%2===0)life--;
  }
}else{
  if((numbers.nx[j]>iX&&numbers.nx[j]<=iX+76)||(numbers.nx[j]+30>iX&&numbers.nx[j]+30<iX+152)){
    if(j%2===0){score+=numbers.contain[j];
    }else{score-=numbers.contain[j];}
  }else{
    if(j%2===0)life--;
  }
}

}
function drawScore(){
  ctx.font="40px Arial";
  ctx.fillStyle="black";
  ctx.fillText("SCORE: "+score,0,40);
}
function getNum(p){
  if(p%2===0){
    return Pnumbers[Math.floor(Math.random()*(Pnumbers.length-1))];
  }else{
    return nPnumbers[Math.floor(Math.random()*(nPnumbers.length-1))];
  }
}
function put(){
  if(puttingLeft&&iX>0)iX-=10;
  if(puttingRight&&iX<c.width-152)iX+=10;
}
left.onmousedown=function(event){
  puttingLeft=true;
}

right.onmousedown=function(event){
  puttingRight=true;
}
left.onmouseup=function(event){
  puttingLeft=false;
}

right.onmouseup=function(event){
  puttingRight=false;
}
  left.toutchstart=function(event){
    puttingLeft=true;
  }

  right.toutchstart=function(event){
    puttingRight=true;
  }
  left.toutchend=function(event){
    puttingLeft=false;
  }

  right.toutchend=function(event){
    puttingRight=false;

}

var img=new Image();
img.src="basket.png";
document.addEventListener("keydown",event=>{
  if(event.key==="ArrowRight"&&iX<c.width-152){
    iX+=20;
  }else if(event.key==="ArrowLeft"&&iX>0){
    iX-=20;
  }
});
function loop(){
  ctx.clearRect(0,0,c.width,c.height);
  if(life>0){
  drawScore();
  for(var i=0;i<=life;i++){
    ctx.drawImage(heart,c.width-225+45*i,5,40,30);
  }

  for(var i=0;i<4;i++){
    numbers.createN[i]();
  }
  king(timer);

  if(timer<3000){
    one(timer);}

  ctx.drawImage(img,iX,iY,152,125);
  put();
  timer++;
}else{
  ctx.font="50px Arial";
  ctx.fillStyle="white";
  ctx.fillText("GAME OVER",c.width/2-180,c.height/2-30);
  c.style.backgroundColor="black";
  if(onon){
    ctx.fillText("1は素数ではありません",c.width/2-240,c.height/2+25);
    ctx.fillText("中学生からやり直しましょう",c.width/2-240,c.height/2+80);

  }else{
  ctx.fillText("Your Score: "+score,c.width/2-200,c.height/2+25);
}
document.addEventListener('keydown',(event)=>{
  if(event.ctrlKey){
    document.location.reload();
  }
});
}
if(timer%1500===0){
  for(var i=0;i<4;i++){
    numbers.pSpeed[i]+=0.15;
  }
}
}

start[0].onmousedown=function(event){
  start[0].remove();
  setInterval(loop,10);
}
