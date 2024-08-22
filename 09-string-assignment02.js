
console.log(`======= WAP to count vowels=======================`);


function vowelsCount(strng) {

    let counter = 0;

    let vowels = "aeiuoAEIOU";

    for (let index = 0; index < strng.length; index++) {
        
        let char = strng.charAt(index);

        if (vowels.includes(char)) {
            
            counter++;
        }
    }
    
    return counter;
    
}

let result = vowelsCount("JavaScript");

console.log(`1.1.Total number of vowels count in given string "JavaScript" is:${result}`);

let result1 =  vowelsCount("HTML and CSS");

console.log(`1.2.Total number of vowels count in given string "HTML and CSS" is:${result1}`);

let result2 =  vowelsCount("Language Of Internet");

console.log(`1.3.Total number of vowels count in given string "Language Of Internet" is:${result2}`);

let result3 =  vowelsCount("I am UI Developer");

console.log(`1.4.Total number of vowels count in given string "I am UI Developer" is:${result3}`);

let result4 =  vowelsCount("Do or Die");

console.log(`1.5.Total number of vowels count in given string "Do or Die" is:${result4}`);

