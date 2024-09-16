class Student{
name:string;
marks:number[];

constructor(name: string) {
    this.name = name;
    this.marks=[]
  }
public addMarks(mark:number){
this.marks.push(mark);
}

private calculateAverage(){
    let total = this.marks.reduce((acc,cur)=> acc + cur ,0);
    return total / this.marks.length;
}

public getAverage(){
    let average = this.calculateAverage()
    console.log(`The name of the student is ${this.name} and the average is ${average}`)
}
};

const student = new Student('Hari vishnu');
student.addMarks(90);
student.addMarks(80);
student.addMarks(70);

console.log(student.getAverage())