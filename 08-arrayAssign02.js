
const array=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`Given array is:${array}`);

const lengthOfArray=array.length;

console.log(`1.Total length of given array is:${lengthOfArray}`);

console.log(`2.First element of array is:${array.shift()} and last element of array is:${array.pop()}`);

const arrayLength=array.length;

console.log(`3.Third last element of array is:${array[arrayLength-2]} `);

let arrayNum=[20,31,40,25,23,11,29,9,60,2,11];

 let result=[]   

 for (let index = 0; index < arrayNum.length; index++) {

    const element = arrayNum[index];

    if (element % 2 == 0) {
        
        result.push(element);
     
    }
    
 } 
console.log(`4.Even numbers in given array:${result.join()}`);

let arrayOddNum=[20,31,40,25,23,11,29,9,60,2,11];

let reslt=[]

for (let index = 0; index < arrayOddNum.length; index++) {

    const element = arrayOddNum[index];

    if (element % 2 == 1)  {
        
        reslt.push(element);
    }
    
}
console.log(`5.Odd number in given array is:${reslt}`);

const arrayOne=[20,31,40,25,23,11,29,9,60,2,11];

let sumEven=0;

for (let index = 0; index <= arrayOne.length; index++) {

    const element = arrayOne[index];

    if (index % 2 == 0) {
        
        sumEven=sumEven+element;
    }
    
}

console.log(`6.Sum of all even positioned element from array is:${sumEven}`);

const arrayOdd=[20,31,40,25,23,11,29,9,60,2,11];

let sumOdd=0;

for (let index = 0; index < arrayOdd.length; index++) {

    const element = arrayOdd[index];

    if (index % 2 == 1) {

        sumOdd=sumOdd+element;
        
    }
    
}

console.log(`7.Sum of all odd positioned number from array is:${sumOdd}`);

const arrayAddition=[20,31,40,25,23,11,29,9,60,2,11];

let sum=0;

for (let index = 0; index < arrayAddition.length; index++) {

    const element = arrayAddition[index];

    sum=sum+element;
    
}

console.log(`8.Sum of all elements from array is:${sum}`);

const arrayMultiple=[20,31,40,25,23,11,29,9,60,2,11];

let multipleOf=[]

for (let index = 0; index < arrayMultiple.length; index++) {

    const element = arrayMultiple[index];

    if (element % 5 == 0)  {
        
        multipleOf.push(element);
    }
    
}

console.log(`9.Multiple of five numbers in given array:${multipleOf.join()}`);

let arrayIn=[20,31,40,25,23,11,29,9,60,2,11];

let resultIn=arrayIn.includes(115);

console.log(`10.Is number 115 available in arrayIn:${resultIn}`);

let arrayIncludes=[20,31,40,25,23,11,29,9,60,2,11];

let resultIncludes=arrayIncludes.includes(23);

console.log(`11.Is number 23 available in arrayIncludes:${resultIncludes}`);

const arrayTwo=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`12.Given array is:${arrayTwo}`);

const insertNum=arrayTwo.splice(3,0,55,66);

console.log(`12.Insertion of element 55,66 at index 3 in given array:${arrayTwo} `);

// const arrayThree=[20,31,40,25,23,11,29,9,60,2,11];

// console.log(`13.Given array is:${arrayThree}`);
console.log(`13.Given array is:${arrayTwo}`);

let insertNumber=arrayTwo.splice(4,3);

console.log(`13.Deleted three elements starting from index 4 from given array:${arrayTwo}`);










