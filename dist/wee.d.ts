/** MIT License
* 
* Copyright (c) 2018 Ludovic CLUBER 
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* http://weejs.lcluber.com
*/
export declare class Ascii {
}
export declare class Bind {
    data: string | number;
    element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement;
    constructor(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement, data: string);
    handleEvent(event: Event): void;
    change(value: string | number): void;
}
export declare class Dom {
    static scrollToBottom(HtmlElement: HTMLElement): void;
    static findById(id: string): HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement;
    static showById(a: string): void;
    static hideById(a: string): void;
    static showOverflow(): void;
    static hideOverflow(): void;
    static getInputValue(a: string): string;
    static clearInputValue(a: string): void;
    static focusOn(a: string): void;
    static addHTMLElement(parentElement: HTMLElement, childElementType: string, childElementAttributes?: Object): HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement;
}
export declare class File {
    static load(path: string): Promise<string>;
    static removeTrailingSlash(path: string): string;
    static getName(path: string): string;
    static getExtension(path: string): string;
    static getDirectory(path: string): string;
    static checkExtension(extension: string, validExtensions: Array<string>): boolean;
}
export declare class Img {
    static load(path: string): Promise<string>;
}
export declare class Number {
}
export declare class Sound {
    static load(path: string): Promise<string>;
}
export declare class String {
    static ucfirst(string: string): string;
    static toASCII(code: string): number;
}






