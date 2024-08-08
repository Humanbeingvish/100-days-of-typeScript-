interface car {
    name:string;
    model:string;
    year:number
}
let Tesla:car= {name:'x',model:'2012',year:2024}

let car1= {
    name:"Porsche",
    model:'911',
    year:2024
}

console.log(car1.model)

//Q80..

// //let Car2 ={
//     name:"Porsche",
//     model:'911',
//     year:2024
// }

// Car2.colour='Red';
// Car2.year = 2025

//console.log(Car2)

//Q81....

let Car2 ={
    name:"Porsche",
    model:'911',
    year:2024
}

function show(a:any){
    return a 
}

console.log(show(Car2))