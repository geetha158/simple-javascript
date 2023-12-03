const questions = [
  {
    question: "what is my name?",
    answers: [
      { text: "Geetha", correct: true },
      { text: "Ram", correct: false },
      { text: "Vinay", correct: false },
      { text: "jeeth", correct: false },
    ],
  },
  {
    question: "what is my name?",
    answers: [
      { text: "Geetha", correct: true },
      { text: "Ram", correct: false },
      { text: "Vinay", correct: false },
      { text: "jeeth", correct: false },
    ],
  },
  {
    question: "what is my name?",
    answers: [
      { text: "Geetha", correct: true },
      { text: "Ram", correct: false },
      { text: "Vinay", correct: false },
      { text: "jeeth", correct: false },
    ],
  },
  {
    question: "what is my name?",
    answers: [
      { text: "Geetha", correct: true },
      { text: "Ram", correct: false },
      { text: "Vinay", correct: false },
      { text: "jeeth", correct: false },
    ],
  },
];

const question = document.getElementById("question");
const answerbtn = document.getElementById("ans-btn");
const nextbtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
}
startQuiz();
function showQuestion() {
  resetstate();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAns);
  });
}

function selectAns(e) {
  const seletedbtn = e.target;
  const isCorrect = seletedbtn.dataset.correct === "true";
  if (isCorrect) {
    seletedbtn.classList.add("correct");
    score++;
  } else {
    seletedbtn.classList.add("incorrect");
  }
  Array.from(answerbtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbtn.style.display = "block";
}

function resetstate() {
  nextbtn.style.display = "none";
  while (answerbtn.firstChild) {
    answerbtn.removeChild(answerbtn.firstChild);
  }
}
function showScore() {
  resetstate();
  question.innerHTML = `You have scored ${score} out of ${questions.length} questions`;
  nextbtn.innerHTML = "Restart Quiz";
  nextbtn.style.display = "block";
}

function handleNextbtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextbtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextbtn();
  } else {
    startQuiz();
  }
});
