var
  timer = document.getElementById('timer'),
  start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  reset = document.getElementById('reset'),
  minute = document.getElementById('min'),
  second = document.getElementById('sec'),
  time = 180,
  resetTime = time,
  minTime,
  secTime,
  timerInterval,
  startFlag = false;


getNowTime();

start.addEventListener('click', function(){
  if(!startFlag){
    timerInterval = setInterval(getRemainingTime, 1000);
    startFlag = true;
  }
});

stop.addEventListener('click', function(){
  clearInterval(timerInterval);
  startFlag = false;
});

reset.addEventListener('click', function(){
  clearInterval(timerInterval);
  time = resetTime;
  getNowTime();
  startFlag = false;
});


function getNowTime(){
  minTime = ('0' + Math.floor(time / 60)).slice(-2);
  secTime = ('0' + Math.floor(time % 60)).slice(-2);
  minute.textContent = minTime;
  second.textContent = secTime;
}

function getRemainingTime(){
  time--;
  getNowTime();
}
