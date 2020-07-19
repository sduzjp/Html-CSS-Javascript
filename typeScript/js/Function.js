"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet() {
    return "Helloworld";
}
function caller() {
    var msg = greet();
    console.log(msg);
}
caller();
console.log("----------------------------");
function add(x, y) {
    return x + y;
}
console.log(add(3, 5));
console.log("----------------------------");
//可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams");
console.log(result1);
console.log(result2);
console.log("--------------------------");
//默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    var discount = price * rate;
    console.log("计算结果：", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.1);
console.log("--------------------------");
//剩余参数
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
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
var res = function (a, b) {
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
function factorial(x) {
    if (x <= 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}
console.log(factorial(6));
console.log("--------------------------");
//Lambda函数，也称之为箭头函数。箭头函数表达式的语法比函数表达式更短
//函数只有一行语句([param1,param2,....paramn]=>statement
{
    var foo_1 = function (x) { return 10 + x; };
    console.log(foo_1(100));
    console.log("--------------------------");
}
//函数是一个语句块
var foo = function (x) {
    x = 10 + x;
    console.log(x);
};
foo(100);
console.log("--------------------------");
function disp(x) {
    console.log(x);
}
disp(10);
disp("100");
console.log("--------------------------");
function disp1(x, y) {
    console.log(x);
    console.log(y);
}
disp1(20);
disp1(20, 100);
console.log("--------------------------");
function disp2(x, y) {
    console.log(x);
    console.log(y);
}
disp2(0, "zjp");
disp2("zzz", 1);
console.log("--------------------------");
