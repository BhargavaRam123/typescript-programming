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