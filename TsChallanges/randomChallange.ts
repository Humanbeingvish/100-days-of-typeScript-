interface cart{
    name:string,
    price:number,
    qunatity:number
}


class ShoppingCart{
    private item:cart[]=[]
    constructor(){}
}


function call(){
    setTimeout(()=>{
        console.log('this is timer functions')
    },5000);
}

console.log('')