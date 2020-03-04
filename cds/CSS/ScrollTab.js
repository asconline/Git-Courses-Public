window.onload = function ScrollTab(True) {
var current = new Date();
var week2 = new Date("January 1, 2017 00:00:00");

if(current>week2){
	document.getElementById("starthere").style.display = "none";
	document.getElementById("teachingteam").style.display = "block";
}
else {
	document.getElementById("starthere").style.display = "block";
	document.getElementById("teachingteam").style.display = "none";
}
};