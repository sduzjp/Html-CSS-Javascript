/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 22:54:53
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 22:58:35
 */
/**
 * 对象是包含一组键值对的实例。 值可以是标量、函数、数组、对象等
 */
export {};
var site = {
  site1: "Runoob",
  site2: "Google",
};
// 访问对象的值
console.log(site.site1);
console.log(site.site2);
console.log("------------------------");

var sites = {
  site1: "Runoob",
  site2: "Google",
  sayHello: function () {}, // 类型模板
};
sites.sayHello = function () {
  console.log("hello " + sites.site1);
};
sites.sayHello();
