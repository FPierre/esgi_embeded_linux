

var theUrl = "https://api.mlab.com/api/1/databases/linuxem/collections/temperature?apiKey=Wsr5fq8hXd3xtNV_ERnMRSDO02J2U1kG"

var data;
var temperature;
var dateinfo;
var time;


//document.getElementById("#refresh").onclick = function () { init() };
init();
function init() {
	httpGetAsync(theUrl, function(str){
	console.log("str", str);
	// data = str;
	// console.log("data", data);
    // If property names are known beforehand, you can also just do e.g.
    // alert(object.id + ',' + object.Title);


data = JSON.parse(str);
console.log("data", data);
for (var i = 0; i<data.length; i++) {
	console.log("data.temp", data.temperature);
	console.log("data.date", data.date);
	console.log("data.time", data.time);
}
	// JSON.parse(str, function(k, v) {
		
	// 	console.log("k", k);
	// 	console.log("v", v);
		
	// 	switch(k) {
	// 		case "temperature" :
	// 			temperature = v/1000;
	// 			console.log("temp", temperature);
	// 			break;
	// 		case "date" :
	// 			dateinfo = v;
	// 			console.log("date", dateinfo);
	// 			break;
	// 		case "time" :
	// 			time = v;
	// 			console.log("time", time);
	// 			break;
	// 		}
	// });
		BindingElements();
		console.log("data", data);

});

}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function BindingElements() {
	$(document).ready(function(){
		if(temperature == "" || temperature == undefined) {
   			$('div#temp').text("Error on temperature");
		} else {
   			$('div#temp').text(temperature);
		}
   		console.log("Temp", temperature);
		if(dateinfo == "" || dateinfo == undefined) {
   			$('div#date').text("Error on date");
		} else {
   			$('div#date').text(dateinfo);
		}
   		console.log("Date", dateinfo);
		if(time == "" || time == undefined) {
   			$('div#time').text("Error on time");
		} else {
   			$('div#time').text(time);
		}
   		console.log("Time", time);
   		$('#refresh').click(function(){
       		init();
    	});
	});
}
console.log('This would be the main JS file.');
