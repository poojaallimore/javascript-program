console.log("=======1.Find the Greatest number==================");

function greatestNumber(NumOne,NumTwo) {
 
var result=NumOne>NumTwo?NumOne:NumTwo;

console.log(`Greatest Number amongst ${NumOne} and ${NumTwo} is:${result}`);


    
}
greatestNumber(10,-10);

greatestNumber(800,899);

console.log("======2. To find out Even and Odd number=======================");

function isEvenOrOdd(numOne) {

    var resultOne = numOne%2==0?"True":"False";
    return resultOne;
}
var result=isEvenOrOdd(29);

console.log(` 2.1 Given number 29 is Odd:${result}`);

var result=isEvenOrOdd(44);

console.log(` 2.2 Given number 44 is even:${result}`);

var result=isEvenOrOdd(0);

console.log(` 2.3 Given number 0 is Even:${result}`);

var result=isEvenOrOdd(101);

console.log(` 2.4 Given number 101 is Odd:${result}`);

console.log("======3.To find given length is Even or Odd=================");

function wordLength(argOne) {

    var wordLength=argOne.length;

    var result=wordLength%2==0?"Even":"Odd";

    return result;
    
}
var returnResult=wordLength("javaScript");

console.log(`3.1. The given word "javaScript" has :${returnResult} length `);

var returnResult=wordLength("developer");

console.log(`3.2. The given word "developer" has :${returnResult} length `);

var returnResult=wordLength("Google");

console.log(`3.3. The given word "Google" has :${returnResult} length `);




