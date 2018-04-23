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
export { Dom };
//# sourceMappingURL=dom.js.map