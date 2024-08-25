
console.log(`======WAP to remove duplicate element from array========`);

let arrayNum = [11,3,4,11,4,7,3];
 
console.log(`Given array is:${arrayNum}`);
 
let updatedArray = [];

for (let i =0; i < arrayNum.length; i++) {
  
   if (updatedArray.indexOf(arrayNum[i]) === -1) {
       
      updatedArray.push(arrayNum[i]);
   }
   
}
console.log(`After removing duplicate element:${updatedArray}`);



// console.log(`==== WAP to make string char in  alternative case====================== `);

// function alternativeCase(string) {
     
//     let newString = [];

//     for (let i = 0; i < string.length; i++) {

//          if (i % 2 == 0 ) {
             
//             newString[i] = string[i].toUpperCase();
//          }
//          else{

//             newString[i] = string[i].toLowerCase();
//          }
        
//     }
//   return newString.join(" ");

//  }

// let result = alternativeCase("How are you mate");

// console.log(result);


console.log(`==== WAP to make first and last char of string in capital case======`);

let string = "How are you mate";

console.log(`Given string is:${string}`);


let word = string.split(" ");

let capitalizeWord = [];

for (let index = 0; index < word.length; index++) {
   
   let words = word[index];

   let firstLetter = words[0].toUpperCase();

   const latsLetter = words[words.length-1].toUpperCase();

   const middleLetter = words.slice(1,words.length-1);

   capitalizeWord.push(firstLetter+middleLetter+latsLetter);

   
}
const upperCaseStrng = capitalizeWord.join(" ");

console.log(`Updated string with first letter and last letter in upper case:${upperCaseStrng}`);

