class Person{
    name:string 
    age:number 
    constructor(name:string,age:number){
        this.name = name 
        this.age= age  
    }
    greet()
    {
        console.log(`Hi myself ${this.name}, i am ${this.age} years old`);
    }
}