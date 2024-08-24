
const employeeJSON=`{
    "id":123,
    "name":"Bill Gates",
    "designation":"CEO",
    "dob":"03/04/1945",
    "isMarried":true,
    "skill":["CPP","Java","Data Structure"],
    "address":{
    "skill":"wakad",
    "City":"LA",
    "PIN":203489,
    "Country":"USA"
    }
   
   }`
   console.log(typeof employeeJSON);

   console.log(employeeJSON);

   console.log(`===== string to object===========`);
    
   let employeeObje = JSON.parse(employeeJSON)

   console.log(employeeObje);

   console.log(typeof employeeObje);
   

   console.log(`==== to access particular feed=============== `);
   
   console.log(employeeObje.address.City);

   console.log(`===  Traverse array==============`);
   
   console.log(`Employee skills:${employeeObje.name}`);

   const employeeSkill = employeeObje.skill;

   for (const element of employeeSkill) {
     
        console.log(element);
        
   }

console.log("=====Object to JSON using stringfy()=======");
const student={
    stdName:"Jenny",
    rollNum:107,
    city:"pune",
    isMarried:false,
    friendList:["Elon","Bill","Stew"],
    address:{
        flatNum:1005,
        society:"Horizon",
        street:"Wakad",
        PIN:411057
    },
};
const studentJSON=JSON.stringify(student);
console.log(typeof studentJSON);
console.log(studentJSON);



   
   
   

   
   