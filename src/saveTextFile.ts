export function saveTextFile(content: string, fileName: string, fileType = 'text/plain') {
    const blob = new Blob(
        [ content ],
        { type: fileType }
    );
    // window.saveAs
    // depedency required
    // https://github.com/eligrey/FileSaver.js
    (<any>window).saveAs(blob, fileName);
}
