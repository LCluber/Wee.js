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
  var Is$1 =
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

    Is.array = function array(_array) {
      return _array !== null && _array.constructor === Array;
    };

    Is.ascii = function ascii(code, extended) {
      return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
    };

    Is.integer = function integer(value) {
      return value === parseInt(value, 10);
    };

    Is.float = function float(value) {
      return Number(value) === value && value % 1 !== 0;
    };

    Is.string = function string(str) {
      return typeof str === 'string';
    };

    return Is;
  }();

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
  var LEVELS$1 = {
    info: {
      id: 1,
      name: 'info',
      color: '#28a745'
    },
    trace: {
      id: 2,
      name: 'trace',
      color: '#17a2b8'
    },
    warn: {
      id: 3,
      name: 'warn',
      color: '#ffc107'
    },
    error: {
      id: 4,
      name: 'error',
      color: '#dc3545'
    },
    off: {
      id: 99,
      name: 'off',
      color: null
    }
  };

  function addZero(value) {
    return value < 10 ? '0' + value : value;
  }

  function formatDate() {
    var now = new Date();
    var date = [addZero(now.getMonth() + 1), addZero(now.getDate()), now.getFullYear().toString().substr(-2)];
    var time = [addZero(now.getHours()), addZero(now.getMinutes()), addZero(now.getSeconds())];
    return date.join("/") + " " + time.join(":");
  }

  var Message$1 =
  /*#__PURE__*/
  function () {
    function Message(level, content) {
      this.id = level.id;
      this.name = level.name;
      this.color = level.color;
      this.content = content;
      this.date = formatDate();
    }

    var _proto = Message.prototype;

    _proto.display = function display(groupName) {
      console[this.name]('%c[' + groupName + '] ' + this.date + ' : ', 'color:' + this.color + ';', this.content);
    };

    return Message;
  }();

  var Group =
  /*#__PURE__*/
  function () {
    function Group(name, level) {
      this.messages = [];
      this.name = name;
      this.messages = [];
      this._level = level;
    }

    var _proto2 = Group.prototype;

    _proto2.info = function info(message) {
      this.log(LEVELS$1.info, message);
    };

    _proto2.trace = function trace(message) {
      this.log(LEVELS$1.trace, message);
    };

    _proto2.warn = function warn(message) {
      this.log(LEVELS$1.warn, message);
    };

    _proto2.error = function error(message) {
      this.log(LEVELS$1.error, message);
    };

    _proto2.log = function log(level, messageContent) {
      var message = new Message$1(level, messageContent);
      this.messages.push(message);

      if (this._level.id <= message.id) {
        message.display(this.name);
      }
    };

    _createClass(Group, [{
      key: "level",
      set: function set(name) {
        this._level = LEVELS$1.hasOwnProperty(name) ? LEVELS$1[name] : this._level;
      },
      get: function get() {
        return this._level.name;
      }
    }]);

    return Group;
  }();

  var Logger$1 =
  /*#__PURE__*/
  function () {
    function Logger() {}

    Logger.setLevel = function setLevel(name) {
      Logger.level = LEVELS$1.hasOwnProperty(name) ? LEVELS$1[name] : Logger.level;

      for (var _iterator = Logger.groups, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var group = _ref;
        group.level = Logger.level.name;
      }
    };

    Logger.getLevel = function getLevel() {
      return Logger.level.name;
    };

    Logger.getGroup = function getGroup(name) {
      for (var _iterator2 = Logger.groups, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var group = _ref2;

        if (group.name === name) {
          return group;
        }
      }

      return null;
    };

    Logger.addGroup = function addGroup(name) {
      return this.getGroup(name) || this.pushGroup(name);
    };

    Logger.pushGroup = function pushGroup(name) {
      var group = new Group(name, Logger.level);
      Logger.groups.push(group);
      return group;
    };

    return Logger;
  }();

  Logger$1.level = LEVELS$1.error;
  Logger$1.groups = [];

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

    HTTP.setResponseType = function setResponseType(responseType) {
      this.responseType = responseType;
    };

    HTTP.call = function call(method, url, data) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var msg = ['Aias xhr ', ' (' + method + ':' + url + ')'];
        var http = new XMLHttpRequest();
        url += _this.noCache ? '?cache=' + new Date().getTime() : '';
        http.open(method, url, _this.async);
        http.responseType = _this.responseType;

        _this.setRequestHeaders(http);

        http.onreadystatechange = function () {
          if (http.readyState == 4) {
            if (http.status == 200) {
              _this.log.info(msg[0] + 'successful' + msg[1]);

              resolve(http.responseText);
            } else {
              _this.log.error(msg[0] + 'failed' + msg[1]);

              reject(http.status);
            }
          }
        };

        if (Is$1.object(data)) {
          data = JSON.stringify(data);
        }

        http.send(data || null);

        _this.log.info(msg[0] + 'sent' + msg[1]);
      });
    };

    HTTP.setRequestHeaders = function setRequestHeaders(http) {
      for (var property in this.headers) {
        if (this.headers.hasOwnProperty(property)) {
          http.setRequestHeader(property, this.headers[property]);
        }
      }
    };

    return HTTP;
  }();

  HTTP.async = true;
  HTTP.noCache = false;
  HTTP.responseType = 'text';
  HTTP.headers = {};
  HTTP.log = Logger$1.addGroup('Aias');

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
      var _this = this;

      return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = path;
        img.name = File.getName(path);

        _this.log.info('xhr processing starting (' + path + ')');

        img.addEventListener('load', function () {
          _this.log.info('xhr done successfully (' + path + ')');

          resolve(img);
        });
        img.addEventListener('error', function () {
          _this.log.error('xhr failed (' + path + ')');

          reject(new Error('xhr failed (' + path + ')'));
        });
      });
    };

    return Img;
  }();
  Img.log = Logger$1.addGroup('Wee');

  var Sound =
  /*#__PURE__*/
  function () {
    function Sound() {}

    Sound.load = function load(path) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var snd = new Audio();
        snd.src = path;

        _this.log.info('xhr processing starting (' + path + ')');

        snd.addEventListener('canplaythrough', function () {
          _this.log.info('xhr done successfully (' + path + ')');

          resolve(snd);
        }, false);
        snd.addEventListener('canplay', function () {
          _this.log.info('xhr done successfully (' + path + ')');

          resolve(snd);
        }, false);
        snd.addEventListener('error', function () {
          _this.log.error('xhr failed (' + path + ')');

          reject(new Error('xhr failed (' + path + ')'));
        }, false);
      });
    };

    return Sound;
  }();
  Sound.log = Logger$1.addGroup('Wee');

  exports.Dom = Dom;
  exports.Binding = Binding;
  exports.String = String$1;
  exports.File = File;
  exports.Img = Img;
  exports.Sound = Sound;

  return exports;

}({}));
