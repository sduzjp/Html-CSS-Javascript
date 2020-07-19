"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Typescript Number 属性：");
console.log("最大值为:" + Number.MAX_VALUE);
console.log("最小值为:" + Number.MIN_VALUE);
console.log("负无穷大:" + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);
console.log("--------------------------------");
//NaN实例
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("月份为：" + month);
}
else {
    console.log("输入月份数值正确");
}
console.log("--------------------------------");
//prototype实例
// function employee(id: number, name: string) {
//   this.id = id;
//   this.name = name;
// }
// var emp = new employee(123, "admin")
// employee.prototype.email = "admin@runoob.com"
//toExponential(),把对象的值转换为指数计数法
var num1 = 1225.3;
var val = num1.toExponential();
console.log(val);
console.log("-------------------------------");
//toFixed(),把数字转换为字符串，并对小数点指定位数
var num2 = 177.234;
console.log("num2.toFixed()为" + num2.toFixed());
console.log("num2.toFixed(2)为" + num2.toFixed(2));
console.log("num2.toFixed(6)为" + num2.toFixed(6));
console.log("-------------------------------");
//toLocaleString()，把数字转换为字符串，使用本地数字格式顺序
var num3 = new Number(177.1234);
console.log(num3.toLocaleString());
console.log("-------------------------------");
//toPrecision，把数字格式化为指定的长度
var num4 = new Number(7.123456);
console.log(num4.toPrecision());
console.log(num4.toPrecision(1));
console.log(num4.toPrecision(2));
console.log("-------------------------------");
//toString，把数字转换为字符串，使用指定的基数。数字的基数为2~36之间的整数。若省略该参数，则使用基数10
var num5 = new Number(10);
console.log(num5.toString());
console.log(num5.toString(2));
console.log(num5.toString(8));
console.log("-------------------------------");
//valueOf，返回一个Number对象的原始数字值
var num6 = new Number(10);
console.log(num6.valueOf());
console.log("-------------------------------");
