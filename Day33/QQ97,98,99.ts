function ShowDate(){
    let today = new Date();
    return  today.toLocaleDateString()
}

console.log(ShowDate());;

/////...

function calulateNoDay(startDate:Date,endDate:Date){
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = timeDiff / (1000*60*60*24);
    return Math.round(daysDiff);
}

let start = new Date('2024-08-15');
let end = new Date('2024-12-31');

let displaydate = calulateNoDay(start , end );
console.log(`There are ${displaydate} days for the newYear`)

///

function returnMyBirth(month:number,day:number){
    let today= new Date();
    let year = new Date().getFullYear();
    let noOfDays = new Date(year ,month -1 ,day);
if (today > noOfDays){
    noOfDays.setFullYear(year  + 1)
}
return noOfDays
}

const next = returnMyBirth(2 ,10);
console.log(next)


