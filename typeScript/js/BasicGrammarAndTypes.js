"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "helloworld";
console.log("helloworld");
console.log(message);
// 定义any类型并显示
var x = 1;
console.log(x);
x = true;
console.log(x);
console.log("--------------------------------");
//定义字符串类型
var name1 = "runoob";
var years = 5;
var words = "hello,\u4ECA\u5E74\u662F" + name1 + "\u53D1\u5E03" + (years + 1) + "\u5468\u5E74";
console.log(name1);
console.log(years);
console.log(words);
console.log("--------------------------------");
//定义布尔类型
var flag = true;
console.log(flag);
console.log("--------------------------------");
// 定义数组类型
var arr1 = [1, 2, 3, 4];
var arr2 = [0, 1, 2, 3];
console.log(arr1[0]);
console.log(arr2[0]);
console.log("--------------------------------");
// 定义元组类型
var y;
y = ["Runoob", 1];
console.log(y[0]);
console.log(y[1]);
console.log("--------------------------------");
// 定义枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
console.log("--------------------------------");
// typescript启用严格的空校验(--strictNullChecks)特性
var z;
z = 1;
console.log(z);
z = null;
console.log(z);
z = undefined;
console.log(z);
console.log("---------------------------------");
