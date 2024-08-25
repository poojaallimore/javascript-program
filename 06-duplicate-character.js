
console.log(`===== WAP to find duplicate characters================== `);

function duplicateChar(string) {

     console.log(`Given string is:${string}`);

     let charCount = 0;

     let duplicateChar = [];

     for (let index = 0; index < string.length; index++) {

          if (duplicateChar.indexOf(string[index]) === -1) {
             
            duplicateChar.push(string[index]);

            charCount++;
          }
        
     }

  console.log(`duplicate char:${duplicateChar}-${charCount}`);
  
}

duplicateChar("Banana");


function printDups(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        charCount[character] =
            (charCount[character] || 0) + 1;
    }

    for (let char in charCount) {
        if (charCount[char] > 1) {
            console.log(
                char +
                    - +
                    charCount[char]
            );
        }
    }
}

let str = "Banana";
printDups(str);