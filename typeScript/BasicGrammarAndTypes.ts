/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-05 17:05:03
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 17:30:32
 */
/**
 * typescript基础语法：
 * tsc命令编译：将ts文件编译生成js文件，可以同时编译多个ts文件
 * node命令执行js文件代码
 * tsc常用编译参数和typescript保留关键字查表
 * typescript忽略程序中出现的空格、制表符和换行符
 * typescript区别大小写
 * typescript是一种面向对象的编程语言
 *
 * typescript基础类型：
 * 任意类型：any，声明为any的变量可以赋予任意类型的值
 * 数字类型：number，双精度64位浮点值，可以用来表示整数和分数
 * 字符串类型：string，字符系列，使用单引号和双引号来表示字符串类型，反引号定义多行文本和内嵌表达式
 * 布尔类型：boolean，逻辑值true和false
 * 数组类型：无，声明变量为数组。在元素类型后面加上[]:let arr：number[]=[1,2];使用数组泛型：let arr:Array<number>=[1,2]
 * 元组：无，元组类型用来表示已知元素数量和类型的数组，各元素类型不必相同，对应位置的类型需要相同
 * 枚举：enum，枚举类型用于定义数值集合
 * void：void，用于标识方法返回值的类型，表示无返回值
 * null：null，表示对象值缺失
 * undefined：undefined，用于初始化变量为一个未定义的值
 * never：never，是其他类型（包括null和undefined）的子类型
 *
 */
export {};
var message: String = "helloworld";
console.log("helloworld");
console.log(message);

// 定义any类型并显示
var x: any = 1;
console.log(x);
x = true;
console.log(x);
console.log("--------------------------------");

//定义字符串类型
var name1: string = "runoob";
var years: number = 5;
var words: string = `hello,今年是${name1}发布${years + 1}周年`;
console.log(name1);
console.log(years);
console.log(words);
console.log("--------------------------------");

//定义布尔类型
var flag: boolean = true;
console.log(flag);
console.log("--------------------------------");

// 定义数组类型
var arr1: number[] = [1, 2, 3, 4];
var arr2: Array<number> = [0, 1, 2, 3];
console.log(arr1[0]);
console.log(arr2[0]);
console.log("--------------------------------");

// 定义元组类型
var y: [string, number];
y = ["Runoob", 1];
console.log(y[0]);
console.log(y[1]);
console.log("--------------------------------");

// 定义枚举类型
enum Color {
  Red,
  Yellow,
  Blue,
}
var c: Color = Color.Blue;
console.log(c);
console.log("--------------------------------");

// typescript启用严格的空校验(--strictNullChecks)特性
var z: number | null | undefined;
z = 1;
console.log(z);
z = null;
console.log(z);
z = undefined;
console.log(z);
console.log("---------------------------------");
