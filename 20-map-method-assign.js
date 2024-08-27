
console.log(`====== 1. Add 10 into each element of given array======================`);

const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

console.log(`Given array is:${arrayNumbers}`);

const addArray = arrayNumbers.map((element)=> {

    return element + 10;
})

console.log(`Transformed array:${addArray}`);

console.log(`==== 2. Cube the each element of given array ===========`);

const cubeArray = [20,11,40,25,23,11,9,31,60,2,19];

console.log(`Given array is:${cubeArray}`);

const newCubeArray = cubeArray.map((element)=> {

    return element*element*element;
})

console.log(`Transformed array:${newCubeArray}`);

console.log(`==== 3. Add index value into its corresponding array element=====================`);

let array = [20,11,40,25,23,11,9,31,60,2,19];

console.log(`Given array is:${array}`);

let newArray = array.map((element,index)=> {

    return element+index;

})

console.log(`Transformed array is:${newArray}`);




