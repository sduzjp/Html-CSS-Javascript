"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 创建元组
var mytuple = [10, "Runoob"];
console.log(mytuple[0]);
console.log(mytuple[1]);
console.log("-----------------------------");
//元组运算
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("添加前元素个数：" + mytuple.length); // 返回元组的大小
mytuple.push(12); // 添加到元组中
console.log("添加后元素个数：" + mytuple.length);
console.log("删除前元素个数：" + mytuple.length);
console.log(mytuple.pop() + " 元素从元组中删除"); // 删除并返回删除的元素
console.log("-----------------------------");
console.log("删除后元素个数：" + mytuple.length);
//元组可变
var mytuple = [10, "Runoob", "Taobao", "Google"]; // 创建一个元组
console.log("元组的第一个元素为：" + mytuple[0]);
// 更新元组元素
mytuple[0] = 121;
console.log("元组中的第一个元素更新为：" + mytuple[0]);
console.log("-----------------------------");
//元组可以解构，将元组元素赋值给变量
var a = [10, "Runoob"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
console.log("-----------------------------");
