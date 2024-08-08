function calculate(a:number,b:number):number{
    return a + b ;
}

calculate(2,5)

//Q77...

function greet(Name:string = 'Hey USER'){
    
        return console.log(`Hi good evening ${Name}`)
    
}
greet('Vishnu')
greet('')

//Q78..

function Square1(num1:number){
    return num1*num1
}



const  Square2 =function (num2:number){
    return num2 * num2
}

console.log(Square1(4))
console.log(Square2(5))