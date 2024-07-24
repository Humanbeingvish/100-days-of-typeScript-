function  listHobbies (...hobbies:string[]){
return hobbies.forEach((hobby)=>{
console.log(`These are the hobbies listed ${hobby}`)
})
}


listHobbies('Bookreading','gym','movies');

//Q50.....

let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;

console.log(myIdealDay);

//Q51.....


function TraditionalFunction (width:number,height:number):number {
    return width * height;
};

let  refactoredFunction =(width:number,height:number):number => (width * height);
