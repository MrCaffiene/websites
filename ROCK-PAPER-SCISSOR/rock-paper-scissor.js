let userScore = document.querySelector("#user-score");
let botScore = document.querySelector("#bot-score");
let drawScore = document.querySelector("#draw-score");
let userChoice = "empty";
let botChoice = "empty";
let options = ["rock", "paper", "scissor"];
let message = document.querySelector("#message");
let temp;
let totalRounds = document.querySelector("#totalRounds");
let resetBtn = document.querySelector("#resetBtn");

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
   choice.addEventListener("click", (e) => {
      userChoice = choice.getAttribute("id");
      gameLogic(userChoice);
   });
})

let gameLogic = (userChoice) => {
   botChoice = options[Math.floor(Math.random() * 3)];

   if (botChoice === userChoice) {
      message.style.color = "white";
      message.innerText = `it's a draw, both selected ${userChoice}`;
      temp = Number(drawScore.innerText) + 1;
      drawScore.innerText = temp;
   }
   else if (botChoice === "rock") {
      if (userChoice === "paper") {
         message.style.color = "#00ff00";
         message.innerText = `you won, ${userChoice} beats ${botChoice}`;
         temp = Number(userScore.innerText) + 1;
         userScore.innerText = temp;
      }//you won
      else {
         message.style.color = "#ff0000";
         message.innerText = `you lose, ${botChoice} beats ${userChoice}`;
         temp = Number(botScore.innerText) + 1;
         botScore.innerText = temp;
      }//scissor//bot won
   }
   else if (botChoice === "paper") {
      if (userChoice === "rock") {
         message.style.color = "#ff0000";
         message.innerText = `you lose, ${botChoice} beats ${userChoice}`;
         temp = Number(botScore.innerText) + 1;
         botScore.innerText = temp;
      }//paper won
      else {
         message.style.color = "#00ff00";
         message.innerText = `you won, ${userChoice} beats ${botChoice}`;
         temp = Number(userScore.innerText) + 1;
         userScore.innerText = temp;
      }//scissor//scissor won
   }
   else if (botChoice === "scissor") {
      if (userChoice === "rock") {
         message.style.color = "#00ff00";
         message.innerText = `you won, ${userChoice} beats ${botChoice}`;
         temp = Number(userScore.innerText) + 1;
         userScore.innerText = temp;
      }//rock won 
      else {
         message.style.color = "#ff0000";
         message.innerText = `you lose, ${botChoice} beats ${userChoice}`;
         temp = Number(botScore.innerText) + 1;
         botScore.innerText = temp;
      }//paper//scissor won
   }
   temp = Number(totalRounds.innerText) + 1;
   console.log(temp);
   totalRounds.innerText = temp;
}

resetBtn.addEventListener("click", (e) => {
   userScore.innerText = "0";
   botScore.innerText = "0";
   drawScore.innerText = "0";
   totalRounds.innerText = "0";
   message.style.color = "cyan";
   message.innerText = "Choose One";
})