

var theUrl = "https://api.mlab.com/api/1/databases/linuxem/collections/temp?apiKey=Wsr5fq8hXd3xtNV_ERnMRSDO02J2U1kG"

var test;
httpGetAsync(theUrl, function(str){
	console.log("data", str);
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
