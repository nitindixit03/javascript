function setAlarm() {
    const seconds = parseInt(document.getElementById('seconds').value);
    const message = document.getElementById('message');
    const alarmSound = document.getElementById('alarmSound');

    if (seconds > 0) {
        let timeLeft = seconds;
        message.textContent = `Alarm set for ${timeLeft} seconds from now.`;
        
        const countdown = setInterval(() => {
            timeLeft--;
            if (timeLeft > 0) {
                message.textContent = `Time left: ${timeLeft} seconds`;
            } else {
                clearInterval(countdown);
                message.textContent = "Time's up!";
                alarmSound.play();
            }
        }, 1000);
    } else {
        message.textContent = "Please enter a valid number of seconds.";
    }
}

function stopAlarm() {
    document.getElementById('message').innerText = '';
    document.getElementById('alarmSound').pause();
    document.getElementById('alarmSound').currentTime = 0;
}