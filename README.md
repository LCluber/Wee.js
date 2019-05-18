## Synopsis

[Wee.js](http://weejs.lcluber.com) is an open source utility library written in TypeScript.

## Motivation

The main purpose of this library is to provide the usual basic tools for strings, numbers and DOM manipulation.

## Installation

```bash
$ npm install @lcluber/weejs
```
Or download it **[here](http://weejs.lcluber.com/#download)**.

## Usage

### ES6

```javascript
import { Dom } from '@lcluber/weejs';

let shaders = {
  test1 : 'test1',
  test2 : 'test2'
};
let select = Dom.findById("shaders");
for(var property in shaders ) {
  if(shaders.hasOwnProperty(property)) {
    Dom.addHTMLElement( select,
                        'option',
                        { textContent:property,
                          value:property
                        });
  }
}

```

### ES5

```html
<script src="node-modules/@lcluber/weejs/dist/wee.iife.min.js"></script>
```

```javascript
var shaders = {
  test1 : 'test1',
  test2 : 'test2'
};
var select = Wee.Dom.findById("shaders");
for(var property in shaders ) {
  if(shaders.hasOwnProperty(property)) {
    Wee.Dom.addHTMLElement( select,
                            'option',
                            { textContent:property,
                              value:property
                            });
  }
}
```

## Demo

See a basic example **[here](http://weejs.lcluber.com/#example)**.

## API Reference

```javascript

type HTMLElements = HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement | HTMLIFrameElement;

static Dom.findById(id: string): HTMLElements | null {}
static Dom.findByClass(className: string): HTMLElements[] | null {}
static Dom.findByTag(tagName: string): HTMLElements[] | null {}

static Dom.showElement(element: string | HTMLElements): HTMLElements | null {}
static Dom.hideElement(element: string | HTMLElements): HTMLElements | null {
static Dom.styleElement( element:   string | HTMLElements | null,
                         parameter: string | number,
                         value:     string
                        ): HTMLElements | null  {}

static Dom.addHTMLElement( parentElement:           string | HTMLElement | null,
                           childElementType:        string,
                           childElementAttributes?: HTMLParameters
                         ): HTMLElements {}
static Dom.clearHTMLElement(element: string | HTMLElement | null): HTMLElement | null {}

static Dom.scrollToBottom(HtmlElement: HTMLElements): void {}
static Dom.scrollToTop(HtmlElement: HTMLElements): void {}

static Dom.showOverflow(): void {}
static Dom.hideOverflow(): void {}

static Dom.getInputValue(element: string | HTMLElement | null): string | null {}
static Dom.clearInputValue(element: string | HTMLElement | null): HTMLElement | null {}

static Dom.focusOn(element: string | HTMLElements | null): HTMLElements | null {}

```

## Tests

No tests to run yet

## Contributors

Wee.js is still in early development and I would be glad to get all the help you can provide for this project.
To contribute you can clone the project on **[GitHub](https://github.com/LCluber/Wee.js)** and See **NOTICE.md** for detailed installation walkthrough.

## License

MIT License

Copyright (c) 2018 Ludovic CLUBER

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
