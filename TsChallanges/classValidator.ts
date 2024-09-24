import {IsNotEmpty,IsInt, Min, validate, IsEmail,Max} from 'class-validator'

class Person{
    @IsNotEmpty()
    name:string;
@IsInt()
@Min(0)
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
  
}

const person =new Person('DeadPool',-2);

validate(person).then(errors=>{
if(errors.length === 0){
    console.log('Validation Successfull')
}else{
    console.log('Validations Failed');
    
}
});

////



class User{
    @IsNotEmpty()
    userName:string;

    @IsEmail()
    email:string;

    @Min(18)
    @Max(100)
    age:number;

    constructor(name:string,email:string,age:number){
        this.userName=name;
        this.email=email;
        this.age=age;

}
    
}

let User1 = new User('DeadPool','deadPool@gmail.com',69);
let unvalidUser = new User('SupMan','supman@mail.com',-2);

validate(User1).then(error =>{
    if(error.length ===0){
        console.log('No error found');
        
    }else{
        console.log('error Found')
    }
});

validate(unvalidUser).then(error =>{
    if(error.length ===0){
        console.log('No error found');
        
    }else{
        console.log('error Found')
    }
});

