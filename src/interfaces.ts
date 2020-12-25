// type AddFn = (a: number, b: number) => number
interface AddFn {
    (a: number, b: number): number
}

let add: AddFn

add = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named {
    readonly name?: string
    outputName?: string
}

interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {
    name?: string
    age = 54

    constructor(n?: string){
        if (n){
            this.name = n
        }
    }

    greet(phrase: string){
        if(this.name){
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi');
        }
    }
}

let user1: Greetable

user1 = new Person('Mike')

console.log(user1);

// user1 = {
//     name: 'Joe',
//     age: 25,

//     greet(phrase: string){
//         console.log(phrase + ' ' + this.name);
//     }
// }

user1.greet('Hi there - I\'am')