
console.log(`==== 1.log the first and last element of array on console==========`);

const fruits=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array is:${fruits}`);

console.log(`first element of array is:${fruits[0]} and last elements of array is:${fruits[fruits.length-1]}`);

console.log(`===== 2.Add element at the begining of array ================`);

const fruits1=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array is:${fruits1}`);

fruits1.unshift("Papaya");

console.log(`Add element at begining of array:${fruits1}`);

console.log(`==== 3.Removed middle element from array ======================`);

const fruits3=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array is:${fruits3}`);

fruits3.splice(3,1);

console.log(`Updating an array element:${fruits3}`);

console.log(`==== 4.Add an element ""pineapples at the last position in the Array========= `);

var fruits4=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array is:${fruits4}`);

fruits4.push();

console.log(`Updating an array element:${fruits4} `);

console.log(`==== 5.Insert an element "Dragon Fruit" before "Water Melon"==================`);

const fruits5=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array is:${fruits5}`);

fruits5.splice(4,0,"Dragon Fruit");

console.log(`Updating an array element:${fruits5}`);

console.log(`===== 6.Replacing an array element "Orange" with "Kiwi"=========================`);
 
const fruits6=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array is:${fruits6}`);

fruits6.splice(1,1,"Kiwi");

console.log(`Updating an array element:${fruits6}`);

console.log(`==== 7.To get particular element from array========================`);

const fruits7=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array is:${fruits7}`);

let fruitsReturn=fruits7.slice(1,4);

console.log(`Updating an array element:${fruitsReturn}`);

console.log(`====== 8.To get last three element from array=======================`);

const fruits8=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array is:${fruits8}`);

const lengthOfArray=fruits8.slice(fruits8.length-3);

console.log(`Updating an array element:${lengthOfArray}`);

// const lastThreeEle=fruits_seasonal.slice(fruits_seasonal.length-3);
// console.log(`9.Last three element of array is:${lastThreeEle}`);












