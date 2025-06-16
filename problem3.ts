function Changevalue(val:number|string):string|number
{
    if(typeof val === "string" )
    {
        return val.toUpperCase()
    }
    else if(typeof val === "number")
    {
        return val**2
    }
    return 1
}
console.log(Changevalue("hi"));
console.log(Changevalue(3));