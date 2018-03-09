var $ = function (id) {
    return document.getElementById(id);
}



 var computer_choice = [
   'rock', 'paper', 'scissors'
];



var computerPlay = function ()
{

var random = computer_choice[Math.floor(Math.random() * (computer_choice.length))];

return  random;


}



  var compCount = 0;
  var userCount = 0;


var rocks = "rock";
var papers = "paper";
var scissor = "scissors";

var playRound =  function(playerSelection, computerSelection){

  var message = "";
 


   if(playerSelection !== rocks  && playerSelection !== papers && playerSelection !== scissor) {

          message = $("msg").innerHTML = "Please try again";
        
       }

    else if (playerSelection == computerSelection){

          message = $("msg").innerHTML = "Please select again, you and the computer selected " + playerSelection;
        }

    else if(playerSelection == papers && computerSelection == 'rock' ){

         message = $("msg").innerHTML = "You picked " + playerSelection + ".  The computer selected " +  computerSelection;
         userCount += 1;

        }

    else if(playerSelection == scissor && computerSelection == 'paper' ){

           message = $("msg").innerHTML = "You picked " + playerSelection + ".  The computer selected " +  computerSelection;
           userCount += 1;
        }

    else if (playerSelection == rocks && computerSelection == 'scissors'){

            message = $("msg").innerHTML = "You picked " + playerSelection + ".  The computer selected " +  computerSelection;
            userCount += 1;
        }

     else{
           message =  $("msg").innerHTML = "The computer selected  " + computerSelection + ". You picked  " + playerSelection;
           compCount+= 1;

        }

        $("msg2").innerHTML =  "You: " + userCount + " points \nComputer: " + compCount + " points";  

      if(compCount == 5){
            $("msg2").innerHTML = " ";
           $("msg3").innerHTML = "Computer wins! <br> Your score: " +  userCount + ". Computer score: " + compCount;
         
           compCount = 0;
           userCount = 0;
    
      }else if(userCount == 5){
           $("msg2").innerHTML = " ";
            $("msg3").innerHTML = "You win! <br> Your score: " +  userCount + ". Computer score: " + compCount;
           
            compCount = 0;
            userCount = 0;

      }else{
            $("msg3").innerHTML = " ";
          
    }
       
       
 
}

 
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".sciss");

 
  rock.addEventListener('click', () => {
     const rock = document.getElementsByTagName('img')[0].getAttribute('alt'); 
     const computerSelection = computerPlay();
       playRound(rock, computerSelection);

  });

  paper.addEventListener('click', () => {
     const computerSelection = computerPlay();
     const paper = document.getElementsByTagName('img')[1].getAttribute('alt'); 
      playRound(paper, computerSelection);

      
  });

  scissors.addEventListener('click', () => {
     const computerSelection = computerPlay();
     const scissors = document.getElementsByTagName('img')[2].getAttribute('alt'); 
       playRound(scissors, computerSelection);


        
  });
 



