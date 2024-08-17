
console.log(`============= Step 1.===================================`);

let professor = {

    firstName:"Vijay",

    lastName:"Bankar",

    Age:"45",

    city:"Pune",

    Country:"India",

    degrees:{
       
        diploma:"Electronics Engineering",

        degree:"ENTC",

        masters:"Embedded and VLSI system",

        PHD:"Adv Computing"

    },

    certificate:["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"]

}

console.log(professor);

console.log(`===== Added new property in given object=========================`);

professor.totalExperience="14 years"

console.log(`Total experience:${professor.totalExperience}`);

console.log(`===== Modifying City property in given array================`);

console.log(`Current city:${professor.city}`);

professor.city="Mumbai"

console.log(`Updated City:${professor.city}`);

console.log(`=== Added new certificate in given certificate array==========`);

console.log(`Given array:${professor.certificate}`);

professor.certificate.splice(2,0,"Oracle Certified");

console.log(`Updated array:${professor.certificate}`);

console.log(`======= Last element of array====================================`);

professor.certificate[3];

console.log(`last element of array:${professor.certificate[3]}`);

console.log(`==== Traverse array using For loop=====================`);

for (const element of professor.certificate) {

      console.log(element);
      
}

console.log(`=======  Log Complete object using for in loop=================`);

for (const key in professor) {

    if (Object.prototype.hasOwnProperty.call(professor, key)) {

        const element = professor[key];

        console.log(`${key},${element}`);
        
        
    }
}



