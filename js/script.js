$(document).ready(function() {
    getData();
});

function getData(){
    
    console.log();
    $.getJSON("js/columbia.json", function(schoolsData) {
        //Callback runs after the data is loaded
        console.log(schoolsData);
        loopThroughData(schoolsData);
    })
    addTwoNumbers(4, 5);
}
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);

}


function loopThroughData(s){
    for(i=0; i<s.length; i++) {
        
        var schoolName = s[i]["SCHOOL_NAME"];
        var year = s[i]["YEAR"];
        var gradPct = s[i]["GRADUATES_PCT"];
    //If graduation percent is less than 50%
    //And we use '&&' to indicate an AND condition
        //if (gradPct < 60 && gradPct > 0) {
            //...Do  this.
            //console.log(year, schoolName, gradPct);
        
        var barWidth = gradPct * 10;
        if (schoolName === "FREDERICK DOUGLASS HIGH"){

            $(".chart").append("<div class='bar' style='width: "+barWidth+"px'></div>");

        }

        }
    }



