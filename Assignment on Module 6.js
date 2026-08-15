// ==========================================
// Assignment Module 6
// Array Methods, Object, Set, Map & OOP
// ==========================================


// ==========================================
// Task 1 — Array Methods
// ==========================================

let fruits = ["Apple", "Mango", "Banana"];

fruits.push("Orange");

fruits.pop();

fruits.forEach(function (fruit) {
    console.log(fruit);
});


// ==========================================
// Task 2 — map() & filter()
// ==========================================

let numbers = [10, 20, 30, 40, 50];

let addedNumbers = numbers.map(function (number) {
    return number + 10;
});

let filteredNumbers = numbers.filter(function (number) {
    return number > 30;
});

console.log("After adding 10:", addedNumbers);
console.log("Numbers greater than 30:", filteredNumbers);


// ==========================================
// Task 3 — reduce(), find(), findIndex()
// ==========================================

let marks = [40, 55, 70, 85, 30];

let totalMarks = marks.reduce(function (total, mark) {
    return total + mark;
}, 0);

let firstHighMark = marks.find(function (mark) {
    return mark >= 70;
});

let markIndex = marks.findIndex(function (mark) {
    return mark === 85;
});

console.log("Total Marks:", totalMarks);
console.log("First mark 70 or higher:", firstHighMark);
console.log("Index of 85:", markIndex);


// ==========================================
// Task 4 — Object Methods
// ==========================================

let student = {
    name: "Kibria",
    age: 30,
    city: "Barishal"
};

console.log("Keys:", Object.keys(student));

console.log("Values:", Object.values(student));

console.log("Entries:", Object.entries(student));

console.log("Has name property:", student.hasOwnProperty("name"));


// ==========================================
// Task 5 — Set
// ==========================================

let setNumbers = new Set([10, 20, 30]);

setNumbers.add(40);

setNumbers.delete(20);

console.log("Has 30:", setNumbers.has(30));

setNumbers.forEach(function (value) {
    console.log(value);
});


// ==========================================
// Task 6 — Map
// ==========================================

let studentMap = new Map();

studentMap.set("name", "Kibria");
studentMap.set("age", 30);

console.log("Student Name:", studentMap.get("name"));

console.log("Has age:", studentMap.has("age"));

console.log("Map Size:", studentMap.size);


// ==========================================
// Task 7 — Spread & Rest
// ==========================================

// Spread

let a = [1, 2, 3];
let b = [4, 5, 6];

let combinedArray = [...a, ...b];

console.log("Combined Array:", combinedArray);


// Rest

function sum(...numbers) {
    let total = 0;

    numbers.forEach(function (number) {
        total += number;
    });

    return total;
}

console.log("Sum:", sum(10, 20, 30));


// ==========================================
// Task 8 — Class & Constructor
// ==========================================

class Student {

    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

}

let student1 = new Student("Kibria", 20, "JavaScript");

let student2 = new Student("Riyan", 15, "React");

console.log("Student 1:", student1);
console.log("Student 2:", student2);


// ==========================================
// Task 9 — Inheritance & Overriding
// ==========================================

class Person {

    introduce() {
        console.log("Hello, I am a person.");
    }

}

class StudentPerson extends Person {

    introduce() {
        console.log("Hello, I am a student.");
    }

}

let person1 = new Person();
let studentPerson1 = new StudentPerson();

person1.introduce();
studentPerson1.introduce();


// ==========================================
// Task 10 — Small OOP Project
// ==========================================

class BankAccount {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    static bankName() {
        console.log("Bank: ABC Bank");
    }

}

let account = new BankAccount("Kibria", 5000);

account.deposit(1000);

account.withdraw(500);

console.log("Account Holder:", account.name);
console.log("Current Balance:", account.balance);

// Bonus — Static Method
BankAccount.bankName();