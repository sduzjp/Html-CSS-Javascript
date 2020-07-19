/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 22:20:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 22:27:28
 */
/**
 * 数组中元素的数据类型一般都是相同的（any[]类型的数组可以不痛）
 * 若存储的元素数据类型不同可以采用元组
 * 创建元组的语法格式：
 * var tuple_name=[value1,value2,......valuen]
 * 声明一个元组并初始化：
 * var mytuple=[10,"Runoob"]
 * 或者可以声明一个空元组然后再初始化
 * 元组的运算：
 * 1：push() 向元组添加元素，添加在最后面。
 * 2：pop() 从元组中移除元素（最后一个），并返回移除的元素。
 *
 */
export {};
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
var [b, c] = a;
console.log(b);
console.log(c);
console.log("-----------------------------");
