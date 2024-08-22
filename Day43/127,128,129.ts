const TraditionalFun = function (a,b){
return a + b
}

console.log(TraditionalFun(2,4))

const ArrowFun = (c ,b) =>{return c * b}

console.log(ArrowFun(6,7));


////.............

const multFun = (d,e,f,g) =>{
    return d*e*f*g
}

console.log(multFun(2,2,2,2));

const traditionalFun ={
    value:"TraditionalVsArrow",
    traditional:function (){
        console.log(`This is from t fun: ${this.value}`)
    },
    ArrowFun :()=>{
        console.log('This will not refelect ' ,this.value)
    }
}

console.log(traditionalFun.traditional());
console.log(traditionalFun.ArrowFun());