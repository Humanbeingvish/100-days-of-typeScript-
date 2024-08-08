function PrintNumberwithLet(){
    for(let i =1 ; i <= 6;i++){
        console.log(i);
        }
};

PrintNumberwithLet();

//Q71...

let age = 25;

age=26;
console.log(age);

const name = 'vishnu';
try {
    name = 'hari'
} catch (e) {
    console.log('This will cause error ,as name is decalred in const');
    
};

//Q72..

{
    let BlockLet = 'This is block let';
    let Blockconst = 'This is block const'
    console.log(BlockLet);
    console.log(Blockconst);
    
    
}

try {
    console.log(BlockLet);
    
    
} catch (error) {
    console.log('Block Let is not accessible')
}

try {
    console.log(Blockconst);
} catch (error) {
    console.log('Block Const is not accessible')
}