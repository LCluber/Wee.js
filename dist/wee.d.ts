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
    private _value;
    private elements;
    constructor(elementId: string, value: string | number);
    value: string | number;
    update(value: string | number): void;
    private updateDom;
}

export declare type HTMLElements = HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement | HTMLIFrameElement;
export declare class Dom {
    static scrollToBottom(HtmlElement: HTMLElements): void;
    static scrollToTop(HtmlElement: HTMLElements): void;
    static findById(id: string): HTMLElements | null;
    static findByClass(className: string): HTMLElements[] | null;
    static findByTag(tagName: string): HTMLElements[] | null;
    static showElement(element: string | HTMLElements): HTMLElements | null;
    static hideElement(element: string | HTMLElements): HTMLElements | null;
    static styleElement(element: string | HTMLElements, parameter: string | number, value: string): HTMLElements | null;
    static showOverflow(): void;
    static hideOverflow(): void;
    static getInputValue(element: string | HTMLElement): string | null;
    static clearInputValue(element: string | HTMLElement): HTMLElement | null;
    static focusOn(element: string | HTMLElements): HTMLElements | null;
    static addHTMLElement(parentElement: string | HTMLElement, childElementType: string, childElementAttributes?: HTMLParameters): HTMLElements | null;
    static clearHTMLElement(element: string | HTMLElement): HTMLElement | null;
    private static arrayFrom;
    private static checkElement;
}
export declare class File {
    static load(path: string): Promise<string>;
    static removeTrailingSlash(path: string): string;
    static getName(path: string): string;
    static getExtension(path: string): string | undefined;
    static getDirectory(path: string): string;
    static checkExtension(extension: string, validExtensions: Array<string>): boolean;
}
export declare class Img {
    static load(path: string): Promise<string>;
}
export interface HTMLParameters {
    [key: string]: string;
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






