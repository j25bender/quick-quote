// import React, { Component } from 'react';
// import * as action from '../../actions';
// import { Category, mapStateToProps, mapDispatchToProps } from './Category';
// import Card from '../Card/Card';
// import { fetchRandomQuote, fetchHomeQuote, fetchQuoteCategories } from '../../api/apiCalls';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

// describe('Category Container Tests', () => {

// })























// import React from 'react';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
// import Category from './Category';
// import Card from '../Card/Card';
// import { fetchRandomQuote, fetchHomeQuote, fetchQuoteCategories } from '../../api/apiCalls'
// import { configure, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
// const mockStore = configureMockStore()({ homeQuote: [],
//                                            randomQuote: [],
//                                            categoryQuote: []
//                                          });
// const setup = () => {
//   const props = {
//     id: 12345,
//     mockData: {quote: "The unexamined life is not worth living.", author: "Socrates", id: 12345, categories: Array(1)},
//     mockHandleClick: jest.fn(),
//     location: {pathname: "philosophy"}
//   }

//   const wrapper = mount(
//     <Provider store={ mockStore }>
//       <Category {...props} />
//     </Provider>
//   )

//   const Container = wrapper.find(Category);
//   return {
//     props,
//     Container
//   }

//   window.fetch = jest.fn().mockImplementation( (url) => {
//     return Promise.resolve({
//       status: 200,
//       json: () => Promise.resolve({contents: props.mockData})
//     })
//   })
// }

// describe('Category Container Tests', () => {

//   it('should match snapshot', () => {
//     // const wrapper = mount(<Category store={ mockStore }/>);
//     const fetchQuoteCategories = jest.fn();
//     const { Container } = setup();
//     expect(Container).toMatchSnapshot();
//   })
// })