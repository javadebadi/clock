const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


let hourPos = 1;
let minutePos = 10;
let secondPos = 100;

HOURHAND.style.transform = "rotate(" + hourPos + "deg)";
MINUTEHAND.style.transform = "rotate(" + minutePos + "deg)";
SECONDHAND.style.transform = "rotate(" + secondPos + "deg)";
