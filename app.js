let gameseq=[];
let userseq=[];

let btns = ["yellow","red","green","purple"]

let started = false;
let level = 0;
let idx = level-1;

let h2 = document.querySelector("h2");

function gameover(){
    let go = document.getElementById("gameover").play();
}
function btnclick(){
    let go = document.getElementById("Press").play();
}

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("started");
        started = true;
        levelup();
    }
})
function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash");
    },250)
 }

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx]
    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over,Your score was <b>${level}</b> </br>press any key to restart`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
            gameover();
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
    btnclick();
}

let allbtn = document.querySelectorAll(".btn");     

for(btn of allbtn){
    btn.addEventListener("click" , btnpress);
}

function reset(){
 started = false;
 gameseq = [];
 userseq = [];
 level = 0;
}

