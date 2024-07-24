function makeSandwich(...items:string[]){
    return (`These are the items ordered ${items.join(", ")}.`)
}

makeSandwich("ham", "cheese");
makeSandwich("turkey", "lettuce", "tomato");
makeSandwich("avocado", "sprouts", "mustard", "mayo");

//Q45....

function makecar(
    manufacture:string,
    modeel:string,
    ...options:[string,any][]
){
    let car ={manufacture,modeel}
    options.forEach(([key,value])=>{car[key]= value});
    return car;
}

