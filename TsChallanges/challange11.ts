abstract class Vehical{
    abstract move():void;

    startEngine(){
        console.log('Engine Started')
    }
};


class Bike extends Vehical{
    move(){
        console.log('Bike ride')
    }
};

class Car extends Vehical{
    move(): void {
        console.log('Car Drive');
        
    }
}

let bike1 = new Bike ();
bike1.move();
bike1.startEngine();


let car1 = new Car();

car1.move();
car1.startEngine();