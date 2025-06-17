const words = ["computer", "keyboard", "monitor", "mouse", "internet", "coding", "python", "html", "css", "javascript"];
let currentWord = "";
let score = 0;
let time = 20;

const wordEl = document.getElementById("word");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");

function showNewWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordEl.textContent = currentWord;
}

const timer = setInterval(() => {
  time--;
  timeEl.textContent = time;
  if (time === 0) {
    clearInterval(timer);
    alert("Time's up! Your score: " + score);
    inputEl.disabled = true;
  }
}, 1000);

inputEl.addEventListener("input", () => {
  if (inputEl.value.trim() === currentWord) {
    score++;
    scoreEl.textContent = score;
    inputEl.value = "";
    showNewWord();
    time += 2;
  }
});

showNewWord();