function createCircle(options) {
    var newCirlce = {
        color: "red",
        area: 100
    };
    if (options.color) {
        newCirlce.color = options.color;
    }
    if (options.radius) {
        newCirlce.area = options.radius * Math.PI;
    }
    return newCirlce;
}
var circle1 = createCircle({ color: "blue" });
var circle2 = createCircle({ radius: 10 });
// 传递接口内没有定义的数据
// 1 类型断言
var circle3 = createCircle({ radius: 10, a: 1 });
// 2 字符串索引签名 接口内定义 any， [propName: string]: any;
var circle4 = createCircle({ radius: 10, a: 1, b: true });
// 3 对象赋值
var circleOptions = { radius: 10, a: 1, b: true };
var circle5 = createCircle(circleOptions);
var p1 = { firstName: "栓但", lastName: "李" };
console.log(p1.firstName);
// p1.firstName = 1 // error
// 只读数组
var arr1 = [1, 2, 3];
arr1.pop();
var arr2 = arr1;
var myComperFn = function (a, b) {
    return a > b;
};
var myComperFn2 = function (a, b) {
    return a > b;
};
var strArr = ["字符", "串"];
var str1 = strArr[0];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        console.log("h,m :", h, m);
    }
    Clock.prototype.logTime = function (d) {
        console.log("d :", d);
    };
    return Clock;
}());
var cat = {};
cat.breed = "家猫";
cat.color = "白色";
cat.leg = 4;
