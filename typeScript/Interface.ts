/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 22:32:18
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 22:41:22
 */
/**
 * 接口是一系列抽象方法的声明，是一些方法特征的集合
 * 这些方法都应该是抽象的，需要由具体的类去实现
 * 定义语法格式：
 * interface interface_name{
 * }
 * 接口继承：允许接口继承多个接口，继承使用关键字extends
 * 单接口继承语法格式：Child_interface_name extends super_interface_name
 * 多接口继承语法格式：Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
 *
 *
 */
export {};
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {
    return "Hi there";
  },
};

console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
console.log("--------------------------");

var employee: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => {
    return "Hello!!!";
  },
};

console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log("--------------------------");

//单继承实例
interface Person {
  age: number;
}

interface Musician extends Person {
  instrument: string;
}

var drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("年龄:  " + drummer.age);
console.log("喜欢的乐器:  " + drummer.instrument);
console.log("--------------------------");

//多继承实例
interface IParent1 {
  v1: number;
}

interface IParent2 {
  v2: number;
}

interface Child extends IParent1, IParent2 {}
var Iobj: Child = { v1: 12, v2: 23 };
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2);
console.log("--------------------------");
