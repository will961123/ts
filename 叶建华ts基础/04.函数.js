// 命名函数
function max(x, y) {
    return x > y ? x : y;
}
// 匿名函数
var min = function (x, y) {
    return x > y ? y : x;
};
// 可选参数  可选参数必须位于必选参数后面
function sum(x, y) {
    if (y) {
        return x + y;
    }
    else {
        return;
        x;
    }
}
var res1 = sum(1);
// 剩余参数
function sum2(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var res = x;
    rest.map(function (val) { return (res += val); });
    console.log(rest);
    return res;
}
var res2 = sum2(1, 3, 5);
console.log(res2);
