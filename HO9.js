//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	while (isNaN(intCount) || intCount < 0 && intCount > 100) //using a while function to check if the inputted # is good 
	{
		intCount = parseInt(prompt("Your number was invalid, try another.")); //Using a prompt to alert the user if the number is invalid
	}	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 
for (let i=1; i<=intCount; i++) // For loop to start the fibonacci set
{
    k = i + j;
    i = j;
    j = k;
}
    
} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  
