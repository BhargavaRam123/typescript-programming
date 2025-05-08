function Log(message: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const original = descriptor.value;
      descriptor.value = function(...args: any[]) {
        console.log(`${message}: ${propertyKey}`);
        return original.apply(this, args);
      };
    };
  }
  
  class Example4 {
    @Log("Method called")
    doSomething() {
      // Implementation
    }
  }
  let obj3 = new Example4()

  obj3.doSomething()