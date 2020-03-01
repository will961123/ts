/**
 * 编译 tsc index.ts
 */
/**
 * 1. 类型注解
 */
function log(msg) {
    console.log(msg);
}
log("字符串");
// 使用注解
function logPeople(people) {
    console.log("\u59D3\u540D:" + people.name + ",\u5E74\u9F84:" + people.age);
}
logPeople({ name: "李栓蛋", age: 18 });
/**
 * 3. 类
 */
var Dog = /** @class */ (function () {
    function Dog(dogName, dogAge) {
        this.dogName = dogName;
        this.dogAge = dogAge;
    }
    Dog.prototype.say = function () {
        console.log("我是" + this.dogName);
    };
    Dog.prototype.eat = function (foots) {
        console.log(this.dogName + "在吃" + foots);
    };
    return Dog;
}());
var dog = new Dog("旺财", 18);
dog.eat("狗粮");
/**
 * 4. 数据类型
 */
// 4.1 字符串
var dogName = "旺财";
var dogSex = "公";
var initDog = "\u6211\u6709\u4E00\u53EA\u72D7,\u4ED6\u53EB" + dogName + ",\u4ED6\u662F" + dogSex + "\u7684";
// 4.2 数字
var num1 = 16;
var num2 = 0x10; //16 进制的16
var num3 = 2; //8 进制的16
var num4 = 16; //2 进制的16
console.log(num1, num2, num3, num4);
// 4.3 布尔
var flag = true;
// 4.4 数组 (数组内只有一种类型)
var numArr1 = [1, 2, 3];
var numArr2 = [1, 2, 3];
var strArr1 = ["1", "2", "3"];
var boolArr1 = [false];
// 4.5 元组 Tuple (数组内有多种类型 已知数量已知类型)
var tuple = ["1", 1, false];
// 4.6 枚举 enum  定义的数据值默认从0开始
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["black"] = 1] = "black";
    // red = 2, // 2 3
    // black
    // red = 2,
    // black = 8, // 2 8 9
})(Color || (Color = {}));
// 通过枚举的名字得到值
var color1 = Color.red;
var color2 = Color.black;
// 通过枚举的值的到名字
var colorName1 = Color[0];
var colorName2 = Color[1];
console.log(color1, color2, colorName1, colorName2);
// 4.7 any 任意类型
var str;
str = "any";
str = 1;
str = true;
// 4.8 void 没有类型
var str2;
str2 = null;
str2 = undefined;
function logMsg() {
    console.log("void类型");
}
logMsg();
// 4.9 null undefined 是所有类型的子类型
var str3 = null;
var str4 = undefined;
var str5 = null;
// 4.10 never 永不存在的值的类型 必须存在永远无法到达的终点
function error(msg) {
    throw new Error(msg);
}
function whileTrue() {
    while (true) {
        console.log(1);
    }
}
// error("未知错误");
// whileTrue()
// 4.11 object 表示非原始数据类型 也就是除了 string number boolean symbol 之外的类型
// 一般用于 .d.ts 类声明 其他地方使用接口代替
var obj1 = { name: "李栓但" };
// 4.12 类型断言
var obj2 = "我是字符串";
var str6 = obj2.substr(0, 2);
var str7 = obj2.substr(0, 2);
/**
 *  5. 声明
 */
var str8 = "李栓但";
var str9 = "李栓但";
var str10 = "李栓但";
/**
 *  6. 解构
 */
var arr3 = [1, 2, 3];
var one = arr3[0], two = arr3[1];
var first = arr3[0], reset = arr3.slice(1);
var Sex;
(function (Sex) {
    Sex[Sex["Man"] = 0] = "Man";
    Sex[Sex["Women"] = 1] = "Women";
})(Sex || (Sex = {}));
var person = {
    uname: "李栓但",
    age: 18,
    sex: Sex.Man
};
var uname = person.uname, age = person.age, sex = person.sex;
console.log(uname, age, sex);
