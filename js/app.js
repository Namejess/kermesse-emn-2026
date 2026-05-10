// =============================================================
// Kermesse 2026 — App
// Countdown + Tabs (Maternelle / Primaire / Collège)
// =============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===========================================================
  // 1. COUNTDOWN
  // Événement : lundi 8 juin 2026 à 8h
  // ===========================================================
  const EVENT_DATE = new Date('2026-06-08T08:00:00').getTime();

  const daysEl    = document.getElementById('countdown-days');
  const hoursEl   = document.getElementById('countdown-hours');
  const minutesEl = document.getElementById('countdown-minutes');
  const secondsEl = document.getElementById('countdown-seconds');

  function updateCountdown() {
    const now = Date.now();
    const diff = Math.max(0, EVENT_DATE - now);

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent    = String(days).padStart(2, '0');
    hoursEl.textContent   = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ===========================================================
  // 2. TABS — Maternelle / Primaire / Collège
  // ===========================================================
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Update tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update panels
      panels.forEach(panel => {
        panel.classList.remove('active');
        panel.hidden = true;
      });
      const targetPanel = document.getElementById(`panel-${target}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.hidden = false;
      }
    });
  });

});
