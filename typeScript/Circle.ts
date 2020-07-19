/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 23:05:18
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 23:05:18
 */
/// <reference path = "IShape.ts" />
namespace Drawing {
  export class Circle implements IShape {
    public draw() {
      console.log("Circle is drawn");
    }
  }
}
