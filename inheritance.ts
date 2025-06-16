class Person{
    name:string 
    age:number 
    constructor(name:string,age:number){
        this.name = name 
        this.age= age  
    }
    greet():void
    {
        console.log(`Hi myself ${this.name}, i am ${this.age} years old`);
    }
}
class Chef extends Person{
    occupation:string 
    constructor(name:string,age:number,occupation:string )
    {
        super(name,age)
        this.occupation =occupation 
    }
    override greet(): void {
        console.log(`Hi i am a ${this.occupation}`);
    }
}

const chef1 = new Chef("steve",23,"chef")
chef1.greet()

const p1 = new Person("bhargav",22)
p1.greet()