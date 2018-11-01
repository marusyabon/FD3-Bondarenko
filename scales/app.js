var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.productsArr = [];
    }
    Scales.prototype.add = function (product) {
        this.productsArr.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        this.productsArr.forEach(function (item) {
            return sum += item.weight;
        });
        var sumWeight = sum;
        console.log(sumWeight);
        return sumWeight;
    };
    ;
    Scales.prototype.getNameList = function () {
        var names = this.productsArr.map(function (item) {
            return item.name;
        });
        console.log(names);
        return names;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getWeight = function () {
        return this.weight;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, weight) {
        var _this = _super.call(this, name, weight) || this;
        _this.type = 'fruit';
        return _this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, weight) {
        var _this = _super.call(this, name, weight) || this;
        _this.type = 'vegetable';
        return _this;
    }
    return Tomato;
}(Product));
var scales = new Scales;
scales.add(new Tomato('tomato-7', 40));
scales.add(new Apple('apple-3', 20));
scales.add(new Tomato('tomato-10', 60));
scales.getSumScale();
scales.getNameList();
var newScales = new Scales;
newScales.add(new Tomato('tomato-8', 11));
newScales.add(new Apple('apple-55', 42));
newScales.add(new Apple('apple-5', 39));
newScales.add(new Tomato('tomato-14', 21));
newScales.add(new Tomato('tomato-4', 19));
newScales.getSumScale();
newScales.getNameList();
//# sourceMappingURL=app.js.map