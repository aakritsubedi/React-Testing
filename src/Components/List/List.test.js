import React from 'react';
import { mount } from 'enzyme';

import List from './List';

describe('List Testing', () => {
  const listItems = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Another Task' },
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<List listItems={listItems} />);
  });

  test('Structure Test', () => {
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(listItems.length);
  });

  test('List Wrapper Test', () => {
    expect(wrapper.find('li').children().length).toBe(listItems.length);
  });

  test('List Items Test', () => {
    wrapper.find('li').forEach((node, index) => {
      expect(node.text()).toBe(listItems[index].title);
    });
  });

  test('Props Check', () => {
    expect(wrapper.props().listItems).toEqual(listItems);
  });
});
