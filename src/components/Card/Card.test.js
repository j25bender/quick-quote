import React from 'react';
import Card from './Card';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Card Component Test', () => {
  const mockHandleClick = jest.fn();
  const mockHandleFavoriteClick = jest.fn();
  const mockQuoteData = { quote: 'Students today are a pretty solemn lot. One of the really notable achievements of the twentieth century has been to make the young old before their time.', author: 'Robertson Davies', id: '65w3JLiRe5u_TKWtK5qyrweF', categories: Array(4) }

  it('Card should render quoteData correctly and match snapshot', () => {
    const wrapper = shallow(<Card key={ mockQuoteData.id } data={ mockQuoteData } handleClick={ mockHandleClick } handleFavoriteClick={ mockHandleFavoriteClick }/>);
    expect(wrapper).toMatchSnapshot();
  })
})