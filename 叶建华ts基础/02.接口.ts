/**
 * 1. 接口-实现可选属性
 */
interface Circle {
  color: string;
  area: number;
}
interface CircleOptions {
  // 接口内定义可选属性
  color?: string;
  radius?: number;
  // 调用接口可以多传递更多的数据
  [propName: string]: any;
}
function createCircle(options: CircleOptions): Circle {
  let newCirlce = {
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
let circle1 = createCircle({ color: "blue" });
let circle2 = createCircle({ radius: 10 });
// 传递接口内没有定义的数据
// 1 类型断言
let circle3 = createCircle({ radius: 10, a: 1 } as CircleOptions);
// 2 字符串索引签名 接口内定义 any， [propName: string]: any;
let circle4 = createCircle({ radius: 10, a: 1, b: true });
// 3 对象赋值
let circleOptions = { radius: 10, a: 1, b: true };
let circle5 = createCircle(circleOptions);

/**
 * 2. 只读属性
 */
interface Fullname {
  readonly firstName: string;
  readonly lastName: string;
}
let p1: Fullname = { firstName: "栓但", lastName: "李" };
console.log(p1.firstName);
// p1.firstName = 1 // error

// 只读数组
let arr1: Array<number> = [1, 2, 3];
arr1.pop();
let arr2: ReadonlyArray<number> = arr1;
// arr2.pop(); // error
// arr2.length = 100; // error
// arr2[0] = 1; // error
// arr1 = arr2; // error
// arr1 = arr2 as Array<number>; // 使用类型断言强制赋值

/**
 *  3. 函数类型
 */
interface ComperFn {
  (first: number, last: number): boolean;
}
let myComperFn: ComperFn = function(a: number, b: number): boolean {
  return a > b;
};
let myComperFn2: ComperFn = function(a, b) {
  return a > b;
};

/**
 *  4. 可索引类
 */
interface StrArr {
  [index: number]: string;
}
let strArr: StrArr = ["字符", "串"];
let str1: string = strArr[0];

/**
 *  5. 类类型
 */
interface ClockInterface {
  // 属性
  currentTime: Date;
  // 方法
  logTime(d: Date);
}
class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {
    console.log("h,m :", h, m);
  }
  logTime(d: Date) {
    console.log("d :", d);
  }
}

/**
 *  6. 接口的继承
 */
interface Animal {
  // 品种
  breed: string;
}
interface Mamma {
  // 腿
  leg: number;
}
interface Cat extends Animal, Mamma {
  color: string;
}
let cat = {} as Cat;
cat.breed = "家猫";
cat.color = "白色";
cat.leg = 4