
/* <div id = "gameBox"></div>
<div id = "scoresBox"></div>
<div id = "imgBox"></div>
<div id = "textBox"></div>
<div id = "totalBox"></div> */

// Game Variables
var gameObjective = (Math.floor(Math.random() * (101 + 19)));
var yourScore = 0;
var yourWins = 0;
var yourLosses = 0;
var g1= Math.floor(Math.random()*11+1)
var g2= Math.floor(Math.random()*11+1)
var g3= Math.floor(Math.random()*11+1)
var g4= Math.floor(Math.random()*11+1)

// start of the game
$( document ).ready(function(){

    var gameObjective=Math.floor(Math.random()*101+19)
    
    $('#gameBox').text(gameObjective);
    $('#numberWins').text(yourWins);
    $('#numberLosses').text(yourLosses);
  
  function reset(){

        gameObjective = Math.floor(Math.random()*101+19);
        
        $('#gameBox').text(gameObjective);
        g1= Math.floor(Math.random()*11+1);
        g2= Math.floor(Math.random()*11+1);
        g3= Math.floor(Math.random()*11+1);
        g4= Math.floor(Math.random()*11+1);
        yourScore = 0;
        $('#totalBox').text(yourScore);
        } 
//   game outcome totals
  function winner(){
    yourWins++; 
    $('#score1').text("Wins: " + yourWins);
    reset();
  }
  
  function loser(){
    yourLosses++;
    $('#score2').text("Losses: " + yourLosses);
    reset()
  }
  //clicks for gem interations and conditions  
    $('#gb').on ('click', function(){
      yourScore = yourScore + g1;
      
      $('#totalBox').text(yourScore); 
            
          if (yourScore == gameObjective){
            winner();
          }
          else if ( yourScore > gameObjective){
            loser();
          }   
    })  
    $('#gg').on ('click', function(){
      yourScore = yourScore + g2;
      
      $('#totalBox').text(yourScore); 
          if (yourScore == gameObjective){
            winner();
          }
          else if ( yourScore > gameObjective){
            loser();
          } 
    })  
    $('#gr').on ('click', function(){
      yourScore = yourScore + g3;
      
      $('#totalBox').text(yourScore);
  
            if (yourScore == gameObjective){
            winner();
          }
          else if ( yourScore > gameObjective){
            loser();
          } 
    })  
    $('#gy').on ('click', function(){
      yourScore = yourScore + g4;
      
      $('#totalBox').text(yourScore); 
        
            if (yourScore == gameObjective){
            winner();
          }
          else if ( yourScore > gameObjective){
            loser();
          }
    });   
  });