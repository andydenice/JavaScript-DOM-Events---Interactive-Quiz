const questions = [
    {
        question: "What year was Jose Rizal born?",
        options: ["1861", "1872", "1898", "1901"],
        answer: "1861"
    },
    {
        question: " Where was Jose Rizal executed?",
        options: ["Manila, Philippines", "Bagumbayan, Philippines", "Madrid, Spain", "Barcelona, Spain"],
        answer: "Bagumbayan, Philippines"
    },
    {
        question: "Which of Rizal's novels sparked significant social and political reforms in the Philippines?",
        options: ["Noli Me Tangere", "El Filibusterismo", "Mi Ultimo Adios", "Filipinas Dentro de Cien Anos"],
        answer: "Noli Me Tangere"
    },
    {
        question: "What proffesion did Jose Rizal persue in Europe?",
        options: ["Lawyer", "Journalist", "Ophthamologist", "Teacher"],
        answer: "Ophthamologist"
    },
    {
        question: "In what field did Jose Rizal excel academically?",
        options: ["Literature", "Medicine", "Engineering", "Philisophy"],
        answer: "Medicine"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const startBtn = document.getElementById('startBtn');
const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const feedbackContainer = document.getElementById('feedback');
const resultContainer = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const currentQ = questions[currentQuestion];
    questionContainer.textContent = currentQ.question;
    optionsContainer.innerHTML = '';
    currentQ.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(option) {
    const currentQ = questions[currentQuestion];
    if (option === currentQ.answer) {
        score++;
        feedbackContainer.textContent = 'Correct!';
        feedbackContainer.style.color = '#4caf50';
    } else {
        feedbackContainer.textContent = 'Incorrect!';
        feedbackContainer.style.color = '#f44336';
    }
    feedbackContainer.style.animation = 'fadeIn 0.5s forwards';
    setTimeout(() => {
        feedbackContainer.style.animation = 'fadeOut 1s forwards';
        currentQuestion++;
        if (currentQuestion < questions.length) {
            setTimeout(() => {
                showQuestion();
            }, 100); 
        } else {
            setTimeout(() => {
                showResult();
            }, 100); 
        }
    }, 100);
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = score + '/' + questions.length;
}
