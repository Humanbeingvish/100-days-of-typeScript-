let Primitive:string | number | boolean 

function checkType (Primitive){
    if (typeof(Primitive)=== 'string'){
        console.log("the enter value is string");
    }
    else if(typeof(Primitive)==='number'){
        console.log('The entered value is type Number')
    }
    else {
        console.log('The entered value is boolean')
    }
};

checkType('string');
checkType(56);
checkType(false)

