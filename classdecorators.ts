function ClassDecorator(constructor: Function) {
    // Modify or extend class functionality
    console.log(`Class ${constructor.name} was decorated`);
  }
  
  @ClassDecorator
  class Example3 {
    // Class implementation
  }