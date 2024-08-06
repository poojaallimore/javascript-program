
console.log("====To find square of word length=================");

function squareOfWordLength(sentence) {
    
    var len=sentence.length;

    var result=len*len;

    return result;
    
    
}
var squareLength=squareOfWordLength("JavaScript");

console.log(`1.3.1.Given word is "JavaScript" and Square of its length is: ${squareLength}`);

var squareLength=squareOfWordLength("Google Chrome");

console.log(`1.3.2.Given word is "Google Chrome" and Square of its length is: ${squareLength}`);

var squareLength=squareOfWordLength("Web Developer Smart");

console.log(`1.3.3.Given word is "Web Developer Smart" and Square of its length is: ${squareLength}`);

console.log("======2.Function with no argument and no returns============================");

console.log("========Length divided by total numbers of words in given string===========");

function greet(argOne) {

    var totalLength=argOne.length;

    var totalWord=argOne.split(" ");

    var len=totalWord.length;
     
    var result=totalLength/len;
    
    console.log(`2. Given String is:${argOne}`);
    
    console.log(`2.1. Division of length and total number of words in given string is:${result}`);

    var resultOne=totalLength*len;

    console.log(`2.3. Multiplication of length and total number of words in given string is:${resultOne}`);
    
    

}
greet("I am Angular Developer");



