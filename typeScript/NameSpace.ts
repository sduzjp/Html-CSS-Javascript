/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 22:59:48
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 23:28:28
 */
/**
 * 命名空间：解决重名问题
 * 命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的。
 * 命名空间使用namespace定义
 * 语法格式：
 * namespace SomeNameSpaceName {
 * export interface ISomeInterfaceName {      }
 * export class SomeClassName {      }
 *  }
 * 定义了一个命名空间 SomeNameSpaceName
 * 如果我们需要在外部可以调用 SomeNameSpaceName 中的类和接口，则需要在类和接口添加 export 关键字。
 * 另外一个命名空间调用语法格式为
 * SomeNameSpaceName.SomeClassName;
 * 如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它
 * 语法格式为：/// <reference path = "SomeFileName.ts" />
 *
 */
/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
/// <reference path = "Triangle.ts" />
function drawAllShapes(shape: Drawing.IShape) {
  shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
