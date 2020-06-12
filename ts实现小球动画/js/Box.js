var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./Utils", "./TimeManager"], function (require, exports, Utils_1, TimeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Utils_1 = __importDefault(Utils_1);
    TimeManager_1 = __importDefault(TimeManager_1);
    var Box = /** @class */ (function () {
        function Box() {
            var _this = this;
            this.speedX = 2;
            this.speedY = 2;
            this._left = 0;
            this._top = 0;
            this.isRUn = false;
            this.elem = this.createElement();
            this.elem.addEventListener("click", function (e) {
                return _this.handlerClick(e);
            });
        }
        Box.prototype.createElement = function () {
            return Utils_1.default.ce("div", {
                width: "50px",
                height: "50px",
                "background-color": "red",
                "border-radius": "25px",
                position: "absolute",
                left: 0,
                top: 0
            });
        };
        Box.prototype.handlerClick = function (e) {
            this.isRUn = !this.isRUn;
            if (this.isRUn) {
                TimeManager_1.default.getInstance().add(this);
            }
            else {
                TimeManager_1.default.getInstance().remove(this);
            }
        };
        // 继承 IUpdate 中的 update 方法
        Box.prototype.update = function () {
            if (!this.elem) {
                return;
            }
            this.speedY += 0.2;
            if (this.top > 300) {
                if (this.speedY < 0) {
                    TimeManager_1.default.getInstance().remove(this);
                }
                this.speedY = -this.speedY + 1;
            }
            this.top += this.speedY;
            // this.left += this.speed;
            // this.elem.style.left = this.left + "px";
        };
        Box.prototype.setPosition = function (left, top) {
            this.left = left;
            this.top = top;
        };
        Object.defineProperty(Box.prototype, "left", {
            get: function () {
                return this._left;
            },
            set: function (val) {
                this._left = val;
                if (this.elem) {
                    this.elem.style.left = val + "px";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "top", {
            get: function () {
                return this._top;
            },
            set: function (val) {
                this._top = val;
                if (this.elem) {
                    this.elem.style.top = val + "px";
                }
            },
            enumerable: true,
            configurable: true
        });
        Box.prototype.appendTo = function (parent) {
            if (typeof parent === "string") {
                parent = document.querySelector(parent);
            }
            if (parent) {
                parent.appendChild(this.elem);
            }
        };
        return Box;
    }());
    exports.default = Box;
});
