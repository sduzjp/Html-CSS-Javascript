"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//定义一个Car类
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log("发动机为 :   " + this.engine);
    };
    return Car;
}());
//static关键字
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法
//instanceof运算符
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj = new Person();
var isPerson = obj instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
