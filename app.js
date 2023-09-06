'use strict'
function updateTime() {
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString();
    document.getElementById('time').textContent = timeString;
    requestAnimationFrame(updateTime); // Request the next frame
}
updateTime()


function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeekString = daysOfWeek[now.getDay()];
    document.getElementById('dayOfWeek').textContent = dayOfWeekString;
}

updateDayOfWeek(); // Initial update
setInterval(updateDayOfWeek, 1000 * 60 * 60 * 24);