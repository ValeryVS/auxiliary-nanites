/* tslint:disable:no-unused-variable */

import { saveTextFile } from './saveTextFile';

describe('saveTextFile - сохранение файла', () => {
    it('window saveAs была вызвана в процессе выполнения функции', () => {
        const saveAs = jasmine.createSpy('spy');
        (<any>window).saveAs = saveAs;
        saveTextFile('Тестовый контент', 'test.txt', 'text/plain');
        expect(saveAs.calls.count()).toEqual(1);
    });
});
