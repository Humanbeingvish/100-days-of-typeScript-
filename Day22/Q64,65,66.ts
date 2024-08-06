function CombineWithString(String:string,Number:number){
    return String + Number
}

console.log(CombineWithString('Age is :', 26));

///Q65....

function reminder(a:number,b:number){
    return a % b
}
console.log(reminder(10,3))


function checkBothTrue(a:Boolean ,b:Boolean){
    if(a  && b ){
        return true;
    }
    else{
        return false;
    }
}

checkBothTrue(true,true);
checkBothTrue(true,false)
