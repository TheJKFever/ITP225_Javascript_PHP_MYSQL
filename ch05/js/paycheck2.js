function calculate(){
	'use strict';
// Get variables from form
	var regHours;
	var overHours;
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var hours = document.getElementById('hours');
	var rate = document.getElementById('rate');
	var fICA = document.getElementById('fICA').value;
	var stateTax = document.getElementById('stateTax').value;
	var fedTax = document.getElementById('fedTax').value;
	if (hours && hours.value>=0 && hours.value<=80 && rate && rate.value>=0 && rate.value<=100) {
		hours.value>=40? regHours=40 : regHours=hours.value;
		hours.value>=40? overHours=hours.value-40 : overHours=0;
	// Make calculations
		var regPay = (rate.value*regHours).toFixed(2);
		var overtimePay = (overHours*(1.5*rate.value)).toFixed(2);
		var grossPay = (+regPay+ +overtimePay).toFixed(2);
		var taxes = ((+fICA+ +stateTax+ +fedTax)/100*grossPay).toFixed(2);
		var netPay = (grossPay-taxes).toFixed(2);
		var employeeName = lastName+", "+firstName;
	} else {
		alert("Please enter valid hours and a valid payrate!")
	}	
// Insert new values
	document.getElementById('regHours').value = regHours;
	document.getElementById('overHours').value = overHours;
	document.getElementById('regPay').value = regPay;
	document.getElementById('overtimePay').value = overtimePay;
	document.getElementById('grossPay').value = grossPay;
	document.getElementById('totalTax').value = taxes;
	document.getElementById('employeeName').value = employeeName;
	document.getElementById('netPay').value = netPay;
	return false;
}

function init(){
	'use strict';
	document.getElementById('form').onsubmit = calculate;
}

window.onload = init;