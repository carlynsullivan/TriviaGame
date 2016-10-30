var startButton = $("<button id='startButton'></button>");

$(document).ready( function() {
	//triviaGame object
	triviaGame = {
		questions: ['Who hosts the show TRL?',
					'What show would likely have you kicked out of the hosts house at the end of the show?',
					'This TV shows female namesake could be described as moody or emo and rocked the same killer boots in every episode.',
					'q3', 
					'q4', 
					'q5', 
					'q6', 
					'q7', 
					'q8', 
					'q9'],
		q0Answers: ['<button class="choices">Bob</button>',
					'<button class="choices">Fred</button>', 
					'<button class="choices" id="correct">Carson</button>', 
					'<button class="choices">Tango</button>'],
		q1Answers: ['<button class="choices" id="correct">Cribs</button>',
					'<button class="choices">Beavis and Butthead</button>', 
					'<button class="choices">asdlf;kj</button>', 
					'<button class="choices">asd;lfjk</button>'],
		q2Answers: ['<button class="choices">Britney</button>',
					'<button class="choices" id="correct">Daria</button>', 
					'<button class="choices">Clarissa</button>', 
					'<button class="choices">Peyton</button>'],
		q3Answers: ['<button class="choices">asdflkj</button>',
					'<button class="choices" id="correct">as;ldjk</button>', 
					'<button class="choices">ads;gfjkl</button>', 
					'<button class="choices">asdlfkj</button>'],
		q4Answers: ['<button class="choices">asdfl;kj</button>',
					'<button class="choices" id="correct">adfljk</button>', 
					'<button class="choices">asklfj</button>', 
					'<button class="choices">asdflkj</button>'],
		q5Answers: ['<button class="choices">asdflkj</button>',
					'<button class="choices">sdglkj</button>', 
					'<button class="choices" id="correct">asd;fljk</button>', 
					'<button class="choices">asd;flkj</button>'],
		q6Answers: ['<button class="choices">asdflkj</button>',
					'<button class="choices">adslgkj</button>', 
					'<button class="choices" id="correct">asd;fljk</button>', 
					'<button class="choices">asdflkj</button>'],
		q7Answers: ['<button class="choices">asdflkj</button>',
					'<button class="choices">aslgkj</button>', 
					'<button class="choices">asd;lfjk</button>', 
					'<button class="choices" id="correct">asdfljk</button>'],
		q8Answers: ['<button class="choices">asdf;ljk</button>',
					'<button class="choices">asd;lfk</button>', 
					'<button class="choices">asdf;lk</button>', 
					'<button class="choices">sadf;ljk</button>'],
		q9Answers: ['<button class="choices" id="correct">asdlfkj</button>',
					'<button class="choices">asdl;fjk</button>', 
					'<button class="choices">asdfl;kj</button>', 
					'<button class="choices" id="correct">as;dlfkj</button>'],
		currentQuestion: "",
		stopwatch: 30,
		countdown: function() {
			triviaGame.stopwatch--;
			var convertedTime = triviaGame.timeConverter(triviaGame.stopwatch);
			$("#countdownHolder").html(convertedTime);
		},
		startCountdown: function() {
			activeTime = setInterval(triviaGame.countdown, 1000);
		},
		stopCountdown: function() {
			clearInterval(activeTime);
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
    	},
    	showCountdown: function() {
			$("#countdownHolder").append(triviaGame.startCountdown);
    	},
		//select random question from questions array, display questions and answers.
		questionSelector: function() {
			var randomNumber = Math.floor(Math.random() *10);

			$("#startButton").hide();
			$("#startImage").css({"display": "none"});
			console.log(triviaGame.stopwatch);
				// for (i = 0; i < triviaGame.questions.length; i++) {
				if (randomNumber == 0) {
					$("#questionHolder").text(triviaGame.questions[0]);
					console.log(triviaGame.questions[0]);
					$("#answerHolder").html(triviaGame.q0Answers[0] + "<br>" + triviaGame.q0Answers[1] + "<br>" + triviaGame.q0Answers[2] + "<br>" + triviaGame.q0Answers[3]);
				} else if (randomNumber == 1) {
					$("#questionHolder").text(triviaGame.questions[1]);
					console.log(triviaGame.questions[1]);
					$("#answerHolder").html(triviaGame.q1Answers[0] + "<br>" + triviaGame.q1Answers[1] + "<br>" + triviaGame.q1Answers[2] + "<br>" + triviaGame.q1Answers[3]);
				} else if (randomNumber == 2) {
					$("#questionHolder").text(triviaGame.questions[2]);
					console.log(triviaGame.questions[2]);
					$("#answerHolder").html(triviaGame.q2Answers[0] + "<br>" + triviaGame.q2Answers[1] + "<br>" + triviaGame.q2Answers[2] + "<br>" + triviaGame.q2Answers[3]);
				} else if (randomNumber == 3) {
					$("#questionHolder").text(triviaGame.questions[3]);
					console.log(triviaGame.questions[3]);
					$("#answerHolder").html(triviaGame.q3Answers[0] + "<br>" + triviaGame.q3Answers[1] + "<br>" + triviaGame.q3Answers[2] + "<br>" + triviaGame.q3Answers[3]);
				} else if (randomNumber == 4) {
					$("#questionHolder").text(triviaGame.questions[4]);
					console.log(triviaGame.questions[4]);
					$("#answerHolder").html(triviaGame.q4Answers[0] + "<br>" + triviaGame.q4Answers[1] + "<br>" + triviaGame.q4Answers[2] + "<br>" + triviaGame.q4Answers[3]);

				} else if (randomNumber == 5) {
					$("#questionHolder").text(triviaGame.questions[5]);
					console.log(triviaGame.questions[5]);
					$("#answerHolder").html(triviaGame.q5Answers[0] + "<br>" + triviaGame.q5Answers[1] + "<br>" + triviaGame.q5Answers[2] + "<br>" + triviaGame.q5Answers[3]);

				} else if (randomNumber == 6) {
					$("#questionHolder").text(triviaGame.questions[6]);
					console.log(triviaGame.questions[6]);
					$("#answerHolder").html(triviaGame.q6Answers[0] + "<br>" + triviaGame.q6Answers[1] + "<br>" + triviaGame.q6Answers[2] + "<br>" + triviaGame.q6Answers[3]);

				} else if (randomNumber == 7) {
					$("#questionHolder").text(triviaGame.questions[7]);
					console.log(triviaGame.questions[7]);
					$("#answerHolder").html(triviaGame.q7Answers[0] + "<br>" + triviaGame.q7Answers[1] + "<br>" + triviaGame.q7Answers[2] + "<br>" + triviaGame.q7Answers[3]);

				} else if (randomNumber == 8) {
					$("#questionHolder").text(triviaGame.questions[8]);
					console.log(triviaGame.questions[8]);
					$("#answerHolder").html(triviaGame.q8Answers[0] + "<br>" + triviaGame.q8Answers[1] + "<br>" + triviaGame.q8Answers[2] + "<br>" + triviaGame.q8Answers[3]);

				} else if (randomNumber == 9) {
					$("#questionHolder").text(triviaGame.questions[9]);
					console.log(triviaGame.questions[9]);
					$("#answerHolder").html(triviaGame.q9Answers[0] + "<br>" + triviaGame.q9Answers[1] + "<br>" + triviaGame.q9Answers[2] + "<br>" + triviaGame.q9Answers[3]);

				}
			},
		//creation of and click event for start button
		startButton: function() {
			$(".container").append(startButton);
			$(startButton).html("Let's get started!");
			//event handler
			$(startButton).on("click", triviaGame.showCountdown);
			$(startButton).on("click", triviaGame.questionSelector);
		},
		reset: function() {

		},
		correctChoice: function() {
			$("#correct").on("click", function() {
				$(".container").append(triviaGame.correctScreen);
				triviaGame.stopCountdown;
			})
		},
		correctScreen: function() {
			//show time but paused
			//celebrate correct answer text
			$(".correct").html("You got it right!")
			//celebrate correct answer image
		},
		incorrectScreen: function() {
			$(".incorrect").html("Sorry, incorrect.")

		}
	};

	//call functions
	setTimeout(triviaGame.startButton, 1000);

});

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

