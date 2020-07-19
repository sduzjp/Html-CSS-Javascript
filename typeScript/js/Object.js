"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    sayHello: function () { },
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();
