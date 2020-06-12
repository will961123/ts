var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./Box"], function (require, exports, Box_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Box_1 = __importDefault(Box_1);
    var boxList = [];
    for (var i = 0; i < 5; i++) {
        var box = new Box_1.default();
        box.setPosition(i * 100, 0);
        box.appendTo("body");
        boxList.push(box);
        //   TimeManager.getInstance().add(box)
    }
});
// TimeManager.getInstance().setTimeAnimation(boxList,1500)
