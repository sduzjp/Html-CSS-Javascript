/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 22:28:09
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 22:32:04
 */
/**
 * 联合类型可以通过管道将变量设置多种类型，赋值时可以根据设置的类型来进行赋值
 * 只能赋值指定的类型，如果赋值其它类型就会报错
 * 创建联合类型的语法格式：
 * Type1|Type2|Type3//声明一个联合类型
 *
 */
//声明一个联合类型
export {};
var val: string | number;
val = 12;
console.log("数字为 " + val);
val = "Runoob";
console.log("字符串为 " + val);
