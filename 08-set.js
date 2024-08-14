
let mySet = new Set(); 

mySet.add(10);

mySet.add(50);

mySet.add(20);

mySet.add(50);

mySet.add(20);

console.log(mySet);

 

console.log(mySet.size);

mySet.delete(20);

console.log(mySet);

 

console.log(mySet.has(100));

console.log(mySet.has(10));

 

console.log(`=======================`);

for (const element of mySet) {

    console.log(element);

}