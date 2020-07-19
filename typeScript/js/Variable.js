"use strict";
/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-05 20:18:54
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 15:13:58
 */
/**
 * typescript变量声明
 * 命名规则：可以包含数字和字母；除了下划线和美元符号外，不能包含其它特殊字符，包括空格
 * 变量名不能以数字开头
 * 变量使用之前必须先声明，使用var来声明变量
 * 声明变量类型和初始值：var [变量名]:[类型] = 值
 * 声明变量类型，不初始化，变量值会设置为undefined：var [变量名]:[类型]
 * 声明变量并初始化但不设置类型：var [变量名]=值
 * 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为undefined。var [变量名]
 *
 * 类型断言：可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
 * <类型>值 或者 值 as 类型
 *
 * 变量作用域：全局作用域、类作用域、局部作用域
 * 全局作用域：全局变量定义在程序结构的外部，可以在代码的任何位置使用
 * 类作用域：这个变量也可以称为字段。类变量声明在一个类里面，但在类的方法外面
 *      类的变量可以是静态的，静态的变量可以通过类名直接访问
 * 局部作用域：局部变量，只能在声明它的一个代码块中使用
 */
//变量定义声明
var name2 = "zjp";
var score = 100.0;
var score1;
var score2 = 90.0;
var score3;
score1 = 95.0;
score3 = 99.0;
console.log("学生姓名：" + name2);
console.log("第一个科目成绩为" + score);
console.log("第二个科目成绩为" + score1);
console.log("第三个科目成绩为" + score2);
console.log("第四个科目成绩为" + score3);
console.log("------------------------------------");
//类型断言
var str = "1";
var str2 = str;
console.log(str2);
console.log("------------------------------------");
//变量作用域
var globalNum = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.numVal = 13;
    }
    Numbers.prototype.storeNum = function () {
        var localNum = 14;
        return localNum;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("全局变量为：" + globalNum);
console.log("静态变量为：" + Numbers.sval);
var obj1 = new Numbers();
console.log("实例变量为：" + obj1.numVal);
console.log("局部变量为：" + obj1.storeNum());
console.log("------------------------------------");
