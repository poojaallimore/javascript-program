
const emp = {

    firstName: "Jenny",

    lastName: " Gates",

    age: 56

}

// emp = {

//    city: "LA" 

// }

emp.age = 80;

console.log(emp);

 

Object.freeze(emp);

emp.firstName="Elon";

console.log(emp);

console.log('======== Object Merge ===========');

const std = {

    firstName: "Jenny",

    lastName: " Gates",

    age: 56

}

const address = {

    city: "LA",

    pin: 411057

}

const mergedObject = Object.assign({}, std, address);

console.log(mergedObject);

const mergeObj = { ...std, ...address };

console.log(mergeObj);