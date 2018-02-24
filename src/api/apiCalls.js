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
    const favorite = false;

    return { quote, author, id, categories, favorite }

  } catch(error) {
    throw new Error(`fetchRandomQuote failed to fetch due to: ${error}`)
  }
} 

export const fetchHomeQuote = async () => {
  const maxLength = Math.floor( (Math.random() * 300) + 100 );
  try {
    const initialMax100Fetch = await fetch(`http://quotes.rest/quote/search.json?maxlength=${maxLength}`, {
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
    const favorite = false;

    return { quote, author, id, categories, favorite }

  } catch(error) {
    throw new Error(`fetchHomeQuote failed to fetch due to: ${error}`)
  }
}

export const fetchQuote = async (category) => {
  const maxLength = Math.floor( (Math.random() * 300) + 100 );
  try {
    const initialCategoriesFetch = await fetch(`http://quotes.rest/quote/search?category=${category}&minlength=100&maxlength=${maxLength}&private=false`, {
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
    const favorite = false;

    return { quote, author, id, categories, favorite }

  } catch(error) {
    throw new Error(`fetchQuote failed to fetch due to: ${error}`)
  }
}
