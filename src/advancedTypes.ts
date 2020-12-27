// type Admin = {
//     name: string
//     privileges: string[]
// }

// type Employee = {
//     name: string
//     startDate: Date
// }

// // interface ElevatedEmployee extends Employee, Admin {}

// type ElevatedEmployee = Admin & Employee

// const e1: ElevatedEmployee = {
//     name: "Max",
//     privileges: ['create-server'],
//     startDate: new Date()
// }

// type Combinable = string | number
// type Numeric = number | boolean

// type Universal = Combinable & Numeric

// function add(a:Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string'){
//         return a.toString() + b.toString()
//     }
//     return a + b
// }

// type UnknownEmployee = Employee | Admin

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if('privileges' in emp) {
//         console.log('Privileges : ' + emp.privileges);
//     }
//     if ('startDate' in emp) {
//         console.log('Start date :' + emp.startDate);
//     }
// }

// printEmployeeInformation({name: 'Patrick', startDate: new Date()})

// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive(){
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number){
//         console.log('Loading cargo ...' + amount);
//     }
// }

// type Vehicle = Car | Truck

// const v1 = new Car()
// const v2 = new Truck()

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive()
//     // if('loadCargo' in vehicle){
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1)
// useVehicle(v2)


// // Descriminated Unions
// interface Bird {
//     type: 'bird'
//     flyingSpeed: number
// }
// interface Horse {
//     type: 'horse'
//     runningSpeed: number
// }

// type Animal = Bird | Horse 

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed        
//             break;            
        
//         case 'horse':
//             speed = animal.runningSpeed
//         }
//     console.log('Running Speed', speed);                
// }

// let bird2 : Bird

// moveAnimal({type: 'bird', flyingSpeed: 180})

// // Type Casting
// // const paragraph = document.querySelector('p')
// // const userInputElement = <HTMLInputElement> document.getElementById('user-input')
// // const userInputElement = document.getElementById('user-input')! as HTMLInputElement
// const userInputElement = document.getElementById('user-input')

// if(userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there!'
// }

// // Index Properties
// interface ErrorContainer { // { email: 'Not a valid email', userName: 'Must start with a character!'}
//     [props: string] : string
// }

// const errorBag: ErrorContainer = {
//     1: 'test!',
//     email: 'Not a valid email',
//     userName: 'Must start with a character!',
// }

// // Function Overloads
// type CombinStrNum = string | number
// type Numbers = number | boolean

// type Mixed = CombinStrNum & Numbers

// function adding(a: number, b: number): number
// function adding(a: string, b: string): string
// function adding(a: number, b: string): string
// function adding(a: string, b: number): string
// function adding(a:CombinStrNum, b: CombinStrNum) {
//     if (typeof a === 'string' || typeof b === 'string'){
//         return a.toString() + b.toString()
//     }
//     return a + b
// }

// const result = adding('Mike', 'Tyson')
// result.split(' ')

// // Optional Chaining

// const fetchedUserData = {
//     id: 'u1',
//     name: 'Max',
//     job: { title: 'CEO', description: 'My own company' }
// }

// console.log(fetchedUserData?.job?.title);

// // Nullish Coalescing

// const userInput = ''

// const storedData = userInput ?? 'DEFAULT' 

// console.log(storedData);
