
console.log(`==== 1.WAF to count character "a" and "A"==================================`);

function charCount(strng) {

    console.log(`Given string is:${strng}`);
    

    let count = 0;

    for (let index = 0; index < strng.length; index++) {
      
        if (strng[index].toLowerCase() == 'a' || strng[index].toUpperCase() == 'A') {
          
            count++
        }
        
    }
    return count;
}

let result = charCount("JavaScript");

console.log(`1.Total count of "a" and "A" in given string is:${result}`);

let result1 = charCount("Do or Die"); 

console.log(`2.Total count of "a" and "A" in given string is:${result1}`);
 
let result3 = charCount("Learn with us, Job with us"); 

console.log(`3.Total count of "a" and "A" in given string is:${result3}`);

let result4 = charCount("Empowering Dreams, Guaranteeing Futures"); 

console.log(`4.Total count of "a" and "A" in given string is: ${result4}`);

let result5 = charCount("Anny, My favorite fruit is Apple");

console.log(`5.Total count of "a" and "A" in given string : ${result5}`);
