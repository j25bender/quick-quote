export const addRandomQuote = (randomQuote) => ({
  type: 'ADD_RANDOM_QUOTE',
  randomQuote
});

export const addHomeQuote = (homeQuote) => ({
  type: 'ADD_HOME_QUOTE',
  homeQuote
});

export const addCategoryQuote = (categoryQuote) => ({
  type: 'ADD_CATEGORY_QUOTE',
  categoryQuote
});

export const addFavorite = (favoriteQuote) => ({
  type: 'ADD_FAVORITE',
  favoriteQuote
});

export const removeFavorite = (favToRemove) => ({
  type: 'REMOVE_FAVORITE',
  favToRemove
});
