/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 23:05:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 23:05:36
 */
/// <reference path = "IShape.ts" />
namespace Drawing {
  export class Triangle implements IShape {
    public draw() {
      console.log("Triangle is drawn");
    }
  }
}
