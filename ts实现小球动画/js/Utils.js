define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.ce = function (type, style) {
            var elem = document.createElement(type);
            Utils.setStyle(elem, style);
            return elem;
        };
        Utils.setStyle = function (elem, style) {
            for (var styleName in style) {
                elem.style[styleName] = style[styleName];
            }
        };
        return Utils;
    }());
    exports.default = Utils;
});
