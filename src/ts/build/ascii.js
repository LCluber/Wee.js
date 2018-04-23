var Ascii = (function () {
    function Ascii() {
    }
    Ascii.isASCII = function (code, extended) {
        return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
    };
    Ascii.stringToASCII = function (code) {
        return code.charCodeAt(0);
    };
    return Ascii;
}());
export { Ascii };
//# sourceMappingURL=ascii.js.map