const CurrentTime = new Date();

if(CurrentTime.getHours() > 12){
    console.log("Good Morning") 
}

function AssignScore(Percent:number){
    if(Percent > 90){
        return 'A'
    }
    if(Percent > 80){
        return 'B'
    }
    if(Percent > 60){
        return 'C'
    }
    if(Percent > 40){
        return 'A'
    }
    if(Percent < 30){
        return 'D'
    }
}

console.log(AssignScore(60));
console.log(AssignScore(90));
console.log(AssignScore(29));

function AgeCla(age:number){
    if(age >= 18){
        return 'Adult'
    }
    else if(age <= 18){
        return 'Adosolent'
    }
    else {
        return 'Baby'
    }
}

console.log(AgeCla(20));
console.log(AgeCla(45));
console.log(AgeCla(12));