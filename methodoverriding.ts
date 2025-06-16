class Person1 {
    name: string;
    rollNumber: number;
    score: number;

    constructor(name: string, rollNumber: number, score: number) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.score = score;
    }

    displayDetails(): void {
        console.log(`Name: ${this.name}, 
                     Roll Number: ${this.rollNumber}, 
                     Scores: ${this.score} out of 100`);
    }
}

class Student extends Person1 {
    constructor(name: string, rollNumber: number, score: number) {
        super(name, rollNumber, score);
    }

    displayDetails(): void {
        super.displayDetails();
        console.log(`${this.name} is an intelligent boy..`);
        console.log(`${this.name} scores well...`);
    }
}

const student = new Student('Rohit', 2, 96);
student.displayDetails();