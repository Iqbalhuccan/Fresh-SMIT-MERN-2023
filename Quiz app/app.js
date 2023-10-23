
//References
var timeLeft = document.querySelector(".time-left");
var quizContainer = document.getElementById("container");
var nextBtn = document.getElementById("next-button");
var countOfQuestion = document.querySelector(".number-of-question");
var displayContainer = document.getElementById("display-container");
var scoreContainer = document.querySelector(".score-container");
var restart = document.getElementById("restart");
var userScore = document.getElementById("user-score");
var startScreen = document.querySelector(".start-screen");
var startButton = document.getElementById("start-button");
var questionCount;
var scoreCount = 0;
var count = 11;
var countdown;

//Questions and Options array
var quizArray = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
  {
    id: "3",
    question: "Who is your coding trainer",
    options: ["Sir Soufyan", "Sir Zain", "Sir Ghous Ahmed", "Sir Isaac Newton"],
    correct: "Sir Ghous Ahmed",
  },
  {
    id: "4",
    question: "Where is SMIT head campus?",
    options: ["Gulshan", "Saddar", "Johar", "Bahadurabad"],
    correct: "Bahadurabad",
  }
];


// Restart Quiz
function handleClick() {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
}
restart.addEventListener("click", handleClick);


//Next Button
function displayNext() {
  questionCount += 1;
  if (questionCount == quizArray.length) {
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");
    userScore.innerHTML =
      "Your score is " + scoreCount + " out of " + questionCount;
  } else {
    countOfQuestion.innerHTML =
      questionCount + 1 + " of " + quizArray.length + " Question";
    quizDisplay(questionCount);
    count = 11;
    clearInterval(countdown);
    timerDisplay();
  }
}

nextBtn.addEventListener("click", displayNext);


//Timer
function timerDisplay() {
  countdown = setInterval(function () {
    count--;
    timeLeft.innerHTML = count + 's';
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
}


//Display quiz
function quizDisplay(questionCount) {
  var quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach(function (card) {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
}


//Quiz Creation
function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    var div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    var question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  var userSolution = userOption.innerText;
  var question =
    document.getElementsByClassName("container-mid")[questionCount];
  var options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");

    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
  clearInterval(countdown);

  options.forEach(function (element) {
    element.disabled = true;
  });
}
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
function startButtonClicked() {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
}

startButton.addEventListener("click", startButtonClicked);


//hide quiz and display start screen
function onLoad() {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
}

window.onload = onLoad;
