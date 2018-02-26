/* eslint-disable */
import React, { Component } from 'react';
import { Favorites, mapStateToProps, mapDispatchToProps } from './Favorites';
import Card from '../Card/Card';
import { mount } from 'enzyme';

describe('Favorites', () => {
  let wrapper;
  let mockfavorites;
  let mockQuoteData = {quote: "Retirement is the ugliest word in the language.", 
    author: "Ernest Hemingway", 
    id: "hqV6ZjgFus0xQ58WPhH5hQeF", 
    categories: Array(1)
  };
  
  beforeEach( () => {
    mockfavorites = jest.fn();
    window.fetch = jest.fn().mockImplementation( (url) => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({contents: mockQuoteData})
      });
    });
    wrapper = mount(<Favorites favorites={ [mockQuoteData] }
      toggleFavorite={ mockfavorites } /> );                    
  });

  it('should match snapshot', () => {
    expect(wrapper.find('.quote').length).toEqual(1);    
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () =>{
  const mockState = {
    favorites: 'favorites'
  };

  it('correcly grabs the favorite quote from the state tree', () => {
    const mapped = mapStateToProps(mockState);

    expect(mapped.favorites).toEqual(mockState.favorites);
  });
});

describe('mapDispatchToProps', () => {
  const mockDispatch = jest.fn();

  it('toggleFavorite should call dispatch', () => {
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.toggleFavorite();
    expect(mockDispatch).toHaveBeenCalled();
  });
});