function displayNumber(number) {
  const displayElement = document.getElementById('number-display');
  displayElement.innerText = number;
  adjustFontSize(displayElement);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function adjustFontSize(element) {
  const parent = element.parentElement;
  element.style.fontSize = '350px';
  let fontSize = parseInt(window.getComputedStyle(element).fontSize);

  while (
    element.scrollWidth > parent.clientWidth ||
    element.scrollHeight > parent.clientHeight
  ) {
    fontSize -= 5;
    element.style.fontSize = `${fontSize}px`;
    if (fontSize <= 5) break;
  }
}

window.addEventListener('resize', () => {
  const displayElement = document.getElementById('number-display');
  adjustFontSize(displayElement);
});
