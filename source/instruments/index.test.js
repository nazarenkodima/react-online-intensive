//Core
import { sum, delay, getUniqueID, getFullApiUrl } from './';

describe('instruments', () => {
    test('sum function should be a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });

    test('sum function should throw error, when called with non-number type as second argument', () => {
        expect(() => sum(2, 'hello')).toThrow();
    });

    test('sum function should throw error, when called with non-number type as first argument', () => {
        expect(() => sum('hello', 2)).toThrow();
    });

    test('sum function shoudld return an addition of two arguments passed', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(1, 8)).toMatchInlineSnapshot('9');
    });

    test('delay function should retunr a resolved promise', async () => {
        await expect(delay()).resolves.toBeUndefined();
    });


    test('getUniqueID function should be a function', () => {
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test('getUniqueID  should throw error, when called with non-number type as an argument', () => {
        expect(() => sum('hello')).toThrow();
    });

    test('getUniqueID  should produce a string of a desired given length', () => {
        expect(typeof getUniqueID()).toBe('string');
        expect(getUniqueID(5)).toHaveLength(5);
        expect(getUniqueID(8)).toHaveLength(8);
    });

    test('getFullApiUrl function should be a function', () => {
        expect(getFullApiUrl).toBeInstanceOf(Function);
    });

    test('getFullApiUrl should throw, when called with non-string type as a first argument', () => {
        expect(() => getFullApiUrl(1, 'ok')).toThrow();
    });

    test('getFullApiUrl should throw, when called with non-string type as a second argument', () => {
        expect(() => getFullApiUrl('ok', 1)).toThrow();
    });
});
