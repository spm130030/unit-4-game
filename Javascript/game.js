// Computer will pick a random number to start off between 0 and 115
$(document).ready(function() {
    var computerPick = Math.floor(Math.random() * 101) + 19;
        $(".randomNumber").html(computerPick);
    
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
        
     // to randomize the numbers for the crystals
    var crystalOne = Math.floor(Math.random() * 11) + 1; 
    var crystalTwo = Math.floor(Math.random() * 11) + 1;
    var crystalThree = Math.floor(Math.random() * 11) + 1;
    var crystalFour = Math.floor(Math.random() * 11) + 1;
    
    //functions
    
    function reset() {
        computerPick = Math.floor(Math.random()*120 + 19);
        crystalOne = Math.floor(Math.random() * 11) + 1; 
        crystalTwo = Math.floor(Math.random() * 11) + 1;
        crystalThree = Math.floor(Math.random() * 11) + 1;
        crystalFour = Math.floor(Math.random() * 11) + 1;
        totalScore = 0;
        $("#yourTotalScore").html(totalScore);
    }
    
    function winner (){
        alert("You win!");
        wins++;
        $(".wins").html(wins);
        reset();
    }
    
    function loser(){
        alert("You lose!");
        losses++;
        $(".losses").html(losses);
        reset();
    }
    // need to call the function winner and loser
    // game needs to reset if total score is above the score that needs to be guessed, function needed to be created for that. 
    
    