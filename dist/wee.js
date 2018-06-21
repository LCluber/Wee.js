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

class Check {
    static isJSON(str) {
        let json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
        try {
            json = JSON.parse(str);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return json;
    }
    static isFunction(func) {
        let getType = {};
        return func && getType.toString.call(func) === '[object Function]';
    }
    static isObject(object) {
        return (object !== null && (this.isFunction(object) || typeof object === 'object'));
    }
    static isASCII(code, extended) {
        return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
    }
    static isInteger(value) {
        return (value === parseInt(value, 10));
    }
}

class Dom {
    static scrollToBottom(HtmlElement) {
        HtmlElement.scrollTop = HtmlElement.scrollHeight;
    }
    static findById(id) {
        return document.getElementById(id);
    }
    static showById(a) {
        this.findById(a).style.display = 'block';
    }
    static hideById(a) {
        this.findById(a).style.display = 'none';
    }
    static showOverflow() {
        document.body.style.overflow = 'visible';
    }
    static hideOverflow() {
        document.body.style.overflow = 'hidden';
    }
    static getInputValue(a) {
        return this.findById(a).value;
    }
    static clearInputValue(a) {
        this.findById(a).value = '';
    }
    static focusOn(a) {
        this.findById(a).focus();
    }
    static addHTMLElement(parentElement, childElementType, childElementOptions) {
        let newElement = document.createElement(childElementType);
        if (childElementOptions !== undefined) {
            Object.keys(childElementOptions).forEach(key => {
                if (key === 'content') {
                    newElement.textContent = childElementOptions[key];
                }
                else {
                    newElement.setAttribute(key, childElementOptions[key]);
                }
            });
        }
        parentElement.appendChild(newElement);
        return newElement;
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

class Ajax {
    static call(url) {
        return new Promise((resolve, reject) => {
            let http = new XMLHttpRequest();
            if (this.noCache) {
                url += '?cache=' + (new Date()).getTime();
            }
            http.open(this.method, url, this.async);
            http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            http.onreadystatechange = () => {
                if (http.readyState == 4) {
                    if (http.status == 200) {
                        console.log('xhr done successfully (' + url + ')');
                        resolve(http.responseText);
                    }
                    else {
                        console.log('error', 'xhr failed (' + url + ')');
                        reject(http.status);
                    }
                }
            };
            console.log('xhr processing starting (' + url + ')');
            http.send();
        });
    }
}
Ajax.method = 'GET';
Ajax.async = true;
Ajax.noCache = false;

class File {
    static load(path) {
        return Ajax.call(path);
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
            console.log('xhr processing starting (' + path + ')');
            img.addEventListener('load', () => {
                console.log('xhr done successfully (' + path + ')');
                resolve(img);
            });
            img.addEventListener('error', () => {
                console.log('error', 'xhr failed (' + path + ')');
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
            console.log('xhr processing starting (' + path + ')');
            snd.addEventListener('canplaythrough', () => {
                console.log('xhr done successfully (' + path + ')');
                resolve(snd);
            }, false);
            snd.addEventListener('canplay', () => {
                console.log('xhr done successfully (' + path + ')');
                resolve(snd);
            }, false);
            snd.addEventListener('error', () => {
                console.log('error', 'xhr failed (' + path + ')');
                reject(new Error('xhr failed (' + path + ')'));
            }, false);
        });
    }
}

export { Check, Dom, Bind, String, File, Ajax, Img, Sound };
