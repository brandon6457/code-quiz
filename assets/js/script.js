var quizIntro = document.querySelector(".quiz-intro");
var btnStart = document.querySelector("#start");
var questions = document.querySelector("#questions");
var quizEnd = document.querySelector("#quiz-end");
var currentQuestionIndex = 0;
function startQuiz() {
   quizIntro.setAttribute("style", "display:none");
   getQuestions()
   questions.setAttribute("style", "display:block");
}
function getQuestions() {
   var currentQuestion = questions[currentQuestionIndex];
   var questionTitle = document.querySelector("#question-title");
   questionTitle.textContent = currentQuestion.question;
}
   //Create event listener for hs-screen back button to return to main page

   //Create event listener for clear highscores button to clear all scores

   //Create event listener for start quiz button to shw second page and start quiz

   //Create questions for quiz
   btnStart.onclick = startQuiz;