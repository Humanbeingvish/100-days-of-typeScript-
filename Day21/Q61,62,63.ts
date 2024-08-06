export enum vehicles {
car,
truck,
Motorcycle
}

console.log(vehicles.Motorcycle)

//Q62.....

interface StudentTemplate{
    name:string;
    age:number;
    classes:string[]
};

let student1 :StudentTemplate = {name:'vishnu',age:26,classes:['Psychology','English']}

console.log(student1);

//Q63....

type Shape ={
    kind:'Circle' | 'Rectangle';
    radius?:number;
    width?:number;
    height?:number;
}


let Circle :Shape ={
    kind: 'Circle',
    radius:20
}

let Rectangle :Shape ={
    kind: 'Rectangle',
    height:25,
    width:30,
}

console.log(Circle,Rectangle);
