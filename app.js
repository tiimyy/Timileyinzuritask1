'use strict'



function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeekString = daysOfWeek[now.getDay()];
    document.getElementById('dayOfWeek').textContent = dayOfWeekString;
}

updateDayOfWeek(); // Initial update
setInterval(updateDayOfWeek, 1000 * 60 * 60 * 24);

    function updateUTC() {
            const now = new Date();
            const utcTimeString = now.toUTCString();
            document.getElementById('time').textContent = utcTimeString;
        }

        updateUTC();
        setInterval(updateUTC, 1000); // Update every second


setInterval(displayCurrentTime, 100);
