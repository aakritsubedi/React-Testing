import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import Header from './Header';

const setUp = (props = {}) => {
  const wrapper = shallow(<Header {...props} />);

  return wrapper;
};

// Checking PropTypes
const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

  return propsErr;
};

describe('Header Component Test', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      title: 'Title',
    };
    wrapper = setUp(props);
  });

  test('Structure Test', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(`[data-test='header']`).length).toEqual(1);
    expect(wrapper.find(`[data-test='header'] span`).length).toEqual(2);

    expect(wrapper.find(`[data-test='title']`).length).toEqual(1);
    expect(wrapper.find(`[data-test='symbol']`).length).toEqual(1);
  });

  test('Checking PropTypes', () => {
    const expectedProps = {
      title: 'Example Title',
    };

    const propsError = checkProps(Header, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
