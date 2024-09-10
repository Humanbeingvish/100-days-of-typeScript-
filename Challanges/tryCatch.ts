function divideByNum(num1:number,num2:number){
    try {
        if(num2 === 2){
            throw new Error('Please ENter the number other than Zero')
        }else{
            let result = num1 /num2;
            console.log(result)
        }
        
        
    } catch (error) {
        console.log(`The error message: ${error.message}`)
    }
}

console.log(divideByNum(2,0))
console.log(divideByNum(22,2))


////////////////////



function checkAge(age){
    try {
        if(isNaN(age)){
            throw new Error('Please enter the age in numbers:')
        }
        
            console.log(`The Age you have entered is : ${age}`)
        
    } catch (error:any) {
        console.log(error.message)
    }
}

checkAge(34);
checkAge('35');