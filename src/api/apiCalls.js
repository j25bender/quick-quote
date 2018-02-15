import { apiKey } from './apiKey';

export const fetchRandomQuote = async () => {
  try {
    const initialRandomFetch = await fetch('http://quotes.rest/quote/random', {
      method: 'GET',
      headers: {
        'X-TheySaidSo-Api-Secret': apiKey,
        'Accept': 'application/json'
      }
    })
    return initialRandomFetch.json();

  } catch(error) {
    throw new Error(`fetchRandomQuote failed to fetch due to: ${error}`)
  }
}

export const fetchQuoteCategories = async () => {
  try {
    const initialCategoriesFetch = await fetch('http://quotes.rest/quote/categories', {
      method: 'GET',
      headers: {
        'X-TheySaidSo-Api-Secret': apiKey,
        'Accept': 'application/json'
      }
    })
    return initialCategoriesFetch.json();

  } catch(error) {
    throw new Error(`fetchQuoteCategories failed to fetch due to: ${error}`)
  }
}


