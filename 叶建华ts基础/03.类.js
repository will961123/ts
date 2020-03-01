/**
 *  1. 继承
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(animalName) {
        this.animalName = animalName;
    }
    Animal.prototype.logName = function () {
        console.log("this.animalName :", this.animalName);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(animalName, breed) {
        var _this = _super.call(this, animalName) || this;
        _this.breed = breed;
        return _this;
    }
    // 重写父类方法
    Dog.prototype.logName = function () {
        console.log("子类重写了父类的方法");
        // 重写了还想调用父类的方法
        _super.prototype.logName.call(this);
    };
    Dog.prototype.logBreed = function () {
        console.log("this.breed :", this.breed);
    };
    return Dog;
}(Animal));
var dog1 = new Dog("狗", "狼狗");
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
var Peroson = /** @class */ (function () {
    function Peroson(name, sex, color) {
        this.name = name;
        this.sex = sex;
        this.color = color;
    }
    Peroson.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + "走了" + distance);
    };
    return Peroson;
}());
var p1 = new Peroson("李拴蛋", "男", "黄");
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
var Scool = /** @class */ (function () {
    function Scool(name) {
        this.name = name;
        this.name = name;
    }
    return Scool;
}());
/**
 *  4. 存储器 getters setters
 *      使用存储器 >=es5
 *      如果只实现了 get 那么他默认是readonly
 *
 */
var passCode = "1234";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "name", {
        //  存取器
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (passCode === "123") {
                this._name = newName;
            }
            else {
                console.log("没有权限修改 ");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var p2 = new Employee();
p2.name = "李拴蛋";
p2.name; // undefined
/**
 *  5. 静态属性
 */
var Company = /** @class */ (function () {
    function Company(college) {
        this.college = college;
    }
    Company.prototype.logFullName = function () {
        return Company.title + this.college;
    };
    // 静态属性
    Company.title = "公司名";
    return Company;
}());
var comp1 = new Company("部门1");
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
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.logName = function () {
        console.log(this.name);
    };
    return Department;
}());
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        return _super.call(this, "财务部") || this;
    }
    AccountDepartment.prototype.logMetting = function () {
        console.log("财务部10开会");
    };
    AccountDepartment.prototype.pay = function () {
        console.log("花钱");
    };
    return AccountDepartment;
}(Department));
// 声明遵循规则的抽象类
var department;
// department = new Department() // error 无法创建抽象类的实例
department = new AccountDepartment();
department.name;
department.logName();
department.logMetting();
// department.pay() // error 方法的声明在抽象类中不存在
/**
 *  7. 把类当做接口使用
 */
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3D = { x: 1, y: 2, z: 3 };
