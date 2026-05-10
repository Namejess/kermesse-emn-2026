// =============================================================
// Kermesse 2026 — App
// Countdown + Tabs + Rendu des cartes indices
// =============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===========================================================
  // 1. COUNTDOWN — Révélation du thème : 8 juin 8h
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
  // 2. RENDU DES CARTES INDICES
  // ===========================================================
  function renderCards(niveau) {
    const panel = document.querySelector(`.tab-panel[data-niveau="${niveau}"]`);
    if (!panel) return;
    const grid = panel.querySelector('.activities-grid');
    if (!grid) return;

    const indices = INDICES[niveau] || [];

    grid.innerHTML = indices.map(indice => `
      <a href="indice.html?niveau=${niveau}&num=${indice.num}" class="activity-card-link">
        <div class="activity-card">
          <span class="activity-card__badge">Indice ${indice.num}</span>
          <div class="activity-card__mystery">
            <span class="mystery-q">?</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  // Render all levels
  renderCards('maternelle');
  renderCards('primaire');
  renderCards('college');

  // ===========================================================
  // 3. GESTION DES ONGLETS
  // ===========================================================
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');

  function activateTab(tabName, scroll = false) {
    tabs.forEach(t => {
      const isActive = t.dataset.tab === tabName;
      t.setAttribute('aria-selected', isActive);
      t.classList.toggle('active', isActive);
    });
    panels.forEach(p => {
      p.classList.toggle('active', p.id === `panel-${tabName}`);
      p.hidden = p.id !== `panel-${tabName}`;
    });

    if (scroll) {
      const target = document.getElementById('indices');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activateTab(tab.dataset.tab, true);
    });
  });

  // Restaurer l'onglet actif depuis sessionStorage (retour depuis indice.html)
  const savedTab = sessionStorage.getItem('activeTab');
  if (savedTab && INDICES[savedTab]) {
    activateTab(savedTab, false);
    sessionStorage.removeItem('activeTab');
    // Forcer le scroll vers #indices après le rendu des cartes
    requestAnimationFrame(() => {
      const target = document.getElementById('indices');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

});
