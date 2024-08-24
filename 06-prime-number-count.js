
console.log(`==== 1 Write a program to count the prime number===================== `);
 
  let array = [3, 9, 7, 6, 19, 29, 53];

  console.log(`Given array is:${array}`);
  
  
  let count = 0;

  function isPrime(num) {
     
    for (let index = 2; index < num; index++) {
         
        if (num % index == 0) {
            
            return false;
        }
        
    }
     return true
  }

let result = isPrime(3)

console.log(`Is num 3 prime:${result} `);

let result1 = isPrime(9)

console.log(`Is num 9 prime:${result1} `);

let result2 = isPrime(7)

console.log(`Is num 7 prime:${result2} `);

let result3 = isPrime(6)

console.log(`Is num 6 prime:${result3} `);

let result4 = isPrime(19)

console.log(`Is num 19 prime:${result4} `);

let result5 = isPrime(29)

console.log(`Is num 29 prime:${result5} `);

let result6 = isPrime(53)

console.log(`Is num 53 prime:${result6} `);

for (const num of array) {

    var result7 = isPrime(num)

    if (result7 == true) {

         count++;
    }
    
}
console.log(`Prime num count is:${count}`);
   


console.log(`==== 2 Write a program to count the spaces===================== `);

    function spaceCount(strng) {
    let count = 0;

    console.log(`Given string is:${strng}`);

    for (let index = 0; index < strng.length; index++) {
        
        let char = strng.charAt(index);

        if (char == " ") {

            count++;
            
        }
        
    }
   return count;   
} 

let returnResult = spaceCount("Revision is the mother of success");

console.log(`Count of space in string is:${returnResult}`);

let returnResult1 = spaceCount("JavaScript is the language of internet world");
 
console.log(`Count of space in string is:${returnResult1}`);

console.log(`=== Program to find duplicate characters============`);

function duplicateCharCount(strngOne) {
    
    for (let index = 0; index < strngOne.length; index++) {
        
        
        
    }
}
duplicateCharCount("Banana");
