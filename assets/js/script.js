var timer = 75;
var timerID;
var quizTimerEl = document.getElementById("quizTimer")
var startButtonEl = document.getElementById("start-btn");
var startQuizEl = document.getElementById("start-quiz");
var questionsContainerEl= document.getElementById("questions-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById ("answer-btn");
var checkAnswerEl = document.getElementById ("check-answer");

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


// Start Button will tigger the first question 
startButtonEl.addEventListener("click", startQuiz {
    currentQuestionIndex = currentQuestionIndex++;
    setNextQuestion();
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

function startQuiz(){
    timerID = setInterval(timeCount, 1000);
    startQuizEl.classList.add("hide");
    currentQuestionIndex = 0 ;
    questionsContainerEl.classList.remove("hide");

    timeCount();
    setNextQuestion();
    
};

// goes to next question 

function setNextQuestion(){
    showQuestion(currentQuestionIndex);

}

// displays the question
function showQuestion(questions){
    questionEl.innerText = question.question;
    question.answers.foreach(answer =>{
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn")
        if(answer.corect){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        answerButtonEl.appendChild(button);

    })
}

// selected Answer
function selectAnswer(e){
    var selectedButton = e.target;
    var correct = selectAnswer.dataset.correct;
    checkAnswerEl.classList.remove("hide");

    if(correct){
        checkAnswerEl.innerHTML = "Correct Answer!";
    } else{
        checkAnswerEl.innerHTML = "Sorry, That was a Incorrect answer.";
        if (timer<=15){
            timer=0;
        } else{
            timer=timer-15;
        }

    }
};


// save scores
function saveScore() {

}