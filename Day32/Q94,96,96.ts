let number = [1 , 2, 3,4,5 ]
let doubledNUmber = number.map(num => num * 5);
console.log(doubledNUmber);

let fruits = ['Apple', 'IceApple','Orange'];
let NewFruits = fruits.map(fruit => fruit + ' Fruits')
console.log(NewFruits);

let LenArray = fruits.map( (fruit )=> fruit.length);
console.log(LenArray)
/////...

//Q96...

let numbers:number[] = [1,2,3,8,9,11];
let GreaterNum = numbers.filter(num => num > 10);
console.log(GreaterNum)

let add= numbers.reduce((total,currentBal)=>{
    return total + currentBal
},10)

console.log(add);//

//////

let AddnumList = [1,10,100,1000];

let fiterNum = AddnumList.filter(num => num > 20);
let ReduceNum = AddnumList.reduce((a ,ab) =>{
return a +ab
},0);
let MapNum = AddnumList.map(num => num * 2);

console.log(fiterNum ,ReduceNum,MapNum)

////
//Q96......

let QArray:number[] =[1,2,3,4,5];

let sum = QArray.reduce((add ,Zero)=>{return add + Zero},0);
 console.log(sum)






