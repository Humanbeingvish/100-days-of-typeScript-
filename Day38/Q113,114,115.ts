let Countries = new Map<string,string>();

Countries.set("India","New Delhi");
Countries.set("Uae",'Abu Dhabi');
Countries.set("Indo","Bali");

console.log(Countries);

console.log (Countries.has('India'));

if(Countries.has('India')){
    console.log(Countries.get('India'))
};

///////////...................................

let Students = new Map<number,string>();

Students.set(1,'Hari');
Students.set(2,'Vish');
Students.set(3,'Glo');

Students.forEach((stud ,val )=> {
    console.log(stud ,val )
})