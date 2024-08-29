
function isPalindrome(str) {

    console.log(`Given string is:${str}`);
    
    let strngSplit = str.split("").reverse().join("");

    console.log(str == strngSplit?true:false);
    

    
}

isPalindrome("madam");

isPalindrome("dad");

isPalindrome("hello");

// console.log(`==================================================================================`);


// function isPalindrome(str) {
 
//     console.log(`Given string is:${str}`);
     
//     const reverseStr = str.split("").reverse().join("");
//     if(str==reverseStr){
//         console.log(`Given string is palindrome`);
//         }
//         else{
//             console.log(`Given string is not palindrome`);
//        }
//     }
//     isPalindrome("madam");
//     isPalindrome("dad");
//     isPalindrome("hello");

console.log(`===== To find given string is anagram======`);
 function isAnagram(n1,n2) {

    console.log(`Given string is:${n1}=${n2}`);
    
    let lowerChar = n1.toLowerCase();

    let lowerCase = n2.toLowerCase();

    let resultOne = lowerChar.split("").sort().join();

    let resultTwo = lowerCase.split("").sort().join();

    console.log(resultOne == resultTwo?true :false);


 }

isAnagram("Silent","Listen");

isAnagram("Hello","World");

isAnagram("Such","Much");