import React, { Component } from 'react';
import { addHomeQuote, addRandomQuote, addCategoryQuote } from '../../actions';
import { Category, mapStateToProps, mapDispatchToProps } from './Category';
import Card from '../Card/Card';
import { fetchRandomQuote, fetchHomeQuote, fetchQuote } from '../../api/apiCalls';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const fakeStore = (state) => {
  return {
    dispatch: () => {},
    getState: () => {
      return {...state}
    }
  }
}

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
  wrapper = shallow(<Category location={ {pathname: "/life", key: 'twms5s'} }
                              categoryQuote={ [mockQuoteData] }
                              addCategoryQuote={ mockAddCategoryQuote } />)
})

describe('Category Container Tests', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call addCategoryQuote when Category container mounts', () => {
    expect(wrapper.instance().props.addCategoryQuote).toHaveBeenCalled();
  })
  
  it('should update with props.location.key do not equal nextProps.location.key', () => {
    wrapper.setProps({ location: {pathname: "/life", key: 'twms5s'}});
    wrapper.setProps({ nextProps: {location: {pathname: "/life", key: 'twms5s'} }});
    expect(wrapper.instance().props.addCategoryQuote).toHaveBeenCalled()
    wrapper.setProps({ location: {pathname: "/life", key: 'twms5s'}});
    wrapper.setProps({ nextProps: {location: {pathname: "/life", key: 'manana'} }});
    expect(wrapper.instance().props.addCategoryQuote).not.toHaveBeenCalled()
  })
})
