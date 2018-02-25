
export const scrollLeft = (quotes) => { 
  const scrollElement = document.getElementById('myDiv');
  scrollElement.scrollLeft = quotes.length * window.screen.width;
}
