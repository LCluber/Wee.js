/** MIT License
* 
* Copyright (c) 2011 Ludovic CLUBER 
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
export declare class Ajax {
    static method: 'GET' | 'POST';
    static async: boolean;
    static noCache: boolean;
    static call(url: string): Promise<string>;
}
export declare class Ascii {
}
export declare class Check {
    static isJSON(str: string): any;
    static isFunction(func: Function): boolean;
    static isObject(object: Function): boolean;
    static isASCII(code: string | number, extended: boolean): boolean;
    static isInteger(value: string | number): boolean;
}
export declare class Dom {
    static scrollToBottom(HtmlElement: HTMLElement): void;
    static findById(id: string): HTMLElement | HTMLInputElement | HTMLCanvasElement;
    static showById(a: string): void;
    static hideById(a: string): void;
    static showOverflow(): void;
    static hideOverflow(): void;
}
export declare class Number {
}
export declare class String {
    static ucfirst(string: string): string;
    static toASCII(code: string): number;
}




