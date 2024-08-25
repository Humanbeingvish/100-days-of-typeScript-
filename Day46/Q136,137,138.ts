for (let i = 0 ; i <=5;i++){
    console.log(`The value of i is ${i}`)
};

function Calac(a:number,b:number){
    try {
        if (a * b === 0) {
            console.log('The if condition is executed')
        } else {
            console.log('Else conditon is executed')
        }
    } catch (error) {
        console.log(error.message)
    }
}

Calac(0,0);
Calac(2,10);

///...
