function add(Number1:number,NumberToString:string){
    return Number1 + Number(NumberToString)
}

console.log(add(23,'22'))

//Q68...

function MultipleByNumber(num1:number,num2:number){
    return Math.round(num1 * num2 *100)/100
};

console.log(MultipleByNumber(1.2,2.4));
//

//Q69...

function DivideAndReminder(Num1:number,Num2:number):{qu:number,reminder:number}{
let qu = Math.floor(Num1/Num2)
let reminder = Num1 % Num2

return {qu,reminder}
};