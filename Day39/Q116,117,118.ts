let day = 1;

switch (day) {
    case 1:
        console.log('Monday')
        break;
        case 2:
        console.log('Tuesday')
        break;
        case 3:
        console.log('Wednesday')
        break;
        case 4:
        console.log('Thursday')
        break;
        case 5:
        console.log('Friday')
        break;
        case 6:
        console.log('Saturday')
        break;
        case 7:
        console.log('Sunday')
        break;

    default:
        console.log('Enter a vaild day Num to execute the switch cases')
        break;
}

function logSeason(month:number){
    switch (month) {
        case 10:
            case 11:
                case 12:
                    console.log("Winter Season")
            
            break;
            case 8:
                case 7:
                    case 6:
                        console.log('Autmnn Season')
                        break;
                        case 5:
                            case 4:
                                case 3:
                                    console.log('Rainy Season ')
    
        default:
            console.log('It summer Season')
            break;
    }
}

console.log(logSeason(12));
console.log(logSeason(1));

function Evaluate(grade:string){
    switch (grade) {
        case 'A':
            console.log("Topper")   
            break;
        case 'B':
            console.log("Good");
            break;
        case 'C':
            console.log("Passed");
            break;
        case 'D':
            console.log("Just Passed");
            break;
        case 'E':
            console.log('Failed')
        default:
            console.log("Enter a vaild Grade");
            break;
    }
}

Evaluate('A');
Evaluate('N');