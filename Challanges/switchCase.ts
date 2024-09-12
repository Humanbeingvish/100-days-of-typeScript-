class Product{
    productName:string;
    code:string;
    price:number;
    stock:number
    constructor(name:string,code:string,price:number,stock:number){
        this.productName=name;
        this.code=code;
        this.price=price;
        this.stock=stock;
    }
}

class VendingMachine{
products:Product[]= [];
    
addProduct(product:Product){
    this.products.push(product);
}
}