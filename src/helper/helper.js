
export const scrollLeft = (quotes) => { 
  const scrollElement = document.getElementById('div-scroll-from');

  return scrollElement.scrollTo({
    left: quotes.length * window.screen.width,
    behavior: 'smooth'
  });
};
