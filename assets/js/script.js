var questions = [{
   question: "What is used to store multiple values in a single variable?",
   choices: ["Array", "String", "Variable", "Window"],
   answer: "Array"
},{
   question: "Commonly used data types do not include what?",
   choices: ["Strings", "Numbers", "Booleans", "Alerts"],
   answer: "Alerts"
},{
   question: "What is the proper way to write a function?",
   choices: ["Function{}", "Function[]", "Function()", "(function))"],
   answer: "Function()"
},{
   question: "How do you output a message to the web console?",
   choices: ["Control", "Log.this", "Console.log", "Console"],
   answer: "Console.log"
}]
var quizIntro = document.querySelector(".quiz-intro");
var btnStart = document.querySelector("#start");
var questions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var quizEnd = document.querySelector("#quiz-end");
btnStart.onclick = startQuiz;
function startQuiz() {
   quizIntro.style.display = "none";
   getQuestions();
}
function getQuestions() {
   var currentQuestion = questions[currentQuestionIndex];
   var questionTitle = document.querySelector("#question-title");
   var currentQuestionIndex = 0;
   questionTitle.textContent = currentQuestion;
   currentQuestionIndex = 0;
}
var timeEl = document.querySelector(".time");

var secondsLeft = 70;

function startTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}