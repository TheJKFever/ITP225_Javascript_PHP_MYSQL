
(function(){
	var temperatures = [];
	var lowest = 150;
	var highest = 0;
	var lAverage = 0;
	var hAverage = 0;

	var table = $('table');

	function addTemps() {
		'use strict';
		var table = "<table><tr><th style='width:110px'>Date</th><th>Low Temperature</th><th>High Temperature</th></tr>";
		var lTemp = $('lTemp').value;
		var hTemp = $('hTemp').value;
		if (((parseFloat(lTemp, 10) != parseInt(lTemp, 10)) || isNaN(lTemp) ||
		(parseFloat(hTemp, 10) != parseInt(hTemp, 10)) || isNaN(hTemp)) ||
		(lTemp > lowest) || (hTemp < highest) || (lTemp > hTemp)) {
			if ((parseFloat(lTemp, 10) != parseInt(lTemp, 10)) || isNaN(lTemp)){
				table += '<tr><td colspan="3">Please enter a number for low temperature.</td></tr></table>';
			}
			if ((parseFloat(hTemp, 10) != parseInt(hTemp, 10)) || isNaN(hTemp)){
				table += '<tr><td colspan="3">Please enter a number for high temperature.</td></tr></table>';			
			}
			if ((lTemp > 150) || (hTemp < 0)) {
				table += '<tr><td colspan="3">Please enter a number below 150 for low, or a number greater than 0 for high temperature.</td></tr></table>';
			} 
			if (lTemp>hTemp) {
				table += '<tr><td colspan="3">Please enter a low temperature less than the high temperature.</td></tr></table>';			
			}
			$('output').innerHTML = table;			
		}
		else {
			lTemp = parseInt(lTemp, 10);
			hTemp = parseInt(hTemp, 10);
			var newDate = new Date((new Date().getTime())-(temperatures.length * 86400000));
			temperatures.push([newDate,lTemp,hTemp]);
			table = createTable(table);
			$('output').innerHTML = table;			
		}
		return false;
	}

	function init() {
		'use strict';
		$('theForm').onsubmit = addTemps;
	}

	function createTable(tbl){
		lAverage=0; hAverage=0;
		for (var i = 0; i<temperatures.length; i++) {
			var date = ''+(temperatures[i][0].getMonth()+1)+"/"+temperatures[i][0].getDate()+"/"+temperatures[i][0].getFullYear();
			var low = temperatures[i][1];
			var high = temperatures[i][2];
			tbl += '<tr><td>'+date+'</td><td style="text-align: right">'+low+'</td><td style="text-align: right">'+high+'</td></tr>';
			lAverage+=temperatures[i][1];
			hAverage+=temperatures[i][2];
		}
		lAverage=(lAverage/temperatures.length).toFixed(1);
		hAverage=(hAverage/temperatures.length).toFixed(1);
		tbl+='<tr class="summaryRow"><td>Averages</td><td style="text-align: right">'+lAverage+'</td><td style="text-align: right">'+hAverage+'</td></tr>';
		tbl+='</table>';
		return tbl;
	}

	function $(elementID){ 
		if (typeof(elementID) == 'string') { 
			return document.getElementById(elementID);
		}
	}

	window.onload = init;
	
})();