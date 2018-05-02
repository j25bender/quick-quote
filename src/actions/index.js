export const addRandomQuote = (randomQuote) => ({
  type: 'ADD_RANDOM_QUOTE',
  randomQuote
});

export const addCategoryQuote = (categoryQuote) => ({
  type: 'ADD_CATEGORY_QUOTE',
  categoryQuote
});

export const toggleFavorite = (favoriteQuote) => ({
  type: 'TOGGLE_FAVORITE',
  favoriteQuote
});

export const toggleLoading = (status) => ({
  type: 'TOGGLE_LOADING',
  status
});