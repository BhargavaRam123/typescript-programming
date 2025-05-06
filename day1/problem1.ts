let arr1:number[] = [1,2,3,4,5,6]
function sum(val:number[]):number 
{
    let sumv:number = val.reduce((acc,curr)=>acc+curr)
    return sumv
}
console.log(sum(arr1));