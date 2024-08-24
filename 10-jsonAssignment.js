
const employeeJson = `{
  "name": "Aleix Melon",
  "id": "E00245",
  "role":["Dev" ,"DBA"],
  "age":23,
  "doj":"11-12-2019",
  "married":false,
  "address":{
    "street":"32, Laham St.",
    "city":"Innsbruck",
    "country":"Austria"
  },
  "referred-by":"E0012"

}`

console.log(employeeJson);

const employeeObj = JSON.parse(employeeJson);

console.log(employeeObj);

let employeeRole = employeeObj.role[0];

console.log(`Employee role:${employeeRole}`);

let lastName = employeeObj.name.split(" ");

console.log(`Employee last name is:${lastName[1]}`);

var  empDOJ = employeeObj.doj.split("-");

console.log(`Only Joining year of employee:${empDOJ[2]} `);








