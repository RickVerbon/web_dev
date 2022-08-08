var timer = document.getElementById('timer')
var running = false;

let hour = 00;
let min = 00;
let sec = 00;

function resetTimer() {
    timer.textContent = "00:00:00";
};


function startTimer() {
    running = true
    timerCycle();
}

function stopTimer() {
    running = false;
    hour = 00;
    min = 00;
    sec = 00;
}


function timerCycle() {
    if(running) {
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);
        
        sec++;
        if(sec < 10) {
            sec = `0${sec}`
        }
        if(min < 10) {
            min = `0${min}`
        }
        if(hour < 10) {
            hour = `0${hour}`
        }
        if(sec === 60) {
            min++;
            sec = 00;
        }
        if(min === 60) {
            hour++;
            min = 00;
        }
        
        timer.innerHTML = `${hour}:${min}:${sec}`
        setTimeout(timerCycle, 1000)
    }
}