"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Desconto_1 = require("./Desconto");
var SemDesconto = /** @class */ (function (_super) {
    __extends(SemDesconto, _super);
    function SemDesconto() {
        return _super.call(this, null) || this;
    }
    SemDesconto.prototype.deveAplicar = function (orcamento) {
        return true;
    };
    SemDesconto.prototype.efetuarCalculo = function (orcamento) {
        return 0;
    };
    return SemDesconto;
}(Desconto_1["default"]));
exports["default"] = SemDesconto;
