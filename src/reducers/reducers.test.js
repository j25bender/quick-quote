import { combineReducers, createStore } from 'redux';
import rootReducer from './index';
import { randomQuoteReducer } from './randomQuoteReducer';
import { homeQuoteReducer } from './homeQuoteReducer';
import { categoryQuoteReducer } from './categoryQuoteReducer';

describe('Reducers Tests', () => {
  const rootReducer = combineReducers({ randomQuoteReducer, 
                                        homeQuoteReducer, 
                                        categoryQuoteReducer 
                                      });
  const mockQuoteData = {quote: "Retirement is the ugliest word in the language.", 
                          author: "Ernest Hemingway", 
                          id: "hqV6ZjgFus0xQ58WPhH5hQeF", 
                          categories: Array(1)
                         };
  let store;
  let expectedStore;

  beforeEach( () => {
    store = createStore(rootReducer);
    expectedStore = { randomQuoteReducer: [], 
                      homeQuoteReducer: [], 
                      categoryQuoteReducer: []
                     }
  });

  it('categoryQuoteReducer should default to return empty array', () => {
    expect(store.getState().randomQuoteReducer).toEqual(randomQuoteReducer( [], {} ));
    expect(randomQuoteReducer( undefined, {})).toEqual([]);

    expect(store.getState().homeQuoteReducer).toEqual(homeQuoteReducer( [], {} ));
    expect(homeQuoteReducer( undefined, {})).toEqual([]);

    expect(store.getState().categoryQuoteReducer).toEqual(categoryQuoteReducer( [], {} ));
    expect(categoryQuoteReducer( undefined, {})).toEqual([]);
  });

  it('action type ADD_RANDOM_QUOTE should cause randomQuoteReducer to update store', () => {
    const randomQuoteAction = { type: 'ADD_RANDOM_QUOTE', randomQuote: mockQuoteData }
    store.dispatch(randomQuoteAction);
    expect(store.getState().randomQuoteReducer).toEqual(randomQuoteReducer([], randomQuoteAction));
    expect(randomQuoteReducer( [], randomQuoteAction)).toEqual([mockQuoteData]);
  });

  it('action type ADD_HOME_QUOTE should cause homeQuoteReducer to update store', () => {
    const homeQuoteAction = { type: 'ADD_HOME_QUOTE', homeQuote: mockQuoteData }
    store.dispatch(homeQuoteAction);
    expect(store.getState().homeQuoteReducer).toEqual(homeQuoteReducer([], homeQuoteAction));
    expect(homeQuoteReducer( [], homeQuoteAction)).toEqual([mockQuoteData]);
  });

  it('action type ADD_CATEGORY_QUOTE should cause categoryQuoteReducer to update store', () => {
    const categoryQuoteAction = { type: 'ADD_CATEGORY_QUOTE', categoryQuote: mockQuoteData }
    store.dispatch(categoryQuoteAction);
    expect(store.getState().categoryQuoteReducer).toEqual(categoryQuoteReducer([], categoryQuoteAction));
    expect(categoryQuoteReducer( [], categoryQuoteAction)).toEqual([mockQuoteData]);
  });
})

