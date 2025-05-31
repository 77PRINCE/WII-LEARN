const allQuestions = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "PHP"],
    answer: 1
  },
  {
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Power Unit"],
    answer: 2
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["Django", "Laravel", "React", "Flask"],
    answer: 2
  },
  {
    question: "What is the main function of RAM?",
    options: ["Store data permanently", "Store data temporarily", "Process images", "Display graphics"],
    answer: 1
  }
];

let selectedQuestions = [];
let currentIndex = 0;
let score = 0;

function pickRandomQuestions() {
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
}

function showQuestionPage() {
  const quizBox = document.getElementById("quiz-box");

  if (currentIndex >= selectedQuestions.length) {
    showResultPage(); // Go to final page
    return;
  }

  const currentQ = selectedQuestions[currentIndex];
  quizBox.innerHTML = `
    <p id="question">${currentQ.question}</p>
    <div id="options">
      ${currentQ.options.map((opt, idx) => `
        <button class="option" onclick="selectOption(${idx})">${opt}</button>
      `).join('')}
    </div>
  `;
}

function selectOption(selectedIndex) {
  const correctIndex = selectedQuestions[currentIndex].answer;
  if (selectedIndex === correctIndex) {
    score++;
  }
  currentIndex++;
  showQuestionPage();
}

function showResultPage() {
  const quizBox = document.getElementById("quiz-box");
  let message = score === 2 ? "🎉 Excellent! You got all correct!" :
               score === 1 ? "👍 Good! You got one correct." :
                             "😅 Try again! You got none correct.";

  quizBox.innerHTML = `
    <h2>Congratulations!</h2>
    <p>${message}</p>
    <button class="option" onclick="restartQuiz()">Try Again</button>
  `;
}

function restartQuiz() {
  selectedQuestions = pickRandomQuestions();
  currentIndex = 0;
  score = 0;
  showQuestionPage();
}

// Start
window.onload = () => {
  selectedQuestions = pickRandomQuestions();
  showQuestionPage();
};
