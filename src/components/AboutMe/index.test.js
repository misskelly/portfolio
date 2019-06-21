import React from 'react';
import { shallow } from 'enzyme';
import { AboutMe } from '.';

describe('AboutMe', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AboutMe />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
