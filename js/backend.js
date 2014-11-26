var api_token = "cfff0f6e-dbf5-44c9-884c-188e24ad34d2",
yoname = "Divailo",
link = "http://owlee.me";


function yo(api_token) {
	xhr = new XMLHttpRequest();
	params = "api_token=" + api_token + "&username=" + yoname + "&link=" + link; 
	xhr.open("POST", "http://api.justyo.co/yo/", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(params);
}

function activate(yoname, link, n){
yoname1 = yoname;
link1 = link;

	for(i = 0; i<n; i++){
		yo(api_token);
	}
}