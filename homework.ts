// MISOL - 1

// class Car {
//   private year: number;
//   private fuelType: string;

//   constructor(
//     public company: string,
//     public model: string,
//     year: number,
//     fuelType: string
//   ) {
//     this.year = year;
//     this.fuelType = fuelType;
//   }

//   get age(): number {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.year;
//   }

//   getInfo(): string {
//     return `Company: ${this.company}, Model: ${this.model}, Year: ${this.year}, Fuel Type: ${this.fuelType}`;
//   }
// }

// const myCar = new Car("Toyota", "Camry", 2019, "Gasoline");
// console.log(myCar.getInfo());
// console.log(`Age of the car: ${myCar.age} years`);


// MISOL - 2

// class Product {
//     constructor(public name: string, public price: number, public quantity: number) {}

//     // Method to calculate total price (price * quantity)
//     totalPrice(): number {
//         return this.price * this.quantity;
//     }

//     // Method to add quantity to the product
//     add(quantity: number): void {
//         this.quantity += quantity;
//     }

//     // Method to sell a certain quantity of the product
//     sell(quantity: number): void {
//         if (quantity <= this.quantity) {
//             this.quantity -= quantity;
//         } else {
//             console.log('Insufficient quantity to sell.');
//         }
//     }
// }

// // Example usage
// const myProduct = new Product('Widget', 10, 50);
// console.log(`Total price: $${myProduct.totalPrice()}`); // Output: Total price: $500

// myProduct.add(20);
// console.log(`Updated quantity: ${myProduct.quantity}`); // Output: Updated quantity: 70

// myProduct.sell(30);
// console.log(`Updated quantity after selling: ${myProduct.quantity}`); // Output: Updated quantity after selling: 40


// MISOL - 3

// class TodoList {
//     private todos: { id: number, task: string }[] = [];

//     // Method to add a task to the list
//     addTask(task: string): void {
//         const newTask = { id: this.todos.length + 1, task };
//         this.todos.push(newTask);
//     }

//     // Method to delete a task based on its ID
//     deleteTask(id: number): void {
//         const taskIndex = this.todos.findIndex(task => task.id === id);
//         if (taskIndex !== -1) {
//             this.todos.splice(taskIndex, 1);
//         }
//     }

//     // Method to edit a task based on its ID
//     editTask(id: number, newTask: string): void {
//         const taskIndex = this.todos.findIndex(task => task.id === id);
//         if (taskIndex !== -1) {
//             this.todos[taskIndex].task = newTask;
//         }
//     }

//     // Method to get a specific task based on its ID
//     getTask(id: number): string | undefined {
//         const task = this.todos.find(task => task.id === id);
//         return task ? task.task : undefined;
//     }

//     // Method to get all tasks
//     getTasks(): string[] {
//         return this.todos.map(task => task.task);
//     }
// }

// // Example usage
// const myTodoList = new TodoList();

// myTodoList.addTask('Buy groceries');
// myTodoList.addTask('Go to the gym');

// console.log(myTodoList.getTasks()); // Output: [ 'Buy groceries', 'Go to the gym' ]

// myTodoList.editTask(1, 'Buy new shoes');
// console.log(myTodoList.getTask(1)); // Output: Buy new shoes

// myTodoList.deleteTask(2);
// console.log(myTodoList.getTasks()); // Output: [ 'Buy new shoes' ]


// MISOL - 4

// class Employee {
//     constructor(public firstName: string, public lastName: string, public role: string) {}

//     introduce(): void {
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}, and I am a ${this.role}.`);
//     }
// }

// class Manager extends Employee {
//     constructor(firstName: string, lastName: string, role: string, public teamSize: number) {
//         super(firstName, lastName, role);
//     }

//     introduce(): void {
//         super.introduce();
//         console.log(`I manage a team of ${this.teamSize} people.`);
//     }
// }

// class Developer extends Employee {
//     constructor(firstName: string, lastName: string, role: string, public programmingLanguage: string) {
//         super(firstName, lastName, role);
//     }

//     introduce(): void {
//         super.introduce();
//         console.log(`I specialize in ${this.programmingLanguage} development.`);
//     }
// }

// // Example usage
// const manager = new Manager('John', 'Doe', 'Manager', 10);
// manager.introduce();

// const developer = new Developer('Jane', 'Smith', 'Developer', 'JavaScript');
// developer.introduce();



// MISOL - 5

// interface Person {
//     name: string;
//     age: number;
// }

// interface Address {
//     street: string;
//     city: string;
//     zipCode: string;
// }

// interface Email {
//     email: string;
// }

// interface Phone {
//     phoneNumber: string;
// }

// class ContactInfo implements Person, Address, Email, Phone {
//     constructor(
//         public name: string,
//         public age: number,
//         public street: string,
//         public city: string,
//         public zipCode: string,
//         public email: string,
//         public phoneNumber: string
//     ) {}
// }

// // Example usage
// const contact = new ContactInfo(
//     'John Doe',
//     30,
//     '123 Main St',
//     'Cityville',
//     '12345',
//     'john@example.com',
//     '555-123-4567'
// );

// console.log(contact.name);
// console.log(contact.age);
// console.log(contact.street);
// console.log(contact.city);
// console.log(contact.zipCode);
// console.log(contact.email);
// console.log(contact.phoneNumber);


// MISOL - 6

// interface Square {
//   sideLength: number;
// }

// interface Circle {
//   radius: number;
// }

// class Calculate implements Square, Circle {
//   constructor(public sideLength: number, public radius: number) {}

//   calculateArea(): number {
//     return this.sideLength ** 2; // Square area
//   }

//   calculatePerimeter(): number {
//     return 4 * this.sideLength; // Square perimeter
//   }

//   calculateCircleArea(): number {
//     return Math.PI * this.radius ** 2; // Circle area
//   }

//   calculateCirclePerimeter(): number {
//     return 2 * Math.PI * this.radius; // Circle perimeter
//   }
// }

// // Example usage
// const shape = new Calculate(5, 3);

// console.log(`Square Area: ${shape.calculateArea()}`);
// console.log(`Square Perimeter: ${shape.calculatePerimeter()}`);
// console.log(`Circle Area: ${shape.calculateCircleArea()}`);
// console.log(`Circle Perimeter: ${shape.calculateCirclePerimeter()}`);


// MISOL - 7

// function getArrayLength(arr: any[]): number {
//     return arr.length;
// }

// // Example usage
// const myArray = [1, 2, 3, 4, 5];
// const length = getArrayLength(myArray);
// console.log(`Array length: ${length}`); // Output: Array length: 5


// MISOL - 8 

// function reverseArray<T>(arr: T[]): T[] {
//     return arr.reverse();
// }

// // Example usage
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


// MISOL - 9

// function mergeObjects<T>(obj1: T, obj2: T): T {
//   return { ...obj1, ...obj2 };
// }

// // Example usage
// const person1 = { name: "John", age: 30 };
// const person2 = { city: "New York", job: "Engineer" };

// const mergedPerson = mergeObjects(person1, person2);
// console.log(mergedPerson);


// MISOL - 10

// function shuffleArray<T>(arr: T[]): T[] {
//     const shuffledArray = [...arr];
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }
//     return shuffledArray;
// }

// // Example usage
// const originalArray = [1, 2, 3, 4, 5];
// const shuffledArray = shuffleArray(originalArray);
// console.log(shuffledArray); // Tasodifiy aralashgan massiv
