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
export { Bind };
//# sourceMappingURL=bind.js.map