
console.log(`===== 1. Count of total numbers of vowels in given string=================`);

var sentance ="I am very good IT Developer";

    var vowels="aeiou";

    var counter=0;

    for (var index = 0; index < sentance.length; index++) {
       
        var char = sentance.charAt(index);

        var lowerCaseLetters=char.toLowerCase();

        if (vowels.includes(lowerCaseLetters)) {

            counter++;
            
        }
        
    }
    
console.log(`1.Given string is:${sentance}`);
    
console.log(`1.1.Count of total numbers of vowels in given string is:${counter}`);
    
console.log(`====== 2.WAF to sum of cube of numbers from 1 to 5 ===================`);
    
function sumOfCube() {
    
    var sumOfCube=0;

    for (var index = 0; index <=5; index++) {
        
        var cube=index*index*index;

        sumOfCube=sumOfCube+cube;
        
    }

    console.log(`2.Sum of cube of numbers from 1 to 5 is:${sumOfCube} `);
    
}
sumOfCube();
    
console.log(`==== 3.WAP to print odd positioned characters in given string===============`);
 
function oddPositionedChars(strng) {
    
    var result=" ";

    for (var index = 0; index < strng.length; index++) {
        
        var char=strng.charAt(index);

        if (index % 2 == 1  && char!=" ") {
            
            result=result + " " + char;

        }
    }
 
    console.log(`3.1 Given string is:${strng}`);

    console.log(`3.1.1 Odd positioned characters in given string are:${result}`);
   
}

oddPositionedChars("Hard always pays back");

oddPositionedChars("Soon i will be UI IT champ");
