class Human {
    name: string;
    gender: string;
  
    constructor(name:string, gender:string){
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      return `I am speaking`;
    }
  }

class Doctor implements Human{
    name:string;
    gender: string;
    constructor()
    {
        this.name = ""
        this.gender = ""
    }
    speak() {
        return "hello"
    }
    anotherfunc(){
        return "another func"
    }
}

const doc = new Doctor()