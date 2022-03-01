import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

describe('Button Testing', () => {
    let testState = null;
    const dummyAction = () => {
        testState = 'Test State';
    };

    let disableButton, activeButton;
    beforeEach(() => {
        disableButton = mount(<Button label="Test Button" action={dummyAction} disabled={true} />);
        activeButton = mount(<Button label="Test Button" action={dummyAction} disabled={false} />);
    });

    test('Structure Test', () => {
        expect(disableButton.find('button').length).toBe(1);
    });

    test('Prop Test', () => {
        expect(disableButton.props().label).toBe('Test Button');
        expect(disableButton.props().action).toBe(dummyAction);
        expect(disableButton.props().disabled).toBe(true);

        expect(activeButton.props().disabled).toBe(false);
    });

    test('Style Test', () => {
        expect(disableButton.find('button').hasClass('btn-disabled')).toBe(true);
        expect(activeButton.find('button').hasClass('btn-disabled')).toBe(false);
    });

    test('Render Click Event', () => {
        disableButton.find('button').simulate('click');
        expect(testState).not.toBe('Test State');

        activeButton.find('button').simulate('click');
        expect(testState).toEqual('Test State');
    });
});
