document.querySelectorAll('div.timeline.hidden-medium-screen').forEach(el => el.remove());

document.querySelectorAll('div').forEach(div => {
  const label = div.querySelector('label');
  if (label && label.textContent.trim() === 'Daily Who is Who') {
    div.remove();
  }
  if (label && label.textContent.trim() === 'Favourite documents') {
    div.remove();
  }
  if (label && label.textContent.trim() === 'Marketing photo\'s') {
    div.remove();
  }
  if (label && label.textContent.trim() === 'Energie coaches') {
    div.remove();
  }
  if (label && label.textContent.trim() === 'Next up') {
    div.remove();
  }

document.querySelectorAll('div.carousel.carousel-slider').forEach(el => {
  el.style.width = '50%';
});
  
});