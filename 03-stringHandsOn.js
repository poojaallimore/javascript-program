
var greet = "     Hey you are doing good, keep it up   ";

function stringHandsOn() {
    console.log(`1 Given String is:${greet}`);

    console.log(`============================================================================`);
    

    console.log(`2 Length of the given string:${greet.length}`);

    console.log(`=============================================================================`);
    

    var trimResult=greet.trim();
    
    console.log(`3.1 Given string after removing leading and trailing space:${trimResult}`);
    
    console.log(`3.2 Length of given string after trim is:${trimResult.length}`);


    console.log(`==================================================================================`);


    console.log(`4 First and Last character of given string after trim is:${trimResult.charAt(0)},${trimResult.charAt(trimResult.length-1)}`);
      
    console.log(`=====================================================================================`);
       
    var result=trimResult.split(" ");

    console.log(`5.1 Total number of word in given string after trim:${result}`);

    console.log(`5.2 Count of total words available in string is:${result.length}`);

    console.log(`=====================================================================================`);

    console.log(`6 Index of word "good" from the given string:${trimResult.indexOf("good")}`);

    console.log(`======================================================================================`);

    console.log(`7 Substring of given string starting from index 22 is:${trimResult.substring(22)}`);

    console.log(`=======================================================================================`);

    console.log(`8 IS given string ends with word "up" after string trimmed:${trimResult.endsWith("up")} `);

    console.log(`=========================================================================================`);

    console.log(`9 Is given string starts with word "Hey" after string trimmed:${trimResult.startsWith("Hey")} `);
    
       
}
stringHandsOn();
 