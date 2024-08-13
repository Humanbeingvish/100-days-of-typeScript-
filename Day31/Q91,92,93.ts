let FruitArray:string[] = ["apple","IceApple","melon"];

FruitArray.push('WaterMelon');

console.log(FruitArray);

//Q92..

let FruitArray1:string[] = ["apple","IceApple","melon"];

let RemovedItem = FruitArray1.pop()

console.log(RemovedItem)

///Q93...
function ReplaceWithMangos(fruits:string[]){
    const index = fruits.indexOf('Banana')
    if(index != -1) fruits [index]='Mango'
}
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);