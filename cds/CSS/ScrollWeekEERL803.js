window.onload = function ScrollWeek (alignToTop) {
var current = new Date();
var week1 = new Date("May 22, 2017 00:00:00");
var week2 = new Date("May 29, 2017 00:00:00");
var week3 = new Date("June 5, 2017 00:00:00");
var week4 = new Date("June 12, 2017 00:00:00");
var week5 = new Date("June 19, 2017 00:00:00");
var week6 = new Date("June 26, 2017 00:00:00");
var week7 = new Date("July 3, 2017 00:00:00");
var week8 = new Date("July 10, 2017 00:00:00");
var week9 = new Date("July 17, 2017 00:00:00");
var week10 = new Date("July 24, 2017 00:00:00");
var week11 = new Date("July 31, 2017 00:00:00");
var week12 = new Date("August 7, 2017 00:00:00");
			
if(current>week12){
	document.getElementById("weektwelve").scrollIntoView(alignToTop);
}
else {
if(current>week11){
	document.getElementById("weekeleven").scrollIntoView(alignToTop);
}
else {
if(current>week10){
	document.getElementById("weekten").scrollIntoView(alignToTop);
}
else {
if(current>week9){
	document.getElementById("weeknine").scrollIntoView(alignToTop);
}
else {
if(current>week8){
	document.getElementById("weekeight").scrollIntoView(alignToTop);
}
else {
if(current>week7){
	document.getElementById("weekseven").scrollIntoView(alignToTop);
}
else {
if(current>week6){
	document.getElementById("weeksix").scrollIntoView(alignToTop);
}
else {
if(current>week5){
	document.getElementById("weekfive").scrollIntoView(alignToTop);
}
else {
if(current>week4){
	document.getElementById("weekfour").scrollIntoView(alignToTop);
}
else {
if(current>week3){
	document.getElementById("weekthree").scrollIntoView(alignToTop);
}
else {
if(current>week2){
	document.getElementById("weektwo").scrollIntoView(alignToTop);
}
else {
	document.getElementById("weekone").scrollIntoView(alignToTop);
}
}
}
}
}
}
}
}
}
}
}
};