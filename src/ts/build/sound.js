var Sound = (function () {
    function Sound() {
    }
    Sound.load = function (path) {
        return new Promise(function (resolve, reject) {
            var snd = new Audio();
            snd.src = path;
            console.log('xhr processing starting (' + path + ')');
            snd.addEventListener('canplaythrough', function () {
                console.log('xhr done successfully (' + path + ')');
                resolve(snd);
            }, false);
            snd.addEventListener('canplay', function () {
                console.log('xhr done successfully (' + path + ')');
                resolve(snd);
            }, false);
            snd.addEventListener('error', function () {
                console.log('error', 'xhr failed (' + path + ')');
                reject(new Error('xhr failed (' + path + ')'));
            }, false);
        });
    };
    return Sound;
}());
export { Sound };
//# sourceMappingURL=sound.js.map