define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimeManager = /** @class */ (function () {
        function TimeManager() {
            this.elemList = [];
            this.timer = 0;
            this.targetTime = 0;
            this.startTime = 0;
        }
        // 公共 静态方法 返回单例
        TimeManager.getInstance = function () {
            if (!TimeManager._instance) {
                TimeManager._instance = new TimeManager();
            }
            return TimeManager._instance;
        };
        TimeManager.prototype.add = function (ele) {
            var _this = this;
            if (this.elemList.indexOf(ele) > -1) {
                return false;
            }
            else {
                this.elemList.push(ele);
                if (this.elemList.length > 0 && this.timer === 0) {
                    this.timer = setInterval(function () { return _this.animation(); }, 16);
                }
                return true;
            }
        };
        TimeManager.prototype.remove = function (ele) {
            if (this.elemList.indexOf(ele) > -1) {
                this.elemList.splice(this.elemList.indexOf(ele), 1);
                if (this.elemList.length === 0) {
                    clearInterval(this.timer);
                    this.timer = 0;
                }
                return true;
            }
            else {
                return false;
            }
        };
        TimeManager.prototype.setTimeAnimation = function (elemList, time) {
            this.elemList.length = 0;
            this.timer = 0;
            this.targetTime = time;
            this.startTime = new Date().getTime();
            for (var i = 0; i < elemList.length; i++) {
                this.add(elemList[i]);
            }
        };
        TimeManager.prototype.removeAll = function () {
            var _this = this;
            this.elemList.forEach(function (elem) {
                _this.remove(elem);
            });
        };
        TimeManager.prototype.animation = function () {
            // if (new Date().getTime() - this.startTime >= this.targetTime) {
            //   this.removeAll();
            //   return;
            // }
            for (var i = 0; i < this.elemList.length; i++) {
                this.elemList[i].update();
            }
        };
        return TimeManager;
    }());
    exports.default = TimeManager;
});
