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
    const randomQuoteJson = await initialRandomFetch.json();
    const quote = randomQuoteJson.contents.quote;
    const author = randomQuoteJson.contents.author;
    const id = randomQuoteJson.contents.id;
    const categories = randomQuoteJson.contents.categories;

    return { quote, author, id, categories }

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

export const fetchQuoteOfTheDay = async () => {
  try {
    const initialQuoteOfDayFetch = await fetch('http://quotes.rest/qod.json', {
      method: 'GET',
      headers: {
        'X-TheySaidSo-Api-Secret': apiKey,
        'Accept': 'application/json'
      }
    })
    return initialQuoteOfDayFetch.json();

  } catch(error) {
    throw new Error(`fetchQuoteOfTheDay failed to fetch due to: ${error}`)
  }
}
