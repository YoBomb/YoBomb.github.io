var api_token = "cfff0f6e-dbf5-44c9-884c-188e24ad34d2",
yoname, msg;

function yo(api_token) {
	xhr = new XMLHttpRequest();
	params = "api_token=" + api_token + "&username=" + yoname+"&link=http://yobomb.me/reply.html?msg="+msg;
	
	xhr.open("POST", "http://api.justyo.co/yo/", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(params);

	document.getElementById("yo_send").style.background = "#000000";

	setTimeout(function(){
		document.getElementById("yo_send").style.background = "#E54B4B";
	},100);

	return true;
}

function activate(input_user, the_msg, n){

	yoname = input_user;
	msg = encodeURIComponent(the_msg);

	if (n > 0){
		yo(api_token);
		setTimeout(function() {
			activate(input_user, the_msg,n-1)
			console.log(n)
		}, 600);
	}

}
