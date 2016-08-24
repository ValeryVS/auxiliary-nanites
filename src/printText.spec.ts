/* tslint:disable:no-unused-variable */

import { printText } from './printText';

describe('printText - печать текста через iframe', () => {
    it('функция доступна', () => {
        expect(typeof printText).toBe('function');
    });
    xit('создан iframe', () => {
        printText('Тест печати');
        expect(window.frames['frame_to_print']).toBeDefined();
        window.frames['frame_to_print'].close();
    });
});
