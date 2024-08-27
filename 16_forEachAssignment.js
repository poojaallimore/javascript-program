
console.log(`===== 1.Array element with its index value=================`);

 let arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`Given array is:${arrayNumber}`);

arrayNumber.forEach((element,index) => {

    console.log("Array element:",element , "Index;",index);

})

console.log(`===== 2.To find positive number in given array==================`);

let arrayNum = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`Given array is:${arrayNum}`);

arrayNum.forEach((element) => {

    if (element > 0) {

         console.log("Positive number elements-",element);
         
    }
})

console.log(`====== 3. To find Negative number element=============================`);

let arrayNegativeNum =[1,-7,40,502,-77,91,0,108,89,-601];

console.log(`Given array is:${arrayNegativeNum}`);

let newArray =[];

arrayNegativeNum.forEach((element) =>{

    if (element < 0) {
        
        newArray.push(element);

    }
})
console.log("Negative element array is:", newArray);

console.log(`===== 4.To find even numbers======================================`);

let arrayOne = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`Given array is:${arrayOne}`);

arrayOne.forEach((element) => {

    if (element % 2 == 0) {
        
        console.log("Even numbers-",element);
        
    }
})

console.log(`==== To find sum of all element from array=====================`);

let arraySum =  [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`Given array is:${arraySum}`);

let sum = 0;

arraySum.forEach((element) => {

    sum = sum + element;

})
console.log(`Sum of all array element is:${sum}`);

console.log(`==== To find only even indexed value===========================`);

let arrayEvenIndx =  [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`Given array is:${arrayEvenIndx}`);

arrayEvenIndx.forEach((element,index) => {

    if (index % 2 == 0) {
        
        console.log("Even index element-",element);
        
    }
})
