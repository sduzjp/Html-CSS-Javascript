/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 15:15:17
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 15:37:41
 */
/**
 * Typescript运算符
 * 算术运算符:+ - * / % ++ --
 * 逻辑运算符:&& || !  短路运算符&& ||
 * 关系运算符:== != > < >= <=
 * 按位运算符:& | ~ ^ << >> >>>
 * 赋值运算符:= += -= *= /=
 * 三元/条件运算符:?  Test ? expr1:expr2
 * 字符串运算符:+
 * 类型运算符:typeof instanceof
 *
 * Typescript条件语句：
 * if
 * if……else
 * if……else if……else
 * switch case
 *
 * Typescript循环语句：
 * for循环：for(init;condition;increment){statement(s);}
 * for……in循环用于一组值的集合或列表进行迭代输出：for(var val in list){//语句}.val为string或any类型
 * for……of循环：允许用来遍历Arrays，Strings，Maps，Sets
 * forEach,every,some循环：
 * while循环
 * do...while循环
 * break语句：终止循环，执行循环体外下一条语句
 * continue语句：跳过当前循环执行下一次循环
 * 无限循环（死循环）：for(;;){}  while(true){}
 *
 */

//typeof运算符
var num = 12;
console.log(typeof num);
console.log("--------------------------");

//for in循环
var j: any;
var n: any = "a b c";
for (j in n) {
  console.log(n[j]);
}
console.log("--------------------------");

//for of循环
let someArray = [1, "string", false];
for (let entry of someArray) {
  console.log(entry);
}
console.log("--------------------------");
