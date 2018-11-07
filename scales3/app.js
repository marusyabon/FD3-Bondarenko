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
var Scales = /** @class */ (function () {
    function Scales(_storage) {
        this.storage = _storage;
    }
    Scales.prototype.add = function (product) {
        this.storage.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumWeight = 0;
        for (var i = 0; i < this.storage.getCount(); i++) {
            sumWeight += this.storage.getItem(i).getWeight();
        }
        ;
        console.log(sumWeight);
        return sumWeight;
    };
    ;
    Scales.prototype.getNameList = function () {
        var names = [];
        for (var i = 0; i < this.storage.getCount(); i++) {
            names.push(this.storage.getItem(i).getName());
        }
        ;
        console.log(names);
        return names;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.items = [];
    }
    ScalesStorageEngineLocalStorage.prototype.createArray = function () {
        localStorage.setItem('items', JSON.stringify(this.items));
    };
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var items = JSON.parse(localStorage.getItem("items"));
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var items = JSON.parse(localStorage.getItem("items"));
        return items[index];
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var items = JSON.parse(localStorage.getItem("items"));
        return items.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var engineArray = new ScalesStorageEngineArray();
var engineStorage = new ScalesStorageEngineLocalStorage();
var scalesArr = new Scales(engineArray);
scalesArr.add(new Product('tomato-7', 40));
scalesArr.add(new Product('apple-3', 20));
scalesArr.add(new Product('tomato-10', 60));
scalesArr.getSumScale();
scalesArr.getNameList();
var scalesStorage = new Scales(engineStorage);
scalesStorage.add(new Product('tomato-9', 15));
scalesStorage.add(new Product('apple-4', 25));
scalesStorage.add(new Product('tomato-12', 20));
scalesStorage.getSumScale();
scalesStorage.getNameList();
//# sourceMappingURL=app.js.map