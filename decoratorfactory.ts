function WithID(idPrefix: string) {
    return function(target: any) {
      target.prototype.id = `${idPrefix}_${Math.random().toString(36).substr(2, 9)}`;
    };
  }
  
  @WithID('user')
  class User {
    // Declare the property so TypeScript knows about it
    id!: string;
    // Class implementation
  }
  
  const user = new User();
  console.log(user.id); // Now works