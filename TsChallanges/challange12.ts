abstract class Shape {
    abstract getArea():void;
    descirbe(){
        console.log('this is a Shape')
    }
}

class Circle extends Shape{
    radius:number;
    constructor(radius:number){
        super()
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
};

class Square extends Shape{
    width:number;
    height:number;
    constructor(width:number,height:number){
        super()
        this.width=width;
        this.height=height;
    }
    getArea():number {
        return this.width * this.height
    }
}


let Shape1 = new Square(25,23);
console.log(Shape1.getArea());

let shape2 = new Circle(20);
console.log(shape2.getArea())