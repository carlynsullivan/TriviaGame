$(document).ready( function() {
	//triviaGame object
	var triviaGame = {
		questions: ['Who hosts the show TRL?',
					'What show would likely have you kicked out of the hosts house at the end of the show?',
					'This TV shows female namesake could be described as moody or emo and rocked the same killer boots in every episode.',
					'This famous couple had their own show, one episode of which featured some serious confusion over chicken and tuna.', 
					'q4', 
					'q5', 
					'q6', 
					'q7', 
					'q8', 
					'q9'],
		q0Answers: ['<button class="choices incorrect">Bob Hope</button>',
					'<button class="choices incorrect">Fred Durst</button>', 
					'<button class="choices" id="correct">Carson Daly</button>', 
					'<button class="choices incorrect">Ringo Starr</button>'],
		q1Answers: ['<button class="choices" id="correct">Cribs</button>',
					'<button class="choices incorrect">Beavis and Butthead</button>', 
					'<button class="choices incorrect">The Real World</button>', 
					'<button class="choices incorrect">Rob and Big</button>'],
		q2Answers: ['<button class="choices incorrect">Britney</button>',
					'<button class="choices" id="correct">Daria</button>', 
					'<button class="choices incorrect">Clarissa</button>', 
					'<button class="choices incorrect">Peyton</button>'],
		q3Answers: ['<button class="choices incorrect">Whitney and Bobby</button>',
					'<button class="choices" id="correct">Nick and Jessica</button>', 
					'<button class="choices incorrect">Sonny and Cher</button>', 
					'<button class="choices incorrect">Ozzy and Sharon</button>'],
		q4Answers: ['<button class="choices incorrect">asdfl;kj</button>',
					'<button class="choices" id="correct">adfljk</button>', 
					'<button class="choices incorrect">asklfj</button>', 
					'<button class="choices incorrect">asdflkj</button>'],
		q5Answers: ['<button class="choices incorrect">asdflkj</button>',
					'<button class="choices incorrect">sdglkj</button>', 
					'<button class="choices" id="correct">asd;fljk</button>', 
					'<button class="choices incorrect">asd;flkj</button>'],
		q6Answers: ['<button class="choices incorrect">asdflkj</button>',
					'<button class="choices incorrect">adslgkj</button>', 
					'<button class="choices" id="correct">asd;fljk</button>', 
					'<button class="choices incorrect">asdflkj</button>'],
		q7Answers: ['<button class="choices incorrect">asdflkj</button>',
					'<button class="choices incorrect">aslgkj</button>', 
					'<button class="choices incorrect">asd;lfjk</button>', 
					'<button class="choices" id="correct">asdfljk</button>'],
		q8Answers: ['<button class="choices" id="correct">asdf;ljk</button>',
					'<button class="choices incorrect">asd;lfk</button>', 
					'<button class="choices incorrect">asdf;lk</button>', 
					'<button class="choices incorrect">sadf;ljk</button>'],
		q9Answers: ['<button class="choices incorrect">asdlfkj</button>',
					'<button class="choices incorrect">asdl;fjk</button>', 
					'<button class="choices incorrect">asdfl;kj</button>', 
					'<button class="choices" id="correct">as;dlfkj</button>'],
		currentQuestion: "",
		
		//random question, display answer choices, handle correct/incorrect choices.
		questionSelector: function() {
			var randomNumber = Math.floor(Math.random() *10);
			
			var correctCount = 0;

			var correctIncrease = correctCount++;

			var correctChoice = function() {
				$("#correct").on("click", stopCountdown);
				$("#correct").on("click", function() {
				$("#correct").on("click", correctIncrease);
				});
				$("#correct").on("click", correctScreen);
				console.log("Correct!");
			};

			var correctScreen = function() {
			//show time but paused
			//celebrate correct answer text
			$("#rightOrWrong").html("You got it right!").show();
			$("#questionHolder").hide();
			$("#answerHolder").hide();
			$("#correctTracker").html("Correct answers: " + correctCount).show();
			$("#incorrectTracker").html("Incorrect answers: " + incorrectCount).show();
			setTimeout(nextQuestion, 10000);
			};

			var incorrectCount = 0;

			var incorrectIncrease = incorrectCount++;

			var incorrectChoice = function() {
				$(".incorrect").on("click", stopCountdown);
				$(".incorrect").on("click", function() {
				$(".incorrect").on("click", incorrectIncrease);
				});
				$(".incorrect").on("click", incorrectScreen);
				console.log("Incorrect!");
			};

			var incorrectScreen = function() {
			$("#rightOrWrong").html("Sorry, incorrect." + "<br>" + "Correct answer: " + "...").show();
			$("#questionHolder").hide();
			$("#answerHolder").hide();
			$("#correctTracker").html("Correct answers: " + correctCount).show();
			$("#incorrectTracker").html("Incorrect answers: " + incorrectCount).show();
			setTimeout(nextQuestion, 10000);
			};

			var nextQuestion = function() {
				triviaGame.questionSelector();
				resetCountdown();
				startCountdown();
				$("#questionHolder").show();
				$("#answerHolder").show();
				$("#correctTracker").hide();
				$("#incorrectTracker").hide();
				$("#rightOrWrong").hide();
			};

			$("#startButton").hide();

			$("#startImage").css({"display": "none"});

			console.log(stopwatch);

				for (i = 0; i < triviaGame.questions.length; i++) {
				
				if (randomNumber == 0) {
					$("#questionHolder").text(triviaGame.questions[0]);
					console.log(triviaGame.questions[0]);
					$("#answerHolder").html(triviaGame.q0Answers[0] + "<br>" + triviaGame.q0Answers[1] + "<br>" + triviaGame.q0Answers[2] + "<br>" + triviaGame.q0Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 1) {
					$("#questionHolder").text(triviaGame.questions[1]);
					console.log(triviaGame.questions[1]);
					$("#answerHolder").html(triviaGame.q1Answers[0] + "<br>" + triviaGame.q1Answers[1] + "<br>" + triviaGame.q1Answers[2] + "<br>" + triviaGame.q1Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 2) {
					$("#questionHolder").text(triviaGame.questions[2]);
					console.log(triviaGame.questions[2]);
					$("#answerHolder").html(triviaGame.q2Answers[0] + "<br>" + triviaGame.q2Answers[1] + "<br>" + triviaGame.q2Answers[2] + "<br>" + triviaGame.q2Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 3) {
					$("#questionHolder").text(triviaGame.questions[3]);
					console.log(triviaGame.questions[3]);
					$("#answerHolder").html(triviaGame.q3Answers[0] + "<br>" + triviaGame.q3Answers[1] + "<br>" + triviaGame.q3Answers[2] + "<br>" + triviaGame.q3Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 4) {
					$("#questionHolder").text(triviaGame.questions[4]);
					console.log(triviaGame.questions[4]);
					$("#answerHolder").html(triviaGame.q4Answers[0] + "<br>" + triviaGame.q4Answers[1] + "<br>" + triviaGame.q4Answers[2] + "<br>" + triviaGame.q4Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 5) {
					$("#questionHolder").text(triviaGame.questions[5]);
					console.log(triviaGame.questions[5]);
					$("#answerHolder").html(triviaGame.q5Answers[0] + "<br>" + triviaGame.q5Answers[1] + "<br>" + triviaGame.q5Answers[2] + "<br>" + triviaGame.q5Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 6) {
					$("#questionHolder").text(triviaGame.questions[6]);
					console.log(triviaGame.questions[6]);
					$("#answerHolder").html(triviaGame.q6Answers[0] + "<br>" + triviaGame.q6Answers[1] + "<br>" + triviaGame.q6Answers[2] + "<br>" + triviaGame.q6Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 7) {
					$("#questionHolder").text(triviaGame.questions[7]);
					console.log(triviaGame.questions[7]);
					$("#answerHolder").html(triviaGame.q7Answers[0] + "<br>" + triviaGame.q7Answers[1] + "<br>" + triviaGame.q7Answers[2] + "<br>" + triviaGame.q7Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 8) {
					$("#questionHolder").text(triviaGame.questions[8]);
					console.log(triviaGame.questions[8]);
					$("#answerHolder").html(triviaGame.q8Answers[0] + "<br>" + triviaGame.q8Answers[1] + "<br>" + triviaGame.q8Answers[2] + "<br>" + triviaGame.q8Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 9) {
					$("#questionHolder").text(triviaGame.questions[9]);
					console.log(triviaGame.questions[9]);
					$("#answerHolder").html(triviaGame.q9Answers[0] + "<br>" + triviaGame.q9Answers[1] + "<br>" + triviaGame.q9Answers[2] + "<br>" + triviaGame.q9Answers[3]);
					correctChoice();
					incorrectChoice();
				}
			}

	}
};

		var startButton = $("<button id='startButton'></button>");
		
		function startAppear() {
			$(".container").append(startButton);
			$(startButton).html("Let's get started!");
			//event handler
			$(startButton).on("click", resetCountdown);
			$(startButton).on("click", startCountdown);
			$(startButton).on("click", triviaGame.questionSelector);
		};

		var stopwatch = 30;

		function stopCountdown() {
			
			clearInterval(activeTime);
		};

		function countdown() {

			stopwatch--;

			var convertedTime = timeConverter(stopwatch);

			$("#countdownHolder").html(convertedTime);

    		if (stopwatch == 0) {

    			stopCountdown();

    			console.log("time is zero");

    			alert("Time is up!");
    			
    		};
		};

		function startCountdown() {
			activeTime = setInterval(countdown, 1000);
		};

		function resetCountdown() {
			stopwatch = 30;
		};

		function timeConverter(t){
	        var minutes = Math.floor(t/60);
	        var seconds = t - (minutes * 60);
	        if (seconds < 10){
	            seconds = "0" + seconds;
	        }
	        if (minutes === 0){
	            minutes = "00";
	        } else if (minutes < 10){
	            minutes = "0" + minutes;
	        }
	        return minutes + ":" + seconds;
    	};
    	
	startAppear();
	console.log("Let's get started.");
});

	


		
		// //creation of and click event for start button
		// startButton: function() {
		// 	$(".container").append(startButton);
		// 	$(startButton).html("Let's get started!");
		// 	//event handler
		// 	$(startButton).on("click", triviaGame.showCountdown);
		// 	$(startButton).on("click", triviaGame.questionSelector);
		// }
		// reset: function() {

		// }




	//call functions
	// setTimeout(triviaGame.startButton, 1000);
	// triviaGame.correctChoice();
	// triviaGame.incorrectChoice();
	// triviaGame.resetCountdown();
	// $("#correct").on("click", triviaGame.correctScreen);
	// $("#correct").on("click", triviaGame.stopCountdown);
	// $(".incorrect").on("click", triviaGame.incorrectScreen);
	// $(".incorrect").on("click", triviaGame.stopCountdown);


/*
 count: function(){
        stopwatch.time++;
        var converted = stopwatch.timeConverter(stopwatch.time);
        $('#display').html(converted);
    },
    timeConverter: function(t){
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }*/

