let  GuestList:string[] =["SpiderMan ","DeadPool","WonderWomen","Captain America","Thor"];

GuestList.forEach(guest=>{
    console.log(`This is the list of People who is available for dinner${guest}`);
})

const NotAttend:string='SpiderMan';
console.log(`He cannot attend${NotAttend}`);



let NewGuest = "SuperMan"
GuestList[GuestList.indexOf(NotAttend)]= NewGuest;

GuestList.forEach(guest =>{
    console.log(`New guest has been invited ${guest}`);
    
});

console.log('Found a bigger table for all ');

GuestList.unshift('x-men');
GuestList.splice(2,0,'blackwidow')
GuestList.push("Ant-man");

console.log(GuestList);


GuestList.forEach(guest =>{
    console.log(`New list Has been added...........${guest}`)
})

//exercise 17

console.log('ONly two people are allowed');

while (GuestList.length >2) {
    let removeGuest = GuestList.pop();
    console.log(`Sorry we cant invite you all ${removeGuest}`);
    
    
}

//exercise 18;

let favLocations:string[]= ["Dubai","Coimbatore","Erode","Gorgia","Armenia"];
console.log(favLocations);

favLocations.sort();
console.log(favLocations);

// pending ................

