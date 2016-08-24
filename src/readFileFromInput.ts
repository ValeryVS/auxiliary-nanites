import { arrayBufferToBase64 } from './arrayBufferToBase64'

interface readFileFromInputoptions {
    readAs: 'text' | 'ArrayBuffer' | 'base64'
}

export function readFileFromInput(file: File, options: readFileFromInputoptions): Promise<any> {
    return new Promise<any>( (resolve, reject) => {
        const reader: FileReader = new FileReader();
        reader.onload = function() {
            if (options.readAs === 'base64') {
                resolve(arrayBufferToBase64(reader.result));
            } else {
                resolve(reader.result);
            }
        }
        reader.onerror = function() {
            reject(reader.error);
        }
        let method: string;
        switch (options.readAs) {
            case 'text':
                method = 'readAsText';
                break;
            case 'ArrayBuffer':
            case 'base64':
                method = 'readAsArrayBuffer';
                break;
        }
        reader[method](file);
    })
}
