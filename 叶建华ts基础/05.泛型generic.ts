/**
 *  泛型
 */

/**
 *  1. 泛型变量
 *      泛型变量 它是一种特殊的变量 只用于表示类型而不是值
 */
function getNumber<T>(num: T): T {
  return num;
}
let r1 = getNumber<number>(10);
let r2 = getNumber<string>("10");
let r3 = getNumber([]);
// 泛型的扩充 T 和 数组类型
function getLength<T>(num: T[]): T[] {
  console.log(num.length);
  return num;
}

/**
 *  2. 泛型类
 *      泛型类使用 <>  括起泛型类型 跟在类名后面
 *      类有两部分：静态部分和实例部分
 *      泛型类指的是实例部分的类型 所以类的静态属性不能使用这个泛型类型
 */
class Add<T> {
  value: T;
  add: (x: T, y: T) => T;
}
let add = new Add<number>();
add.value = 100;
add.add(100, 100);

/**
 *  3. 泛型约束
 */
// 创建一个包含length属性的接口
// 传递的值一定本身具有length属性 否则报错
interface Length {
  length: number;
}
function getNum<T extends Length>(num: T): T {
  console.log(num.length);
  return num;
}

/**
 *  4. 在泛型约束中使用类型参数
 */
function getProtutype<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let person = { name: "李拴蛋", age: 18 };
getProtutype(person,'name')
// getProtutype(person,'name1') // err