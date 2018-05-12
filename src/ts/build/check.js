var Check = (function () {
    function Check() {
    }
    Check.isJSON = function (str) {
        var json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
        try {
            json = JSON.parse(str);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return json;
    };
    Check.isFunction = function (func) {
        var getType = {};
        return func && getType.toString.call(func) === '[object Function]';
    };
    Check.isObject = function (object) {
        return (object !== null && (this.isFunction(object) || typeof object === 'object'));
    };
    Check.isASCII = function (code, extended) {
        return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
    };
    Check.isInteger = function (value) {
        return (value === parseInt(value, 10));
    };
    return Check;
}());
export { Check };
//# sourceMappingURL=check.js.map