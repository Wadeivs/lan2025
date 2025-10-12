let timerInterval;
let colorInterval;

function updateTimer() {
  // Target: 10th October 2026, 12:00 Swedish time (CEST)
  const targetDate = new Date('2026-10-10T12:00:00+02:00');
  const now = new Date();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  const text = `${days} dagar ${hours} timmar ${minutes} minuter ${seconds} sekunder`;
  document.getElementById('timer').innerText = text;
}

function startColorShift() {
  if (colorInterval) return; // Already running
  colorInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, 100); // Change every 100ms
}

function getRandomColor() {
  // Generate a random RGB color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// New functionality: Page headline and click event
document.addEventListener('DOMContentLoaded', () => {
  const headline = document.createElement('h1');
  headline.innerText = 'Vad ska Tobe tänka på nästa gång?';
  headline.style.cursor = 'pointer';

  headline.addEventListener('click', () => {
    alert('Scouta med sina vultures');
  });

  // New functionality: Page headline and click event
document.addEventListener('DOMContentLoaded', () => {
  const headline = document.createElement('h1');
  headline.innerText = 'Vem vann NSL2025?';
  headline.style.cursor = 'pointer';

  headline.addEventListener('click', () => {
    alert('Klampe');
  });

  document.body.appendChild(headline);
});

// Start the timer updates
timerInterval = setInterval(updateTimer, 1000);
updateTimer();
