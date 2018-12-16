// Core
import React from 'react';
import { mount } from 'enzyme';
import { Composer } from './';

const props = {
    _createPost: jest.fn(),
};

const enter =  {key: 'Enter'};

const comment = 'Merry Christmas!';

const initialState = {
    comment: '',
};

const updatedState = {
    comment,
};

const result = mount(<Composer { ...props } />);

const _submitCommentSpy = jest.spyOn(result.instance(), '_submitComment');
const _handleFormSubmitSpy = jest.spyOn(result.instance(), '_handleFormSubmit');
const _updateCommentSpy = jest.spyOn(result.instance(), '_updateComment');
const _submitOnEnterSpy = jest.spyOn(result.instance(), '_submitOnEnter');

describe('composer component', () => {
    test('should have one <section> element', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('should have one <form> element', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('should have one <textarea> element', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('should have one <img> element', () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test('should have one <input> element', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('should have valid initial state', () => {
        expect(result.state()).toEqual(initialState);
    });

    test('textarea should be empty initailly', () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test('should respond to state change properly', () => {
        result.setState({
            comment,
        });

        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);

        result.setState({
            comment: '',
        });

        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('should handle textarea "change" event', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: comment,
            },
        });
        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);
    });

    test('should handle form submit event', () => {
        result.find('form').simulate('submit');

        expect(result.find('textarea').text()).toBe('');
    });

    test('_createPost prop should be invoked once after form submission', () => {
        expect(props._createPost).toHaveBeenCalledTimes(1);
    });

    test('_submitComment and _handleFormSubmit and _updateComment class methods should be invoked once after form submission', () => {
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
        expect(_handleFormSubmitSpy).toHaveBeenCalledTimes(1);
        expect(_updateCommentSpy).toHaveBeenCalledTimes(1);
    });

    test('should handle form submit event on enter', () => {
        expect(enter).toBeTruthy();

        result.find('form').simulate('submit',  {key: 'Enter'});
    });
});

