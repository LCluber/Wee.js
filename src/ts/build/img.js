import { File } from './file';
var Img = (function () {
    function Img() {
    }
    Img.load = function (path) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.src = path;
            img.name = File.getName(path);
            console.log('xhr processing starting (' + path + ')');
            img.addEventListener('load', function () {
                console.log('xhr done successfully (' + path + ')');
                resolve(img);
            });
            img.addEventListener('error', function () {
                console.log('error', 'xhr failed (' + path + ')');
                reject(new Error('xhr failed (' + path + ')'));
            });
        });
    };
    return Img;
}());
export { Img };
//# sourceMappingURL=img.js.map