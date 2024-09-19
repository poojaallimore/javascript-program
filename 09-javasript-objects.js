
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

console.log(`===== 6. How to get the last item of JavaScript object? using Object.keys() method===========`);

let carr = {
    make: "Toyota",
    model:"Camry",
    year:2020,
    color:"blue"
}
 let keys = Object.keys(carr);

 let lastKey = keys[keys.length-1];

 let lastItem = carr[lastKey];

 console.log("Last Property using keys:", lastKey,lastItem);

 console.log(`===== 6. How to get the last item of JavaScript object? Using Object.entries() Method======== `);
 
 let carOne = {
    make: "Toyota",
    model:"Carmy",
    year: 2020,
    color:"blue"

 }
let entries = Object.entries(carOne);

let lastEntry = entries[entries.length-1];

console.log("The last item is:",lastEntry[0],lastEntry[1]);

console.log(`==== 7. How to use array that include and check an object against a property of an 
object?==================`);

let students = [

    { name:"John Deo",grade:"A" },
    { name:"Jane Smith",grade:"B"},
    { name:"Samuel Green",grade:"C"}
    
];
function hasStudentExists(name) {

    return students.filter(student=>student.name === name).length > 0;
    
}
console.log(hasStudentExists("John Deo"));

console.log(hasStudentExists("Elon Musk"));

console.log(`==== 8. How to add an object to an array in JavaScript?================= `);

let fruits = ["Apple","Banana","Orange"];

let newFruit = { name:"Pomogranate",
                 color:"red"
};

console.log("Given array is:",fruits);

fruits.push(newFruit);

console.log(fruits);

console.log(`==== 9. How to remove duplicates from an array of objects using JavaScript?===========`);

let student1 = [

    {id:1, name:"John Deo"},
    {id:2, name:"Elon Musk"},
    {id:1, name:"John Deo"},
    {id:3, name:"Mark Z"},
    {id:2, name:"Elon Musk"} 
];
const uniqueArr = student1.filter((element,index,array)=>

   index === array.findIndex(obj=>obj.id === element.id)

);

console.table(uniqueArr);

console.log(`=== 10. How to get a subset of a javascript object's properties?======`);

var personOne = {

    firstName: "John",
    lastName:"Doe",
    age:30,
    city:"New York",
    country:"USA"
};

var { firstName,lastName} = personOne;

console.log(firstName,lastName);

console.log(`===== 11. How to convert an Object {} to an Array [] of key-value pairs in JavaScript?Using Object.entries()
===== `);


let obj = {
    key1: "value1",
    key2:"value2",
    key3:"value3"
};
const entriess = Object.entries(obj);

for (const [key,value] of entriess) {
    
    console.log(key,value);
    
}

console.log(`==== 11.1 How to convert an Object {} to an Array [] of key-value pairs in JavaScript? using object.keys()==============`);
 
let obj1 = {

    key1: "value1",
    key2:"value2",
    key3:"value3"
}
let keyOne = Object.keys(obj1).map(key=>[key,obj1[key]]);  

console.table(keyOne);

console.log(`=== 12. How to check if a value is object-like in JavaScript?=======`);

function isObjectLike(value) {
    
    return value !== null && (typeof value === "object" || typeof value === "function");

}

const result = isObjectLike({});

console.log(`1.value is "object-like:"${result}`);

const result1 = isObjectLike(null);

console.log(`2.value is "object-like:"${result1}`);

const result2 = isObjectLike(function(){});

console.log(`3.value is "object-like:"${result2}`);

const result3 = isObjectLike([]);

console.log(`4.value is "object-like:"${result3}`);

const result4 = isObjectLike(42);

console.log(`4.value is "object-like:"${result4}`);

const result5 = isObjectLike("string");

console.log(`5.value is "object-like:"${result5}`);

console.log(`=== 13. How to use a variable for a key in a JavaScript object literal?=======`);

let key = "name";

let value = "John Deo";

let object = {

    [key]:value

};
console.log(object);







    
    


    
    





