function logger(logstr:string)
{
    return function(constructor:Function)
    {
        console.log(logstr);
        console.log(constructor);
    }
}

@logger('logging-person')
class person{
   name  = 'max'
   constructor(){
    console.log('creating person object');
   } 
}
// const pers = new person()