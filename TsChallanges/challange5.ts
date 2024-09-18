interface Person {
    name:string;
    age?:number
}

function Greet(person:Person):void{
    console.log(`The name is ${person.name} and the age is optional Paramter ${person.age}`)
}

let person:Person ={name:'HAvis',age:2};

Greet(person);