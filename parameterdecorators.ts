function ValidateParam(target: any, methodName: string, paramIndex: number) {
    // Store metadata about which parameter needs validation
    console.log(`Parameter ${paramIndex} of ${methodName} was decorated`);
  }
  
  class Example2 {
    processData(normalParam: string, @ValidateParam specialParam: string) {
      // Method implementation
    }
  }