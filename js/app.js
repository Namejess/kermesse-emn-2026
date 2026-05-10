// =============================================================
// Kermesse 2026 — App
// Countdown + indices hebdomadaires + archive
// =============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===========================================================
  // 1. CONFIGURATION — INDICES
  // Ajoute un nouvel objet dans le tableau chaque semaine.
  // { startDate: 'YYYY-MM-DD', text: "..." }
  // L'indice s'affiche automatiquement à partir de startDate.
  // ===========================================================
  const clues = [
    { startDate: '2026-05-11', text: 'Je suis partout autour de toi, mais parfois tu m\'oublies. Sans moi, pas de fleurs, pas d\'arbres, pas de vie… Qui suis-je ?' },
    { startDate: '2026-05-18', text: 'J\'ai des ailes sans être un oiseau. Je butine sans m\'arrêter. Sans moi, les fruits auraient bien du mal à naître.' },
    { startDate: '2026-05-25', text: 'On me trouve dans la terre, dans l\'air et dans l\'eau. Je suis minuscule mais essentiel. Les plantes m\'adorent, les insectes me transportent.' },
    { startDate: '2026-06-01', text: 'Nous sommes des milliers d\'espèces, des plus grandes aux plus petites. Nous formons une grande famille où chacun a son rôle. Sans diversité, nous disparaissons.' },
    { startDate: '2026-06-08', text: 'Regarde autour de toi : tout est lié. L\'arbre et l\'oiseau, la fleur et l\'abeille, la terre et l\'eau. Un équilibre fragile et précieux.' },
    { startDate: '2026-06-15', text: 'Le grand jour approche ! Tu as tous les indices en main. Maintenant, sauras-tu trouver le mot mystère ? 🌍' },
  ];

  // Événement : lundi 8 juin 2026 à 8h
  const EVENT_DATE = new Date('2026-06-08T08:00:00').getTime();

  // ===========================================================
  // 2. COUNTDOWN
  // ===========================================================
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
  // 3. INDICE DE LA SEMAINE
  // ===========================================================
  const weekNumEl = document.getElementById('clue-week-num');
  const clueTextEl = document.getElementById('clue-text');

  function getCurrentClue() {
    const today = new Date();
    // Normalize to YYYY-MM-DD for comparison
    const todayStr = today.toISOString().slice(0, 10);

    // Find the latest clue whose startDate is <= today
    let current = null;
    let currentIndex = -1;

    for (let i = 0; i < clues.length; i++) {
      if (clues[i].startDate <= todayStr) {
        current = clues[i];
        currentIndex = i;
      } else {
        break; // clues are sorted chronologically
      }
    }

    return { clue: current, index: currentIndex };
  }

  function renderCurrentClue() {
    const { clue, index } = getCurrentClue();

    if (clue) {
      weekNumEl.textContent = index + 1;
      clueTextEl.textContent = clue.text;
    } else {
      weekNumEl.textContent = '1';
      clueTextEl.textContent = '🔍 Rendez-vous le 11 mai pour le premier indice…';
    }
  }

  renderCurrentClue();

  // ===========================================================
  // 4. ARCHIVE DES INDICES PRÉCÉDENTS
  // ===========================================================
  const archiveToggle = document.getElementById('archive-toggle');
  const archiveList = document.getElementById('archive-list');
  const { index: currentIdx } = getCurrentClue();

  function buildArchive() {
    // Only show past clues (not the current one)
    const pastClues = currentIdx >= 0
      ? clues.slice(0, currentIdx)
      : [];

    if (pastClues.length === 0) {
      archiveToggle.style.display = 'none';
      return;
    }

    archiveList.innerHTML = pastClues.map((clue, i) => `
      <div class="archive__item" role="listitem">
        <span class="archive__item-week">Semaine ${i + 1}</span>
        <p class="archive__item-text">${clue.text}</p>
      </div>
    `).join('');
  }

  buildArchive();

  // Toggle archive visibility
  archiveToggle.addEventListener('click', () => {
    const isOpen = archiveToggle.getAttribute('aria-expanded') === 'true';
    archiveToggle.setAttribute('aria-expanded', String(!isOpen));
    archiveList.classList.toggle('is-open', !isOpen);
  });

});
