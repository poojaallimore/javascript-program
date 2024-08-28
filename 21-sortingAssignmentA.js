

console.log(`==== Sorting array in ascending ,descending and reverse order========================`);

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]

console.log(`Given array is:${arrayRollNumbers}`);

console.log(`===== 1.Reverse the array using sort() method ===============================`);

const arrayReverse = arrayRollNumbers.reverse();

console.log(`Reversed array:${arrayReverse}`);

console.log(`===== 2. Using sort() method without any custom sorting logic================== `);

const arrayRollNumbers1 = [113,45,56,11,32,45,109,799,56,45]

console.log(`Given array is:${arrayRollNumbers}`);

const arraySorted = arrayRollNumbers1.sort();

console.log(`Sorted Array:${arraySorted}`);

console.log(`==== 3.Sort the array in ascending using custom logic==============`);

const arrayRollNumbers2 = [113,45,56,11,32,45,109,799,56,45]

console.log(`Given array is:${arrayRollNumbers2}`);

arrayRollNumbers2.sort((n1,n2)=> {

     return n1>n2?1:-1;
});
console.log(`Array sorted in ascending order:${arrayRollNumbers2}`);

console.log(`===== 4. Find Greatest number from array===============`);

const arrayGreatestNum = arrayRollNumbers2[arrayRollNumbers2.length-1];

console.log(`Greatest Number from array:${arrayGreatestNum}`);

console.log(`===== 5. Find Smallest number from array===============`);

const arraySmallestNum = arrayRollNumbers2[0];

console.log(`Smallest Number from array:${arraySmallestNum}`);

console.log(`=== 6.Remove duplicate element from array=====================`);
 
const arrayOne = [113,45,56,11,32,45,109,799,56,45];

console.log(`Given array is:${arrayOne}`);

let newArray = [];

for (let index = 0; index < arrayOne.length; index++) {
    
    let element = arrayOne[index];

    if (newArray.indexOf(element) == -1) {
        
        newArray.push(element);
    }
    
}
console.log(`Array with unique element:${newArray}`);



