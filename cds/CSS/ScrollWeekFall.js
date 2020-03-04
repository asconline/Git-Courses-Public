window.onload = function ScrollWeek (alignToTop) {
var current = new Date();
var week1 = new Date("September 11, 2017 00:00:00");
var week2 = new Date("September 18, 2017 00:00:00");
var week3 = new Date("September 25, 2017 00:00:00");
var week4 = new Date("October 2, 2017 00:00:00");
var week5 = new Date("October 9, 2017 00:00:00");
var week6 = new Date("October 16, 2017 00:00:00");
var week7 = new Date("October 23, 2017 00:00:00");
var week8 = new Date("October 30, 2017 00:00:00");
var week9 = new Date("November 6, 2017 00:00:00");
var week10 = new Date("November 13, 2017 00:00:00");
var week11 = new Date("November 20, 2017 00:00:00");
var week12 = new Date("November 27, 2017 00:00:00");
var week13 = new Date("December 4, 2017 00:00:00");
			
if(current>week13) {
	document.getElementById("w13F").scrollIntoView(alignToTop);
}
else {
if(current>week12){
	document.getElementById("w12F").scrollIntoView(alignToTop);
}
else {
if(current>week11){
	document.getElementById("w11F").scrollIntoView(alignToTop);
}
else {
if(current>week10){
	document.getElementById("w10F").scrollIntoView(alignToTop);
}
else {
if(current>week9){
	document.getElementById("w9F").scrollIntoView(alignToTop);
}
else {
if(current>week8){
	document.getElementById("w8F").scrollIntoView(alignToTop);
}
else {
if(current>week7){
	document.getElementById("w7F").scrollIntoView(alignToTop);
}
else {
if(current>week6){
	document.getElementById("w6F").scrollIntoView(alignToTop);
}
else {
if(current>week5){
	document.getElementById("w5F").scrollIntoView(alignToTop);
}
else {
if(current>week4){
	document.getElementById("w4F").scrollIntoView(alignToTop);
}
else {
if(current>week3){
	document.getElementById("w3F").scrollIntoView(alignToTop);
}
else {
if(current>week2){
	document.getElementById("w2F").scrollIntoView(alignToTop);
}
else {
if(current>week1){
	document.getElementById("w1F").scrollIntoView(alignToTop);
}
else {
	document.getElementById("w0F").scrollIntoView(alignToTop);
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
}
}
};