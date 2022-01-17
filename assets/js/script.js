var timer = 75;
var timerID;
var quizTimerEl = document.getElementById("quizTimer")

var startQuizEl = document.getElementById("start-quiz");
var startButton = document.getElementById("start-btn");

var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById ("answer-btns");
var checkAnswerEl = document.getElementById ("check-answer");

var initialsLabelEl = document.getElementById("initials-label");
var initialsEl = document.getElementById("initials");
var submitButton = document.getElementById ("submit-btn");

var clearScoreButton = document.getElementById ("clear-btn");
var restartButton = document.getElementById ("restart-btn");

var scoreFieldEl = document.getElementById("highscore");
var scoreEl = JSON.parse(localstorage.getitem("scores")) || [];


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


var questionIndex;
var shuffledQuestions;

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



function startQuiz(){

    timerID = setInterval(clickTime,1000);
    
    startQuizEl.hidden= true;
    //shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = questions[0];
    questionContainerEl.style.display="block";
    
    clickTime();
    nextQuestion(questionIndex);

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
   resetState();
};

function resetState(){
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
            (answerButtonsEl.firstChild)
}

};

function selectAnswer(event) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;

    // check if the answer
    if(correct){
        checkAnswerEl.innerHTML = "Correct Answer!";
    }
    else {
        checkAnswerEl.innerHTML = "Sorry, Thats a wrong Answer!";
        if (timer <= 10) {
            timer = 0;
        } else {
            // If the answer is wrong, Deduct time by 10;
            timer = timer-10;
        }
    }
}

Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})

if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    checkAnswerEl.classList.remove("hide")
} else {
    startButton.classList.remove("hide")
    saveScore();
}
};




function saveScore(){
    alert("score");
};



































