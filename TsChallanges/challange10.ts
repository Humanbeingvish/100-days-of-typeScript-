class Animal{
        makeSound(){
            console.log('This is a generic sound');
        }
}

class Dog extends Animal{
    makeSound(): void {
        console.log('Dog barks')
    }
}

class Cat extends Animal{
    makeSound(): void {
        console.log('Cat Meowww')
    }
};

let dot = new Dog ;

dot.makeSound()