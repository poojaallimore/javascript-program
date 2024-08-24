
console.log(`===== 1. WAP to find length of string or total character of  the string================`);

function lengthOfString(string) {
    
    let charOfString = string.length;

    console.log(`1.Given string is:${string} and the length of given string is:${charOfString} `);

}

lengthOfString("Hello, World!");

lengthOfString("JavaScript is the language of Internet");

console.log(`======= 2.WAP to print or log the last character of the given strings===================== `);

function lastChar(string) {
    
     let lastChar1 = string.charAt(string.length-1);

     console.log(`2.Given string is: ${string} and last character of given string is:${lastChar1}`);
     
}

lastChar("Hey, my friend, Programming Language");

lastChar("I am learning logical programs");


lastChar("Angular");

console.log(`===== 3.WAP to print or log the first character of the given strings====================== `);

function getFirstChar(string) {
    
    let firstChar = string.charAt(0);

    console.log(`3.Given string is:${string} and first character of given string is:${firstChar}`);
    
}

getFirstChar("React");

getFirstChar("Elon Musk");

getFirstChar("Apple founder is Stew Job");

console.log(`==== 4. WAP to check whether given strings contains word ‘UI’ or not?==========`);

function includesUI(string) {
    
    let includes = string.includes('UI');

    console.log(`4.Does the string :${string} contain 'UI'?:${includes} `);
    
}

includesUI("React - UI Developer");

includesUI("UI Developer");


includesUI("Front end and backend technologies");

console.log(`===== 5.WAP to How do you split a string into an array of substrings?===============`);

function splitString(string) {
    
  let strngSplit = string.split(",");

  console.log(`5.Array of substring from:`,string, `is:`,strngSplit);
  

}

splitString("apple,orange,banana");

splitString("Stew,Bill,Jenny,Elon");

console.log(`==== 6 WAP to reverse string using predefined method==================`);
 
function reverseString(string) {

    console.log(`6.Given string is:${string}`);

    let result = string.split("").reverse().join("");

    console.log(`6.Reverse string is:${result}`);
    
}

reverseString("Software"); 

reverseString("UI Developer");


console.log(`==== 6.1 WAP to reverse the given string without predefined method============================`);

function reverseStringUsingMethods(strng) {
    
    console.log(`6.1.Given String is:${strng}`);

    let result = "";

    for (let index = strng.length-1 ; index >= 0; index--) {
      
        let char = strng.charAt(index);

        result = result+char;
        
    }
   console.log(`6.1.Reverse string is:${result}`);
    
    
}

reverseStringUsingMethods("Web Developer");

reverseStringUsingMethods("Billion Dollar");

reverseStringUsingMethods("Java”");

// console.log(`=== 7.WAP to Count character a ===================================`);

// function charCount(sentance) {
    
//     let counter = 0;

//     console.log(`7.Given string is:${str}`);

//    for (let index = 0; index < sentance.length; index++) {
 
//         let char = sentance.charAt(index);

//         let lowerCaseChar = char.toLowerCase();

//         if (lowerCaseChar == "a") {
             
//             counter++;
//         } 
        
//     }
//    return counter;      

// }
// var string1 = charCount("JavaScript");

// console.log(`7.1 Count of char a in given string is:${string1}`);

// let result2 = charCount("Do or Die");

// console.log(`7.2 Count of char a in given string is:${result2}`);

// let result3 = charCount("Learn with us, Job with us");

// console.log(`7.3 Count of char a in given string is:${result3}`);

// let result4 = charCount("Empowering Dreams, Guaranteeing Futures");

// console.log(`7.4 Count of char a in given string is:${result4}`);

// let result5 = charCount("Anny, My favorite fruit is Apple");

// console.log(`7.5 Count of char a in given string is:${result5}`);

console.log(`=================or===========================================`);

function charCount(string) {
    
    console.log(`Given string is:${string}`);
    
    let counter = 0;

    for (let index = 0; index < string.length; index++) {
       
        let char = string.charAt(index);

        let lowerCaseChar = char.toLowerCase();

        if (lowerCaseChar == "a") {
             
            counter++;
        }  
    }
    return counter;
}

let result1 = charCount("JavaScript");

console.log(`Count of 'a' in given string is:${result1}`);

let result2 = charCount("Do or Die");

console.log(`Count of 'a' in given string is:${result2}`);

let result3 = charCount("Learn with us, Job with us");

console.log(`Count of 'a' in given string is:${result3}`);

let result4 = charCount("Empowering Dreams, Guaranteeing Futures");

console.log(`Count of 'a' in given string is:${result4}`);

let result5 = charCount("Anny, My favorite fruit is Apple");

console.log(`Count of 'a' in given string is:${result5}`);

console.log(`===== 8.WAP to Count vowels============================================`);
 
function vowelCount(string) {
     
    let count = 0;
    
    console.log(`8.Given string is:${string}`);
    
    let vowels = "aeiouAEIOU";

    for (let index = 0; index < string.length; index++) {
        
        let char = string.charAt(index);

        if (vowels.includes(char)) {
            
            count++;
        }
        
    }
    return count;
    
}
let returnResult = vowelCount("JavaScript");

console.log(`The vowels count in given string is:${returnResult}`);


let returnResult1 = vowelCount("HTML and CSS");

console.log(`The vowels count in given string is:${returnResult1}`);

let returnResult2 =vowelCount("Language Of Internet");

console.log(`The vowels count in given string is:${returnResult2}`);

let returnResult3 =vowelCount("I am UI Developer");

console.log(`The vowels count in given string is:${returnResult3}`);

let returnResult4 =vowelCount("Do or Die");

console.log(`The vowels count in given string is:${returnResult4}`); 

console.log(`==== 9. Program to count words=============================`);

function wordCount(argOne) {

    console.log(`9.Given string is:${argOne}`);
    
    let totalWord = argOne.split(" ");

    return totalWord;
}
let totalWord1 = wordCount("JavaScript The language of Internet");

console.log("Total number of words in given string is:",totalWord1.length);

let totalWord2 =wordCount("Enhance Your Learning Journey with Exclusive Add-ons");

console.log("Total number of words in given string is:",totalWord2.length);

let totalWord3 =wordCount("Beyond frameworks, Beyond Imagination");

console.log("Total number of words in given string is:",totalWord3.length);

let totalWord4 =wordCount("I am passionate software developer");

console.log("Total number of words in given string is:",totalWord4.length);