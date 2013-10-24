function calculate(){
	'use strict';
	var total;
	var quantity = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;
	var tax = document.getElementById('tax').value;
	var discount = document.getElementById('discount').value;	
	tax /= 100;
	tax++;
	total = ((quantity*price*tax)-discount).toFixed(2);
	document.getElementById('total').value = total;
	return false;
}

function init(){
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}

window.onload = init;