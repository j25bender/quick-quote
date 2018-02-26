/* eslint-disable */
import React, { Component } from 'react';
import { addHomeQuote, addRandomQuote, addCategoryQuote, toggleFavorite } from '../../actions';
import { Category, mapStateToProps, mapDispatchToProps, fetchAndDispatch } from './Category';
import Card from '../Card/Card';
import { fetchRandomQuote, fetchHomeQuote, fetchQuote } from '../../api/apiCalls';
import { mount } from 'enzyme';

describe('Category', () => {
  let wrapper;
  let mockfetchAndDispatch;
  let mockAddCategoryQuote;
  let mockFetchQuote;
  let mockQuoteData = {quote: "Retirement is the ugliest word in the language.", 
    author: "Ernest Hemingway", 
    id: "hqV6ZjgFus0xQ58WPhH5hQeF", 
    categories: Array(1)
  };
  
  beforeEach( () => {
    mockfetchAndDispatch = jest.fn();
    mockAddCategoryQuote = jest.fn();
    mockFetchQuote = jest.fn();
    window.fetch = jest.fn().mockImplementation( (url) => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({contents: mockQuoteData})
      });
    });
    wrapper = mount(<Category location={ {pathname: "/life", key: 'twms5s'} }
      categoryQuotes={ [mockQuoteData] }
      addCategoryQuote={ mockAddCategoryQuote }
      fetchQuote={ mockFetchQuote }
      fetchAndDispatch={ mockfetchAndDispatch } />);
  });

  it('should match snapshot', () => {
    expect(wrapper.find('.quote').length).toEqual(1);    
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addCategoryQuote when Category container mounts', () => {
    expect(wrapper.instance().props.addCategoryQuote).toHaveBeenCalled();
  });
  
  it('should update with props.location.key do not equal nextProps.location.key', () => {
    wrapper.setProps({ location: {pathname: "/life", key: 'twms5'}});
    expect(wrapper.props().addCategoryQuote).toHaveBeenCalled();
  });

  it('handleClick should call fetchQuote', () => {
    wrapper.instance().handleClick(['love', 'funny']);
    expect(window.fetch).toHaveBeenCalled();
  });

  describe('mapStateToProps', () =>{
    const mockState = {
      homeQuotes: 'home quote',
      randomQuotes: 'random quote',
      categoryQuotes: 'category quote',
    };
    
    it('correctly grabs the home quote from the state tree', () => {
      const mapped = mapStateToProps(mockState);

      expect(mapped.homeQuotes).toEqual(mockState.homeQuotes);
    });

    it('correctly grabs the rand quote from the state tree', () => {
      const mapped = mapStateToProps(mockState);

      expect(mapped.randomQuotes).toEqual(mockState.randomQuotes);
    });

    it('correcly grabs the category quote from the state tree', () => {
      const mapped = mapStateToProps(mockState);

      expect(mapped.categoryQuotes).toEqual(mockState.categoryQuotes);
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    it('addHomeQoute should call dispatch', () => {
      const mapped = mapDispatchToProps(mockDispatch);

      mapped.addHomeQuote();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('addRandomQuote should call dispatch', () => {
      const mapped = mapDispatchToProps(mockDispatch);

      mapped.addRandomQuote();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('addCategoryQuote should call dispatch', () => {
      const mapped = mapDispatchToProps(mockDispatch);

      mapped.addCategoryQuote();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('toggleFavorite should call dispatch', () => {
      const mapped = mapDispatchToProps(mockDispatch);

      mapped.toggleFavorite();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
