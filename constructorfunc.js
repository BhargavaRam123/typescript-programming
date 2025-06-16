function person(fname,lname)
{
    this.fname = fname
    this.lname  = lname
}
person.prototype.getfullname = function (){
    return this.fname+ " "+this.lname
}
console.log(person.prototype);
const obj = new person("elon","musk")
console.log(obj);

console.log(obj.getfullname());