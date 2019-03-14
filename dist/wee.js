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

import { Is } from '@lcluber/chjs';
import { HTTP } from '@lcluber/aiasjs';
import { Logger } from '@lcluber/mouettejs';

class Dom {
    static scrollToBottom(HtmlElement) {
        HtmlElement.scrollTop = HtmlElement.scrollHeight;
    }
    static scrollToTop(HtmlElement) {
        HtmlElement.scrollTop = 0;
    }
    static findById(id) {
        return document.getElementById(id);
    }
    static findByClass(className) {
        return this.arrayFrom(document.getElementsByClassName(className));
    }
    static findByTag(tagName) {
        return this.arrayFrom(document.getElementsByTagName(tagName));
    }
    static showElement(element) {
        return this.styleElement(element, 'display', 'block');
    }
    static hideElement(element) {
        return this.styleElement(element, 'display', 'none');
    }
    static styleElement(element, parameter, value) {
        element = this.checkElement(element);
        if (element) {
            element.style[parameter] = value;
        }
        return element;
    }
    static showOverflow() {
        document.body.style.overflow = 'visible';
    }
    static hideOverflow() {
        document.body.style.overflow = 'hidden';
    }
    static getInputValue(element) {
        element = this.checkElement(element);
        if (element) {
            return element.value;
        }
        return null;
    }
    static clearInputValue(element) {
        element = this.checkElement(element);
        if (element) {
            element.value = '';
        }
        return element;
    }
    static focusOn(element) {
        element = this.checkElement(element);
        if (element) {
            element.focus();
        }
        return element;
    }
    static addHTMLElement(parentElement, childElementType, childElementAttributes) {
        parentElement = this.checkElement(parentElement);
        let newElement = document.createElement(childElementType);
        if (childElementAttributes) {
            Object.keys(childElementAttributes).forEach(key => {
                if (key === 'textContent' || key === 'innerHTML') {
                    newElement[key] = childElementAttributes[key];
                }
                else {
                    newElement.setAttribute(key, childElementAttributes[key]);
                }
            });
        }
        parentElement.appendChild(newElement);
        return newElement;
    }
    static clearHTMLElement(element) {
        element = this.checkElement(element);
        if (element) {
            element.innerHTML = '';
        }
        return element;
    }
    static arrayFrom(HTMLCollection) {
        const elements = [];
        for (let i = 0; i < HTMLCollection.length; i++) {
            elements.push(HTMLCollection[i]);
        }
        return elements;
    }
    static checkElement(element) {
        if (Is.string(element)) {
            element = this.findById(element);
        }
        return element;
    }
}

class Bind {
    constructor(element, data) {
        this.data = data;
        this.element = element;
        this.element.value = data;
        this.element.addEventListener('change', this, false);
    }
    handleEvent(event) {
        switch (event.type) {
            case 'change': this.change(this.element.value);
        }
    }
    change(value) {
        this.data = value;
        this.element.value = value;
    }
}

class String {
    static ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    static toASCII(code) {
        return code.charCodeAt(0);
    }
}

class File {
    static load(path) {
        return HTTP.get(path);
    }
    static removeTrailingSlash(path) {
        return path.replace(/\/+$/, '');
    }
    static getName(path) {
        return path.replace(/^.*[\\\/]/, '');
    }
    static getExtension(path) {
        return path.split('.').pop();
    }
    static getDirectory(path) {
        return path.replace(/[^\\\/]*$/, '');
    }
    static checkExtension(extension, validExtensions) {
        for (let validExtension of validExtensions) {
            if (extension === validExtension) {
                return true;
            }
        }
        return false;
    }
}

class Img {
    static load(path) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = path;
            img.name = File.getName(path);
            Logger.info('xhr processing starting (' + path + ')');
            img.addEventListener('load', () => {
                Logger.info('xhr done successfully (' + path + ')');
                resolve(img);
            });
            img.addEventListener('error', () => {
                Logger.error('xhr failed (' + path + ')');
                reject(new Error('xhr failed (' + path + ')'));
            });
        });
    }
}

class Sound {
    static load(path) {
        return new Promise((resolve, reject) => {
            let snd = new Audio();
            snd.src = path;
            Logger.info('xhr processing starting (' + path + ')');
            snd.addEventListener('canplaythrough', () => {
                Logger.info('xhr done successfully (' + path + ')');
                resolve(snd);
            }, false);
            snd.addEventListener('canplay', () => {
                Logger.info('xhr done successfully (' + path + ')');
                resolve(snd);
            }, false);
            snd.addEventListener('error', () => {
                Logger.error('xhr failed (' + path + ')');
                reject(new Error('xhr failed (' + path + ')'));
            }, false);
        });
    }
}

export { Dom, Bind, String, File, Img, Sound };
