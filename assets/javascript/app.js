$(document).ready( function() {
	//triviaGame object
	var triviaGame = {
		//10 question options that will be chosen at random
		questions: ['Who hosts the show TRL?',
					'What show would likely have you kicked out of the hosts house at the end of the show?',
					'This TV shows female namesake could be described as moody or emo and rocked the same killer boots in every episode.',
					'This famous couple had their own show, one episode of which featured some serious confusion over chicken and tuna.', 
					'A reality TV show that ended up revolving around house drama and hookups.', 
					'On this show, teens lose control of their dating life briefly, letting mom and dad step in to try to see some positive change.', 
					'This show follows a famous rocker along with his wife, son, and daughter.', 
					'Who was the original host of Say What? Karaoke?', 
					'Ashton Kutcher and friends were able to put their pranking prowess to good use in this show.', 
					'Who knew claymation would find its way to MTV? The creators of this show.'],
		//answers for questions[0]
		q0Answers: ['<button class="choices incorrect">Bob Hope</button>',
					'<button class="choices incorrect">Fred Durst</button>', 
					'<button class="choices" id="correct">Carson Daly</button>', 
					'<button class="choices incorrect">Ringo Starr</button>'],
		//answers for questions[1]
		q1Answers: ['<button class="choices" id="correct">Cribs</button>',
					'<button class="choices incorrect">Beavis and Butthead</button>', 
					'<button class="choices incorrect">The Real World</button>', 
					'<button class="choices incorrect">Rob and Big</button>'],
		//answers for questions[2]
		q2Answers: ['<button class="choices incorrect">Britney</button>',
					'<button class="choices" id="correct">Daria</button>', 
					'<button class="choices incorrect">Clarissa</button>', 
					'<button class="choices incorrect">Peyton</button>'],
		//answers for questions[3]
		q3Answers: ['<button class="choices incorrect">Whitney and Bobby</button>',
					'<button class="choices" id="correct">Nick and Jessica</button>', 
					'<button class="choices incorrect">Sonny and Cher</button>', 
					'<button class="choices incorrect">Ozzy and Sharon</button>'],
		//answers for questions[4]
		q4Answers: ['<button class="choices incorrect">Real Life</button>',
					'<button class="choices" id="correct">The Real World</button>', 
					'<button class="choices incorrect">Road Rules</button>', 
					'<button class="choices incorrect">Teen Mom</button>'],
		//answers for questions[5]
		q5Answers: ['<button class="choices incorrect">Teen Mom</button>',
					'<button class="choices incorrect">The Osbournes</button>', 
					'<button class="choices" id="correct">Parental Control</button>', 
					'<button class="choices incorrect">Real Life</button>'],
		//answers for questions[6]
		q6Answers: ['<button class="choices incorrect">Pimp My Ride</button>',
					'<button class="choices incorrect">Punkd</button>', 
					'<button class="choices" id="correct">The Osbournes</button>', 
					'<button class="choices incorrect">Real World</button>'],
		//answers for questions[7]
		q7Answers: ['<button class="choices incorrect">Joey McIntyre</button>',
					'<button class="choices incorrect">Katie Holmes</button>', 
					'<button class="choices incorrect">Teck Holmes</button>', 
					'<button class="choices" id="correct">Dave Holmes</button>'],
		//answers for questions[8]
		q8Answers: ['<button class="choices" id="correct">Punkd</button>',
					'<button class="choices incorrect">Road Rules</button>', 
					'<button class="choices incorrect">Parental Control</button>', 
					'<button class="choices incorrect">Celebrity Deathmatch</button>'],
		//answers for questions[9]
		q9Answers: ['<button class="choices incorrect">Gumby</button>',
					'<button class="choices incorrect">Clarissa Explains it All</button>', 
					'<button class="choices incorrect">Daria</button>', 
					'<button class="choices" id="correct">Celebrity Deathmatch</button>'],
		
		//question and answer display, correct/incorrect answer tally screen
		questionSelector: function() {
			
			var correctCount = 0;
			
			var correctChoice = function() {
				$("#correct").on("click", function() {
					stopCountdown();
					correctCount++;
					console.log("Plus1");
					correctScreen();
					console.log("Correct!");
				})
			};

			var correctScreen = function() {
				$("#rightOrWrong").html("You got it right!").show();
				$("#questionHolder").hide();
				$("#answerHolder").hide();
				$("#correctTracker").html("Correct answers: " + correctCount).show();
				$("#incorrectTracker").html("Incorrect answers: " + incorrectCount).show();
				$("#scorePicHolder").html("<img src='assets/images/monkeyCelebrate.gif' width='200px' style='position:relative; left:150px;'>").show();
				setTimeout(nextQuestion, 8000);
			};

			var incorrectCount = 0;

			var incorrectChoice = function() {
				$(".incorrect").on("click", function() {
					stopCountdown();
					incorrectCount++;
					console.log("Minus1");
					incorrectScreen();
					console.log("Incorrect!");
				})
			};

			var incorrectScreen = function() {
				$("#rightOrWrong").html("Sorry, incorrect.").show();
				$("#questionHolder").hide();
				$("#answerHolder").hide();
				$("#correctTracker").html("Correct answers: " + correctCount).show();
				$("#incorrectTracker").html("Incorrect answers: " + incorrectCount).show();
				$("#scorePicHolder").html("<img src='assets/images/leoCry.gif' style='position:relative; left:150px;'>").show();
				setTimeout(nextQuestion, 8000);
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
				$("#scorePicHolder").hide();
			};

			$("#startButton").hide();

			$("#startImage").css({"display": "none"});

			console.log(stopwatch);
			//question and answer random selection and display
			var randomNumber = Math.floor(Math.random() *10);

				for (i = 0; i < triviaGame.questions.length; i++) {
				
				if (randomNumber == 0) {
					$("#questionHolder").text(triviaGame.questions[0]);
					console.log(triviaGame.questions[0]);
					//triviaGame.questions.splice(0, 1);
					console.log(triviaGame.questions);
					$("#answerHolder").html(triviaGame.q0Answers[0] + "<br>" + triviaGame.q0Answers[1] + "<br>" + triviaGame.q0Answers[2] + "<br>" + triviaGame.q0Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 1) {
					$("#questionHolder").text(triviaGame.questions[1]);
					console.log(triviaGame.questions[1]);
					//triviaGame.questions.splice(1, 1);
					console.log(triviaGame.questions);
					$("#answerHolder").html(triviaGame.q1Answers[0] + "<br>" + triviaGame.q1Answers[1] + "<br>" + triviaGame.q1Answers[2] + "<br>" + triviaGame.q1Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 2) {
					$("#questionHolder").text(triviaGame.questions[2]);
					console.log(triviaGame.questions[2]);
					//triviaGame.questions.splice(2, 1);
					console.log(triviaGame.questions);
					$("#answerHolder").html(triviaGame.q2Answers[0] + "<br>" + triviaGame.q2Answers[1] + "<br>" + triviaGame.q2Answers[2] + "<br>" + triviaGame.q2Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 3) {
					$("#questionHolder").text(triviaGame.questions[3]);
					console.log(triviaGame.questions[3]);
					//triviaGame.questions.splice(3, 1);
					console.log(triviaGame.questions);
					$("#answerHolder").html(triviaGame.q3Answers[0] + "<br>" + triviaGame.q3Answers[1] + "<br>" + triviaGame.q3Answers[2] + "<br>" + triviaGame.q3Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 4) {
					$("#questionHolder").text(triviaGame.questions[4]);
					console.log(triviaGame.questions[4]);
					//triviaGame.questions.splice(4, 1);
					console.log(triviaGame.questions);
					$("#answerHolder").html(triviaGame.q4Answers[0] + "<br>" + triviaGame.q4Answers[1] + "<br>" + triviaGame.q4Answers[2] + "<br>" + triviaGame.q4Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 5) {
					$("#questionHolder").text(triviaGame.questions[5]);
					console.log(triviaGame.questions[5]);
					//triviaGame.questions.splice(5, 1);
					console.log(triviaGame.questions);
					$("#answerHolder").html(triviaGame.q5Answers[0] + "<br>" + triviaGame.q5Answers[1] + "<br>" + triviaGame.q5Answers[2] + "<br>" + triviaGame.q5Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 6) {
					$("#questionHolder").text(triviaGame.questions[6]);
					console.log(triviaGame.questions[6]);
					//triviaGame.questions.splice(6, 1);
					console.log(triviaGame.questions);
					$("#answerHolder").html(triviaGame.q6Answers[0] + "<br>" + triviaGame.q6Answers[1] + "<br>" + triviaGame.q6Answers[2] + "<br>" + triviaGame.q6Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 7) {
					$("#questionHolder").text(triviaGame.questions[7]);
					console.log(triviaGame.questions[7]);
					//triviaGame.questions.splice(7, 1);
					console.log(triviaGame.questions);
					$("#answerHolder").html(triviaGame.q7Answers[0] + "<br>" + triviaGame.q7Answers[1] + "<br>" + triviaGame.q7Answers[2] + "<br>" + triviaGame.q7Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 8) {
					$("#questionHolder").text(triviaGame.questions[8]);
					console.log(triviaGame.questions[8]);
					//triviaGame.questions.splice(8, 1);
					console.log(triviaGame.questions);
					$("#answerHolder").html(triviaGame.q8Answers[0] + "<br>" + triviaGame.q8Answers[1] + "<br>" + triviaGame.q8Answers[2] + "<br>" + triviaGame.q8Answers[3]);
					correctChoice();
					incorrectChoice();
				} else if (randomNumber == 9) {
					$("#questionHolder").text(triviaGame.questions[9]);
					console.log(triviaGame.questions[9]);
					//triviaGame.questions.splice(9, 1);
					console.log(triviaGame.questions);
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

    			// nextQuestion();
    			
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

