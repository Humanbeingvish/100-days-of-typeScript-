interface Person{
    name:string;
    age:number;
};

function GreetPerson(person:Person):void{
    console.log(`Hi ${person.name} and his age is ${person.age}`);
}
let person :Person ={name:'DeadPool',age:69}
console.log(GreetPerson(person));
