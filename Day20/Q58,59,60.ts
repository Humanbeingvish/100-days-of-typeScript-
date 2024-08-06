function calculateAvg(...scores:number[]){
let total = scores.reduce((sum,val)=> sum +val ,0);
let Avg= scores.length;
return total/Avg;
};

console.log(calculateAvg(55,50,55,50,50));

//Q59....

function valToAdded(valAdd:number){
    function magic (number:number):number{
        return valAdd + number
    }
    return magic
}

let magicnumber =valToAdded(5);

console.log(magicnumber(20));


//Q60...

function UserProfile(name:string,age:number){
    class display{
        Name:string;
        Age:number 

        constructor(Name:string,Age:number){
            this.Name =Name;
            this.Age=Age
        }
    }

    let UserProfile = new display(name ,age);

    console.log(`The name of the user  ${UserProfile.Name} and${UserProfile.Age}`)
}

UserProfile('Vishnu',32)