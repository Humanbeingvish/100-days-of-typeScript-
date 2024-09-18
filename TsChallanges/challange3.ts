function returnString(value:string| number){
if(typeof(value)=== "string"){
    console.log(`The value is type of String ${value}`);
    
}
else{
    console.log(`The value is of type Number ${value}`)
}
}

console.log(returnString(2));
console.log(returnString('Two'))