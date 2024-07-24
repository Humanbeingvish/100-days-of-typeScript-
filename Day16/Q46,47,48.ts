let Laptop ={
    make: "Dell",
  model: "New Elite Series",
  year: 2024,
  descibe:function(){
    return `The is the ${this.make} and this is model${this.model}`
  }
}

Laptop.descibe()

//Q47.....
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 },
  ];

  let [l1,l2] =laptops;
  console.log(l1);
  console.log(l2);


  ///Q48....
  let Price =[1200,1000,2000];
  let Price1 =[2000,3200,1234];

  let NewPrice =[...Price,...Price1].sort((a,b)=> a -b);

  console.log(NewPrice);