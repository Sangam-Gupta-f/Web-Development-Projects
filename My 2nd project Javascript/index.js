
let click;
const you= document.querySelector("#you");
const comp= document.querySelector("#comp");
const btn= document.querySelector(".result");

// function stoneclick(){
//  click=2;
//  let p = Math.random()*3;
// p= Math.floor(p);
// result(p, click );
// }

// function paperclick(){
//     click=0;
//     let p = Math.random()*3;
// p= Math.floor(p);
// result(p, click );
// }

// function scissorclick(){
//     click=1;
//     let p = Math.random()*3;
// p= Math.floor(p);
// result(p, click );
// }
let yourscore =0;
let compscore =0;
function win(){
    yourscore++;
    you.innerHTML= yourscore;

}

function loss(){
    compscore++;
    comp.innerHTML= compscore;

}

function result(p, Click){
 if(p== click)
 {console.log("Draw");
btn.innerHTML="Draw";
}
else if(p> click){
console.log("You Loss");
btn.innerHTML="You Loss";
loss();
}
else{
console.log("You Win");
btn.innerHTML="You Win";
win();
}
}

const stoneclick = document.querySelector("#stoneclick");

stoneclick.addEventListener("click", (stoneclick) => {
    click=2;
 var p = Math.random()*3;
p= Math.floor(p);
result(p, click );
});

const paperclick = document.querySelector("#paperclick");

paperclick.addEventListener("click", (paperclick) => {
    click=0;
    var p = Math.random()*3;
p= Math.floor(p);
result(p, click );
});

const scissorclick = document.querySelector("#scissorclick");

scissorclick.addEventListener("click", (scissorclick) => {
    click=1;
    var p = Math.random()*3;
p= Math.floor(p);
result(p, click );
});

// const button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//   button.textContent = `Click count: ${event.detail}`;
// });