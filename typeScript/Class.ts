/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 22:42:09
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 22:53:46
 */
/**
 * 类描述了所创建的对象共同的属性和方法
 * Typescript支持面向对象的所有特性，比如类、接口等
 * 类定义方式如下：
 * class class_name{
 * //类作用域
 * }
 * 定义类的关键字为class,后面紧跟类名
 * 字段：字段是类里面声明的变量，字段表示对象的有关数据
 * 构造函数：类实例化时调用，可以为类的对象分配内存
 * 方法：方法为对象要执行的操作
 *
 * 类的继承
 * 类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。
 * TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）。
 * 继承语法格式：
 * class child_class_name extends parent_class_name
 *
 * 类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。
 *
 * static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用
 *
 * instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
 *
 * public（默认） : 公有，可以在任何地方被访问。
 * protected : 受保护，可以被其自身以及其子类和父类访问。
 * private : 私有，只能被其定义所在的类访问。
 *
 * 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
 *
 */
export {};

//定义一个Car类
class Car {
  // 字段
  engine: string;

  // 构造函数
  constructor(engine: string) {
    this.engine = engine;
  }

  // 方法
  disp(): void {
    console.log("发动机为 :   " + this.engine);
  }
}

//static关键字
class StaticMem {
  static num: number;

  static disp(): void {
    console.log("num 值为 " + StaticMem.num);
  }
}

StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法

//instanceof运算符
class Person {}
var obj = new Person();
var isPerson = obj instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
