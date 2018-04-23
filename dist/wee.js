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

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.WEE = {})));
}(this, (function (exports) { 'use strict';

    var Ascii = (function () {
        function Ascii() {
        }
        Ascii.isASCII = function (code, extended) {
            return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
        };
        Ascii.stringToASCII = function (code) {
            return code.charCodeAt(0);
        };
        return Ascii;
    }());

    var Check = (function () {
        function Check() {
        }
        Check.isJSON = function (str) {
            var json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
            try {
                json = JSON.parse(str);
            }
            catch (e) {
                return e;
            }
            return json;
        };
        Check.isFunction = function (func) {
            var getType = {};
            return func && getType.toString.call(func) === '[object Function]';
        };
        Check.isObject = function (object) {
            return (object !== null && (this.isFunction(object) || typeof object === 'object'));
        };
        return Check;
    }());

    var Dom = (function () {
        function Dom() {
        }
        Dom.scrollToBottom = function (HtmlElement) {
            HtmlElement.scrollTop = HtmlElement.scrollHeight;
        };
        Dom.findById = function (id) {
            return document.getElementById(id);
        };
        Dom.showById = function (a) {
            this.findById(a).style.display = 'block';
        };
        Dom.hideById = function (a) {
            this.findById(a).style.display = 'none';
        };
        Dom.showOverflow = function () {
            document.body.style.overflow = 'visible';
        };
        Dom.hideOverflow = function () {
            document.body.style.overflow = 'hidden';
        };
        return Dom;
    }());

    var Number = (function () {
        function Number() {
        }
        Number.isInteger = function (value) {
            return (value === parseInt(value, 10));
        };
        return Number;
    }());

    var String = (function () {
        function String() {
        }
        String.ucfirst = function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        return String;
    }());

    var Ajax = (function () {
        function Ajax() {
        }
        Ajax.method = 'GET';
        Ajax.async = true;
        Ajax.noCache = false;
        return Ajax;
    }());

    exports.Ascii = Ascii;
    exports.Check = Check;
    exports.Dom = Dom;
    exports.Number = Number;
    exports.String = String;
    exports.Ajax = Ajax;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
