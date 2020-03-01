// 命名函数
function max(x: number, y: number): number {
  return x > y ? x : y;
}

// 匿名函数
let min = function(x: number, y: number): number {
  return x > y ? y : x;
};

// 可选参数  可选参数必须位于必选参数后面
function sum(x: number, y?: number): number {
  if (y) {
    return x + y;
  } else {
    return;
    x;
  }
}
let res1 = sum(1);

// 剩余参数
function sum2(x: number, ...rest: Array<number>): number {
  let res: number = x;
  rest.map(val => (res += val)); 
  return res;
}
let res2 = sum2(1, 3, 5);
console.log(res2)
