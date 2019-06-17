import React from 'react';
import { shallow } from 'enzyme';
import Menu from '.';

describe('Menu', () => {
      let wrapper;

      beforeEach(() => {
          wrapper = shallow( <Menu />);
          });

        it('should match the snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });
});