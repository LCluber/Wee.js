var Number = (function () {
    function Number() {
    }
    Number.isInteger = function (value) {
        return (value === parseInt(value, 10));
    };
    return Number;
}());
export { Number };
//# sourceMappingURL=number.js.map