var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(floatHwPts = $("hw_pts").value);

floatMidPts = parseFloat(floatMidPts = $("mid_pts").value);

floatFinPts = parseFloat(floatFinPts = $("fin_pts").value);

floatTotalPts = parseFloat(floatHwPts + flaotMidPts + floatFinPts);

intGradeOption = parseInt(intGradeOption = $("grade_option").value);

if (intGradeOption===1)
{
    if (floatTotalPts>=80)
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
    if(floatTotalPts>=90)
    {
        stringFinalGrade = "A";
    }
    if(floatTotalPts>= 80 && floatTotalPts<90)
    {
        stringFinalGrade = "B";
    }
    if(floatTotalPts>=70 && floatTotalPts<80)
    {
        stringFinalGrade = "C";
    }
    if(floatTotalPts>=60 && floatTotalPts<70)
    {
        stringFinalGrade = "D";
    }
    if (floatTotalPts<60)
    {
        stringFinalGrade = "F";
    }
}






$("final_grade").value = stringFinalGrade;