$(function(){
	$("button#submit").on('click',function(){

	var	radioLeft = $('input[name=player1]:checked');
	var	radioRight= $('input[name=player2]:checked');
	var playerOneChoice = $('input[name=player1]:checked').val();
	var playerTwoChoice = $('input[name=player2]:checked').val();
	
	if (radioLeft.length == 0 && radioRight.length == 0){
		alert("Pick One!");
	};

	// if (radioLeft.val == 0 && radioRight.val == 0){
	// 	alert("Pick One!");
	// };

	if(playerOneChoice.length == playerTwoChoice.length){
		alert("It's a tie!");
	};

	if(playerOneChoice == "rock") {
		if (playerTwoChoice == "paper"){
			alert("Player 2 Wins!");
		} else if (playerTwoChoice == "scissors"){
			alert("Player 1 Wins!");
		}
	};

	if(playerOneChoice == "paper") {
		if (playerTwoChoice == "scissors"){
			alert("Player 2 Wins!");
		} else if (playerTwoChoice == "rock"){
			alert("Player 1 Wins!");
		}
	};

	if(playerOneChoice == "scissors") {
		if (playerTwoChoice == "rock"){
			alert("Player 2 Wins!");
		} else if (playerTwoChoice == "paper"){
			alert("Player 1 Wins!");
		}
	};

	// if(playerOneChoice == "rock" && playerTwoChoice == "scissors"){
	// 	alert("Player 1 Wins!");
	// };
	
	// if(playerOneChoice == "paper" && playerTwoChoice == "rock"){
	// 	alert("Player 1 Wins!");
	// };

	// if(playerOneChoice == "paper" && playerTwoChoice == "scissors"){
	// 	alert("Player 2 Wins!");
	// };

	// if(playerOneChoice == "scissors" && playerTwoChoice == "rock"){
	// 	alert("Player 2 Wins!");
	// };

	// if(playerOneChoice == "scissors" && playerTwoChoice == "paper"){
	// 	alert("Player 1 Wins!");
	// };

	});	
});