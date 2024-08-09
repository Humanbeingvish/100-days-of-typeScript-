function findstr(str:string):number{
    return str.indexOf("marriage");
}

console.log(findstr("Alice weds marriage Bob"));

//Q86...

function findstr1(val:string){
return val.includes("TypeScript")
}

console.log(findstr1('I love TypeScript'));

//Q87...

function subString(value:string){
    return value.slice(0,11)
}

console.log(subString('abcdefghij'));