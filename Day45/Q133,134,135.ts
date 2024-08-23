const Person = {
    name:'DeadPool',
    age:25,
    power:'Immortal',
    address:{
        street:12/12,
        Building:'69 Mansion'
    },
    isStudent:false
}

console.log(Person);

const StingfyPerson = JSON.stringify(Person);
console.log(StingfyPerson)

console.log(JSON.parse(StingfyPerson))

console.log(JSON.stringify(StingfyPerson))