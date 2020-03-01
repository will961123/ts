/**
 *  1. 继承
 */

class Animal {
  animalName: string;
  constructor(animalName: string) {
    this.animalName = animalName;
  }
  logName() {
    console.log("this.animalName :", this.animalName);
  }
}
class Dog extends Animal {
  breed: string;
  constructor(animalName: string, breed: string) {
    super(animalName);
    this.breed = breed;
  }
  // 重写父类方法
  logName() {
    console.log("子类重写了父类的方法");
    // 重写了还想调用父类的方法
    super.logName();
  }
  logBreed() {
    console.log("this.breed :", this.breed);
  }
}
let dog1 = new Dog("狗", "狼狗");
dog1.animalName;
dog1.breed;
dog1.logName();
dog1.logBreed();

/**
 *
 *  2. 修饰符
 */

//  2.1 公共 类的属性和方法默认就是公共的 也可加public关键字
//  2.2 私有 private 关键字
//  2.3 受保护的
//  2.4 readonly 只读属性必须在声明或构造函数内初始化
class Peroson {
  private name: string;
  protected sex: string;
  readonly color: string;
  public constructor(name: string, sex: string, color: string) {
    this.name = name;
    this.sex = sex;
    this.color = color;
  }
  public move(distance: number = 0) {
    console.log(this.name + "走了" + distance);
  }
}
let p1 = new Peroson("李拴蛋", "男", "黄");
p1.move();
// p1.name // error
// p1.sex // error
p1.color;
// p1.color = 'red' // error

/**
 *
 *  3. 参数属性
 *  参数属性可以方便的让我们在一个地方定义并初始化一个成员
 *    声明和赋值合并到一处
 *    参数属性铜鼓给构造函数参数前面添加一个访问限定符来声明
 */
class Scool {
  constructor(public name: string) {
    this.name = name;
  }
}
/**
 *  4. 存储器 getters setters
 *      使用存储器 >=es5
 *      如果只实现了 get 那么他默认是readonly
 *
 */
let passCode = "1234";
class Employee {
  private _name: string;
  //  存取器
  get name(): string {
    return this._name;
  }
  set name(newName: string) {
    if (passCode === "123") {
      this._name = newName;
    } else {
      console.log("没有权限修改 ");
    }
  }
}
let p2 = new Employee();
p2.name = "李拴蛋";
p2.name; // undefined

/**
 *  5. 静态属性
 */
class Company {
  // 静态属性
  static title = "公司名";
  // 实例属性
  public college: string;
  constructor(college: string) {
    this.college = college;
  }
  logFullName(): string {
    return Company.title + this.college;
  }
}
let comp1 = new Company("部门1");
comp1.logFullName();

/**
 *  6. 抽象类
 *    1） 抽象类作为其他派生类的基类使用
 *    2） 他们一般不会被实例化
 *    3） 不同与接口 抽象类可以包含成员的实现细节
 *    4） abstract 关键字是用于定义抽象类和抽象类内部的定义抽象方法
 *  6.1 抽象方法
 *    1） 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
 *    2） 抽象方法与接口方法类似 两者都是定义方法签名 但不包含方法体
 *    3） 抽象方法必须包含 abstract 关键字并且可以包含访问修饰符
 */

//  定义一个抽象类
abstract class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  logName(): void {
    console.log(this.name);
  }
  // 抽象方法 在抽象类中声明好 必须在每一个继承的派生类中去实现
  abstract logMetting(): void;
}
class AccountDepartment extends Department {
  constructor() {
    super("财务部");
  }
  logMetting(): void {
    console.log("财务部10开会");
  }
  pay(): void {
    console.log("花钱");
  }
}
// 声明遵循规则的抽象类
let department: Department;
// department = new Department() // error 无法创建抽象类的实例
department = new AccountDepartment();
department.name;
department.logName();
department.logMetting();
// department.pay() // error 方法的声明在抽象类中不存在

/**
 *  7. 把类当做接口使用
 */
class Point {
  x:number
  y:number
}

interface Point3D extends Point{
  z:number
}
let point3D:Point3D ={x:1,y:2,z:3}