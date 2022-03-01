import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Counter from './Counter';

describe('Counter Component Testing', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Counter />);
    });

    test('Structure Test', () => {
        expect(wrapper.find('h1').length).toBe(1);
        expect(wrapper.find('button').length).toBe(2);
        expect(wrapper.find('.counter').length).toBe(1);
        expect(wrapper.find('.test-danger').length).toBe(0);
    });

    test('Initial Value Check', function () {
        expect(wrapper.find('.counter').text()).toBe('0');
    });

    test('Counter: renders correctly', () => {
        const tree = renderer.create(<Counter />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Simulate Initial Click on Decrement Button', () => {
        // Decrement is disabled if counter = 0
        const decrementButton = wrapper.find('#decrement-btn');
        decrementButton.simulate('click');
        expect(wrapper.find('.counter').text()).not.toBe('-1');

        decrementButton.simulate('click');
        expect(wrapper.find('.counter').text()).not.toBe('-2');

        expect(wrapper.find('.counter').text()).toBe('0');
    });

    test('Simulate Click', () => {
        // Increment
        const incrementButton = wrapper.find('#increment-btn');
        incrementButton.simulate('click');
        expect(wrapper.find('.counter').text()).toBe('1');

        incrementButton.simulate('click');
        expect(wrapper.find('.counter').text()).toBe('2');

        // Decrement
        const decrementButton = wrapper.find('#decrement-btn');
        decrementButton.simulate('click');
        expect(wrapper.find('.counter').text()).toBe('1');

        decrementButton.simulate('click');
        expect(wrapper.find('.counter').text()).toBe('0');
    });
});
