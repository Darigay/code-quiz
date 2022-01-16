var timer = 75;
var quizTimerEl = document.getElementById("quizTimer")
var startButtonEl = document.getElementById("start-btn");
var startQuizEl = document.getElementById("start-quiz");
var questionsContainerEl= document.getElementById("questions-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById ("answer-btn");


// Start Button will tigger the first question 
StartButton.addEventListener("clicl", startQuiz{
    currentQuestionIndex++
    setNextQuestion()
});

// Timer Countdown
function timeCount() {
    timer--;
    quizTimerEl.textContent="Time: " + "timer"
    if(timer==0){
        saveScore();
    }
}

//Start Quiz



