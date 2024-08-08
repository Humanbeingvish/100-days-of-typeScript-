function AddValue(){
     let Value = 10
    console.log(`This is the initial Value ${Value}`)
   
    Value = 20;
    console.log(`This the update Value ${Value}`)
}

AddValue()

//Q74.....

function swapValues(){
    let a =5
    let b = 10

    console.log("before Swap a =", a, "and b is" , b)

    let temp = a 
     a = b
    b = temp

    console.log("after Swap a =",a ," and b is ",b)
}

swapValues()

//Q75...

function withCompoundOperators(){
    let x = 5;

    x += 5 
    console.log(x);

    x- 5;
    console.log(x);
    
    x *=5;
    console.log(x)

    x /= 5;
    console.log(x)
}

withCompoundOperators()