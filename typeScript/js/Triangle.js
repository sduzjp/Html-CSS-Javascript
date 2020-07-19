"use strict";
/*
 * @Description:
 * @Author: 周健平
 * @Date: 2020-04-06 23:05:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2020-04-06 23:05:36
 */
/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
    var Triangle = /** @class */ (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("Triangle is drawn");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
