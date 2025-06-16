
enum taskstatus{
 completed = "true",
 notcompleted = "false"
}

interface Task{
    id:number ,
    title:string,
    description:string,
    completionstatus:taskstatus
}

class taskmanager{
    private tasks:Task[]
    private counter:number
    constructor(){
        this.counter = 0 
        this.tasks = []
    }
    addtask(title:string,description:string)
    { 
        let obj:Task ={
            id:this.counter,
            title,
            description,
            completionstatus:taskstatus.notcompleted
        }
        this.counter++
        this.tasks.push(obj)
    }
}