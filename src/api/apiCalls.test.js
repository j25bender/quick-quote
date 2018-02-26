/* eslint-disable */
import { fetchRandomQuote, fetchHomeQuote, fetchQuote } from './apiCalls';

describe('apiCalls fetch success Tests', () => {

  beforeEach( () => {
    window.fetch = jest.fn().mockImplementation( (url) => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({contents: {quote: "Hello, it's me."}})
      });
    });
  });

  it('fetchRandomQuote should fetch if status is 200', () => {
    expect(window.fetch).not.toHaveBeenCalled();
    fetchRandomQuote();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('fetchHomeQuote should fetch if status is 200', () => {
    expect(window.fetch).not.toHaveBeenCalled();
    fetchHomeQuote();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('fetchQuote should fetch if status is 200', () => {
    expect(window.fetch).not.toHaveBeenCalled();
    fetchQuote('funny');
    expect(window.fetch).toHaveBeenCalled();
  });
});

describe('apiCalls fail to fetch Tests', () => {

  beforeAll( () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 429,
    })
    );
  });

  it('fetchRandomQuote should fail fetch if status is not 200', async () => {
    expect(fetchRandomQuote()).rejects.toEqual(Error ('fetchRandomQuote failed to fetch due to: TypeError: initialRandomFetch.json is not a function'));
  });

  it('fetchHomeQuote should fail fetch if status is not 200', async () => {
    expect(fetchHomeQuote()).rejects.toEqual(Error ('fetchHomeQuote failed to fetch due to: TypeError: initialMax100Fetch.json is not a function'));
  });

  it('fetchQuote should fail fetch if status is not 200', async () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 404,
    })
    );  
    expect(fetchQuote('invalid-category')).rejects.toEqual(Error ('fetchQuote failed to fetch due to: TypeError: initialCategoriesFetch.json is not a function'));
  });
});