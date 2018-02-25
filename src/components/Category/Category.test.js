import React, { Component } from 'react';
import { addHomeQuote, addRandomQuote, addCategoryQuote } from '../../actions';
import { Category, mapStateToProps, mapDispatchToProps } from './Category';
import Card from '../Card/Card';
import { fetchRandomQuote, fetchHomeQuote, fetchQuote } from '../../api/apiCalls';
import { mount } from 'enzyme';

describe('Category', () => {
  let wrapper;
  let mockfetchAndDispatch;
  let mockAddCategoryQuote;
  let mockQuoteData = {quote: "Retirement is the ugliest word in the language.", 
                            author: "Ernest Hemingway", 
                            id: "hqV6ZjgFus0xQ58WPhH5hQeF", 
                            categories: Array(1)
                           };
  
  beforeEach( () => {
    mockfetchAndDispatch = jest.fn();
    mockAddCategoryQuote = jest.fn();
    window.fetch = jest.fn().mockImplementation( (url) => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({contents: mockQuoteData})
      })
    })
    wrapper = mount(<Category location={ {pathname: "/life", key: 'twms5s'} }
                                categoryQuote={ [mockQuoteData] }
                                addCategoryQuote={ mockAddCategoryQuote } />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call addCategoryQuote when Category container mounts', () => {
    expect(wrapper.instance().props.addCategoryQuote).toHaveBeenCalled();
  })
  
  it.only('should update with props.location.key do not equal nextProps.location.key', () => {
    wrapper.setProps({ location: {pathname: "/life", key: 'twms5'}});
    expect(wrapper.props().addCategoryQuote).toHaveBeenCalled()
  });

  describe('mapStateToProps', () =>{
    const mockState = {
      homeQuote: 'home quote',
      randomQuote: 'random quote',
      categoryQuote: 'category quote',
      favorites: 'favorites'
    }
    
    it('correctly grabs the home quote from the state tree', () => {
      const mapped = mapStateToProps(mockState);
      expect(mapped.homeQuote).toEqual(mockState.homeQuote);
    })

    it('correctly grabs the rand quote from the state tree', () => {
      const mapped = mapStateToProps(mockState);
      expect(mapped.randomQuote).toEqual(mockState.randomQuote);
    })

    it('correcly grabs the category quote from the state tree', () => {
      const mapped = mapStateToProps(mockState);
      expect(mapped.categoryQuote).toEqual(mockState.categoryQuote);
    })

    it('correctly grabs the favorites from the state tree', () => {
      const mapped = mapStateToProps(mockState);
      expect(mapped.favorites).toEqual(mockState.favorites);
    })
  })

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    it('addHomeQoute should call dispatch', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.addHomeQuote();
      expect(mockDispatch).toHaveBeenCalled();
    })

    it('addRandomQuote should call dispatch', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.addRandomQuote();
      expect(mockDispatch).toHaveBeenCalled();
    })

    it('addCategoryQuote should call dispatch', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.addCategoryQuote();
      expect(mockDispatch).toHaveBeenCalled();
    })

    it('toggleFavorite should call dispatch', () => {
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.toggleFavorite();
      expect(mockDispatch).toHaveBeenCalled();
    })
  })
})
