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

export const fetchHomeQuote = async () => {
  try {
    const initialMax100Fetch = await fetch('http://quotes.rest/quote/search.json?maxlength=100', {
      method: 'GET',
      headers: {
        'X-TheySaidSo-Api-Secret': apiKey,
        'Accept': 'application/json'
      }
    })
    const max100Json = await initialMax100Fetch.json();
    const quote = max100Json.contents.quote;
    const author = max100Json.contents.author;
    const id = max100Json.contents.id;
    const categories = max100Json.contents.categories;

    return { quote, author, id, categories }

  } catch(error) {
    throw new Error(`fetchHomeQuote failed to fetch due to: ${error}`)
  }
}

export const fetchQuoteCategories = async (category) => {
  try {
    const initialCategoriesFetch = await fetch(`http://quotes.rest/quote/search?category=${category}&minlength=100&maxlength=300&private=false`, {
      method: 'GET',
      headers: {
        'X-TheySaidSo-Api-Secret': apiKey,
        'Accept': 'application/json'
      }
    })
    const categoryQuoteJson = await initialCategoriesFetch.json();
    const quote = categoryQuoteJson.contents.quote;
    const author = categoryQuoteJson.contents.author;
    const id = categoryQuoteJson.contents.id;
    const categories = categoryQuoteJson.contents.categories;

    return { quote, author, id, categories }

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
