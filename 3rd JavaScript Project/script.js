const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");

const div7 = document.querySelector("#div7");
const div8 = document.querySelector("#div8");
const div9= document.querySelector("#div9");
const btn =document.querySelector(".btn")

let count = 0;
div1.addEventListener("click", mylogic1);
div2.addEventListener("click", mylogic2);
div3.addEventListener("click", mylogic3);
div4.addEventListener("click", mylogic4);
div5.addEventListener("click", mylogic5);
div6.addEventListener("click", mylogic6);
div7.addEventListener("click",mylogic7);
div8.addEventListener("click", mylogic8);
div9.addEventListener("click", mylogic9);


// Check winning of theam X

if(count>=5){
    if((div1.innerHTML && div2.innerHTML && div3.innerHTML==X) || (div4.innerHTML && div5.innerHTML && div6.innerHTML==X) || (div7.innerHTML && div8.innerHTML && div9.innerHTML==X</h1>) ||(div1.innerHTML && div5.innerHTML && div9.innerHTML==<h1>X</h1>) || (div3.innerHTML && div5.innerHTML && div7.innerHTML==<h1>X</h1>))
    {
      btn.innerHTML=<h1>Player X won</h1>
    }

    if((div1.innerHTML && div2.innerHTML && div3.innerHTML==<h1>O</h1>) || (div4.innerHTML && div5.innerHTML && div6.innerHTML==<h1>O</h1>) || (div7.innerHTML && div8.innerHTML && div9.innerHTML==<h1>O</h1>) ||(div1.innerHTML && div5.innerHTML && div9.innerHTML==<h1>O</h1>) || (div3.innerHTML && div5.innerHTML && div7.innerHTML==<h1>O</h1>))
    {
      btn.innerHTML=<h1>Player O won</h1>
    }
}


function mylogic1() {

console.log("Clicked");

count++;

console.log(count);
if(count%2==0)
div1.innerHTML="<h1>O</h1>"
else
div1.innerHTML="<h1>X</h1>"
};
function mylogic2() {

    console.log("Clicked");
    
    count++;
    
    console.log(count);
    if(count%2 == 0)
    div2.innerHTML="<h1>O</h1>"
    else
    div2.innerHTML="<h1>X</h1>"
};
function mylogic3() {

        console.log("Clicked");
        
        count++;
        
        console.log(count);
        if(count%2==0)
        div3.innerHTML="<h1>O</h1>"
        else
        div3.innerHTML="<h1>X</h1>"
};

        function mylogic4() {

            console.log("Clicked");
            
            count++;
            
            console.log(count);
            if(count%2==0)
            div4.innerHTML="<h1>O</h1>"
            else
            div4.innerHTML="<h1>X</h1>"
 };
 function mylogic5() {

    console.log("Clicked");
    
    count++;
    
    console.log(count);
    if(count%2==0)
    div5.innerHTML="<h1>O</h1>"
    else
    div5.innerHTML="<h1>X</h1>"
};

function mylogic6() {

                console.log("Clicked");
                
                count++;
                
                console.log(count);
                if(count%2==0)
                div6.innerHTML="<h1>O</h1>"
                else
                div6.innerHTML="<h1>X</h1>"
 };

                function mylogic7() {

                    console.log("Clicked");
                    
                    count++;
                    
                    console.log(count);
                    if(count%2==0)
                    div7.innerHTML="<h1>O</h1>"
                    else
                    div7.innerHTML="<h1>X</h1>"
 };

function mylogic8() {

                        console.log("Clicked");
                        
                        count++;
                        
                        console.log(count);
                        if(count%2==0)
                        div8.innerHTML="<h1>O</h1>"
                        else
                        div8.innerHTML="<h1>X</h1>"
                        };

  function mylogic9() {

                            console.log("Clicked");
                            
                            count++;
                            
                            console.log(count);
                            if(count%2==0)
                            div9.innerHTML="<h1>O</h1>"
                            else
                            div9.innerHTML="<h1>X</h1>"
      };
                            
