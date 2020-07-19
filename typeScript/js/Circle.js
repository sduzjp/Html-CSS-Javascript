"use strict";
/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 23:05:18
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 23:05:18
 */
/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
