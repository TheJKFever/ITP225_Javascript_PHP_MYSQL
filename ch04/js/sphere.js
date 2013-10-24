function calculate(){
	'use strict';
	var volume;
	var radius = document.getElementById('radius');
		if (radius && (radius.value>0)) {
			volume = (4/3) * Math.PI * Math.pow(radius.value, 3);
			volume = volume.toFixed(4);
			document.getElementById('volume').value = volume;
		}
	return false;
}

function init (){
	'use strict'
	document.getElementById('calcForm').onsubmit = calculate;
}

window.onload = init;