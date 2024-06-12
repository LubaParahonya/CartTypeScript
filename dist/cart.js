"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    ;
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Cart.prototype.sumCost = function () {
        var sum = this._items.reduce(function (accumulator, currentValue) {
            accumulator + (currentValue.amount * currentValue.price);
        }, 0);
        return sum;
    };
    ;
    Cart.prototype.sumCostDiscont = function (discont) {
        var sum = this._items.reduce(function (accumulator, currentValue) {
            accumulator + (currentValue.amount * currentValue.price);
        }, 0);
        var sumDiscont = sum * (discont / 100);
        return sum - sumDiscont;
    };
    ;
    Cart.prototype.deleteItem = function (item) {
        var arrId = [];
        this._items.forEach(function (i) {
            arrId.push(i.id);
        });
        if (arrId.indexOf(item.id)) {
            this._items.slice(this._items.findIndex(function (n) { return n.id === item.id; }), 1);
        }
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=cart.js.map