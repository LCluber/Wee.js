var Check = (function () {
    function Check() {
    }
    Check.isJSON = function (str) {
        var json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
        try {
            json = JSON.parse(str);
        }
        catch (e) {
            return e;
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
    return Check;
}());
export { Check };
//# sourceMappingURL=check.js.map