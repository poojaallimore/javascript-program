console.log("====== 1.Function with no argument and no return type================");

function show() {
    console.log("1 Hello Good Afternoon");
}
show();

// console.log("===================================================================");

function text() {
  console.log("1.2 I Am Learning JavaScript");  
}
text();

console.log("===== 2.Function with argument and no returns==========================");

function personalDetails(firstName,lastName,collageName) {
    console.log("2.1 My First Name is:",firstName);

    console.log("2.2 My Last Name is:",lastName);

    console.log("2.3 My Collage Name is:",collageName);


}
 
personalDetails("Pooja","Chetan","SNDCOE");

console.log("===== 3.Function with argument and no returns================================ ");

function addThreeValues(numOne,numTwo,numThree) {
   
    var result=numOne+numTwo+numThree;

    console.log("3.Addition of given numbers is:",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello"," Good"," Morning")