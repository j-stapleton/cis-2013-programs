//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff score for pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30)"));

floatMidPts = parseFloat(prompt("Please enter final MID pts (0-35)"));

floatFinPts = parseFloat(prompt("Please enter final FINAL pts (0-35)"));

floatTotalPts = parseFloat(floatHwPts + flaotMidPts + floatFinPts);

intGradeOption = parseFloat(prompt("Please Choose Grade Option 1 or 2"));

if (intGradeOption===1)
{
    if (floatTotalPoints>=80)
    {
        stringFinalGrade= "Pass";
    }
    else
    {
        stringFinalGrade= "Fail";
    }
}
if (intGradeOption===2)
{   
    if(floatTotalPoints>=90 && floatTotalPoints<=100)
    {
        stringFinalGrade = "A";
    }
    if(floatTotalPts>= 80 && floatTotalPoints<90)
    {
        stringFinalGrade = "B";
    }
    if(floatTotalPoints>=70 && floatTotalPoints<80)
    {
        stringFinalGrade = "C";
    }
    if(floatTotalPoints>=60 && floatTotalPoints<70)
    {
        stringFinalGrade = "D";
    }
    if (flaotTotalPoints<60)
    {
        stringFinalGrade = "F";
    }
}






alert("Your final grade is: " +stringFinalGrade);
