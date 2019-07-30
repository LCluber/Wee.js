## Synopsis

**[Wee.js](https://github.com/LCluber/Ch.js)** is an open source Binding and DOM handling library written in Typescript.

## Motivation

The main purpose of this library is to provide the usual basic tools for strings, numbers and DOM manipulation.

## Installation

### npm

```bash
$ npm i @lcluber/chjs
```

### Yarn

```bash
$ yarn add @lcluber/chjs
```

## Usage

```html
<input id="signupEmailMsg" \ value="" />
<select id="shaders"></select>
```

### ES6

```javascript
import { Dom, Binding } from "@lcluber/weejs";

// populate select tag with two options using addHTMLElement method
let shaders = {
  test1: "test1",
  test2: "test2"
};
let select = Dom.findById("shaders");
for (var property in shaders) {
  if (shaders.hasOwnProperty(property)) {
    Dom.addHTMLElement(select, "option", {
      textContent: property,
      value: property
    });
  }
}

// Bind input style
var signupEmailMsg = new Binding(
  "signupEmailMsg",
  "style.visibility",
  "hidden"
);
// Then update it.
signupEmailMsg.update("visible");
```

### ES5

```html
<script src="node-modules/@lcluber/weejs/dist/wee.iife.min.js"></script>
```

```javascript
// populate select tag with two options using addHTMLElement method
var shaders = {
  test1: "test1",
  test2: "test2"
};
var select = Wee.Dom.findById("shaders");
for (var property in shaders) {
  if (shaders.hasOwnProperty(property)) {
    Wee.Dom.addHTMLElement(select, "option", {
      textContent: property,
      value: property
    });
  }
}

// Bind input style
var signupEmailMsg = new Wee.Binding(
  "signupEmailMsg",
  "style.visibility",
  "hidden"
);

// Then update it.
signupEmailMsg.update("visible");
```

## API Reference

### DOM handling

```javascript

type HTMLElements = HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLProgressElement | HTMLCanvasElement | HTMLIFrameElement;

static Dom.findById(id: string): HTMLElements | null {}
static Dom.findByClass(className: string): HTMLElements[] | null {}
static Dom.findByTag(tagName: string): HTMLElements[] | null {}

static Dom.showElement(element: string | HTMLElements): HTMLElements | null {}
static Dom.hideElement(element: string | HTMLElements): HTMLElements | null {}
static Dom.styleElement( element:   string | HTMLElements,
                         parameter: string | number,
                         value:     string
                        ): HTMLElements | null {}

static Dom.addHTMLElement( parentElement:           string | HTMLElement,
                           childElementType:        string,
                           childElementAttributes?: HTMLParameters
                         ): HTMLElements {}
static Dom.clearHTMLElement(element: string | HTMLElement): HTMLElement | null {}

static Dom.scrollToBottom(HtmlElement: HTMLElements): void {}
static Dom.scrollToTop(HtmlElement: HTMLElements): void {}

static Dom.showOverflow(): void {}
static Dom.hideOverflow(): void {}

static Dom.getInputValue(element: string | HTMLElement): string | null {}
static Dom.clearInputValue(element: string | HTMLElement): HTMLElement | null {}

static Dom.focusOn(element: string | HTMLElements): HTMLElements | null {}

```

### Binding

```javascript

new Binding(
  element: string | HTMLElement | HTMLElement[],
  property: string,
  value: string | number
);
Binding.update(value: string | number): void {}

```

## Contributors

Wee.js is still in early development and I would be glad to get all the help you can provide for this project.
To contribute you can clone the project on **[GitHub](https://github.com/LCluber/Wee.js)** and See **NOTICE.md** for detailed installation walkthrough.

## License

**[MIT](https://github.com/LCluber/Wee.js/blob/master/LICENSE.md)**
