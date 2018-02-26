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

export const toggleFavorite = (favoriteQuote) => ({
  type: 'TOGGLE_FAVORITE',
  favoriteQuote
});

export const renderErrorMessage = (error) => ({
  type: 'RENDER_ERROR_MESSAGE',
  error
});
