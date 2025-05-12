let prom:Promise<string> = new Promise((res,rej)=>{
    let val = 2
    if(val===1)
    res('2') 
    else
    rej(92)})

prom.catch((v)=>{
    console.log("promise got rej",v);
})
//even this is true

// const integer = new Promise<number>(function(resolve, reject){
//    // your logic goes here ..
//    });


interface user{
    name:string,
    age:number
}

function fetchapi():Promise<user>
{
    return new Promise((res)=>res({
        name:";alksfjd",
        age:33,    }))
}

fetchapi().then((v)=>{
    console.log("value is ",v);
})


async function fetchdata():Promise<string>
{
    const response = await fetch('example/http')
    const data = await response.json()
    return data.message;
}