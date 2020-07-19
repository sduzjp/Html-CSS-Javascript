/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 22:03:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 22:26:37
 */
/**
 * 数组对象是使用单独的变量名来存储一系列的值
 * 声明数组的语法格式：
 * var array_name[:datatype]//声明
 * array_name=[val1,val2,......valn]//初始化
 * var array_name[:datatype]=[val1,val2,......valn]//直接在声明时初始化
 * 也可以使用Array对象创建数组，Array对象的构造函数接受以下两种值
 * 1：表示数组大小的数值
 * 2：初始化的数组列表，元素使用逗号分隔值
 * 数组解构
 * 可以把数组元素赋值给变量
 *
 */
export {};
//Array对象创建数组
var arr_names: number[] = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
  arr_names[i] = i * 2;
  console.log(arr_names[i]);
}
console.log("-----------------------------");

var sites: string[] = new Array("Google", "Runoob", "Taobao", "Facebook");
for (var i = 0; i < sites.length; i++) {
  console.log(sites[i]);
}
console.log("-----------------------------");

//数组解构
var arr: number[] = [12, 13];
var [x, y] = arr; // 将数组的两个元素赋值给变量 x 和 y
console.log(x);
console.log(y);
