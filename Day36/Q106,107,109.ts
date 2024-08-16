function leapYear(year:number):boolean{
    return year % 4 === 0 
}

console.log(leapYear(2021));
console.log(leapYear(2024));

function FindTwoANdThree(val:number):boolean{
    return val % 2 === 0 && val % 3 ===0
}

console.log(FindTwoANdThree(6));
console.log(FindTwoANdThree(4));


function str(val1:string,val2:string):boolean{
    return val1.toLowerCase() == val2.toLowerCase()
}
console.log(str('string','STRING'));
console.log(str('WORLD','WOrd'))