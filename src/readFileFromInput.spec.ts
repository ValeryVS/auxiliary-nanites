/* tslint:disable:no-unused-variable */

import { readFileFromInput } from './readFileFromInput';

describe('readFileFromInput - чтение содержимого файла', () => {
    it('успешно преобразуется в base64 (async)', (done) => {
        // Используем Blob вместо файла из html input
        const blob = new Blob(
            [ 'Test file content' ],
            { type: 'text/plain' }
        );
        readFileFromInput(<File>blob, {
            readAs: 'text'
        })
        .then( (result) => {
            expect(result).toBe('Test file content');
            done();
        })
        .catch( (error) => {
            fail(error);
        })
    });
});
