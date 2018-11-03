
interface IScalable {

    getName():string;
    getWeight():number;
   
}

class Apple implements IScalable {
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

class Tomato implements IScalable {
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

class Scales {

    productsArr:Array<IScalable> = [];
    
    add(product:IScalable):void{
        this.productsArr.push(product);
    } 

    getSumScale ():number {
        let sum:number = 0;

        this.productsArr.forEach(item =>
            sum+=item.getWeight()
            );

        let sumWeight:number = sum;
        console.log(sumWeight);

        return sumWeight;
    };

    getNameList ():Array<string> {
        let names:Array<string> = this.productsArr.map(item =>
            item.getName()
            );
        console.log(names);
        return names;
    }

}

let scales:Scales=new Scales;

scales.add(new Tomato('tomato-7', 40));
scales.add(new Apple('apple-3', 20));
scales.add(new Tomato('tomato-10', 60));

scales.getSumScale();
scales.getNameList();

let newScales:Scales=new Scales;

newScales.add(new Tomato('tomato-8', 11));
newScales.add(new Apple('apple-55', 42));
newScales.add(new Apple('apple-5', 39));
newScales.add(new Tomato('tomato-14', 21));
newScales.add(new Tomato('tomato-4', 19));

newScales.getSumScale();
newScales.getNameList();