class Car {
    make:string;
    private year:number

    constructor(make:string,year:number){
        this.make=make;
        this.year=year
    }
    getDetails(){
        console.log(`The make is ${this.make} and the year is ${this.year}`)
    }
}

let car1= new Car ('LEXUS',2023);

car1.getDetails();