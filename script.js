let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const gencompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};


const drawgame = ()=>{
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="#081b31";
};


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="red";
    }
};


const playGame = (userChoice) => {

    //Generate Computer Choice
    const compChoice = gencompChoice();
    if(userChoice===compChoice){
        //Draw Game
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            // computer choice can be paper,scissors
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            // computer choice can be rock,scissors
            userWin=compChoice==="rock"?true:false;
        }
        else{
            //userchoice scissors
            // computer choice can be rock,paper
            userWin=compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

