let a = 1 //implicit type declaration
// a = "string"


let b:any = 12
b = "hello"

const json = JSON.parse("{}")
console.log(typeof json);


function func(val:any)
{
    console.log(val.toUpperCase())
}

func("hello")
function func1(val:unknown)
{
    if(typeof val === "string")
    console.log(val.toUpperCase())
}

let arr: readonly string[] = []
// arr.push("hello")
// arr.push("hello2")
// arr.push("hello23")
console.log(arr)


let arr = [2]//this will infer the type as number[]
arr.push(1)
arr.push("hello")
console.log(arr)

let tuple: readonly[number,boolean,string ]
tuple  = [98,true,"hello world"]
tuple.push("hello")

//creating objects in ts 
let obj:{name:string,age:number, section:string} = {
    name:"bhargav",
    age:23,
    section:"c1"
}
let obj2:{name:string,age:number, section?:string} = {
    name:"bhargav",
    age:23
}


enum directions  {
    north="North",
    south= "South",
    east = "East",
    west = "Weak"
}
console.log(directions.north)
//we can also give numerical values to the enums



type carmodel = string
type carname = string
type madeyear = number 
type cartype ={
    name:carname,
    model:carmodel,
    year:madeyear
}
let car:cartype={
    name:'renault',
    model:'lsdf',
    year:2342
}