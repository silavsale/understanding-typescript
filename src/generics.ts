// //94. Built-in Generics & What are Generics?

// //// const names: string[] = ['Max']
// // const names: Array<string> = ['Max', 'Ali']

// // // names[0].split(' ')

// // const promise: Promise<string> = new Promise((resolve, reject)=> {
// //     setTimeout(()=> {
// //         resolve('This is done!')
// //     }, 2000)
// // })

// // promise.then(data => {
// //     data.split(' ')
// // })

// // 95. Creating a Generic Function
// // 96. Working with Constraints

// // function merge(objA: object, objB: object) {

// // ES5 syntax
// // function merge<T extends object, U extends object>(objA: T, objB: U) {
// //     return Object.assign(objA, objB)
// // }

// // ES6 syntax
// const merge = <T extends object, U extends object>(objA: T, objB: U) => Object.assign(objA, objB)

// const mergeObj = merge({name: 'Joe'}, { age: 100})
// // const mergeObj = merge({name: 'Joe'}, 10)
// // console.log(merge({name: 'Joe'},{ age: 100}));
// console.log(mergeObj.name);

// // 97. Another Generic Function
// interface Lengthy {
//     length: number
// }

// function countAndDescribe<T extends Lengthy>(element:T): [T, string] {
//     let descriptionText = 'Got no value.'
//     if(element.length === 1){
//         descriptionText = 'Got 1 element.'
//     } else if (element.length > 1){
//         descriptionText = 'Got ' + element.length + ' elements.'
//     }
//     return [element, descriptionText] 
// }

// console.log(countAndDescribe('Hello'));

// // 98. The "keyof" Constraint
// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//     return 'Value: ' + obj[key] 
// }

// console.log(extractAndConvert({name: 'Ali'}, 'name'));

// //99. Generic Classes
// class DataStorage<T extends string | number | boolean> {
//     private data: T[] = []

//     addItem(item: T) {
//         this.data.push(item)
//     }

//     removeItem(item: T) {
//         console.log('index of item:', item + ' is: ' + this.data.indexOf(item));
        
//         this.data.splice(this.data.indexOf(item), 1)
//     }

//     getItems() {
//         return [...this.data]
//     }
// }

// const textStorage = new DataStorage<string>()
// textStorage.addItem('Numba')
// textStorage.addItem('Brian')
// textStorage.addItem('Zumba')
// textStorage.removeItem('Zumba')

// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>()
// numberStorage.addItem(1)
// numberStorage.addItem(22)
// numberStorage.addItem(32)
// numberStorage.removeItem(11)
// console.log(numberStorage.getItems());

// // 101. Generic Utility Types
// interface Goal {
//     title: string
//     descripton: string
//     completeUntil: Date
// }

// function createCourseGoal(title: string, descripton: string, date: Date): Goal {
//     let coursGoal: Partial<Goal> = {}
//     coursGoal.title = title
//     coursGoal.descripton = descripton
//     coursGoal.completeUntil = date
//     return coursGoal as Goal
// }

// const names: Readonly<string[]> = ['Max', 'Anna']
// // names.push('Joe')

// // 102. Generic Types vs Union Types
