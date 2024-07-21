let favPizza: string[] = ["Margitta", "Pepproni", "tikka"];

favPizza.forEach((pizza) => {
  console.log(`I like ${pizza}`);
});
console.log("I really love Pizza");

//Q35..
let FavAnimal: string[] = ["Dig", "cat", "Lion"];

FavAnimal.forEach((animal) => {
  console.log(`I love this animal ${animal}`);
});
console.log("Any of these animal could be pet");

//Q36..

function maketshirt(size: number, message: string) {
  console.log(`This is the size ${size} and the message is ${message}`);
}

maketshirt(42,"guts and glory");