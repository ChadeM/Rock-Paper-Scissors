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

//var playerSelection = prompt("Please enter Rock, Paper or Scissors");

var playRound =  function(playerSelection, computerSelection){
  
  var message = "";
  var rock = "rock";
  var paper = "paper";
  var scissors = "scissors";
 playerSelection = playerSelection.toLowerCase();
  
 
   if(playerSelection !== rock && playerSelection !== paper && playerSelection !== scissors) {
          
          message = $("msg").innerHTML = "Please try again";
       }
    
    else if (playerSelection == computerSelection){
 
          message = $("msg").innerHTML = "Please select again, you and the computer selected " + playerSelection;
        }
        
    else if(playerSelection == paper && computerSelection == 'rock' ){

         message = $("msg").innerHTML = "You picked " + playerSelection + ".  The computer selected " +  computerSelection +  ".  You win.";
            
        }

    else if(playerSelection == scissors && computerSelection == 'paper' ){

           message = $("msg").innerHTML = "You picked " + playerSelection + ".  The computer selected " +  computerSelection +  ".  You win."; 
        }

    else if (playerSelection == rock && computerSelection == 'scissors'){

            message = $("msg").innerHTML = "You picked " + playerSelection + ".  The computer selected " +  computerSelection +  ".  You win."; 
        }

     else{
           message =  $("msg").innerHTML = "The computer selected  " + computerSelection + ". You picked  " + playerSelection + " - computer wins. ";
               
        }
  
return message;
}

var play = function (){
    
    var users_option = $("users_option").value;
    const computerSelection = computerPlay()
    
    playRound(users_option, computerSelection);

}

 

 

window.onload = function (){
    
     $("submit").onclick = play;
    
} 


 
              
 
 
 