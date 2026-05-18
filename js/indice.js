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
        <a href="index.html#indices" class="about__link back-link">&larr; Retour aux indices</a>
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
        <a href="index.html#indices" class="about__link back-link">&larr; Retour aux indices</a>
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
  // 4. RENDU DU CONTENU SELON LE TYPE
  // ===========================================================
  function renderContent() {
    const type = indice.type || 'text';

    switch (type) {
      case 'image':
        return `
          <div class="indice-detail__image-wrap">
            <img src="${indice.image}" alt="${indice.title}" class="indice-detail__image" data-lightbox="${indice.image}" loading="lazy">
          </div>
          <div class="indice-detail__desc">${indice.fullDesc}</div>
          <p class="indice-detail__zoom-hint">👆 Clique sur l'image pour l'agrandir</p>
        `;

      case 'audio': {
        const hasSrc = indice.audioSrc && indice.audioSrc.trim() !== '';
        return `
          <div class="indice-detail__desc">${indice.fullDesc}</div>
          ${hasSrc ? `
            <div class="indice-detail__player">
              <audio controls class="indice-detail__audio" preload="metadata">
                <source src="${indice.audioSrc}" type="audio/mpeg">
                Ton navigateur ne supporte pas la lecture audio.
              </audio>
            </div>
          ` : ''}
        `;
      }

      case 'game': {
        const items = indice.gameItems || [];
        return `
          <div class="indice-detail__desc">${indice.fullDesc}</div>
          <div class="indice-game">
            ${items.map((item, i) => `
              <div class="indice-game__row">
                <span class="indice-game__left">${item.left}</span>
                <span class="indice-game__arrow">⟷</span>
                <span class="indice-game__right">${item.right}</span>
              </div>
            `).join('')}
          </div>
        `;
      }

      default:
        return `<div class="indice-detail__desc">${indice.fullDesc}</div>`;
    }
  }

  // ===========================================================
  // 5. AFFICHER L'INDICE
  // ===========================================================
  document.title = `${indice.title} — Kermesse 2026`;

  container.innerHTML = `
    <div class="indice-detail__header">
      <span class="indice-detail__badge">Indice ${indice.num}</span>
      <span class="indice-detail__niveau">${niveauLabels[niveau] || niveau}</span>
    </div>
    <h1 class="indice-detail__title" id="indice-title">${indice.title}</h1>
    ${renderContent()}
    <a href="index.html#indices" class="about__link back-link">&larr; Retour aux indices</a>

    <!-- Lightbox overlay -->
    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Agrandissement de l'image" hidden>
      <button class="lightbox__close" aria-label="Fermer">&times;</button>
      <img class="lightbox__img" id="lightbox-img" alt="" src="">
    </div>
  `;

  // ===========================================================
  // 6. LIGHTBOX — agrandir l'image au clic
  // ===========================================================
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightbox-img');
  const lightboxClose = lightbox.querySelector('.lightbox__close');

  // Ouvrir
  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.dataset.lightbox;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  // Fermer
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  // Gestion du retour : tous les .back-link préservent l'onglet actif
  document.querySelectorAll('.back-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.setItem('activeTab', niveau);
      window.location.href = 'index.html#indices';
    });
  });

});
