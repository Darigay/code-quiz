var timer = 75;
var timerID;
var quizTimerEl = document.getElementById("quizTimer")

var startQuizEl = document.getElementById("start-quiz");
var startButton = document.getElementById("start-btn");

var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById ("answer-btns");
var checkAnswerEl = document.getElementById ("check-answer");

var initialsLabelEl = document.getElementById("");
//var initialsEl = document.getElementById("initials");
var submitButton = document.getElementById ("submit-btn");

var clearScoreButton = document.getElementById ("clear-btn");
var restartButton = document.getElementById ("restart-btn");
var viewHighScores = document.getElementById ("highscores-link");

var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];


// questions for the quiz
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "<Js>", correct:false},
            {text: "<javascript>", correct:false},
            {text: "<script>", correct: true},
            {text: "<scripting>", correct:false},
        ]
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            {text: "<script name = 'xxx.js'>", correct:false},
            {text: "<script href = 'xxx.js'>", correct:false},
            {text: "<script src = 'xxx.js'>", correct:true},
            {text: "<script link = 'xxx.js'>", correct:false},
        ]
    },
    
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {text: "alert('Hello World');", correct:true},
            {text: "msg('Hello World');", correct:false},
            {text: "alertBox('Hello World');", correct:false},
            {text: "msgBox('Hello World');", correct:false},
        ]
    },

    {
        question: "How does a FOR loop start",
        answers: [
            {text: "for(i=0;i<=5)", correct:false},
            {text: "for(i<=5;i++)", correct:false},
            {text: "for(i=0;i<=5;i++)", correct:true},
            {text: "for(i= 1 to 5)", correct:false},
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            {text: "var colors=(1:'red',2:'green',3:'blue')", correct:false},
            {text: "var colors= 1=('red'),2=('green'),3=('blue')", correct:false},
            {text: "var colors=('red','green','blue')", correct:true},
            {text: "var colors='red','green','blue'", correct:false},
        ]
    },
];


var currentQuestionIndex;
//var shuffledQuestions;

//Tigger the start Button 

startButton.addEventListener("click", startQuiz);

function clickTime()
{
    timer--;
    quizTimerEl.textContent = "Time: " + timer;

    if(timer<= 0){
        saveScore();
    }
}

// start quiz function

function startQuiz(){

    timerID = setInterval(clickTime,1000);
    
    startQuizEl.classList.add("hide");
    
    questionsIndex = questions;
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    
    clickTime();
    setQuestion();

};

function setQuestion() {
    resetState();
    nextQuestion(questionsIndex[currentQuestionIndex]);
};
 

function nextQuestion(question){

    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
       var button = document.createElement("button");
       
       button.innerText = answer.text;
       button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener("click", selectAnswer);
        answerButtonsEl.appendChild(button);
    })
};

function resetState(){

    checkAnswerEl.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
            (answerButtonsEl.firstChild)
}

};

function selectAnswer(event) {
    var selectedButton = event.target;
    var correct = selectedButton.dataset.correct;

    checkAnswerEl.classList.remove("hide");
    // check if the answer
    if(correct){
        checkAnswerEl.innerHTML = "Correct Answer!";
    }
    else {
        checkAnswerEl.innerHTML = "Sorry, Thats a wrong Answer!";
           if (timer <= 10) {
            timer = 0;
              }  else {
            // If the answer is wrong, Deduct time by 10;
            timer = timer-10;
        }
    }

    if (questionsIndex.length > currentQuestionIndex + 1) {
    
    currentQuestionIndex++;

    setQuestion();
    checkAnswerEl.classList.remove("hide")
       } else {
        startButton.classList.remove("hide")
        saveScore();
}
};


function saveScore(){
    clearInterval(timerID);
    quizTimerEl.textContent = "Time: " + timer ;
    setTimeout( function(){
        questionContainerEl.classList.add("hide");
        document.getElementById("score-container").classList.remove("hide");
        document.getElementById("your-score").textContent="Your Score is " + timer;
    }, 2000)
 };


 var loadScores = function () {
    // Get score from local storage

    if (!savedScores) {
        return false;
    }

    // Convert scores from stringfield format into array
    savedScores = JSON.parse(savedScores);
    var initials = document.querySelector("#initials").value;
    var newScore = {
        score: timer,
        initials: initials
    }
    savedScores.push(newScore);
    console.log(savedScores)

    savedScores.forEach(score => {
        initialsField.innerText = score.initials
        scoreField.innerText = score.score
    })
};


// Show high scores
function showHighScores(initials) {
    document.getElementById("highscores").classList.remove("hide")
    document.getElementById("score-container").classList.add("hide");
    startQuizEl.classList.add("hide");
    questionContainerEl.classList.add("hide");
    if (typeof initials == "string") {
        var score = {
            initials, timer
        }
        scores.push(score)
    }

 var highScoreEl = document.getElementById("highscore");
    highScoreEl.innerHTML = "";
    for (i = 0; i < scores.length; i++) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", "name-div");
        div1.innerText = scores[i].initials;
        var div2 = document.createElement("div");
        div2.setAttribute("class", "score-div");
        div2.innerText = scores[i].timer;

        highScoreEl.appendChild(div1);
        highScoreEl.appendChild(div2);
    }

    localStorage.setItem("scores", JSON.stringify(scores));

};


// View high scores link
viewHighScores.addEventListener("click", showHighScores);


submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    var initials = document.querySelector("#initials").value;
    showHighScores(initials);
});


// Restart or reload the page
restartButton.addEventListener("click", function () {
    window.location.reload();
});


// Clear localStorage items 
clearScoreButton.addEventListener("click", function () {
    localStorage.clear();
    document.getElementById("highscore").innerHTML = "";
});
































