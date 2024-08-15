function SquareRoot(val:number){
    return Math.sqrt(val)
}

console.log(SquareRoot(144));

/////

function Random(min:number,max:number){
    min = Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random() *(max - min +1))
}

console.log(Random(3.4 ,7.9));

//

function calculate(a:number ,b:number){
    return Math.abs(a-b)
}

console.log(calculate(-5 ,5))



