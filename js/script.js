const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function findTimeNow(){
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return [hour, minute, second];
};

function findHourPos(hour, minute, second){
  let tempHour = hour;
  if (tempHour >= 12){
    tempHour -= 12;
  }
  return tempHour*(360/12.0) + minute*(360/(60*12)) + second*(360/(60*60*12));
};

function findMinutePos(minute, second){
  return minute*(360/60) + second*(360/(60*60));
};

function findSecondPos(second){
  return second*(360/60);
};

function findPosNow(){
  let hourMinuteSecond = findTimeNow();
  let hourPos = findHourPos(hourMinuteSecond[0], hourMinuteSecond[1], hourMinuteSecond[2]);
  let minutePos = findMinutePos(hourMinuteSecond[1], hourMinuteSecond[2]);
  let secondPos = findSecondPos(hourMinuteSecond[2]);
  return [hourPos, minutePos, secondPos];
};

function updateClock(){
  hourMinuteSecondPos = findPosNow();

  let hourPos = hourMinuteSecondPos[0];
  let minutePos = hourMinuteSecondPos[1];
  let secondPos = hourMinuteSecondPos[2];

  HOURHAND.style.transform = "rotate(" + hourPos + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minutePos + "deg)";
  SECONDHAND.style.transform = "rotate(" + secondPos + "deg)";

  return [hourPos, minutePos, secondPos];
}

var timePos = updateClock();
var hourPos = timePos[0];
var minutePos = timePos[1];
var secondPos = timePos[2];


// update clock every 1000 miliseconds
//var loopClock = setInterval(updateClock, 1000);

// instead of using Date object everytime
// we can increment postion of handles every second
function updateClockWithSteps(){

  hourPos += 1.0/(60*60*12)*360;
  minutePos += 1.0/(60*60)*360;
  secondPos += 1.0/(60)*360;

  HOURHAND.style.transform = "rotate(" + hourPos + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minutePos + "deg)";
  SECONDHAND.style.transform = "rotate(" + secondPos + "deg)";
};

var loopClock = setInterval(updateClockWithSteps, 1000);
