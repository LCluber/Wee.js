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
export { Dom };
//# sourceMappingURL=dom.js.map