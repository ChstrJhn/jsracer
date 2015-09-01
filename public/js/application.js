$(document).ready(function() {

var player1_position = 1;
var player2_position = 1;

var restart = function(){
player1_position = 1;
player2_position = 1;

$("tr#player1_strip > td").removeClass().first().addClass('active');
$("tr#player2_strip > td").removeClass().first().addClass('active');
}

$("button#restart").click(function(){
	restart();
});

var playerOneMove = function(){
	$('tr#player1_strip > td.active').removeClass().next().addClass('active');
	player1_position ++ ;
	player1_commentary();
}

var playerTwoMove= function(){
	$('tr#player2_strip > td.active').removeClass().next().addClass('active');
	player2_position ++ ;
	player2_commentary();
}

$(document).keyup(function(keyCode){
  if (keyCode.which === 87){
  	playerOneMove();
  }
  else if(keyCode.which === 73){
  	playerTwoMove();
  }
  winner();
});

var winner = function(){
	if (player1_position == 12) {
		alert('Player 1 has won!');
	}
	else if (player2_position == 12){
		alert("Player 2 has won!")
	}
}

var player1_commentary = function() {
	document.querySelector(".player1_commentary").innerHTML = "Player 1 is moving to position: " + player1_position + "!";

}

var player2_commentary = function() {
	document.querySelector(".player2_commentary").innerHTML = "Player 2 is moving to position: " + player2_position + "!";

}


});