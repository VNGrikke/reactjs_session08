type Person = {
    name: string;
    age: number;
};

type Employee = Person & {
    employeeId: number;
};

type PersonEmployee = Person & Employee;

let person: PersonEmployee = {
    name: "Vuong",
    age: 18,
    employeeId: 1
};
console.log(person);

