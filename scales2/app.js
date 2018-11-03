var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getWeight = function () {
        return this.weight;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getWeight = function () {
        return this.weight;
    };
    return Tomato;
}());
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
            return sum += item.getWeight();
        });
        var sumWeight = sum;
        console.log(sumWeight);
        return sumWeight;
    };
    ;
    Scales.prototype.getNameList = function () {
        var names = this.productsArr.map(function (item) {
            return item.getName();
        });
        console.log(names);
        return names;
    };
    return Scales;
}());
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