
export const scrollLeft = (quotes) => { 
  console.log('hey')
  const scrollElement = document.getElementById('myDiv');
  scrollElement.scrollLeft = quotes.length * window.screen.width;
}
