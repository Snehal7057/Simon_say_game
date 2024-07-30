let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){
       console.log("game is started");
       started=true;
       levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
     },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
     },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
   

    //random btn choose
   let randIdx=Math.floor(Math.random()*3);
   let randcolor=btns[randIdx];
   let randbtn=document.querySelector(`.${randcolor}`);
//    console.log(randIdx);
//    console.log(randcolor);
//    console.log(randbtn);
gameSeq.push(randcolor);
   console.log(gameSeq);
   gameflash(randbtn);
}

function checkAns(idx){
        if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game over ! Your score was <b>${level}</b> </br> Press any key to start. `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}