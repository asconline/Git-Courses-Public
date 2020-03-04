function ScrollWeek (alignToTop) {
var current = new Date();
var week1 = new Date("January 8, 2018 00:00:00");
var week2 = new Date("January 15, 2018 00:00:00");
var week3 = new Date("January 22, 2018 00:00:00");
var week4 = new Date("January 29, 2018 00:00:00");
var week5 = new Date("February 5, 2018 00:00:00");;
var week6 = new Date("February 12, 2018 00:00:00");
var week7 = new Date("February 26, 2018 00:00:00");
var week8 = new Date("March 5, 2018 00:00:00");
var week9 = new Date("March 12, 2018 00:00:00");
var week10 = new Date("March 19, 2018 00:00:00");
var week11 = new Date("March 26, 2018 00:00:00");
var week12 = new Date("April 2, 2018 00:00:00");
var week13 = new Date("April 9, 2018 00:00:00");

switch (true) {
	case (current > week13):
	    document.getElementById("w13W").scrollIntoView(alignToTop);
        break;
    case (current > week12):
	    document.getElementById("w12W").scrollIntoView(alignToTop);
		break;
	case (current > week11):
	    document.getElementById("w11W").scrollIntoView(alignToTop);
		break;
	case (current > week10):
	    document.getElementById("w10W").scrollIntoView(alignToTop);
		break;
	case (current > week9):
	    document.getElementById("w9W").scrollIntoView(alignToTop);
		break;
	case (current > week8):
	    document.getElementById("w8W").scrollIntoView(alignToTop);
		break;
	case (current > week7):
	    document.getElementById("w7W").scrollIntoView(alignToTop);
		break;
	case (current > week6):
	    document.getElementById("w6W").scrollIntoView(alignToTop);
		break;
	case (current > week5):
	    document.getElementById("w5W").scrollIntoView(alignToTop);
		break;
	case (current > week4):
	    document.getElementById("w4W").scrollIntoView(alignToTop);
		break;
	case (current > week3):
	    document.getElementById("w3W").scrollIntoView(alignToTop);
		break;
	case (current > week2):
	    document.getElementById("w2W").scrollIntoView(alignToTop);
		break;
	case (current > week1):
	    document.getElementById("w1W").scrollIntoView(alignToTop);
		break;
}
}