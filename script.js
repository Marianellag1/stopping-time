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

