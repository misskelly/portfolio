import React from 'react';
import { shallow } from 'enzyme';
import { Contact, mapStateToProps } from '.';

describe('Contact', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Contact />);
    });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});