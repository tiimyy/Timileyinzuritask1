'use strict'
function updateTime() {
    const now = new Date();
    const options = { hour12: false };
    const timeString = now.toLocaleTimeString([], options);
    console.log(timeString)
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    const formattedTime = `${timeString}.${milliseconds}`;
    document.getElementById('time').textContent = formattedTime;
}

updateTime(); // Initial update
setInterval(updateTime, 100);


function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeekString = daysOfWeek[now.getDay()];
    document.getElementById('dayOfWeek').textContent = dayOfWeekString;
}

updateDayOfWeek(); // Initial update
setInterval(updateDayOfWeek, 1000 * 60 * 60 * 24);



