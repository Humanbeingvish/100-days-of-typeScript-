class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        if(age > 0){
            this.age= age
        }
        else{
            console.log('Enter a valid number')
        }
    }

}

let person1 = new Person('DeadPool',23);
let person2 = new Person('Iron man',-1);

console.log(person1.age);
console.log(person2.age);


////

class Animal{
    name:string;
    constructor(name:string){
        if(name.length >= 3){
            this.name=name
        }
        else{
            console.log('The name of the animal should be more than 3 ')
        }
    }
}

let animal1 = new Animal('as');
let animal2= new Animal('tiger')

///

class User{
    userName:string;
    password:string;

    constructor(name:string,password:string){
        this.userName=name;
        if(password.length >= 8 &&  /\d/.test(password)){
            this.password=password
        }else{
            console.log('The password should contain at least a number')
        }
    }
}

let user1 = new User('DeadPool','qwertyui');
let validUSer = new User('SuperMan','qwertyu11');

console.log(validUSer.password)

///

class Product{
    name:string;
    price:number;
    quantity:number;
    constructor(name:string,price:number,quantity:number){
        if(name.length >= 3){
            this.name=name
        }
        else {
            console.log('The name should be more than 3 letters');
            
        }
        if(price >= 0){
            this.price =price
        }else{
            console.log('Price hsould be in postive numbers ')
        }
        if(Number.isInteger(quantity)){
            this.quantity=quantity
        }else{
            console.log('it should be an interger')
        }
    }

};

let product1 = new Product('Mexi',15000,2.2);
let validProduct = new Product('Laptop',2300,4)

console.log(validProduct)