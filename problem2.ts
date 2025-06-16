
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
       addtask(title:string,description:string):void
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
       marktaskasdone(id:number):void
       {
           this.tasks = this.tasks.map((obj)=>
            obj.id === id ? {...obj,completionstatus:taskstatus.completed}:obj
           )
        }
        getalltasks():void
        {
            this.tasks.map((obj)=>{
                console.log("Task->",obj);
            })
        }
        marktaskasundone(id:number):void 
        {
           this.tasks = this.tasks.map((obj)=>
            obj.id === id ? {...obj,completionstatus:taskstatus.notcompleted}:obj
           )
       }
   }


   const taskm = new taskmanager()
   taskm.addtask("drink water","please drink water at 10:00am")
   taskm.marktaskasdone(0)
   taskm.marktaskasundone(0)
   taskm.addtask("eat food","please take food at 13:00")
   taskm.getalltasks()