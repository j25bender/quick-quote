import * as action from './index';

describe('actions Tests', () => {

  it('addRandomQuote should have type ADD_RANDOM_QUOTE', () => {
    const randomQuote = {quote: "Bazinga!", 
      author: "Abraham Lincoln", 
      id: "CqkXaIf0MySABtQ1KO6GwAeF", 
      categories: Array(1)};
    const expectedAction = {
      type: 'ADD_RANDOM_QUOTE',
      randomQuote
    };

    expect(action.addRandomQuote(randomQuote)).toEqual(expectedAction);
  });

  it('addCategoryQuote should have type ADD_HOME_QUOTE', () => {
    const categoryQuote = {quote: "Although golf ...", 
      author: "Dave Barry", 
      id: "wpkXjtM5DgxjJIYwJyBNXweF", 
      categories: Array(6)};
    
    const expectedAction = {
      type: 'ADD_CATEGORY_QUOTE',
      categoryQuote
    };

    expect(action.addCategoryQuote(categoryQuote)).toEqual(expectedAction);
  });

  it('toggleFavorite should have type ADD_HOME_QUOTE', () => {
    const favoriteQuote = {quote: "Although golf ...", 
      author: "Dave Barry", 
      id: "wpkXjtM5DgxjJIYwJyBNXweF", 
      categories: Array(6),
      favorite: false};
    
    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      favoriteQuote
    };

    expect(action.toggleFavorite(favoriteQuote)).toEqual(expectedAction);
  });
});