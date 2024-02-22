// Getting the Element
let timerText = document.getElementById("timer_text");
// timerText.innerText = "Hello Sniper";
let timerMessage = document.getElementById("timer_message");

let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");

let intervalId;

startBtn.addEventListener("click", StartTimer);
resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);

// when click on the start button I want to start a timer
resetBtn.style.cursor = "not-allowed";

function StartTimer() {
  let timer = 0;
  intervalId = setInterval(() => {
    let min = Math.floor(timer / 60);
    let sec = timer % 60;

    timerText.innerText = `${min}:${sec < 10 ? "0" : ""}${sec}`;
    timer++;
  }, 1000);
  timerMessage.innerText = "";
}

function resetTimer() {
  clearInterval(intervalId);
  timerText.innerText = "00:00";
  timerMessage.style.color = "blue";
  timerMessage.innerText = "Timer Reset";
}

function stopTimer() {
  clearInterval(intervalId);
  timerMessage.style.color = "red";
  timerMessage.innerText = "Timer Stopped";
}

console.log("Js is Working");
