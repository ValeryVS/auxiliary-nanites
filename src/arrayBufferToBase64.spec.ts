/* tslint:disable:no-unused-variable */

import { arrayBufferToBase64 } from './arrayBufferToBase64';

describe('arrayBufferToBase64 - преобразование ArrayBuffer в Base64 строку', () => {
    it('успешно преобразуется в base64 (async)', (done) => {
        const blob = new Blob(
            [ 'Test file content' ],
            { type: 'text/plain' }
        );

        const reader: FileReader = new FileReader();
        reader.onload = function() {
            expect(arrayBufferToBase64(reader.result)).toBe(btoa('Test file content'));
            done();
        }
        reader.onerror = function() {
            fail(reader.error);
        }
        reader.readAsArrayBuffer(blob);
    });
});
