var Ajax = (function () {
    function Ajax() {
    }
    Ajax.call = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var http = new XMLHttpRequest();
            if (_this.noCache) {
                url += '?cache=' + (new Date()).getTime();
            }
            http.open(_this.method, url, _this.async);
            http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            http.onreadystatechange = function () {
                if (http.readyState == 4) {
                    if (http.status == 200) {
                        console.log("xhr done successfully");
                        resolve(http.responseText);
                    }
                    else {
                        console.log("xhr failed");
                        reject(http.status);
                    }
                }
                else {
                    console.log("xhr processing going on");
                }
            };
            http.send();
        });
    };
    Ajax.method = 'GET';
    Ajax.async = true;
    Ajax.noCache = false;
    return Ajax;
}());
export { Ajax };
//# sourceMappingURL=ajax.js.map