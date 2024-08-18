let numbers = 12;

while(numbers > 0){
    if(numbers === 3){
        continue;}
    console.log(`this are the numbers left${numbers}`)
    numbers --
}

for(let i = 0;i <= 10;i++){
    if(i === 5){
    continue;
    }
    console.log(i)
}



function logVol(val:string){
    let vowels = 'aeiouAEIOU';
    for(const char of val ){
        if(vowels.includes(char)){
            console.log(`First Vowel found :${char}`);
            break;
        }
        console.log(char)
    }
}

console.log(logVol('Vishnu'));
console.log(logVol('Dead Pool'));