// ===== Tabs : programme Maternelle / Primaire / Collège =====
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs__btn');
  const panels = {
    maternelle: document.getElementById('panel-maternelle'),
    primaire:   document.getElementById('panel-primaire'),
    college:    document.getElementById('panel-college'),
  };

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;

      // Update buttons
      tabs.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      // Update panels
      Object.entries(panels).forEach(([key, panel]) => {
        panel.classList.toggle('is-active', key === tab);
      });
    });
  });
});
