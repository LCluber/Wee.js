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

var WEE = (function (exports) {
    'use strict';

    var Check = (function () {
        function Check() {
        }
        Check.isJSON = function (str) {
            var json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
            try {
                json = JSON.parse(str);
            }
            catch (e) {
                console.log(e);
                return false;
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
        Check.isASCII = function (code, extended) {
            return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
        };
        Check.isInteger = function (value) {
            return (value === parseInt(value, 10));
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
        Dom.getInputValue = function (a) {
            return this.findById(a).value;
        };
        Dom.clearInputValue = function (a) {
            this.findById(a).value = '';
        };
        Dom.focusOn = function (a) {
            this.findById(a).focus();
        };
        Dom.addHTMLElement = function (parentElement, childElementType, childElementOptions) {
            var newElement = document.createElement(childElementType);
            if (childElementOptions !== undefined) {
                Object.keys(childElementOptions).forEach(function (key) {
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
        };
        return Dom;
    }());

    var Bind = (function () {
        function Bind(element, data) {
            this.data = data;
            this.element = element;
            this.element.value = data;
            this.element.addEventListener('change', this, false);
        }
        Bind.prototype.handleEvent = function (event) {
            switch (event.type) {
                case 'change': this.change(this.element.value);
            }
        };
        Bind.prototype.change = function (value) {
            this.data = value;
            this.element.value = value;
        };
        return Bind;
    }());

    var String = (function () {
        function String() {
        }
        String.ucfirst = function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        String.toASCII = function (code) {
            return code.charCodeAt(0);
        };
        return String;
    }());

    var Ajax = (function () {
        function Ajax() {
        }
        Ajax.call = function (url) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var http = new XMLHttpRequest();
                if (_this.noCache) {
                    url += '?cache=' + (new Date()).getTime();
                }
                http.open(_this.method, url, _this.async);
                http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                http.onreadystatechange = function () {
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
        };
        Ajax.method = 'GET';
        Ajax.async = true;
        Ajax.noCache = false;
        return Ajax;
    }());

    var File = (function () {
        function File() {
        }
        File.load = function (path) {
            return Ajax.call(path);
        };
        File.removeTrailingSlash = function (path) {
            return path.replace(/\/+$/, '');
        };
        File.getName = function (path) {
            return path.replace(/^.*[\\\/]/, '');
        };
        File.getExtension = function (path) {
            return path.split('.').pop();
        };
        File.getDirectory = function (path) {
            return path.replace(/[^\\\/]*$/, '');
        };
        File.checkExtension = function (extension, validExtensions) {
            for (var _i = 0, validExtensions_1 = validExtensions; _i < validExtensions_1.length; _i++) {
                var validExtension = validExtensions_1[_i];
                if (extension === validExtension) {
                    return true;
                }
            }
            return false;
        };
        return File;
    }());

    var Img = (function () {
        function Img() {
        }
        Img.load = function (path) {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.src = path;
                img.name = File.getName(path);
                console.log('xhr processing starting (' + path + ')');
                img.addEventListener('load', function () {
                    console.log('xhr done successfully (' + path + ')');
                    resolve(img);
                });
                img.addEventListener('error', function () {
                    console.log('error', 'xhr failed (' + path + ')');
                    reject(new Error('xhr failed (' + path + ')'));
                });
            });
        };
        return Img;
    }());

    var Sound = (function () {
        function Sound() {
        }
        Sound.load = function (path) {
            return new Promise(function (resolve, reject) {
                var snd = new Audio();
                snd.src = path;
                console.log('xhr processing starting (' + path + ')');
                snd.addEventListener('canplaythrough', function () {
                    console.log('xhr done successfully (' + path + ')');
                    resolve(snd);
                }, false);
                snd.addEventListener('canplay', function () {
                    console.log('xhr done successfully (' + path + ')');
                    resolve(snd);
                }, false);
                snd.addEventListener('error', function () {
                    console.log('error', 'xhr failed (' + path + ')');
                    reject(new Error('xhr failed (' + path + ')'));
                }, false);
            });
        };
        return Sound;
    }());

    exports.Check = Check;
    exports.Dom = Dom;
    exports.Bind = Bind;
    exports.String = String;
    exports.File = File;
    exports.Ajax = Ajax;
    exports.Img = Img;
    exports.Sound = Sound;

    return exports;

}({}));
