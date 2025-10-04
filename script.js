function updateTimer() {
  // Target: 10th October 2025, 12:00 Swedish time (CEST or CET)
  // Stockholm time zone: 'Europe/Stockholm'
  const targetDate = new Date('2025-10-10T12:00:00+02:00'); // CEST is UTC+2
  const now = new Date();

  // Calculate milliseconds difference
  let diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('timer').innerText = "Tiden har gått ut!";
    return;
  }

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  // Swedish labels
  const text = `${days} dagar ${hours} timmar ${minutes} minuter ${seconds} sekunder`;
  document.getElementById('timer').innerText = text;
}

// Update every second
setInterval(updateTimer, 1000);
// Initial call
updateTimer();