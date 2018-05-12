import { Ajax } from './ajax';
var File = (function () {
    function File() {
    }
    File.load = function (path) {
        return Ajax.call(path);
    };
    File.removeTrailingSlash = function (path) {
        return path.replace(/\/+$/, '');
    };
    File.getName = function (path) {
        return path.replace(/^.*[\\\/]/, '');
    };
    File.getExtension = function (path) {
        return path.split('.').pop();
    };
    File.getDirectory = function (path) {
        return path.replace(/[^\\\/]*$/, '');
    };
    File.checkExtension = function (extension, validExtensions) {
        for (var _i = 0, validExtensions_1 = validExtensions; _i < validExtensions_1.length; _i++) {
            var validExtension = validExtensions_1[_i];
            if (extension === validExtension) {
                return true;
            }
        }
        return false;
    };
    return File;
}());
export { File };
//# sourceMappingURL=file.js.map