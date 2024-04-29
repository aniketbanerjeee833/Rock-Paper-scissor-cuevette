let  user_score = 0;
let comp_score = 0;
//let array=[];

const choices= document.querySelectorAll(".choice");
const choice1=document.querySelector(".choice1");
const choice2=document.querySelector(".choice2");
const choice3=document.querySelector(".choice3");
const userScorePara = document.querySelector(".user_score");
const compScorePara = document.querySelector(".comp_score");

const sectionClass=document.querySelector(".rock-paper-scissor");

const paperRock=document.querySelector(".paper-rock");
const paperScissor=document.querySelector(".paper-scissor");
const rockScissor=document.querySelector(".rock-scissor");

const button=document.querySelector(".rules");

const container=document.querySelector(".container") 

     const pics=[
 
     {'paper':  "url('./paper.png')",},
     {'rock':    "url('./rock.png')",},
     {'scissor':  "url('./scissor.png')"},
 
 ]
 
 const random = Math.floor(Math.random()*3);

 const info= pics[random];
 
 const info1=Object.keys(info);

 const info2=Object.values(info);
console.log(info2);

 const divElement=document.createElement("div");

   
   container.append(divElement);
   


    let data=JSON.parse(localStorage.getItem("Rock-Paper-scissor-user"));
    console.log(data);
         if(data !==null)
        {
            
            userScorePara.innerText = (data.at(-1));
            user_score=(data.at(-1));
        }

        

        let data1=JSON.parse(localStorage.getItem("Rock-Paper-scissor-computer"));
        console.log(data1);
       
         if(data1 !==null)
        {
      
            compScorePara.innerText=(data1.at(-1));
            comp_score=(data1.at(-1)); 
        }

function Reload_Location()
{
    location.reload();
}



const show_Winner = (userWin) => {


    if (userWin) {

        console.log("You Win");
      
        const divElement1=document.createElement("div");
        divElement1.classList.add("msg_container");
        divElement1.innerHTML=`   
        <div class="display_result"> ${"YOU WON AGAINST PC"} </div>
        <button class="btn-play-again" onclick="Reload_Location()">PLAY AGAIN</button>`
        container.append(divElement1);
        UserWinner();

   

    } else {
   
       
        console.log("You Lose");
       
        const divElement1=document.createElement("div");
        divElement1.classList.add("msg_container");
        divElement1.innerHTML=`   
        <div class="display_result"> ${"YOU LOSE AGAINST PC"} </div>
        <button class="btn-play-again" onclick="Reload_Location()">PLAY AGAIN</button>`
        container.append(divElement1);



    }

};

    const drawGame = (userChoice,compChoice)=>
    {
        let array=JSON.parse(localStorage.getItem("Rock-Paper-scissor-user"))||[];
       array.push(user_score);
       let array1=JSON.parse(localStorage.getItem("Rock-Paper-scissor-computer"))||[];
        array1.push(comp_score);
        localStorage.setItem("Rock-Paper-scissor-user",JSON.stringify(array));
        localStorage.setItem("Rock-Paper-scissor-computer",JSON.stringify(array1));
       // console.log(data.length);

        
        let data=JSON.parse(localStorage.getItem("Rock-Paper-scissor-user"));
        
        if(data===null)
        {
            localStorage.setItem("Rock-Paper-scissor-user",JSON.stringify(array));
            userScorePara.innerText=(array.at(-1));
        }
       else if(data !== null)
        {
            userScorePara.innerText=(data.at(-1));
        }
        let data1=JSON.parse(localStorage.getItem("Rock-Paper-scissor-computer"));
        //console.log(data1.length);
        if(data1===null)
        {
            
            localStorage.setItem("Rock-Paper-scissor-computer",JSON.stringify(array1));
            compScorePara.innerText = (array1.at(-1));
        }
       else if(data1 !== null)
        {
            compScorePara.innerText =(data1.at(-1));
        }

    //compScorePara.innerText = comp_data;
    console.log("game Drawn");
    
    const divElement1=document.createElement("div");
    divElement1.classList.add("msg_container");
    divElement1.innerHTML=`   
    <div class="display_result"> ${"TIE UP"} </div>
    <button class="btn-play-again" onclick="Reload_Location()">PLAY AGAIN</button>`
    container.append(divElement1);

        if(compChoice==="rock" && userChoice==="rock")
        {
            divElement.style.backgroundImage = info2;
        divElement.classList.add("comp-container-draw-rock");
        tieUpComp()
        choice2.classList.add("shifted-rock-draw");
        tieUpUser();
        }

        else if(compChoice==="scissor" && userChoice==="scissor")
        {
            divElement.style.backgroundImage = info2;
        divElement.classList.add("comp-container-draw-scissor");
        tieUpComp();
        choice3.classList.add("shifted-scissor-draw");
        tieUpUser();
        }

        else if(compChoice==="paper" && userChoice==="paper")
        {
            divElement.style.backgroundImage = info2;
        divElement.classList.add("comp-container-draw-paper");
        tieUpComp()
        choice1.classList.add("shifted-paper-draw");
        tieUpUser();
        }


};



const generateCompChoice = () => 
{
    const info= pics[random];
    console.log(info);
 
    const info1=Object.keys(info);
    console.log(info1);
    console.log(info1.at(0));
    return (info1.at(0))
  
}


const tieUpComp=()=>
{


    const divElement6=document.createElement("div");
    divElement6.classList.add("comp-draw");
    divElement6.innerHTML=`${"PC PICKED"}`;
    container.append(divElement6);


}


const tieUpUser=()=>
{

 

    const divElement7=document.createElement("div");
    divElement7.classList.add("user-draw");
    divElement7.innerHTML=`${"YOU PICKED"}`;
    container.append(divElement7);


}

const compWon=()=>
{
    const divElement4=document.createElement("div");
    divElement4.classList.add("comp-won");
    divElement4.innerHTML=`${"PC PICKED"}`;
    container.append(divElement4);
}

const compLost=()=>
{
    const divElement5=document.createElement("div");
    divElement5.classList.add("comp-lost");
    divElement5.innerHTML=`${"PC PICKED"}`;
    container.append(divElement5);
}

const userWon=()=>
{
    const divElement3=document.createElement("div");
       divElement3.classList.add("user-won");
       divElement3.innerHTML= `    ${"YOU PICKED"}`;
       container.append(divElement3);
 
}
const userLost=()=>
{
    const divElement3=document.createElement("div");
divElement3.classList.add("user-lost");
divElement3.innerHTML= `    ${"YOU PICKED"}`;
container.append(divElement3);

}



const displayresult=(userWin)=>
  {
    if (userWin) {
    
       
        let array=JSON.parse(localStorage.getItem("Rock-Paper-scissor-user"))||[];
        let array1=JSON.parse(localStorage.getItem("Rock-Paper-scissor-computer"))||[];
      
        user_score++;
        array.push(user_score);
        array1.push(comp_score);
   
        console.log(array);
        localStorage.setItem("Rock-Paper-scissor-user",JSON.stringify(array));
        localStorage.setItem("Rock-Paper-scissor-computer",JSON.stringify(array1));
        
        
        let data2= JSON.parse(localStorage.getItem("Rock-Paper-scissor-user"));
        console.log(data2)
       // console.log(data2.length);

        if(data2 == null)
        {
            localStorage.setItem("Rock-Paper-scissor-user",JSON.stringify(array));
            userScorePara.innerText = (array.at(-1));
        }
        
       else if(data2!==null)
        {
            userScorePara.innerText = (data2.at(-1));
        }
        
        let data3=JSON.parse(localStorage.getItem("Rock-Paper-scissor-computer"));
        console.log(data3);
       
        if(data3 == null)
        {
            localStorage.setItem("Rock-Paper-scissor-computer",JSON.stringify(array1));
            compScorePara.innerText =(array1.at(-1));
        }
  }

  else{
    let array=JSON.parse(localStorage.getItem("Rock-Paper-scissor-user"))||[];
        let array1=JSON.parse(localStorage.getItem("Rock-Paper-scissor-computer"))||[];
        comp_score++;
        array1.push(comp_score);
        array.push(user_score);
        console.log(array1);
        localStorage.setItem("Rock-Paper-scissor-computer",JSON.stringify(array1));
        localStorage.setItem("Rock-Paper-scissor-user",JSON.stringify(array));

    let data3=JSON.parse(localStorage.getItem("Rock-Paper-scissor-computer"));
        console.log(data3);
       
        if(data3===null)
        {
            localStorage.setItem("Rock-Paper-scissor-computer",JSON.stringify(array1));
            compScorePara.innerText = (array1.at(-1));
        }
        else if(data3!==null)
        {
            compScorePara.innerText = (data3.at(-1)); 
        }

        let data2= JSON.parse(localStorage.getItem("Rock-Paper-scissor-user"));
        console.log(data2);
        //console.log(data2.length);
        if(data2===null)
        {
            localStorage.setItem("Rock-Paper-scissor-user",JSON.stringify(array));
            userScorePara.innerText=(array.at(-1));
        }

       else if(data2!==null)

        {
            userScorePara.innerText=(data2.at(-1));
        } 
    }
};
const newPage=(event,userChoice) =>
{
        //console.log(paperRock.id);
        //paperRock.style.opacity=0;
        //paperScissor.style.opacity=0;
        //rockScissor.style.opacity=0;
       
        console.log(userChoice);
        let current=event.target;
        console.log(current);
        //console.log(current.class);
        console.log(current.id)
        //console.log(current.nextElementSibling);
        let parent=current.parentElement;
        console.log(parent);
    
                if(current.id === "rock" )
                {
                    
                    let previous=current.previousElementSibling;
                     console.log(previous.id);
                    previous.remove(); 
                    let next=current.nextElementSibling;
                    console.log(next.id);
                    next.remove();
                }
                if(current.id === "scissor")
                {
                   
                    let previous=current.previousElementSibling;
                    console.log(previous.id);
                    previous.remove(); 
                    let previousOfprevious=current.previousElementSibling;
                    previousOfprevious.remove();
                }

                else if(current.id === "paper")
                {
                   

                    let next=current.nextElementSibling;
                    console.log(next.id);
                    next.remove();
                    let nextOfnext=current.nextElementSibling;
                    nextOfnext.remove();
                

                }

    console.log("user=", userChoice);


    const compChoice = generateCompChoice();
    //generateCompChoice();
    console.log("computer=", compChoice);

    if (userChoice === compChoice) 
    {
  
        drawGame(userChoice,compChoice);
    } 

    
    else
     {
        let userWin = true;

        if(userChoice === "rock" && compChoice === "paper")
        {
            userWin=false;
            divElement.style.backgroundImage = info2;
       divElement.classList.add("comp-container-won-paper");
       divElement.classList.add("comp-container-won-paper2");
       compWon();


       choice2.classList.add("shifted-rock-lost");
            userLost();

        }
        if(userChoice === "rock" && compChoice === "scissor")
        {
            userWin=true;
            divElement.style.backgroundImage = info2;
            divElement.classList.add("comp-container-lost-scissor");  

       compLost();

           
       choice2.classList.add("shifted-rock-win");
       choice2.classList.add("shifted-rock-win2");
         
     userWon();

        }
        if(userChoice === "paper" && compChoice === "rock")
        {
            userWin=true;
            divElement.style.backgroundImage = info2;
            divElement.classList.add("comp-container-lost-rock");
            
          compLost();

            choice1.classList.add("shifted-paper-win");
            choice1.classList.add("shifted-paper-win2");
              
           userWon();
        }
        
        if(userChoice === "paper" && compChoice === "scissor")
        {
            userWin=false;
            divElement.style.backgroundImage = info2;
            divElement.classList.add("comp-container-won-scissor");
            divElement.classList.add("comp-container-won-scissor2");
            compWon();

         
            choice1.classList.add("shifted-paper-lost");

            userLost();
        }
        if(userChoice === "scissor" && compChoice === "rock")
        {
            userWin=false;
            divElement.style.backgroundImage = info2;
            divElement.classList.add("comp-container-won-rock");
            divElement.classList.add("comp-container-won-rock2");

            compWon();
          
            choice3.classList.add("shifted-scissor-lost");

          userLost();
        }

    
        if(userChoice === "scissor" && compChoice === "paper")
        {
            userWin=true;
            divElement.style.backgroundImage = info2;
            divElement.classList.add("comp-container-lost-paper");

            compLost();
            
            choice3.classList.add("shifted-scissor-win");
            choice3.classList.add("shifted-scissor-win2");
              userWon();
        
        }
        show_Winner(userWin,userChoice,compChoice);
        displayresult(userWin);
     
    }    
   
};


choices.forEach((choice) => {

    
   
    choice.addEventListener("click", (event) => {
   
        const userChoice = choice.getAttribute("id");
       //console.log(userChoice);
        //playGame(userChoice);
        newPage(event,userChoice);
    });
});

 



  const closeAll=(event)=>
  {
    console.log(event.target);
    let close1=event.target.parentElement;
  console.log(close1);
  let close2=close1.parentElement;
  console.log(close2);
  close2.remove();
  }

  
///RULES CONTAINER//////

 const rules_open=()=>
  {
    const divElement2=document.createElement("div");
    divElement2.classList.add("rules_container");
    divElement2.innerHTML=
   
    `<div class="rules1">
        <button class="close-button" onclick="closeAll(event)">X</button>
        <h1 class="heading">Game Rules</h1>
        <ul class="underline">
                <li><p>Rock beats scissors,scissor beats</br> paper and paper beats rock</p></li>
                <li><p>Agree ahead of time whether you'll</br>count off"rock,paper,scissors,</br>shoot" or just"rock,paper,scissors."</p></li>
                <li><p>Use rock paper scissors to settle </br> minor decisions or simply play to pass time</p></li>
                <li><p>If both players lay down the same</br>hand each player lays down another</br> hand</p></li>
        </ul>
    </div>`
    container.append(divElement2);
  }
  button.addEventListener("click",rules_open);
  //let close1=close.parentElement;
  //console.log(close1);
  //const next1=document.querySelector(".next1")
const UserWinner=()=>
{
    const divElement3=document.createElement("a");
    divElement3.classList.add("next");
    divElement3.innerText=`NEXT`
    divElement3.href="./winner.html"
    //divElement3.addEventListener("click",removeAll)
  //next1.append(divElement3);
container.append(divElement3)

}
  

//const remove=document.querySelector(".remove");

const main=document.querySelector(".main-section");

  

//next.addEventListener("click",removeAll);
