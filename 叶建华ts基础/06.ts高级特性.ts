/**
 *  1. 联合类型
 */
// 实现 传递字符串直接拼接 传递数字拼接空格
function padLeft(str: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding).join(" ") + str;
  }
  if (typeof padding === "string") {
    return padding + str;
  }
}
padLeft("李拴蛋", 5);
padLeft("李拴蛋", "我是");
// padLeft("李拴蛋", []); // err

/**
 *  2. 类型保护
 */

interface Brid {
  sleep();
  fly();
}
interface Fish {
  sleep();
  swim();
}
function getPet(): Brid | Fish {
  return;
}
let pet = getPet();
pet.sleep();
// pet.fly() // err
//  使用断言
if (pet as Brid) {
  (pet as Brid).fly();
} else {
  (pet as Fish).swim();
}

/**
 *  3. 自定义的类型保护
 *      谓词 p is type
 */

function ifBrid(pet: Brid | Fish): pet is Brid {
  return (pet as Brid).fly !== undefined;
}
if (ifBrid(pet)) {
  pet.fly();
} else {
  pet.swim();
}

/**
 *  instanceof 类型保护
 */
class Pig {
  eat() {
    console.log("猪再吃");
  }
  sleep() {
    console.log("猪再睡");
  }
}
class Dog {
  wang() {
    console.log("狗再叫");
  }
  sleep() {
    console.log("狗再睡");
  }
}
function getPet2() {
  return Math.random() > 0.5 ? new Pig() : new Dog();
}
let pet2 = getPet2();
pet2.sleep();
// pet2.eat() // err

if (pet instanceof Pig) {
  pet.eat();
} else if (pet instanceof Dog) {
  pet.wang();
}

/**
 *  5. 可以为null的类型
 *      默认情况下 null 和 undefined 可以赋值给任意类型的变量
 *      --strictNullChecks 标记可以阻止 当你声明一个变量时 他不会自动的包含 null undefined
 */
let s:string = "李拴蛋";
s = null;
s = undefined;
//  编译时候 --strictNullChecks