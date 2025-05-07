// class p2{

// }
// class p3{

// }
// class p5 extends p2,p3{

// }

// class A {};
// class B extends A {};
// class C extends A {};
// class D extends B, C {};// This will throw an error

// class a{
//     protected val:string 
//     constructor()
//     {
//         this.val = ""
//     }
// }

// const obj  = new a()
// console.log(obj.val);

// class a{
//     private readonly a:string 
//     constructor(){
//         this.a = "k"        
//     }
//     change(){
//     }
// }

// let obj = new a()
// console.log(obj);

class a {
    constructor(public a:string)
    {}
    getvalue(){
        console.log(this.a );
    }
}
const obj = new a("hello world")
obj.getvalue()