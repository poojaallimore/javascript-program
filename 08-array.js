
let array=[10,20,30,40];

console.log(array);

// to access element at particular index

console.log(array[2]);

// to read or access last value of array
console.log(array[array.length-1]);

// update array value

array[3]=100;

console.log(array);

let arrayList = ["Jenny", "Elon", "Stew", "Bill", "Warn"];

console.log(`==============Traversing an array ======================`);

 

for (let index = 0; index < arrayList.length; index++) {

    const element = arrayList[index];

    console.log(element);  

}

console.log(`==============Traversing an array in reverse order ======================`);

for (let index = arrayList.length-1; index >=0; index--) {

    const element = arrayList[index];

    console.log(element);   

}

 

console.log(`============== Print only even indexed elements  ===============`);

for (let index = 0; index < arrayList.length; index++) {

    if (index%2==0) {

        const element = arrayList[index];

        console.log(element); 

    }

}



