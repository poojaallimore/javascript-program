
console.log(`==== WAP Function Expression for Vote Eligibility Criteria using if-else Statement==============`);

var voteEligible=function(age) {
    if (age==0 || age>=130 || age<=-1 || age==null) {

        console.log(`Invalid Data. Age:${age}`);
        
        
    } else {

        if (age>=18) {
            console.log(`Congratulation! you are ${age}  years old and you are eligible for vote`);
            
            
        } else {
          
            console.log(`Hey you are ${age} years old and unfortunately you are not eligible for vote`);
            
        }
        
    }
    
}
voteEligible(45);

voteEligible(17);

voteEligible(8);

voteEligible(20);

voteEligible(-10);

voteEligible(200);

voteEligible(0);

voteEligible(null);
