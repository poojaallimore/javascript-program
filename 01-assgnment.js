
console.log(`===== 1.WAP to find the length or total number of characters of the strings========== `);

const strng1="Hello, World!";

const length1=strng1.length;

console.log(`1.The length of string ${strng1} is:${length1}`);

const strng2="JavaScript is a language of internet";

const length2=strng2.length;

console.log(`2.The length of string ${strng2} is:${length2} `);


function getLastCharacter(str) {
    
    return str.charAt(str.length-1);
}

const str1="Hey, my friend, programming Language";

const str2="I am learning logical programs";

const str3="Angular";

console.log(`2.1 The last character of the string "${str1}" is:${getLastCharacter(str1)}`);

console.log(`2.2 The last character of the string "${str2}" is:${getLastCharacter(str2)}`);

console.log(`2.3 The last character of the string "${str3}" is:${getLastCharacter(str3)}`);

console.log(`==== 3. WAP to print or log the first character of the given strings================`);

function getFirstCharacter(str) {
    
    return str.charAt(0);
}
const strn1="React";

const strn2="Elon Musk";

const strn3="Apple founder is Stew Job";

console.log(`3.1 The first character of the string "${strn1}" is:${getFirstCharacter(strn1)}`);

console.log(`3.2 The first character of the string "${strn2}" is:${getFirstCharacter(strn2)}`);

console.log(`3.3 The first character of the string "${strn3}" is:${getFirstCharacter(strn3)}`);

console.log(`==== 4. WAP to check whether given strings contains word 'UI' or not?=========`);

function containsUI(str) {
    
    return str.includes('UI');

}

const string1="React-UI Developer";

const string2="UI Developer";

const string3="Front end and backend technology";

console.log(`4.1 Does the string "${string1}" contains 'UI'? ${containsUI(string1)}`);

console.log(`4.2 Does the string "${string2}" contains 'UI'? ${containsUI(string2)}`);

console.log(`4.3 Does the string "${string3}" contains 'UI'? ${containsUI(string3)}`);


console.log(`===== 5.5. WAP to How do you split a string into an array of substrings?=========================`);

function splitString(str,delimiter) {
    
    return str.split(delimiter);

}

const stringOne = "apple,orange,banana";


const stringTwo = "Stew,Bill,Jenny,Elon";

const result1 = splitString(stringOne,',');

console.log(`5.1 The array of substring from "${stringOne}" is:`,result1);

const result2 = splitString(stringTwo,',');

console.log(`5.2 The array of substring from "${stringTwo}" is:`,result2);

console.log(`===== 6.Reverse String: Recommended to use define the functions
=======`);
console.log(`=== 6.1 using predefined method=========================`);

function reverseStringUsingMethods(str) {
    
  return str.split('').reverse().join('');

}

const strngOne="Software";

const strngTwo="UI Developer";

console.log(`6.1 The reverse of the string "${strngOne}" is:${reverseStringUsingMethods(strngOne)}`);

console.log(`6.2 The reverse of string "${strngTwo}" is:${reverseStringUsingMethods(strngTwo)}`);

console.log(`====== 6.2 Without Using Predefined Methods=========================`);

function reverseStringUsingManually(str) {
    
    let reversedStr='';

    for (let i=str.length-1 ; i >= 0; i--) {
        
        reversedStr += str[i];
        
    }
    return reversedStr;
}

const strngg1 = "Web Developer";

const strngg2 = "Billion Dollar";

const strngg3 = "Java";

console.log(`6.2.1 The reverse of the string "${strngg1}" is: ${reverseStringUsingManually(strngg1)}`);

console.log(`6.2.2 The reverse of the string "${strngg2}" is: ${reverseStringUsingManually(strngg2)}`);

console.log(`6.2.3 The reverse of the string "${strngg3}" is: ${reverseStringUsingManually(strngg3)}`);

