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

var Wee = (function (exports) {
  'use strict';

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
  * http://chjs.lcluber.com
  */
  var Is =
  /*#__PURE__*/
  function () {
    function Is() {}

    Is.json = function json(str) {
      if (!this.string(str)) {
        return false;
      }

      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }

      return true;
    };

    Is.function = function _function(func) {
      var getType = {};
      return func && getType.toString.call(func) === '[object Function]';
    };

    Is.object = function object(_object) {
      return _object !== null && typeof _object === 'object';
    };

    Is.array = function array(_array) {
      return _array !== null && _array.constructor === Array;
    };

    Is.ascii = function ascii(code, extended) {
      return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
    };

    Is.integer = function integer(number) {
      return number === parseInt(number, 10);
    };

    Is.float = function float(number) {
      return Number(number) === number && number % 1 !== 0;
    };

    Is.string = function string(_string) {
      return typeof _string === 'string';
    };

    Is.htmlElement = function htmlElement(_htmlElement) {
      return typeof HTMLElement === "object" ? _htmlElement instanceof HTMLElement : _htmlElement && typeof _htmlElement === "object" && _htmlElement !== null && _htmlElement.nodeType === 1 && typeof _htmlElement.nodeName === "string";
    };

    Is.node = function node(_node) {
      return typeof Node === "object" ? _node instanceof Node : _node && typeof _node === "object" && typeof _node.nodeType === "number" && typeof _node.nodeName === "string";
    };

    return Is;
  }();

  var Dom =
  /*#__PURE__*/
  function () {
    function Dom() {}

    Dom.scrollToBottom = function scrollToBottom(HtmlElement) {
      HtmlElement.scrollTop = HtmlElement.scrollHeight;
    };

    Dom.scrollToTop = function scrollToTop(HtmlElement) {
      HtmlElement.scrollTop = 0;
    };

    Dom.findById = function findById(id) {
      return document.getElementById(id);
    };

    Dom.findByClass = function findByClass(className) {
      return this.arrayFrom(document.getElementsByClassName(className));
    };

    Dom.findByTag = function findByTag(tagName) {
      return this.arrayFrom(document.getElementsByTagName(tagName));
    };

    Dom.showElement = function showElement(element) {
      return this.styleElement(element, 'display', 'block');
    };

    Dom.hideElement = function hideElement(element) {
      return this.styleElement(element, 'display', 'none');
    };

    Dom.styleElement = function styleElement(element, parameter, value) {
      var htmlelement = this.checkElement(element);

      if (htmlelement) {
        htmlelement.style[parameter] = value;
      }

      return htmlelement;
    };

    Dom.showOverflow = function showOverflow() {
      document.body.style.overflow = 'visible';
    };

    Dom.hideOverflow = function hideOverflow() {
      document.body.style.overflow = 'hidden';
    };

    Dom.getInputValue = function getInputValue(element) {
      var htmlelement = this.checkElement(element);

      if (htmlelement) {
        return htmlelement.value;
      }

      return null;
    };

    Dom.clearInputValue = function clearInputValue(element) {
      var htmlelement = this.checkElement(element);

      if (htmlelement) {
        htmlelement.value = '';
      }

      return htmlelement;
    };

    Dom.focusOn = function focusOn(element) {
      var htmlelement = this.checkElement(element);

      if (htmlelement) {
        htmlelement.focus();
      }

      return htmlelement;
    };

    Dom.addHTMLElement = function addHTMLElement(parentElement, childElementType, childElementAttributes) {
      var parentHtmlElement = this.checkElement(parentElement);

      if (parentHtmlElement) {
        var newElement = document.createElement(childElementType);

        if (childElementAttributes) {
          Object.keys(childElementAttributes).forEach(function (key) {
            if (key === 'textContent' || key === 'innerHTML') {
              newElement[key] = childElementAttributes[key];
            } else {
              newElement.setAttribute(key, childElementAttributes[key]);
            }
          });
        }

        parentHtmlElement.appendChild(newElement);
        return newElement;
      }

      return null;
    };

    Dom.clearHTMLElement = function clearHTMLElement(element) {
      var htmlelement = this.checkElement(element);

      if (htmlelement) {
        htmlelement.innerHTML = '';
      }

      return htmlelement;
    };

    Dom.arrayFrom = function arrayFrom(htmlCollection) {
      var elements = [];

      for (var i = 0; i < htmlCollection.length; i++) {
        elements.push(htmlCollection[i]);
      }

      return elements;
    };

    Dom.checkElement = function checkElement(element) {
      if (Is.string(element)) {
        return this.findById(element);
      }

      return element;
    };

    return Dom;
  }();

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Binding =
  /*#__PURE__*/
  function () {
    function Binding(element, property, value) {
      this._value = '';
      this.elements = this.getElements(element);
      this.property = [];
      this.lastProperty = '';

      if (property) {
        this.property = property.split('.');
        this.lastProperty = this.property[this.property.length - 1];
        this.addPropertyToElement();
      }

      this.value = value;
    }

    var _proto = Binding.prototype;

    _proto.addPropertyToElement = function addPropertyToElement() {
      if (this.elements) {
        for (var j = 0; j < this.elements.length; j++) {
          for (var i = 0; i < this.property.length - 1; i++) {
            this.elements[j] = this.elements[j][this.property[i]];
          }
        }
      }
    };

    _proto.update = function update(value) {
      this.value = value;
    };

    _proto.updateDom = function updateDom() {
      if (this.elements) {
        var str = this._value;

        for (var _iterator = this.elements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var element = _ref;

          if (this.property.length) {
            element[this.lastProperty] = str;
          } else {
            if (element.hasAttribute('value')) {
              element.value = str;
            } else {
              var pattern = /<\s*.*[^>]*>(.*?)<\s*.*\s*>/ig;

              if (Is.string(this._value) && str.match(pattern)) {
                element.innerHTML = str;
              } else {
                element.textContent = str;
              }
            }
          }
        }
      }
    };

    _proto.getElements = function getElements(element) {
      var elements = [];

      if (Is.array(element)) {
        for (var _iterator2 = element, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var elt = _ref2;

          if (Is.htmlElement(elt)) {
            elements.push(elt);
          }
        }
      } else if (Is.string(element)) {
        var htmlElement = Dom.findById(element);

        if (htmlElement) {
          elements.push(htmlElement);
        } else {
          elements = Dom.findByClass(element);
        }
      } else if (Is.htmlElement(element)) {
        elements.push(element);
      }

      return elements;
    };

    _createClass(Binding, [{
      key: "value",
      set: function set(value) {
        this._value = value;
        this.updateDom();
      },
      get: function get() {
        return this._value;
      }
    }]);

    return Binding;
  }();

  var String$1 =
  /*#__PURE__*/
  function () {
    function String() {}

    String.ucfirst = function ucfirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    String.toASCII = function toASCII(code) {
      return code.charCodeAt(0);
    };

    return String;
  }();

  var File =
  /*#__PURE__*/
  function () {
    function File() {}

    File.removeTrailingSlash = function removeTrailingSlash(path) {
      return path.replace(/\/+$/, '');
    };

    File.getName = function getName(path) {
      return path.replace(/^.*[\\\/]/, '');
    };

    File.getExtension = function getExtension(path) {
      return path.split('.').pop();
    };

    File.getDirectory = function getDirectory(path) {
      return path.replace(/[^\\\/]*$/, '');
    };

    File.checkExtension = function checkExtension(extension, validExtensions) {
      for (var _iterator = validExtensions, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var validExtension = _ref;

        if (extension === validExtension) {
          return true;
        }
      }

      return false;
    };

    return File;
  }();

  exports.Dom = Dom;
  exports.Binding = Binding;
  exports.String = String$1;
  exports.File = File;

  return exports;

}({}));
