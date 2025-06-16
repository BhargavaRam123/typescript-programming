// Method decorator should have this signature
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Store the original method
    const originalMethod = descriptor.value;
    console.log("hello");
    // Replace with new functionality
    descriptor.value = function(...args: any[]) {
        console.log("called when func is called");
      console.log(`Method ${propertyKey} called with:`, args);
      return originalMethod.apply(this, args);
    };
    
    console.log('func change fin');
    return descriptor; // Need to return the descriptor

  }
  
  class Example {
    @LogMethod
    sayHello(name: string) {
      return `Hello, ${name}!`;
    }
  }
  
  // Example usage
  const example = new Example();
  console.log(example.sayHello("TypeScript"));