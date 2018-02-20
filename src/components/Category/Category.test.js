import React from 'react';
import Category from './Category';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Category Container Tests', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(<Category />);
    expect(wrapper).toMatchSnapshot();
  })
})