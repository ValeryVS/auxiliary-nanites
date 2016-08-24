/* tslint:disable:no-unused-variable */

import { Declensable } from './declensable';

describe('declension - склонение по падежам в зависимости от количества', () => {
    const watermelon = new Declensable({
        one: 'арбуз',
        two: 'арбуза',
        many: 'арбузов'
    });
    it('один', () => {
        const count = watermelon.declense(1);
        expect(count).toBe('арбуз');
    });
    it('пятнадцать', () => {
        const count = watermelon.declense(15);
        expect(count).toBe('арбузов');
    });
    it('двадцать', () => {
        const count = watermelon.declense(20);
        expect(count).toBe('арбузов');
    });
    it('двадцать один', () => {
        const count = watermelon.declense(21);
        expect(count).toBe('арбуз');
    });
    it('двадцать два', () => {
        const count = watermelon.declense(22);
        expect(count).toBe('арбуза');
    });
    it('двадцать три', () => {
        const count = watermelon.declense(23);
        expect(count).toBe('арбуза');
    });
    it('двадцать четыре', () => {
        const count = watermelon.declense(24);
        expect(count).toBe('арбуза');
    });
});
