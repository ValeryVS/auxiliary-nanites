export function arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary: string = '';
    const bytes: Uint8Array = new Uint8Array(buffer);
    for (let i=0; i<bytes.length; i++) {
        binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
}
