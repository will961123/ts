/**
 * 编译 tsc index.ts
 */

/**
 * 1. 类型注解
 */

function log(msg: string) {
  console.log(msg);
}
log("字符串");

/**
 * 2. 接口
 */
// 定义接口注解
interface People {
  name: string;
  age: number;
}
// 使用注解
function logPeople(people: People) {
  console.log(`姓名:${people.name},年龄:${people.age}`);
}
logPeople({ name: "李栓蛋", age: 18 });

/**
 * 3. 类
 */

class Dog {
  dogName: string;
  dogAge: number;

  constructor(dogName: string, dogAge: number) {
    this.dogName = dogName;
    this.dogAge = dogAge;
  }
  say() {
    console.log("我是" + this.dogName);
  }
  eat(foots: string) {
    console.log(this.dogName + "在吃" + foots);
  }
}
let dog = new Dog("旺财", 18);
dog.eat("狗粮");

/**
 * 4. 数据类型
 */

// 4.1 字符串
let dogName: string = "旺财";
let dogSex: string = "公";
let initDog: string = `我有一只狗,他叫${dogName},他是${dogSex}的`;

// 4.2 数字
let num1: number = 16;
let num2: number = 0x10; //16 进制的16
let num3: number = 0o2; //8 进制的16
let num4: number = 0b10000; //2 进制的16
console.log(num1, num2, num3, num4);

// 4.3 布尔
let flag: boolean = true;

// 4.4 数组 (数组内只有一种类型)
let numArr1: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];
let strArr1: string[] = ["1", "2", "3"];
let boolArr1: Array<boolean> = [false];

// 4.5 元组 Tuple (数组内有多种类型 已知数量已知类型)
let tuple: [string, number, boolean] = ["1", 1, false];

// 4.6 枚举 enum  定义的数据值默认从0开始
enum Color {
  red, // 0 1
  black
  // red = 2, // 2 3
  // black
  // red = 2,
  // black = 8, // 2 8 9
}
// 通过枚举的名字得到值
let color1: Color = Color.red;
let color2: Color = Color.black;
// 通过枚举的值的到名字
let colorName1: string = Color[0];
let colorName2: string = Color[1];
console.log(color1, color2, colorName1, colorName2);

// 4.7 any 任意类型
let str: any;
str = "any";
str = 1;
str = true;

// 4.8 void 没有类型
let str2: void;
str2 = null;
str2 = undefined;
function logMsg(): void {
  console.log("void类型");
}
logMsg();

// 4.9 null undefined 是所有类型的子类型
let str3: null = null;
let str4: undefined = undefined;
let str5: number = null;

// 4.10 never 永不存在的值的类型 必须存在永远无法到达的终点
function error(msg: string): never {
  throw new Error(msg);
}
function whileTrue(): never {
  while (true) {
    console.log(1);
  }
}
// error("未知错误");
// whileTrue()

// 4.11 object 表示非原始数据类型 也就是除了 string number boolean symbol 之外的类型
// 一般用于 .d.ts 类声明 其他地方使用接口代替
let obj1: object = { name: "李栓但" };

// 4.12 类型断言
let obj2: any = "我是字符串";
let str6: string = (<string>obj2).substr(0, 2);
let str7: string = (obj2 as string).substr(0, 2);

/**
 *  5. 声明
 */
var str8 = "李栓但";
let str9 = "李栓但";
const str10 = "李栓但";

/**
 *  6. 解构
 */
let arr3: Array<number> = [1, 2, 3];
let [one, two] = arr3;
let [first, ...reset] = arr3;

enum Sex {
  Man,
  Women
}
interface Person {
  uname: string;
  age: number;
  sex: Sex;
}
let person: Person = {
  uname: "李栓但",
  age: 18,
  sex: Sex.Man
};
let { uname, age, sex } = person;
console.log(uname, age, sex);
