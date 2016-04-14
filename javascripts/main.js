

var theUrl = "https://api.mlab.com/api/1/databases/linuxem/collections/temp?apiKey=Wsr5fq8hXd3xtNV_ERnMRSDO02J2U1kG"

var data;
var temperature;
var dateinfo;
var time;
httpGetAsync(theUrl, function(str){
	console.log("data", str);
    // If property names are known beforehand, you can also just do e.g.
    // alert(object.id + ',' + object.Title);
	data = JSON.parse(str, function(k, v) {
		//console.log("k", k);
		//console.log("v", v);
		switch(k) {
			case "temperature" :
				temperature = v;
				console.log("temp", temperature);
				break;
			case "date" :
				dateinfo = v;
				console.log("date", dateinfo);
				break;
			case "time" :
				time = v;
				console.log("time", time);
				break;
			}
		}
		console.log("data",data);
	});

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
console.log('This would be the main JS file.');
