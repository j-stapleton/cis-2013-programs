var $ = function (id) 
{
    return document.getElementById(id);
}


/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/
 var calculate = function()
 {
 Var floatMonthlyPayment. intLoanTerm, floatTotalCost;
 floatMonthlyPayment = parseFloat($("monthly payment").value);
 intLoanTerm = parseInt($("loan length").value);
 floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);
 $("total_cost").value = floatTotalCost;
    
 }
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}
