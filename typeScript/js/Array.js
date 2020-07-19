"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Array对象创建数组
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
console.log("-----------------------------");
var sites = new Array("Google", "Runoob", "Taobao", "Facebook");
for (var i = 0; i < sites.length; i++) {
    console.log(sites[i]);
}
console.log("-----------------------------");
//数组解构
var arr = [12, 13];
var x = arr[0], y = arr[1]; // 将数组的两个元素赋值给变量 x 和 y
console.log(x);
console.log(y);
