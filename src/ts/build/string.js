var String = (function () {
    function String() {
    }
    String.ucfirst = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return String;
}());
export { String };
//# sourceMappingURL=string.js.map