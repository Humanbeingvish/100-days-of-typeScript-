function strtoNum(val:string):number{
    return Number(val)
}

console.log(strtoNum('1004'));

//Q89..
function conToDec(num:number):number{
    return  Math.round(num);
};
console.log(conToDec(123.34));

//Q90..
function random():number{
return Math.floor(Math.random()*10)+1
}

console.log(random())
console.log(random())