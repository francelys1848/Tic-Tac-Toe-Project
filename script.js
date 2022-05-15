//Declare a variable 
let player = "O";

//Declare a variable that keeps track of the
let turns = 0;

//Declare a variable of a boolean type that will 
let endGame = false;

//Declare a function called with two parameters that removes 
function performLogic( button, tile ){
 $(button).hide();
 $(tile).html(player);
changePlayer();
}
//Declare function that will change the current 
function changePlayer(){
    if ( "tile1" === "X" ){ 
    console.log("no");}
else { console.log("yes");}
}





// Declare a function with 3 parameters of the tileIds, and return if the value of the each of the tileIds are equal to the current player. This function will check if the player has won.
  console.log($("#tile1").text());


    if (player === "O"){   
         console.log("yes");}
else { console.log("no");
    }






//-------
$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});
