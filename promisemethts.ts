const promises:Promise<number>[] = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
]

Promise.all(promises).then((results:number[])=>{
    console.log(results);
})