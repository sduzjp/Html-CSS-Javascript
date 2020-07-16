/*
 * @Description:外部javascript创建的web worker实例--计数器
 * @Author: 周健平
 * @department: 山东大学
 * @Date: 2020-07-16 14:29:46
 * @LastEditors: 周健平
 * @LastEditTime: 2020-07-16 15:19:05
 */
var i = 0; /* 定义全局变量*/
/* 定义计数函数 */
function timedCount() {
  i = i + 1;
  postMessage(i); /* 传数据给主线程 */
  setTimeout("timedCount()", 1000); /* 每隔一秒执行一次 */
}
/* 调用计数器函数 */
timedCount();
