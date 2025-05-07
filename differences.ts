//declaration merging
//you can define the same interface as many times as you want it will merge all the interfaces


interface random{
    name:string
}
interface random{
    age:number
}
interface random{
    address:string
}
interface random{
    state:string
}

// class a implements random{
// }

// where as on the other hand in the type we will get the error when we try to redeclare

