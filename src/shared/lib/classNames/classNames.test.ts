import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });

    test('with mods class', () => {
        expect(classNames('som', { tu: true, fa: false }, ['class1']))
            .toBe('som class1 tu');
    });

    test('with undefined', () => {
        expect(classNames('som', { tu: undefined }))
            .toBe('som');
    });
});
