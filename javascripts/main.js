

var theUrl = "https://api.mlab.com/api/1/databases/linuxem/collections/temp?apiKey=Wsr5fq8hXd3xtNV_ERnMRSDO02J2U1kG"

var test;
httpGetAsync(theUrl, function(str){
	console.log("data", str);
	for (var i = 0; i < str.length; i++) {
    var object = str[i];
    for (var property in object) {
     console.log("property", property);
     console.log("object", object);      
    }
    // If property names are known beforehand, you can also just do e.g.
    // alert(object.id + ',' + object.Title);
}
	var data = JSON.parse(str, function(k, v) {
		console.log("k", k);
		console.log("v", v);
	// console.log("temp", temperature);
	// var date = data.date;
	// console.log("date", date);
	// var time = data.time;
	// console.log("time", time);
	});
	console.log("data after parse", data);
	
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
