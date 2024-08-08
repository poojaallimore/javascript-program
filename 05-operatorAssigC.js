console.log("====Using ternary operator function expression  with no return========= ");


function eligibilityCheck(gradeScore,hscScore,sscScore,candidateName) {

    var result=gradeScore>=70 || hscScore>=80 || sscScore>=90
    ?`Congratulation ${candidateName} you are eligible for interview`
    :`Sorry ${candidateName} you are not eligible for interview better luck for next`;
    
    console.log(result);
     
}
eligibilityCheck(80, 86, 90, "Chetan");

eligibilityCheck(70,65,55,"Pooja");

eligibilityCheck(60,79,88,"varsha");

