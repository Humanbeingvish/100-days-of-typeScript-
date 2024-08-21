const Person ={
    name:"Dead Pool",
    getname:function (){
        return this.name
    }
}
console.log(Person.getname());


////...


const Area = {
    height:4 ,
    width:5,
    GetArea:function(){
        return this.height * this.width
    }
} 
console.log(Area.GetArea());



////..

const MyObj = {
    name:'Dead Pool',
    greet: function(){
        console.log(this.name)
    const innerFunction =()=>{
          console.log(this.name ,' This is from inner Function')
         }
         innerFunction()
    }
    
}
console.log(MyObj.greet());
