function ScrollWeek (alignToTop) {
var current = new Date();
var week1 = new Date("January 9, 2017 00:00:00");
var week2 = new Date("January 16, 2017 00:00:00");
var week3 = new Date("January 23, 2017 00:00:00");
var week4 = new Date("January 30, 2017 00:00:00");
var week5 = new Date("February 6, 2017 00:00:00");
var week6 = new Date("February 13, 2017 00:00:00");
var week7 = new Date("February 27, 2017 00:00:00");
var week8 = new Date("March 6, 2017 00:00:00");
var week9 = new Date("March 13, 2017 00:00:00");
var week10 = new Date("March 20, 2017 00:00:00");
var week11 = new Date("March 27, 2017 00:00:00");
			
if(current>week11){
	document.getElementById("weekeleven").scrollIntoView(alignToTop);
}
else {
	if(current>week10){
		document.getElementById("weekten").scrollIntoView(alignToTop);
	}
if(current>week9){
	document.getElementById("weeknine").scrollIntoView(alignToTop);
}
else {
	if(current>week8){
		document.getElementById("weekeight").scrollIntoView(alignToTop);
	}
if(current>week7){
	document.getElementById("weekseven").scrollIntoView(alignToTop);
}
else {
	if(current>week6){
		document.getElementById("weeksix").scrollIntoView(alignToTop);
	}
if(current>week5){
	document.getElementById("weekfive").scrollIntoView(alignToTop);
}
else {
	if(current>week4){
		document.getElementById("weekfour").scrollIntoView(alignToTop);
	}
if(current>week3){
	document.getElementById("weekthree").scrollIntoView(alignToTop);
}
else {
	if(current>week2){
		document.getElementById("weektwo").scrollIntoView(alignToTop);
	}
if(current>week1){
	document.getElementById("weekone").scrollIntoView(alignToTop);
}
}
}
}
}
}
};