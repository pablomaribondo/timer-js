let [seconds, minutes, hours] = [0, 0, 0];
let timer;

let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
let startButton = document.getElementById('start');
let timerElement = document.getElementById('timer');

startButton.addEventListener('click', () => {
  timer = setInterval(() => {
    seconds++;
    
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    
    timerElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);

  resetButton.disabled = true;
});

pauseButton.addEventListener('click', () => {
  timer = clearInterval(timer);
  resetButton.disabled = false;
});

resetButton.addEventListener('click', () => {
  timer = clearInterval(timer);
  resetButton.disabled = true;
  [seconds, minutes, hours] = [0, 0, 0];
  timerElement.innerHTML = '00:00:00';
});

