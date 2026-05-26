/* COUNTDOWN */

let futureDate = new Date("Dec 31, 2026 00:00:00").getTime();

setInterval(()=>{

let now = new Date().getTime();

let distance = futureDate - now;

let days = Math.floor(distance/(1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
let seconds = Math.floor((distance%(1000*60))/1000);

let timer=document.getElementById("timer");

if(timer){
timer.innerHTML=
days+"d "+hours+"h "+
minutes+"m "+seconds+"s ";
}

},1000);


/* FIREWORKS */

const canvas=document.getElementById("fireworks");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

class Particle{

constructor(){

this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height/2;

this.radius=2;

this.color=`hsl(${Math.random()*360},100%,50%)`;

this.speedX=(Math.random()-0.5)*6;
this.speedY=(Math.random()-0.5)*6;
}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.fill();
}

update(){

this.x+=this.speedX;
this.y+=this.speedY;

this.draw();
}
}

function animate(){

ctx.fillStyle="rgba(0,0,0,0.2)";
ctx.fillRect(0,0,canvas.width,canvas.height);

particles.push(new Particle());

particles.forEach((p,index)=>{

p.update();

if(index>300){

particles.shift();
}
});

requestAnimationFrame(animate);
}

animate();
}


/* CONFETTI */

function createConfetti(){

for(let i=0;i<150;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";
confetti.style.width="10px";
confetti.style.height="10px";

confetti.style.background=
`hsl(${Math.random()*360},100%,50%)`;

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-10px";

confetti.style.opacity=Math.random();

confetti.style.zIndex="9999";

confetti.style.borderRadius="50%";

document.body.appendChild(confetti);

let fall=Math.random()*5+5;

confetti.animate([

{transform:`translateY(0px)`},

{transform:`translateY(100vh)`}

],{
duration:fall*1000,
iterations:1
});

setTimeout(()=>{
confetti.remove();
},fall*1000);
}
}