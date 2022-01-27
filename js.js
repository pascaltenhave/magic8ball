$(document).ready(function() {

	$("#answer").hide();
	var magic8Ball = {};

	magic8Ball.askQuestion = function(question){
		$("#answer").fadeIn(4000);
		$("#8ball").fadeIn(4000);
		var listofanswers = ["yes", "maybe", "definitely", "no", "as I see it yes", "better not tell you now", "outlook good", "my sources say no", "reply hazy ask again later"] ;
		var randomNumber = Math.random();
		var randomNumberArray = randomNumber * listofanswers.length;
		var randomIndex = Math.floor(randomNumberArray);
		var answer = listofanswers[randomIndex];

		$("#answer").text(answer);
		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		console.log(question);
		console.log(answer);
	};

	var Click = function(){
		$("#answer").hide();
		setTimeout( function(){
				var question = prompt("Ask a yes or no question");
				magic8Ball.askQuestion(question);} , 500);
		$("#8ball").effect("shake");
	};

	$("#questionButton").click(Click);


	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");



});
