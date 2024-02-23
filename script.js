let userScore=0;
let robotScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let robotScorePara=document.querySelector("#robot-score");
const genRobotchoice=()=>{
    //string random generate krna possible nhi h,but no. random create kr skte h
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("Game was draw!");
    msg.innerText="Game was draw!Play again!";
    msg.style.backgroundColor= "rgb(247, 37, 133 )";
}
const showWinner=(userWin,userChoice,robotChoice)=>{
    if(userWin){
        console.log("You win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${robotChoice}!`;
        msg.style.backgroundColor="green";
    }
    else{
        robotScore++;
        robotScorePara.innerText=robotScore;
        console.log("You lost!");
        msg.innerText=`You lost! ${robotChoice} beats your ${userChoice}!`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate robot choice
    const robotChoice=genRobotchoice();
    console.log("robot choice=",robotChoice);
    if(userChoice==robotChoice)drawGame();
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin=robotChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissor
            userWin=robotChoice==="rock"?true:false;
        }
        else{//paper,rock
            userWin=robotChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,robotChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

