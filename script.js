// A single event listener to run code after the HTML is loaded
document.addEventListener('DOMContentLoaded', () => {
  
  // --- TIMER FUNCTIONALITY ---
  function updateTimer() {
    // Target: 10th October 2026, 12:00 Swedish time (CEST is UTC+2)
    const targetDate = new Date('2026-10-10T12:00:00+02:00');
    const now = new Date();

    // 1. FIX: Calculate the difference between the dates first!
    let diff = targetDate - now;

    // Make sure we don't show negative numbers after the event has passed
    if (diff < 0) {
      document.getElementById('timer').innerText = "LANet är över!";
      clearInterval(timerInterval); // Stop the timer
      return;
    }
    
    // 2. IMPROVEMENT: Use the modulo operator (%) for cleaner calculations
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const text = `${days} dagar ${hours} timmar ${minutes} minuter ${seconds} sekunder`;
    document.getElementById('timer').innerText = text;
  }

  // Start the timer and run it immediately once
  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();


  // --- EXTRA HEADLINES ---
  // 3. FIX: Create and add both headlines inside the same listener

  // Headline 1
  const headline1 = document.createElement('h2'); // Using h2 to not compete with the main h1
  headline1.innerText = 'Vad ska Tobe tänka på nästa gång?';
  headline1.style.cursor = 'pointer';
  headline1.addEventListener('click', () => {
    alert('Scouta med sina vultures');
  });
  document.body.appendChild(headline1);

  // Headline 2
  const headline2 = document.createElement('h2');
  headline2.innerText = 'Resultat NSL2025';
  headline2.style.cursor = 'pointer';
  headline2.addEventListener('click', () => {
    alert('1) Klampe, 2) Slammo, 3) Wade, 4) Agel');
  });
  document.body.appendChild(headline2);

});

