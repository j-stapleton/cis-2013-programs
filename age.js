var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
floatAge = parseFloat(prompt("Enter age in years"));
floatDays = floatAge*365.25;
floatMonths = floatAge*12;
intWeeks = floatDays/7
intFortnights = floatDays/14
alert("Age = " + floatDays, floatMonths, intWeeks, intFortnights);
