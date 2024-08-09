
console.log(`WAP using Function Expression for TCS interview eligibility criteria check using if-else statement========`);

var eligibilityCheck=function(gradScore,hscScore,sscScore,candidateName) {

     if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ) {
        
        console.log(`Cogratulation! ${candidateName} you are eligible for TCS interview`);
        
        
     } else {
        
        console.log(`Sorry ${candidateName} you are not eligible for interview better luck for next time`);
        
        
     }
}
eligibilityCheck(80,86,90,"Pooja");

eligibilityCheck(70,65,55,"Deepa");

eligibilityCheck(60,79,88,"Varsha");





