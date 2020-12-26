// abstract class Department {
//     static fiscalYear = 2020
//     // name: string
//     protected employees: string[] = []
    
//     constructor(protected readonly id: string, public name: string){
//         // this.name = n
//     }

//     static createEmployee(name: string) {
//         return {name: name}
//     }

//     abstract describe(this: Department): void

//     addEmployee(employees: string){
//         this.employees.push(employees)
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// class ITDepartment extends Department {
//     admins: string[]
//     constructor(id: string, admins: string[]){
//         super(id, 'IT')
//         this.admins = admins
//     }

//     describe() {
//         console.log('IT Department - ID: ' + this.id);
//     }
// }

// class AccountingDepartment extends Department {
//     private lastReport: string
//     private static instance: AccountingDepartment

//     get mostRecentReport () {
//         if (this.lastReport) {
//             return this.lastReport
//         }
//         throw new Error("No report found.");
//     }

//     set mostRecentReport(value: string) {
//         if(!value) {
//             throw new Error("Please pass in a valid value!");
//         }
//     }

//     private constructor(id: string, private reports: string[]){
//         super(id, 'Accounting')
//         this.lastReport = reports[0]
//     }

//     static getInstance() {
//         if (AccountingDepartment.instance){
//             return this.instance
//         }
//         this.instance = new AccountingDepartment('d2', [])
//         return this.instance 
//     }

//     describe() {
//         console.log('Accounting Department - ID:' + this.id);
//     }

//     addEmployee(name: string){
//         if(name === 'Max'){
//             return
//         }
//         this.employees.push(name)
//     }

//     addReport(text: string) {
//         this.reports.push(text)
//         this.lastReport = text
//     }

//     printReport() {
//         console.log(this.reports);
//     }
// }

// // const devs = new Department("Devs")


// const empoloyee1 = Department.createEmployee('Max')
// console.log('empoloyee1', empoloyee1);


// const it = new ITDepartment('d1', ['Max'])

// it.addEmployee('Max')
// it.addEmployee('Fridrich')

// it.describe()
// it.name = 'NEW NAME'
// it.printEmployeeInformation()

// console.log(it);

// const accounting = AccountingDepartment.getInstance()

// // const accounting = new Accounting('d2', [])


// // console.log(devs);
