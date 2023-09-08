'use strict'



function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeekString = daysOfWeek[now.getDay()];
    document.getElementById('dayOfWeek').textContent = dayOfWeekString;
}

updateDayOfWeek(); // Initial update
setInterval(updateDayOfWeek, 1000 * 60 * 60 * 24);

function displayCurrentTime() {
    var currentTimeMilliseconds = new Date().getTime();
    document.getElementById("time").textContent = currentTimeMilliseconds;
}

// Call the function to initially display the time
displayCurrentTime();

setInterval(displayCurrentTime, 100);