interface Person{
    name:string;
    age:number;
    greet():string;
}

class Student implements Person{
    name:string;
    age:number;
    studentId:number;
    constructor(name:string,age:number,studentId:number){
        this.name=name;
        this.age=age;
        this.studentId=studentId
}
greet(): string {
   return `Hi Good Morning ${this.studentId}`
}
};

 function introduce(person:Person){
    return person.greet()
};

let Person1 = new Student ('dead Pool',69,1234);

console.log(Person1.greet())

