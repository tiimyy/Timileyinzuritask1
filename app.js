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
            const utcTimeString = now.toISOString().substr(11, 8); // Extract time (hh:mm:ss)
            const milliseconds = now.getUTCMilliseconds().toString().padStart(3, '0');
            const formattedTime = `${utcTimeString}.${milliseconds}`;
            document.getElementById('time').textContent = formattedTime;
        }

        updateUTC(); // Initial update
        setInterval(updateUTC, 1); /
