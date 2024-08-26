
console.log(`==== Arrow function with no argument and no returns===========================`);

let show =()=>{
   
    console.log(`Good Morning, Today is Monday`);
    
}
show();

console.log(`===== Arrow function with argument and no returns================`);

let multiplication = (n1,n2,n3=1)=>{

    let result = n1*n2*n3;
    
    console.log(`Multiplication is:${result}`);
     

}
multiplication(5,5,2);

multiplication(10,4);

console.log(`==== Arrow function with arguments and returns================`);

let add = (n1,n2,n3,n4,n5)=>{

    let addition = n1+n2+n3+n4+n5;

    return addition;
    
}

let returnResult = add (100,100,200,349,756);

console.log(`Addition is:${returnResult}`);

let returnResult1 = add ("I am"," learning"," ES6"," features"," in depth");

console.log(`Addition is:${returnResult1}`);

