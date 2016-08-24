const printFrameName = 'frame_to_print';

function getFrameForPrint(): Window {
    let frame: Window;
    frame = window.frames[name];
    if (!frame) {
        const newFrame: HTMLIFrameElement = document.createElement('iframe');
        newFrame.name = name;
        newFrame.style.display = 'none';
        document.body.appendChild(newFrame)
        frame = window.frames[name];
    }
    return frame
}

export function printText(text: string): any {
    const frame = getFrameForPrint();
    frame.document.write('<body onload=window.print()>'+text+'</body>');
    frame.document.close();
}
