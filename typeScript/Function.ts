/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 15:38:05
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 16:52:28
 */
/**
 * Typescript函数
 * 函数定义：function function_name(){
 * //函数体
 * }
 * 调用函数：function_name()
 * 带参数函数：
 * function func_name(param1[:datatype],param2[:datatype]){
 * //函数体
 * }
 * 可选参数和默认参数：
 * 在typescript函数里，若我们定义了参数，则必须传入这些参数才能调用
 * 除非将这些参数设置为可选，可选参数使用问号标识符？
 * 默认参数是设置参数的默认值，这样在调用函数时，如果不传入改参数的值，则使用默认参数
 * 语法格式为：function function_name(param1[:type],param2[:type]=default_value){
 * }
 * 剩余参数：
 * 不清楚需要向函数传入多少参数，剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入
 * 例如：function buildName(firstName:string,...restOfName:string[]){
 *      return firstName+""+restOfName.join(" ")
 * }
 * let employeeName=buildName("Joseph","Samuel","Lucas","Mackinzie")
 * 匿名函数：
 * 没有函数名的函数，匿名函数在程序运行时动态声明，除了没有函数名外，其他与标准函数一样
 * 语法格式：var res=function([arguments]){......}
 */
export {};
function greet(): string {
  return "Helloworld";
}
function caller() {
  var msg = greet();
  console.log(msg);
}
caller();
console.log("----------------------------");

function add(x: number, y: number) {
  return x + y;
}
console.log(add(3, 5));
console.log("----------------------------");

//可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams");
console.log(result1);
console.log(result2);
console.log("--------------------------");

//默认参数
function calculate_discount(price: number, rate: number = 0.5) {
  var discount = price * rate;
  console.log("计算结果：", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.1);
console.log("--------------------------");

//剩余参数
function addNumbers(...nums: number[]) {
  var i;
  var sum: number = 0;

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("和为：" + sum);
}
addNumbers(1, 2, 3);
addNumbers(4, 5, 6, 7, 8, 9, 10);
console.log("--------------------------");

//不带参数的匿名函数
var msg = function () {
  return "hello world";
};
console.log(msg());
console.log("--------------------------");

//带参数的匿名函数
var res = function (a: number, b: number): number {
  return a * b;
};
console.log(res(12, 12));
console.log("--------------------------");

//构造函数
var myFunction = new Function("a", "b", "return a*b");
var x = myFunction(4, 3);
console.log(x);
console.log("--------------------------");

//递归函数
function factorial(x: number): number {
  if (x <= 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
console.log(factorial(6));
console.log("--------------------------");

//Lambda函数，也称之为箭头函数。箭头函数表达式的语法比函数表达式更短
//函数只有一行语句([param1,param2,....paramn]=>statement
{
  let foo = (x: number) => 10 + x;
  console.log(foo(100));
  console.log("--------------------------");
}

//函数是一个语句块
let foo = (x: number) => {
  x = 10 + x;
  console.log(x);
};
foo(100);
console.log("--------------------------");

//函数重载：方法名字相同而参数不同，返回类型可以相同也可以不相同
//参数类型不同
function disp(str: string): void;
function disp(num: number): void;
function disp(x: any): void {
  console.log(x);
}
disp(10);
disp("100");
console.log("--------------------------");

//参数数量不同
function disp1(n1: number): void;
function disp1(x: number, y: number): void;
function disp1(x: any, y?: any): void {
  console.log(x);
  console.log(y);
}
disp1(20);
disp1(20, 100);
console.log("--------------------------");

//参数类型顺序不同
function disp2(n1: number, s1: string): void;
function disp2(s: string, n: number): void;
function disp2(x: any, y?: any): void {
  console.log(x);
  console.log(y);
}
disp2(0, "zjp");
disp2("zzz", 1);
console.log("--------------------------");
