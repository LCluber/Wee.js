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
  * http://mouettejs.lcluber.com
  */
  var LEVELS = [{
    id: 1,
    name: 'info'
  }, {
    id: 2,
    name: 'trace'
  }, {
    id: 3,
    name: 'warn'
  }, {
    id: 4,
    name: 'error'
  }, {
    id: 99,
    name: 'off'
  }];

  var Message =
  /*#__PURE__*/
  function () {
    function Message(levelName, content) {
      this.setLevel(levelName);
      this.content = content;
    }

    var _proto = Message.prototype;

    _proto.setLevel = function setLevel(name) {
      this.level = this.findLevel(name);
    };

    _proto.getLevelId = function getLevelId() {
      return this.level.id;
    };

    _proto.display = function display() {
      console[this.level.name](this.content);
    };

    _proto.findLevel = function findLevel(name) {
      for (var _i = 0; _i < LEVELS.length; _i++) {
        var level = LEVELS[_i];

        if (level.name === name) {
          return level;
        }
      }

      return this.level ? this.level : LEVELS[0];
    };

    return Message;
  }();

  var Logger =
  /*#__PURE__*/
  function () {
    function Logger() {}

    Logger.info = function info(text) {
      Logger.log('info', text);
    };

    Logger.trace = function trace(text) {
      Logger.log('trace', text);
    };

    Logger.time = function time(text) {
      Logger.log('time', text);
    };

    Logger.warn = function warn(text) {
      Logger.log('warn', text);
    };

    Logger.error = function error(text) {
      Logger.log('error', text);
    };

    Logger.log = function log(levelName, content) {
      Logger.addMessage(levelName, content);
      var message = this.messages[this.nbMessages - 1];

      if (this._level.id <= message.getLevelId()) {
        message.display();
      }
    };

    Logger.addMessage = function addMessage(levelName, content) {
      this.messages.push(new Message(levelName, content));
      this.nbMessages++;
    };

    Logger.findLevel = function findLevel(name) {
      for (var _i2 = 0; _i2 < LEVELS.length; _i2++) {
        var level = LEVELS[_i2];

        if (level.name === name) {
          return level;
        }
      }

      return this._level ? this._level : LEVELS[0];
    };

    _createClass(Logger, [{
      key: "level",
      set: function set(name) {
        Logger._level = Logger.findLevel(name);
      },
      get: function get() {
        return Logger._level.name;
      }
    }]);

    return Logger;
  }();

  Logger._level = Logger.findLevel(LEVELS[0].name);
  Logger.messages = [];
  Logger.nbMessages = 0;
  Logger.target = document.getElementById('Mouette');

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

      var json = str.replace(/(\r\n|\n|\r|\t)/gm, '');

      try {
        json = JSON.parse(str);
      } catch (e) {
        Logger.error(e);
        return false;
      }

      return json;
    };

    Is.function = function _function(func) {
      var getType = {};
      return func && getType.toString.call(func) === '[object Function]';
    };

    Is.object = function object(_object) {
      return _object !== null && typeof _object === 'object';
    };

    Is.ascii = function ascii(code, extended) {
      return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
    };

    Is.integer = function integer(value) {
      return value === parseInt(value, 10);
    };

    Is.string = function string(str) {
      return typeof str === 'string';
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

    Dom.arrayFrom = function arrayFrom(HTMLCollection) {
      var elements = [];

      for (var i = 0; i < HTMLCollection.length; i++) {
        elements.push(HTMLCollection[i]);
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

  var Bind =
  /*#__PURE__*/
  function () {
    function Bind(element, data) {
      this.data = data;
      this.element = element;
      this.element.value = data;
      this.element.addEventListener('change', this, false);
    }

    var _proto = Bind.prototype;

    _proto.handleEvent = function handleEvent(event) {
      switch (event.type) {
        case 'change':
          this.change(this.element.value);
      }
    };

    _proto.change = function change(value) {
      this.data = value;
      this.element.value = value;
    };

    return Bind;
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

  /** MIT License
  * 
  * Copyright (c) 2010 Ludovic CLUBER 
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
  * http://aiasjs.lcluber.com
  */
  var HTTP =
  /*#__PURE__*/
  function () {
    function HTTP() {}

    HTTP.get = function get(url) {
      return this.call('GET', url);
    };

    HTTP.head = function head(url) {
      return this.call('HEAD', url);
    };

    HTTP.post = function post(url, data) {
      return this.call('POST', url, data);
    };

    HTTP.put = function put(url, data) {
      return this.call('PUT', url, data);
    };

    HTTP.delete = function _delete(url) {
      return this.call('DELETE', url);
    };

    HTTP.connect = function connect(url) {
      return this.call('CONNECT', url);
    };

    HTTP.options = function options(url) {
      return this.call('OPTIONS', url);
    };

    HTTP.trace = function trace(url) {
      return this.call('TRACE', url);
    };

    HTTP.patch = function patch(url, data) {
      return this.call('PATCH', url, data);
    };

    HTTP.setHeaders = function setHeaders(headers) {
      for (var property in headers) {
        if (headers.hasOwnProperty(property)) {
          this.headers[property] = headers[property];
        }
      }
    };

    HTTP.call = function call(method, url, data) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var http = new XMLHttpRequest();

        if (_this.noCache) {
          url += '?cache=' + new Date().getTime();
        }

        http.open(method, url, _this.async);

        for (var property in _this.headers) {
          if (_this.headers.hasOwnProperty(property)) {
            http.setRequestHeader(property, _this.headers[property]);
          }
        }

        http.onreadystatechange = function () {
          if (http.readyState == 4) {
            if (http.status == 200) {
              Logger.info('xhr done successfully (' + url + ')');
              resolve(http.responseText);
            } else {
              Logger.error('xhr failed (' + url + ')');
              reject(http.status);
            }
          }
        };

        Logger.info('xhr processing starting (' + url + ')');

        if (data == undefined) {
          http.send();
          return;
        }

        if (Is.object(data)) {
          data = JSON.stringify(data);
        }

        http.send(data);
      });
    };

    return HTTP;
  }();

  HTTP.async = true;
  HTTP.noCache = false;
  HTTP.headers = {
    'Content-Type': 'application/json'
  };

  var File =
  /*#__PURE__*/
  function () {
    function File() {}

    File.load = function load(path) {
      return HTTP.get(path);
    };

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

  var Img =
  /*#__PURE__*/
  function () {
    function Img() {}

    Img.load = function load(path) {
      return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = path;
        img.name = File.getName(path);
        Logger.info('xhr processing starting (' + path + ')');
        img.addEventListener('load', function () {
          Logger.info('xhr done successfully (' + path + ')');
          resolve(img);
        });
        img.addEventListener('error', function () {
          Logger.error('xhr failed (' + path + ')');
          reject(new Error('xhr failed (' + path + ')'));
        });
      });
    };

    return Img;
  }();

  var Sound =
  /*#__PURE__*/
  function () {
    function Sound() {}

    Sound.load = function load(path) {
      return new Promise(function (resolve, reject) {
        var snd = new Audio();
        snd.src = path;
        Logger.info('xhr processing starting (' + path + ')');
        snd.addEventListener('canplaythrough', function () {
          Logger.info('xhr done successfully (' + path + ')');
          resolve(snd);
        }, false);
        snd.addEventListener('canplay', function () {
          Logger.info('xhr done successfully (' + path + ')');
          resolve(snd);
        }, false);
        snd.addEventListener('error', function () {
          Logger.error('xhr failed (' + path + ')');
          reject(new Error('xhr failed (' + path + ')'));
        }, false);
      });
    };

    return Sound;
  }();

  exports.Dom = Dom;
  exports.Bind = Bind;
  exports.String = String$1;
  exports.File = File;
  exports.Img = Img;
  exports.Sound = Sound;

  return exports;

}({}));
