function ReadOnly(target: any, propertyKey: string) {
    console.log("changing behaviour");
    Object.defineProperty(target, propertyKey, {
      writable: false
    });
  }
  
  class Example1 {
    @ReadOnly
    name: string = "Default";
  }

  console.log('creating new obj');
  const obj = new Example1()
  obj.name = 'something'