
var array = [ 3, 9, 7, 6, 19, 29, 53];

function isPrime(num) {

    if (num <= 1) {
        
        return false;
    }

    for (let i = 2;  i < num; i++) {
         if (num % i == 0) {

            return false;

         }
        
    }
return true;


}
var result = isPrime(array);

console.log(result);
