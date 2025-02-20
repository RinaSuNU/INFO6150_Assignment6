let timerInterval;
let totalSeconds = 0;

function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function updateTimeLabel() {
    document.getElementById('timeLabel').textContent = formatTime(totalSeconds);
}

function startTimer() {
    return new Promise((resolve) => {
        if (!timerInterval) { 
            timerInterval = setInterval(() => {
                totalSeconds++;
                updateTimeLabel();
            }, 1000);
        }
        resolve();
    });
}

function stopTimer() {
    return new Promise((resolve) => {
        if (timerInterval) { 
            clearInterval(timerInterval);
            timerInterval = null; 
        }
        resolve();
    });
}

function resetTimer() {
    return new Promise((resolve) => {
        totalSeconds = 0;
        updateTimeLabel();
        resolve();
    });
}

document.getElementById('startButton').addEventListener('click', async () => {
    await startTimer();
});

document.getElementById('stopButton').addEventListener('click', async () => {
    await stopTimer();
});

document.getElementById('resetButton').addEventListener('click', async () => {
    await resetTimer();
    await stopTimer();
});

document.getElementById('datePicker').addEventListener('change', (e) => {
    const selectedDate = e.target.value;
    console.log(`Selected date: ${selectedDate}`);
});