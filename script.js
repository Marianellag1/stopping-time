let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    // start button will = to true || on
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    // when stop is clicked it will = to false
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    // when reset is clicked it = false
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    // all will reset to 0
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    // w3school def. of innerHTML: The innerHTML property sets or returns the HTML content (inner HTML) of an element
    // telling the system specifically to set to 00
});

function stopWatch() {
    //from line 13, where its first introduced.
    if (timer) {
        count++;
        //if timer is truthee, count up.
        if (count == 100) {
            // mozilla def. :The equality ( == ) operator checks whether its two operands are equal, returning a Boolean result.
            //100 seconds takes to a minute
            second++; //increases seconds
            count = 0;
        }
        if (second == 60) {
            //60 seconds to a minute
            minute++; //increase minutes
            second = 0;
        }
        if (minute == 60) {
            //60 min. to hour
            hour++;
            minute = 0;
            second = 0;
            //all these turn to 0, once every 60 hits
        }

        let hourString = hour;
        let minuteString = minute;
        let secondString = second;
        let countString = count;

        if (hour < 10) {
            hourString = "0" + hourString;
        }
        if (minute < 10) {
            minuteString = "0" + minuteString;
        }
        if (second < 10) {
            secondString = "0" + secondString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hour').innerHTML = hourString;
        document.getElementById('minute').innerHTML = minuteString;
        document.getElementById('seconds').innerHTML = secondString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
        //calling stopWatch
        //The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    }
}