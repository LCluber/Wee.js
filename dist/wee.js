/** MIT License
* 
* Copyright (c) 2015 Ludovic CLUBER 
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
* https://github.com/LCluber/Wee.js
*/

import { isArray, isHtmlElement, isHtmlEventAttribute, isString } from '@lcluber/chjs';

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
        return this.styleElement(element, "display", "block");
    }
    static hideElement(element) {
        return this.styleElement(element, "display", "none");
    }
    static styleElement(element, parameter, value) {
        const htmlelement = this.checkElement(element);
        if (htmlelement) {
            htmlelement.style[parameter] = value;
        }
        return htmlelement;
    }
    static showOverflow() {
        document.body.style.overflow = "visible";
    }
    static hideOverflow() {
        document.body.style.overflow = "hidden";
    }
    static getInputValue(element) {
        const htmlelement = this.checkElement(element);
        if (htmlelement) {
            return htmlelement.value;
        }
        return null;
    }
    static clearInputValue(element) {
        const htmlelement = this.checkElement(element);
        if (htmlelement) {
            htmlelement.value = "";
        }
        return htmlelement;
    }
    static focusOn(element) {
        const htmlelement = this.checkElement(element);
        if (htmlelement) {
            htmlelement.focus();
        }
        return htmlelement;
    }
    static addHTMLElement(parentElement, childElementType, childElementAttributes) {
        const parentHtmlElement = this.checkElement(parentElement);
        if (parentHtmlElement) {
            let newElement = document.createElement(childElementType);
            if (childElementAttributes) {
                Object.keys(childElementAttributes).forEach(key => {
                    if (key === "textContent" ||
                        key === "innerHTML" ||
                        isHtmlEventAttribute(key)) {
                        newElement[key] = childElementAttributes[key];
                    }
                    else {
                        newElement.setAttribute(key, childElementAttributes[key]);
                    }
                });
            }
            parentHtmlElement.appendChild(newElement);
            return newElement;
        }
        return null;
    }
    static clearHTMLElement(element) {
        const htmlelement = this.checkElement(element);
        if (htmlelement) {
            htmlelement.innerHTML = "";
        }
        return htmlelement;
    }
    static arrayFrom(htmlCollection) {
        const elements = [];
        for (let i = 0; i < htmlCollection.length; i++) {
            elements.push(htmlCollection[i]);
        }
        return elements;
    }
    static checkElement(element) {
        if (isString(element)) {
            return this.findById(element);
        }
        return element;
    }
}

class Binding {
    constructor(element, property, value) {
        this._value = "";
        this.elements = this.getElements(element);
        this.property = [];
        this.lastProperty = "";
        if (property) {
            this.property = property.split(".");
            this.lastProperty = this.property[this.property.length - 1];
            this.addPropertyToElement();
        }
        this.value = value;
    }
    set value(value) {
        this._value = value;
        this.updateDom();
    }
    get value() {
        return this._value;
    }
    addPropertyToElement() {
        if (this.elements) {
            for (let j = 0; j < this.elements.length; j++) {
                for (let i = 0; i < this.property.length - 1; i++) {
                    this.elements[j] = this.elements[j][this.property[i]];
                }
            }
        }
    }
    update(value) {
        this.value = value;
    }
    updateDom() {
        if (this.elements) {
            const str = this._value;
            for (let element of this.elements) {
                if (this.property.length) {
                    if (this.property.length > 1) {
                        element[this.lastProperty] = str;
                    }
                    else {
                        element.setAttribute(this.lastProperty, str);
                    }
                }
                else {
                    if (element.hasAttribute("value")) {
                        element.value = str;
                    }
                    else {
                        const pattern = /<\s*.*[^>]*>(.*?)<\s*.*\s*>/gi;
                        if (isString(this._value) && str.match(pattern)) {
                            element.innerHTML = str;
                        }
                        else {
                            element.textContent = str;
                        }
                    }
                }
            }
        }
    }
    getElements(element) {
        let elements = [];
        if (isArray(element)) {
            for (const elt of element) {
                if (isHtmlElement(elt)) {
                    elements.push(elt);
                }
            }
        }
        else if (isString(element)) {
            let htmlElement = Dom.findById(element);
            if (htmlElement) {
                elements.push(htmlElement);
            }
            else {
                elements = Dom.findByClass(element);
            }
        }
        else if (isHtmlElement(element)) {
            elements.push(element);
        }
        return elements;
    }
}

export { Dom, Binding };
