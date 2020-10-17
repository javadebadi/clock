const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function updateClock(){
  hourMinuteSecondPos = findPosNow();

  let hourPos = hourMinuteSecondPos[0];
  let minutePos = hourMinuteSecondPos[1];
  let secondPos = hourMinuteSecondPos[2];

  HOURHAND.style.transform = "rotate(" + hourPos + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minutePos + "deg)";
  SECONDHAND.style.transform = "rotate(" + secondPos + "deg)";
}





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
