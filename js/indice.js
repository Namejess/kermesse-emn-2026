// =============================================================
// Kermesse 2026 — Page Indice
// Lit les paramètres URL et affiche le détail de l'indice
// =============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===========================================================
  // 1. LIRE LES PARAMÈTRES URL
  // ===========================================================
  const params = new URLSearchParams(window.location.search);
  const niveau = params.get('niveau');
  const num = parseInt(params.get('num'), 10);

  const container = document.getElementById('indice-card');

  if (!niveau || !num || !INDICES[niveau]) {
    container.innerHTML = `
      <div class="indice-detail__error">
        <p>Indice introuvable.</p>
        <a href="index.html" class="about__link">&larr; Retour aux indices</a>
      </div>
    `;
    return;
  }

  // ===========================================================
  // 2. TROUVER L'INDICE
  // ===========================================================
  const indice = INDICES[niveau].find(i => i.num === num);

  if (!indice) {
    container.innerHTML = `
      <div class="indice-detail__error">
        <p>Indice introuvable.</p>
        <a href="index.html" class="about__link">&larr; Retour aux indices</a>
      </div>
    `;
    return;
  }

  // ===========================================================
  // 3. MAPPE DES NIVEAUX
  // ===========================================================
  const niveauLabels = {
    maternelle: 'Maternelle',
    primaire: 'Elémentaire',
    college: 'Collège'
  };

  // ===========================================================
  // 4. AFFICHER L'INDICE
  // ===========================================================
  document.title = `${indice.title} — Kermesse 2026`;

  container.innerHTML = `
    <div class="indice-detail__header">
      <span class="indice-detail__badge">Indice ${indice.num}</span>
      <span class="indice-detail__niveau">${niveauLabels[niveau] || niveau}</span>
    </div>
    <h1 class="indice-detail__title" id="indice-title">${indice.title}</h1>
    <p class="indice-detail__desc">${indice.fullDesc}</p>
    <div class="indice-detail__meta">
      <div class="indice-detail__meta-item">
        <span class="indice-detail__meta-label">Durée</span>
        <span class="indice-detail__meta-value">${indice.duration}</span>
      </div>
      <div class="indice-detail__meta-item">
        <span class="indice-detail__meta-label">Âge</span>
        <span class="indice-detail__meta-value">${indice.age}</span>
      </div>
    </div>
    <a href="index.html" id="back-link" class="about__link">&larr; Retour aux indices</a>
  `;

  // Gestion du retour : préserver l'onglet actif
  const backLink = document.getElementById('back-link');
  if (backLink) {
    backLink.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.setItem('activeTab', niveau);
      window.location.href = 'index.html#indices';
    });
  }

});
