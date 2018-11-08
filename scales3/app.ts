interface IStorageEngine  {
    addItem(item:Product):void; 
    getItem(index); 
    getCount():number
}

class Product {
    private name:string;
    private weight:number;

    constructor(_name:string, _weight:number) {
        this.name = _name;
        this.weight = _weight;
    }

    getName():string {
        return this.name;
    }

    getWeight():number {
        return this.weight;
    }
}

class Scales<StorageEngine extends IStorageEngine> {

    private storage:StorageEngine;

    constructor(_storage:StorageEngine){
        this.storage=_storage;
    }
    
    add(product:Product):void{
        this.storage.addItem(product);
    } 

    getSumScale ():number {
        let sumWeight:number = 0;

        for (let i:number = 0; i < this.storage.getCount(); i++) {
            sumWeight+=this.storage.getItem(i).weight;
        };

        console.log(sumWeight);
        return sumWeight;
    };

    getNameList ():Array<string> {
        let names:Array<string> = [];

        for (let i:number = 0; i < this.storage.getCount(); i++) {
            names.push(this.storage.getItem(i).name);
        };
        
        console.log(names);
        return names;
    }
}

class ScalesStorageEngineArray  implements IStorageEngine {

    items:Array<Product> = []

    addItem(item:Product):void {
        this.items.push(item)
    }
    getItem(index) {
        return this.items[index]
    }

    getCount():number {
        return this.items.length
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    items:Array<Product> = [];
    storage = localStorage;

    addItem(item: Product):void {
        this.items.push(item);
        this.storage.setItem('Products', JSON.stringify(this.items));
    }

    getItem(index: number):Product {
        let items: Array<Product> = JSON.parse(this.storage.getItem('Products'));
        return items[index];
    }

    getCount():number {
        let items: Array<Product> = JSON.parse(this.storage.getItem('Products'));
        return items.length;
    }
}

let engineArray = new ScalesStorageEngineArray();
let engineStorage = new ScalesStorageEngineLocalStorage();

let scalesArr=new Scales<ScalesStorageEngineArray>(engineArray);

scalesArr.add(new Product('tomato-7', 40));
scalesArr.add(new Product('apple-3', 20));
scalesArr.add(new Product('tomato-10', 60));

scalesArr.getSumScale();
scalesArr.getNameList();

let scalesStorage=new Scales<ScalesStorageEngineLocalStorage>(engineStorage);

scalesStorage.add(new Product('tomato-9', 15));
scalesStorage.add(new Product('apple-4', 25));
scalesStorage.add(new Product('tomato-12', 20));

scalesStorage.getSumScale();
scalesStorage.getNameList();