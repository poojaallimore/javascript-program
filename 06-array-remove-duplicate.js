 
//  let greet = "How are you mate";

//  for (let index = 0; index < greet.length; index++) {
    
//     let char = greet.charAt(index);

//     if (index%2 == 0) {
        
//         const element = greet[index];
        
//         const upperCase = element.toUpperCase();
         
//         console.log(upperCase);
        

//     }
    
//  }

function alternativeCase(string) {
     
    let newString = [];

    for (let i = 0; i < string.length; i++) {

         if (i % 2 == 0 ) {
             
            newString[i] = string[i].toUpperCase();
         }
         else{

            newString[i] = string[i].toLowerCase();
         }
        
    }
  return newString.join(" ");

 }

let result = alternativeCase("How are you mate");

console.log(result);

