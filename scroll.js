// Pour chaque section, on crée un slider pour contrôler le scroll
document.querySelectorAll('.team-section').forEach(section => {
  const track = section.querySelector('.scroll-track');

  // Créer le slider
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = 0;
  slider.max = track.scrollWidth - track.clientWidth;
  slider.value = 0;
  slider.className = 'scroll-slider';
  section.appendChild(slider);

  // Scroll lorsque le slider change
  slider.addEventListener('input', () => {
    track.scrollLeft = slider.value;
  });

  // Mettre à jour le slider si l'utilisateur scroll avec la souris
  track.addEventListener('scroll', () => {
    slider.value = track.scrollLeft;
  });
});