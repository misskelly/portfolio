import React from 'react';
import { shallow } from 'enzyme';
import { Projects, mapStateToProps } from '.';

describe('Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Projects />);
    });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});