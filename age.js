var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
floatAge = prompt("Enter age in years");
floatDays = parseFloat(floatAge*365.25);
floatMonths = parseFloat(floatAge*12);
intWeeks = parseInt(floatDays / 7);
intFortnights = parseInt(floatDays/14);
alert("Age in days = " floatDays + "Age in Months = " floatMonths + "Age in Weeks = " + intWeeks + "Age in Fortnights = " + intFortnights);
