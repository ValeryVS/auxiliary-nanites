/* tslint:disable:no-unused-variable */

import { capitalizeFirstLetter } from './capitalizeFirstLetter';

describe('capitalizeFirstLetter - получение строки с прописной первой буквой', () => {
    it('одно слово', () => {
        expect(capitalizeFirstLetter('слово')).toBe('Слово');
    });
    it('предложение', () => {
        expect(capitalizeFirstLetter('предложение с пробелами')).toBe('Предложение с пробелами');
    });
});
