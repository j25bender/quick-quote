import * as action from './index';

describe('actions Tests', () => {

  it('addRandomQuote should have type ADD_RANDOM_QUOTE and payload of quote object', () => {
    const randomQuoteToDispatch = {quote: "I don't like that man. I must get to know him better.",                                      author: "Abraham Lincoln", 
                                   id: "CqkXaIf0MySABtQ1KO6GwAeF", 
                                   categories: Array(1)}
    const expectedAction = {
      type: 'ADD_RANDOM_QUOTE',
      randomQuoteToDispatch
    }
    expect(action.addRandomQuote(randomQuoteToDispatch)).toEqual(expectedAction);
  })

  it('addHomeQuote should have type ADD_HOME_QUOTE and payload of quote object', () => {
    const homeQuoteToDispatch = {quote: "I just think people overvalue argument because they like to hear themselves talk. ", author: "Iain Banks", id: "X4r3x8BIRu6ZZNcpr_49WQeF", categories: Array(1)}

    const expectedAction = {
      type: 'ADD_HOME_QUOTE',
      homeQuoteToDispatch
    }
    expect(action.addHomeQuote(homeQuoteToDispatch)).toEqual(expectedAction);
  })

  it('addCategoryQuote should have type ADD_HOME_QUOTE and payload of quote object', () => {
    const categoryQuoteToDispatch = {quote: "Although golf was originally restricted to wealthy, overweight Protestants, today it's open to anybody who owns hideous clothing.", author: "Dave Barry", id: "wpkXjtM5DgxjJIYwJyBNXweF", categories: Array(6)}
    
    const expectedAction = {
      type: 'ADD_CATEGORY_QUOTE',
      categoryQuoteToDispatch
    }
    expect(action.addCategoryQuote(categoryQuoteToDispatch)).toEqual(expectedAction);
  })
})