function calculate(){
	'use strict';
// Get variables from form
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var regHours = document.getElementById('regHours').value;
	var overHours = document.getElementById('overHours').value;
	var rate = document.getElementById('rate').value;
	var fICA = document.getElementById('fICA').value;
	var stateTax = document.getElementById('stateTax').value;
	var fedTax = document.getElementById('fedTax').value;	
// Make calculations
	var regPay = (rate*regHours).toFixed(2);
	var overtimePay = (overHours*(1.5*rate)).toFixed(2);
	var grossPay = (+regPay+ +overtimePay).toFixed(2);
	var taxes = ((+fICA+ +stateTax+ +fedTax)/100*grossPay).toFixed(2);
	var netPay = (grossPay-taxes).toFixed(2);
	var employeeName = lastName+", "+firstName;
// Insert new values
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