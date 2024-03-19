const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function updateTime() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sc = dateToday.getSeconds();

    hours.textContent = hr < 10 ? '0' + hr : hr;
    minutes.textContent = min < 10 ? '0' + min : min;
    seconds.textContent = sc < 10 ? '0' + sc : sc;
}

updateTime();
const clock = setInterval(updateTime, 1000);

