let numbers = [1,2,4,5,6,8,21];

let DoubleNumber=numbers.map((newN)=>{
    return newN*2
});

console.log(DoubleNumber);

//Q56...

let misList =['String','Bool',1,23.4,'hashed'];

let SortList = misList.filter((element):element is string => typeof element === 'string');
console.log(SortList);


//Q57...

let grades:number[]= [98,78,98,99,66];

let average:number = grades.length;
let total =grades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);

console.log(total/average);


//

let hariMark = [98,99,87,99,85,90];

let Avg = hariMark.length;

let Htotal = hariMark.reduce((accumulator ,currentVale)=> accumulator +currentVale ,0)

console.log(Htotal/Avg)

