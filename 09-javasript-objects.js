
console.log(`=====1. Write a JavaScript program to list the properties of a JavaScript object.========`);

let student = {
    name:"David Rayy",
    sclass:"VI",
    rollNo:12
};
let properties = Object.keys(student);

console.log("Number of keys in given object is:",properties);

console.log(`=====2. Write a JavaScript program to delete the rollno property from the object=====`);
 
let studentOne = {

    name:"Ravi Sharma",
    sclass:"VI",
    rollNo:101

}
console.log("Before deleting rollno:",studentOne);

delete studentOne.rollNo;

console.log("After deleting rollno:",studentOne);

console.log(`====== 3. Write a JavaScript program to get the length of a JavaScript object.==============`);

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"

}

let objectLength = Object.keys(car).length;

console.log(" 4.The length of Object is:",objectLength);

console.log("======= 4.How to get dynamic access to an object property in javascript==================");

let person = {
    name: "John Deo",
    age:30,
    profession: "Developer"
}
console.log("Given Object is:",person);

let propertyName  = "profession";

console.log("4.Dynamically accessing object property- profession:",person[propertyName]);

console.log("===== 5.How to modify an object's property in an array of objects in javascript================");

let employees = {

    id: 1,
    name: "John Deo",
    position:"Developer",
    salary: 50000
}
console.log(employees);

console.log(`Current id:${employees.id},current salary:${employees.salary}`);
 
employees.id = 2;
 
console.log(`Updated id:${employees.id}`);
 
employees.salary = 60000;

console.log(`Updated salary:${employees.salary}`);


