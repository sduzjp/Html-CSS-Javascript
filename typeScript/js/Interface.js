"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () {
        return "Hi there";
    },
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
console.log("--------------------------");
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () {
        return "Hello!!!";
    },
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log("--------------------------");
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("年龄:  " + drummer.age);
console.log("喜欢的乐器:  " + drummer.instrument);
console.log("--------------------------");
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2);
console.log("--------------------------");
