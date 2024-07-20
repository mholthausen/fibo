export const adjustFontSize = (element: HTMLElement) => {
  const parent = element.parentElement;
  if (!parent) return;

  element.style.fontSize = '350px';
  let fontSize = parseInt(window.getComputedStyle(element).fontSize);

  while (
    element.scrollWidth > parent?.clientWidth ||
    element.scrollHeight > parent?.clientHeight
  ) {
    fontSize -= 5;
    element.style.fontSize = `${fontSize}px`;
    if (fontSize <= 5) break;
  }
};
