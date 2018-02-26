
export const scrollLeft = (quotes) => { 
  const scrollElement = document.getElementById('div-scroll-from');

  return scrollElement.scrollLeft = quotes.length * window.screen.width;
};
