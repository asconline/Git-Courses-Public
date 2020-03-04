/* Change Dates on the Timeline */
function ChangeDates() {
// COMMENTS ON USAGE
// notes: everything starts with index zero, due to the structure of javascript
// so for arrweeks[week#] to use it, you insert the week of interest minus 1
// example: if we want week 2, then arrweeks[1]
// for September 2017 Fall term,this would output Sept 18-24
// for arrdays[week#][day#], the first item is the week minus 1, and the second is the day minus 1
// Monday = 0, Tuesday =1, Wednesday =2, Thursday = 3, Friday =4, Saturday =5, Sunday =6
// if in doubt, just ask me. If there is a bug ask me

var indateFall = new Date(); 	// input date
var indateWinter = new Date(); 	// input date
var indateSummer = new Date(); 	// input date
var indateLSummer = new Date(); 	// input date

//	this is the only area that needs to be updated
// 	set the start dates
//	Fall (12 weeks)
indateFall.setDate(10);
indateFall.setMonth(8); // September
indateFall.setYear(2018);
// Winter (12 weeks + reading week)
indateWinter.setDate(7);
indateWinter.setMonth(0); // Jan
indateWinter.setYear(2019);

// Summer Early (supports 12 weeks & 6 weeks)
indateSummer.setDate(7);
indateSummer.setMonth(4); // May
indateSummer.setYear(2018);

// Summer Late (6 weeks)
// note in 2018 the first day of class is a Tuesday due to Canada day
indateLSummer.setDate(2);
indateLSummer.setMonth(6); // July
indateLSummer.setYear(2018);

// exam dates
var examF = "Dec 5-20, 2018";
var examW = "Apr 11-27, 2019";
var examNS1 = "Jun 21-22, 2018";
var examNS2 = "Jul 31 - Aug 3, 2018";
var examS = "Aug 15-16, 2018";

// tuition due in Full (didn't notice a pattern)
var tuitionF = "Sep 1";
var tuitionW = "Jan 10";
var tuitionNS = "May 1";
var tuitionS = "July 1";

// end of the part that needs to be updated

// DO NOT MESS AROUND BEYOND HERE
// UNLESS YOU KNOW WHAT YOU ARE DOING

// Calculated dates
// last day to add
var addcourseF;	// set later was wk2Ffri
var addcourseW; // set later as wk2Wfri
var addcourseNS; //set later as wk1NSfri
var addcourseS; //set later as wk2Smon

// last day to drop no penalty
var dropcourseF;	// set later was wk2Ffri
var dropcourseW; // set later as wk2Wfri
var dropcourseNS; //set later as wk1NSfri
var dropcourseNS12; //set later as wk2NSfri
var dropcourseS; //set later as wk2Smon

// last day to drop with penalty
var dropcoursePenF;	// set later was wk8Ffri
var dropcoursePenW; // set later as wk7Wfri
var dropcoursePenNS; //set later as wk4NSfri
var dropcoursePenNS12; //set later as wk8NSfri
var dropcoursePenS; //set later as wk5Smon

var readingweek; // calculated post wk 6 Mon-Fri



// create the arrays
// (don't forget everything starts at 0)
// week and individual day arrays
var arrdaysF = new Array(12);
var arrweekF = new Array(12);
var arrdaysW = new Array(12);
var arrweekW = new Array(12);
var arrdaysS = new Array(12);
var arrweekS = new Array(12);
var arrdaysLS = new Array(6);
var arrweekLS = new Array(6);
// creates a 2D array that is essentially empty organized by [week][day]
for (var i = 0; i < 12; i++) {
  arrdaysF[i] = new Array(7);
  arrdaysW[i] = new Array(7);
  arrdaysS[i] = new Array(7);
}
for (var i = 0; i < 6; i++) {
 arrdaysLS[i] = new Array(7);
}

// incrementing date
var movedateF = new Date();
var movedateW = new Date();
var movedateS = new Date();
var movedateLS = new Date();

var mvWeekF = new Date();
var mvWeekW = new Date();
var mvWeekS = new Date();
var mvWeekLS = new Date();

// initialize the first Monday of the semester
movedateF = new Date(indateFall.getTime());
movedateW = new Date(indateWinter.getTime());
movedateS = new Date(indateSummer.getTime());
movedateLS = new Date(indateLSummer.getTime());

mvWeekF = new Date(indateFall.getTime());
mvWeekW = new Date(indateWinter.getTime());
mvWeekS = new Date(indateSummer.getTime());
mvWeekLS = new Date(indateLSummer.getTime());


// temporary variables
var temp;
var day;
var month;
var dayMon;
var monthMon;
var daySun;
var monthSun;
var nmonthSun = 0;
var nmonthMon = 0;
// end of temp variable list

// lets populate it with all the possible course dates
for(var i = 0; i < 12; i++){ // cycle through weeks
    // cycle through days of each week

    // FALL wks
    dayMon = mvWeekF.getDate();
    nmonthMon = mvWeekF.getMonth();
    monthMon = mvWeekF.toLocaleString("en-us", { month: "short" });
    if(i == 11){ // last week of the term ends on a Friday
   		mvWeekF.setDate(mvWeekF.getDate()+4); // add 4 days to Friday
    }
    else{
        mvWeekF.setDate(mvWeekF.getDate()+6); // add 6 days to it for Sunday
	}
    daySun = mvWeekF.getDate();
    nmonthSun = mvWeekF.getMonth();
    monthSun = mvWeekF.toLocaleString("en-us", { month: "short" });

    if ((nmonthSun - nmonthMon) == 0) {
    	arrweekF[i] = monthMon.toString() + " " + dayMon.toString() +" - " + 	daySun.toString()+ "\n";
	}
	else{
		arrweekF[i] = monthMon.toString() + " " + dayMon.toString() +" - " + monthSun.toString() + " " +daySun.toString()+ "\n";
	}
     mvWeekF.setDate(mvWeekF.getDate()+1); // bring it to the next Monday

    // WINTER wks
    // intersperces a reading week after week 6
    dayMon = mvWeekW.getDate();
    nmonthMon = mvWeekW.getMonth();
    monthMon = mvWeekW.toLocaleString("en-us", { month: "short" });
    if(i == 11){ // last week of the term ends on a Friday
   		mvWeekW.setDate(mvWeekW.getDate()+4); // add 4 days to Friday
    }
    else{
        mvWeekW.setDate(mvWeekW.getDate()+6); // add 6 days to it for Sunday
	}
    daySun = mvWeekW.getDate();
    nmonthSun = mvWeekW.getMonth();
    monthSun = mvWeekW.toLocaleString("en-us", { month: "short" });

    if ((nmonthSun - nmonthMon) == 0) {
    	arrweekW[i] = monthMon.toString() + " " + dayMon.toString() +" - " + 	daySun.toString();
	}
	else{
		arrweekW[i] = monthMon.toString() + " " + dayMon.toString() +" - " + monthSun.toString() + " " +daySun.toString();
	}

	mvWeekW.setDate(mvWeekW.getDate()+1); // bring it to the next Monday
    //checks and intersperses a reading week
    if(i == 5){
		dayMon = mvWeekW.getDate();
		monthMon = mvWeekW.toLocaleString("en-us", { month: "short" });
		mvWeekW.setDate(mvWeekW.getDate()+4); // brings it to Friday
		daySun = mvWeekW.getDate();
        monthSun = mvWeekW.toLocaleString("en-us", { month: "short" });
		readingweek = monthMon.toString() + " " + dayMon.toString() +" - " + 	daySun.toString();
    	mvWeekW.setDate(mvWeekW.getDate()+3); // brings it to next week
    }

    // EARLY SUMMER
    //listed as 12 weeks, just use 6 week of 12 for 6 week courses
    dayMon = mvWeekS.getDate();
    nmonthMon = mvWeekS.getMonth();
    monthMon = mvWeekS.toLocaleString("en-us", { month: "short" });
    if(i == 11){ // last week of the term ends on a Friday
   		mvWeekS.setDate(mvWeekS.getDate()+4); // add 4 days to Friday
    }
    else{
        mvWeekS.setDate(mvWeekS.getDate()+6); // add 6 days to it for Sunday
	}
    daySun = mvWeekS.getDate();
    nmonthSun = mvWeekS.getMonth();
    monthSun = mvWeekS.toLocaleString("en-us", { month: "short" });

    if ((nmonthSun - nmonthMon) == 0) {
    	arrweekS[i] = monthMon.toString() + " " + dayMon.toString() +" - " + 	daySun.toString()+ "\n";
	}
	else{
		arrweekS[i] = monthMon.toString() + " " + dayMon.toString() +" - " + monthSun.toString() + " " +daySun.toString()+ "\n";
	}
     mvWeekS.setDate(mvWeekS.getDate()+1); // bring it to the next Monday


    // LATE SUMMER
    // 6 weeks
    if(i<6) // since these are only 6 week courses
    {
        dayMon = mvWeekLS.getDate();
    	nmonthMon = mvWeekLS.getMonth();
    	monthMon = mvWeekLS.toLocaleString("en-us", { month: "short" });
    	if(i == 5){ // last week of the term ends on a Friday
   			mvWeekLS.setDate(mvWeekLS.getDate()+4); // add 4 days to Friday
    	}
	    else{
    	    mvWeekLS.setDate(mvWeekLS.getDate()+6); // add 6 days to it for Sunday
		}
    	daySun = mvWeekLS.getDate();
    	nmonthSun = mvWeekLS.getMonth();
    	monthSun = mvWeekLS.toLocaleString("en-us", { month: "short" });

    	if ((nmonthSun - nmonthMon) == 0) {
    		arrweekLS[i] = monthMon.toString() + " " + dayMon.toString() +" - " + 	daySun.toString()+ "\n";
		}
		else{
			arrweekLS[i] = monthMon.toString() + " " + dayMon.toString() +" - " + monthSun.toString() + " " +daySun.toString()+ "\n";
		}
     	mvWeekLS.setDate(mvWeekLS.getDate()+1); // bring it to the next Monday

    }


    // cycles for Individual days
	for(var j = 0; j < 7; j++){
        //Fall Days
        day = movedateF.getDate();
        month = movedateF.toLocaleString("en-us", { month: "short" });
        arrdaysF[i][j] = month.toString() +" "+  day.toString();
        movedateF.setDate(movedateF.getDate()+1); // increment the day by one

		// Winter Days
        // intersperses a reading week after week 6
        day = movedateW.getDate();
        month = movedateW.toLocaleString("en-us", { month: "short" });
        arrdaysW[i][j] = month.toString() +" "+  day.toString();
        movedateW.setDate(movedateW.getDate()+1); // increment the day by one
       	//checks and intersperses a reading week
       	if(i == 5){
       		if(j == 6){
              	movedateW.setDate(movedateW.getDate()+7);
            }
        }

       	//Early Summer Days (12 weeks and 6 weeks combined)
        day = movedateS.getDate();
        month = movedateS.toLocaleString("en-us", { month: "short" });
        arrdaysS[i][j] = month.toString() +" "+  day.toString();
        movedateS.setDate(movedateS.getDate()+1); // increment the day by one

   		//Late Summer Days (6 weeks combined)
        if(i <6){
        	day = movedateLS.getDate();
        	month = movedateLS.toLocaleString("en-us", { month: "short" });
        	arrdaysLS[i][j] = month.toString() +" "+  day.toString();
        	movedateLS.setDate(movedateLS.getDate()+1); // increment the day by one
    	}
    }// end of inner (daily) for


}// end of outer (weekly) for

//Fall
// week 1
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week1F/g, arrweekF[0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Fmon/g, arrdaysF[0][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Ftue/g, arrdaysF[0][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Fwed/g, arrdaysF[0][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Fthu/g, arrdaysF[0][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Ffri/g, arrdaysF[0][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Fsat/g, arrdaysF[0][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Fsun/g, arrdaysF[0][6]);

//week 2
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week2F/g, arrweekF[1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Fmon/g, arrdaysF[1][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Ftue/g, arrdaysF[1][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Fwed/g, arrdaysF[1][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Fthu/g, arrdaysF[1][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Ffri/g, arrdaysF[1][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Fsat/g, arrdaysF[1][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Fsun/g, arrdaysF[1][6]);

//week 3
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week3F/g, arrweekF[2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Fmon/g, arrdaysF[2][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Ftue/g, arrdaysF[2][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Fwed/g, arrdaysF[2][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Fthu/g, arrdaysF[2][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Ffri/g, arrdaysF[2][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Fsat/g, arrdaysF[2][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Fsun/g, arrdaysF[2][6]);

//week 4
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week4F/g, arrweekF[3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Fmon/g, arrdaysF[3][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Ftue/g, arrdaysF[3][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Fwed/g, arrdaysF[3][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Fthu/g, arrdaysF[3][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Ffri/g, arrdaysF[3][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Fsat/g, arrdaysF[3][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Fsun/g, arrdaysF[3][6]);

//week 5
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week5F/g, arrweekF[4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Fmon/g, arrdaysF[4][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Ftue/g, arrdaysF[4][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Fwed/g, arrdaysF[4][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Fthu/g, arrdaysF[4][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Ffri/g, arrdaysF[4][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Fsat/g, arrdaysF[4][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Fsun/g, arrdaysF[4][6]);

//week 6
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week6F/g, arrweekF[5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Fmon/g, arrdaysF[5][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Ftue/g, arrdaysF[5][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Fwed/g, arrdaysF[5][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Fthu/g, arrdaysF[5][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Ffri/g, arrdaysF[5][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Fsat/g, arrdaysF[5][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Fsun/g, arrdaysF[5][6]);

//week 7
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week7F/g, arrweekF[6]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Fmon/g, arrdaysF[6][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Ftue/g, arrdaysF[6][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Fwed/g, arrdaysF[6][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Fthu/g, arrdaysF[6][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Ffri/g, arrdaysF[6][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Fsat/g, arrdaysF[6][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Fsun/g, arrdaysF[6][6]);

//week 8
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week8F/g, arrweekF[7]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Fmon/g, arrdaysF[7][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Ftue/g, arrdaysF[7][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Fwed/g, arrdaysF[7][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Fthu/g, arrdaysF[7][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Ffri/g, arrdaysF[7][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Fsat/g, arrdaysF[7][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Fsun/g, arrdaysF[7][6]);

//week 9
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week9F/g, arrweekF[8]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Fmon/g, arrdaysF[8][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Ftue/g, arrdaysF[8][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Fwed/g, arrdaysF[8][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Fthu/g, arrdaysF[8][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Ffri/g, arrdaysF[8][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Fsat/g, arrdaysF[8][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Fsun/g, arrdaysF[8][6]);

//week 10
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week10F/g, arrweekF[9]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Fmon/g, arrdaysF[9][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Ftue/g, arrdaysF[9][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Fwed/g, arrdaysF[9][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Fthu/g, arrdaysF[9][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Ffri/g, arrdaysF[9][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Fsat/g, arrdaysF[9][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Fsun/g, arrdaysF[9][6]);

//week 11
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week11F/g, arrweekF[10]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Fmon/g, arrdaysF[10][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Ftue/g, arrdaysF[10][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Fwed/g, arrdaysF[10][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Fthu/g, arrdaysF[10][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Ffri/g, arrdaysF[10][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Fsat/g, arrdaysF[10][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Fsun/g, arrdaysF[10][6]);

//week 12
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week12F/g, arrweekF[11]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Fmon/g, arrdaysF[11][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Ftue/g, arrdaysF[11][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Fwed/g, arrdaysF[11][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Fthu/g, arrdaysF[11][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Ffri/g, arrdaysF[11][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Fsat/g, arrdaysF[11][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Fsun/g, arrdaysF[11][6]);
// Winter
// week 1
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week1W/g, arrweekW[0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Wmon/g, arrdaysW[0][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Wtue/g, arrdaysW[0][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Wwed/g, arrdaysW[0][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Wthu/g, arrdaysW[0][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Wfri/g, arrdaysW[0][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Wsat/g, arrdaysW[0][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Wsun/g, arrdaysW[0][6]);

//week 2
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week2W/g, arrweekW[1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Wmon/g, arrdaysW[1][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Wtue/g, arrdaysW[1][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Wwed/g, arrdaysW[1][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Wthu/g, arrdaysW[1][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Wfri/g, arrdaysW[1][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Wsat/g, arrdaysW[1][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Wsun/g, arrdaysW[1][6]);

//week 3
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week3W/g, arrweekW[2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Wmon/g, arrdaysW[2][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Wtue/g, arrdaysW[2][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Wwed/g, arrdaysW[2][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Wthu/g, arrdaysW[2][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Wfri/g, arrdaysW[2][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Wsat/g, arrdaysW[2][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Wsun/g, arrdaysW[2][6]);

//week 4
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week4W/g, arrweekW[3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Wmon/g, arrdaysW[3][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Wtue/g, arrdaysW[3][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Wwed/g, arrdaysW[3][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Wthu/g, arrdaysW[3][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Wfri/g, arrdaysW[3][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Wsat/g, arrdaysW[3][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Wsun/g, arrdaysW[3][6]);

//week 5
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week5W/g, arrweekW[4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Wmon/g, arrdaysW[4][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Wtue/g, arrdaysW[4][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Wwed/g, arrdaysW[4][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Wthu/g, arrdaysW[4][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Wfri/g, arrdaysW[4][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Wsat/g, arrdaysW[4][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Wsun/g, arrdaysW[4][6]);

//week 6
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week6W/g, arrweekW[5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Wmon/g, arrdaysW[5][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Wtue/g, arrdaysW[5][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Wwed/g, arrdaysW[5][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Wthu/g, arrdaysW[5][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Wfri/g, arrdaysW[5][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Wsat/g, arrdaysW[5][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Wsun/g, arrdaysW[5][6]);

//week 7
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week7W/g, arrweekW[6]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Wmon/g, arrdaysW[6][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Wtue/g, arrdaysW[6][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Wwed/g, arrdaysW[6][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Wthu/g, arrdaysW[6][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Wfri/g, arrdaysW[6][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Wsat/g, arrdaysW[6][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7Wsun/g, arrdaysW[6][6]);

//week 8
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week8W/g, arrweekW[7]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Wmon/g, arrdaysW[7][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Wtue/g, arrdaysW[7][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Wwed/g, arrdaysW[7][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Wthu/g, arrdaysW[7][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Wfri/g, arrdaysW[7][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Wsat/g, arrdaysW[7][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8Wsun/g, arrdaysW[7][6]);

//week 9
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week9W/g, arrweekW[8]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Wmon/g, arrdaysW[8][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Wtue/g, arrdaysW[8][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Wwed/g, arrdaysW[8][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Wthu/g, arrdaysW[8][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Wfri/g, arrdaysW[8][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Wsat/g, arrdaysW[8][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9Wsun/g, arrdaysW[8][6]);

//week 10
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week10W/g, arrweekW[9]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Wmon/g, arrdaysW[9][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Wtue/g, arrdaysW[9][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Wwed/g, arrdaysW[9][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Wthu/g, arrdaysW[9][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Wfri/g, arrdaysW[9][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Wsat/g, arrdaysW[9][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10Wsun/g, arrdaysW[9][6]);

//week 11
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week11W/g, arrweekW[10]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Wmon/g, arrdaysW[10][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Wtue/g, arrdaysW[10][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Wwed/g, arrdaysW[10][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Wthu/g, arrdaysW[10][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Wfri/g, arrdaysW[10][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Wsat/g, arrdaysW[10][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11Wsun/g, arrdaysW[10][6]);

//week 12
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week12W/g, arrweekW[11]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Wmon/g, arrdaysW[11][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Wtue/g, arrdaysW[11][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Wwed/g, arrdaysW[11][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Wthu/g, arrdaysW[11][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Wfri/g, arrdaysW[11][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Wsat/g, arrdaysW[11][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12Wsun/g, arrdaysW[11][6]);

//Summer
// week 1
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week1NS/g, arrweekS[0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1NSmon/g, arrdaysS[0][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1NStue/g, arrdaysS[0][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1NSwed/g, arrdaysS[0][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1NSthu/g, arrdaysS[0][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1NSfri/g, arrdaysS[0][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1NSsat/g, arrdaysS[0][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1NSsun/g, arrdaysS[0][6]);

//week 2
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week2NS/g, arrweekS[1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2NSmon/g, arrdaysS[1][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2NStue/g, arrdaysS[1][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2NSwed/g, arrdaysS[1][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2NSthu/g, arrdaysS[1][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2NSfri/g, arrdaysS[1][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2NSsat/g, arrdaysS[1][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2NSsun/g, arrdaysS[1][6]);

//week 3
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week3NS/g, arrweekS[2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3NSmon/g, arrdaysS[2][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3NStue/g, arrdaysS[2][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3NSwed/g, arrdaysS[2][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3NSthu/g, arrdaysS[2][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3NSfri/g, arrdaysS[2][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3NSsat/g, arrdaysS[2][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3NSsun/g, arrdaysS[2][6]);

//week 4
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week4NS/g, arrweekS[3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4NSmon/g, arrdaysS[3][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4NStue/g, arrdaysS[3][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4NSwed/g, arrdaysS[3][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4NSthu/g, arrdaysS[3][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4NSfri/g, arrdaysS[3][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4NSsat/g, arrdaysS[3][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4NSsun/g, arrdaysS[3][6]);

//week 5
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week5NS/g, arrweekS[4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5NSmon/g, arrdaysS[4][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5NStue/g, arrdaysS[4][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5NSwed/g, arrdaysS[4][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5NSthu/g, arrdaysS[4][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5NSfri/g, arrdaysS[4][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5NSsat/g, arrdaysS[4][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5NSsun/g, arrdaysS[4][6]);

//week 6
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week6NS/g, arrweekS[5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6NSmon/g, arrdaysS[5][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6NStue/g, arrdaysS[5][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6NSwed/g, arrdaysS[5][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6NSthu/g, arrdaysS[5][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6NSfri/g, arrdaysS[5][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6NSsat/g, arrdaysS[5][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6NSsun/g, arrdaysS[5][6]);

//week 7
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week7NS/g, arrweekS[6]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7NSmon/g, arrdaysS[6][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7NStue/g, arrdaysS[6][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7NSwed/g, arrdaysS[6][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7NSthu/g, arrdaysS[6][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7NSfri/g, arrdaysS[6][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7NSsat/g, arrdaysS[6][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk7NSsun/g, arrdaysS[6][6]);

//week 8
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week8NS/g, arrweekS[7]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8NSmon/g, arrdaysS[7][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8NStue/g, arrdaysS[7][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8NSwed/g, arrdaysS[7][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8NSthu/g, arrdaysS[7][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8NSfri/g, arrdaysS[7][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8NSsat/g, arrdaysS[7][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk8NSsun/g, arrdaysS[7][6]);

//week 9
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week9NS/g, arrweekS[8]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9NSmon/g, arrdaysS[8][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9NStue/g, arrdaysS[8][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9NSwed/g, arrdaysS[8][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9NSthu/g, arrdaysS[8][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9NSfri/g, arrdaysS[8][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9NSsat/g, arrdaysS[8][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk9NSsun/g, arrdaysS[8][6]);

//week 10
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week10NS/g, arrweekS[9]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10NSmon/g, arrdaysS[9][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10NStue/g, arrdaysS[9][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10NSwed/g, arrdaysS[9][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10NSthu/g, arrdaysS[9][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10NSfri/g, arrdaysS[9][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10NSsat/g, arrdaysS[9][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk10NSsun/g, arrdaysS[9][6]);

//week 11
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week11NS/g, arrweekS[10]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11NSmon/g, arrdaysS[10][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11NStue/g, arrdaysS[10][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11NSwed/g, arrdaysS[10][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11NSthu/g, arrdaysS[10][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11NSfri/g, arrdaysS[10][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11NSsat/g, arrdaysS[10][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk11NSsun/g, arrdaysS[10][6]);

//week 12
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week12NS/g, arrweekS[11]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12NSmon/g, arrdaysS[11][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12NStue/g, arrdaysS[11][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12NSwed/g, arrdaysS[11][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12NSthu/g, arrdaysS[11][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12NSfri/g, arrdaysS[11][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12NSsat/g, arrdaysS[11][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk12NSsun/g, arrdaysS[11][6]);

//Late Summer (6 weeks)
// week 1
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week1S/g, arrweekLS[0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Smon/g, arrdaysLS[0][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Stue/g, arrdaysLS[0][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Swed/g, arrdaysLS[0][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Sthu/g, arrdaysLS[0][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Sfri/g, arrdaysLS[0][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Ssat/g, arrdaysLS[0][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk1Ssun/g, arrdaysLS[0][6]);

//week 2
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week2S/g, arrweekLS[1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Smon/g, arrdaysLS[1][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Stue/g, arrdaysLS[1][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Swed/g, arrdaysLS[1][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Sthu/g, arrdaysLS[1][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Sfri/g, arrdaysLS[1][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Ssat/g, arrdaysLS[1][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk2Ssun/g, arrdaysLS[1][6]);

//week 3
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week3S/g, arrweekLS[2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Smon/g, arrdaysLS[2][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Stue/g, arrdaysLS[2][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Swed/g, arrdaysLS[2][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Sthu/g, arrdaysLS[2][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Sfri/g, arrdaysLS[2][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Ssat/g, arrdaysLS[2][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk3Ssun/g, arrdaysLS[2][6]);
//week 4
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week4S/g, arrweekLS[3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Smon/g, arrdaysLS[3][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Stue/g, arrdaysLS[3][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Swed/g, arrdaysLS[3][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Sthu/g, arrdaysLS[3][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Sfri/g, arrdaysLS[3][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Ssat/g, arrdaysLS[3][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk4Ssun/g, arrdaysLS[3][6]);

//week 5
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week5S/g, arrweekLS[4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Smon/g, arrdaysLS[4][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Stue/g, arrdaysLS[4][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Swed/g, arrdaysLS[4][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Sthu/g, arrdaysLS[4][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Sfri/g, arrdaysLS[4][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Ssat/g, arrdaysLS[4][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk5Ssun/g, arrdaysLS[4][6]);

//week 6
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/week6S/g, arrweekLS[5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Smon/g, arrdaysLS[5][0]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Stue/g, arrdaysLS[5][1]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Swed/g, arrdaysLS[5][2]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Sthu/g, arrdaysLS[5][3]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Sfri/g, arrdaysLS[5][4]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Ssat/g, arrdaysLS[5][5]);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/wk6Ssun/g, arrdaysLS[5][6]);

// replace Key Dates
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/examF/g, examF);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/examW/g, examW);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/examNS1/g, examNS1);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/examNS2/g, examNS2);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/examS/g, examS);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/readingweek/g, readingweek);

document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/tuitionF/g, tuitionF);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/tuitionW/g, tuitionW);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/tuitionNS/g, tuitionNS);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/tuitionS/g, tuitionS);

addcourseF = arrdaysF[1][4]; // set wk2Ffri
addcourseW = arrdaysW[1][4]; // set later as wk2Wfri
addcourseNS = arrdaysNS[0][4]; //set later as wk1NSfri
addcourseS = arrdaysS[1][0]; //set later as wk2Smon

document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/addcourseF/g, addcourseF);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/addcourseW/g, addcourseW);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/addcourseNS/g, addcourseNS);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/addcourseS/g, addcourseS);

dropcourseF = arrdaysF[1][4]; // set later was wk2Ffri
dropcourseW = arrdaysW[1][4];; // set later as wk2Wfri
dropcourseNS = arrdaysNS[0][4]; //set later as wk1NSfri
dropcourseNS12 = arrdaysNS[1][4]; //set later as wk2NSfri
dropcourseS = arrdaysS[1][0]; //set later as wk2Smon

document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourseF/g, dropcourseF);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourseW/g, dropcourseW);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourseNS/g, dropcourseNS);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourseNS12/g, dropcourseNS12);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourseS/g, dropcourseS);

dropcoursePenF = arrdaysF[7][4];	// set later was wk8Ffri
dropcoursePenW = arrdaysW[6][4]; // set later as wk7Wfri
dropcoursePenNS = arrdaysNS[3][4]; //set later as wk4NSfri
dropcoursePenNS12 = arrdaysNS[7][4]; //set later as wk8NSfri
dropcoursePenS = arrdaysS[4][0]; //set later as wk5Smon

document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourPenF/g, dropcoursePenF);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourPenW/g, dropcoursePenW);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourPenNS/g, dropcoursePenNS);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourPenNS12/g, dropcoursePenNS12);
document.getElementById("dates").innerHTML = document.getElementById("dates").innerHTML.replace(/dropcourPenS/g, dropcoursePenS);



}

/* Format Modules for easy editing */
function FormatModule() {
	document.getElementById("section2").className = "tab-pane fade";
	document.getElementById("section3").className = "tab-pane fade";
	document.getElementById("section4").className = "tab-pane fade";
	document.getElementById("section5").className = "tab-pane fade";
	document.getElementById("section6").className = "tab-pane fade";
	document.getElementById("section7").className = "tab-pane fade";
	document.getElementById("section8").className = "tab-pane fade";
	document.getElementById("section9").className = "tab-pane fade";
	document.getElementById("section10").className = "tab-pane fade";
	document.getElementById("section11").className = "tab-pane fade";
	document.getElementById("section12").className = "tab-pane fade";
	document.getElementById("section13").className = "tab-pane fade";
	document.getElementById("section14").className = "tab-pane fade";
	document.getElementById("section15").className = "tab-pane fade";
	document.getElementById("section16").className = "tab-pane fade";
	document.getElementById("section17").className = "tab-pane fade";
	document.getElementById("section18").className = "tab-pane fade";
	document.getElementById("section19").className = "tab-pane fade";
	document.getElementById("section20").className = "tab-pane fade";
  document.getElementById("section21").className = "tab-pane fade";
	document.getElementById("section22").className = "tab-pane fade";
	document.getElementById("section23").className = "tab-pane fade";
	document.getElementById("section24").className = "tab-pane fade";
	document.getElementById("section25").className = "tab-pane fade";
	document.getElementById("section26").className = "tab-pane fade";
	document.getElementById("section27").className = "tab-pane fade";
	document.getElementById("section28").className = "tab-pane fade";
	document.getElementById("section29").className = "tab-pane fade";
	document.getElementById("section30").className = "tab-pane fade";
	document.getElementById("section31").className = "tab-pane fade";
	document.getElementById("section32").className = "tab-pane fade";
	document.getElementById("section33").className = "tab-pane fade";
	document.getElementById("section34").className = "tab-pane fade";
	document.getElementById("section35").className = "tab-pane fade";
	document.getElementById("section36").className = "tab-pane fade";
	document.getElementById("section37").className = "tab-pane fade";
	document.getElementById("section38").className = "tab-pane fade";
	document.getElementById("section39").className = "tab-pane fade";
	document.getElementById("section40").className = "tab-pane fade";
  document.getElementById("section41").className = "tab-pane fade";
	document.getElementById("section42").className = "tab-pane fade";
	document.getElementById("section43").className = "tab-pane fade";
	document.getElementById("section44").className = "tab-pane fade";
	document.getElementById("section45").className = "tab-pane fade";
	document.getElementById("section46").className = "tab-pane fade";
	document.getElementById("section47").className = "tab-pane fade";
	document.getElementById("section48").className = "tab-pane fade";
	document.getElementById("section49").className = "tab-pane fade";
	document.getElementById("section50").className = "tab-pane fade";
}

/* Netiquette Modal */
$(document).ready(function(){
    // Show the Modal on load
    var isshow = localStorage.getItem('isshow');
    if (isshow== null) {
        localStorage.setItem('isshow', 1);
      $('#myModal').modal('show');
    }

    // Hide the Modal
    $("#myBtn").click(function(){
        $("#myModal").modal("hide");
    });
});

/* Activate Popovers */
$('[data-toggle="popover"]').popover({
    container: 'body'
});

/* Open and Close Module Navigation sidebar */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById( "navButton" ).setAttribute( "onClick", "javascript: closeNav();" );
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById( "navButton" ).setAttribute( "onClick", "javascript: openNav();" );
}

/*QuickSearch Code*/
  var tabLinks = $('.sidenav > .nav-item'),
  tabsContent = $('.tab-content > div'),
  tabContent = [],
  string,
  i,
  j;

for (i = 0; i < tabsContent.length; i++) {
  tabContent[i] = tabsContent.eq(i).text().toLowerCase();
}
$('input').on('input', function() {
  string = $(this).val().toLowerCase();
  for (j = 0; j < tabsContent.length; j++) {
    if (tabContent[j].indexOf(string) > -1) {
      tabLinks.eq(j).show();
      tabLinks.eq(j).find('a').tab('show');
    } else {
      tabLinks.eq(j).hide();
    }
  }
});

document.addEventListener('keydown', function(e){
  if(e.keyCode == 08 || e.keyCode == 46)
    window.location.reload();
})

/*FRST 105 Tooltip*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

/*Scroll to top on click in bootstrap Tabs */
$('[data-toggle="tab"]').click(function(e)
{
window.parent.parent.scrollTo(0,0)
e.preventDefault();
});

/* Vue.JS Scripts */

var app1 = new Vue({
  el: '.container-fluid',
  data: {
    FallNoExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ FallTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallFinAddDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div>',
    WinterNoExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ WinterClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterFinAddDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div>',
    WinterExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ WinterClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterFinAddDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p><p>Last day to submit exam accommodation (if applicable)</p><p>Last day to change exam centre</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterExams }}</strong></p></div><div class="col-sm-10"><p>Exam period</p></div></div>',
    Netiquette: '<p>In any course you often communicate with your peers and teaching team through electronic communication. You are expected to use the utmost respect in your dealings with your colleagues or when participating in activities, discussions and online communication.</p><p>Here is a list of netiquette guidelines. Please read them carefully and use them to guide your communication in this course and beyond.</p><ol><li>Make a personal commitment to learn about, understand, and support your peers.</li><li>Assume the best of others and expect the best of them.</li><li>Acknowledge the impact of oppression on the lives of other people and make sure your writing is respectful and inclusive.</li><li>Recognize and value the experiences, abilities, and knowledge each person brings.</li><li>Pay close attention to what your peers write before you respond. Think through and re-read your writings before you post or send them to others.</li><li>It&rsquo;s ok to disagree with ideas, but do not make personal attacks.</li><li>Be open to be challenged or confronted on your ideas and challenge others with the intent of facilitating growth. Do not demean or embarrass others.</li><li>Encourage others to develop and share their ideas.</li></ol>',
    QueensEmail: '<p>The university communicates with students via Queen&rsquo;s email. Please check your email regularly to ensure you do not miss important information related to your course.</p>',
    Accessibility: '<p>Queen&rsquo;s University is committed to achieving full accessibility for persons with disabilities. Part of this commitment includes arranging academic accommodations for students with disabilities to ensure they have an equitable opportunity to participate in all of their academic activities.</p><p>If you are a student with a disability and think you may require accommodations, you are strongly encouraged to contact the Queen&rsquo;s Student Accessibility Services (QSAS) as early as possible. For more information, including important deadlines, please visit the <a href="http://www.queensu.ca/studentwellness/accessibility-services/" target="_blank" rel="noopener noreferrer">QSAS website</a>.</p><p>Students with course accommodations should contact ASO immediately following registration to inform them of any accommodations to their timed assessments and/or final exam(s).</p>',
    Consideration: '<p>Queen&rsquo;s University is committed to providing academic consideration to students experiencing extenuating circumstances that are beyond their control and are interfering with their ability to complete academic requirements related to a course for a short period of time, not to exceed three months. Students receiving academic consideration must meet all essential requirements of a course. The <a href="http://www.queensu.ca/secretariat/sites/webpublish.queensu.ca.uslcwww/files/files/policies/senateandtrustees/Academic%20Considerations%20for%20Extenuating%20Circumstances%20Policy%20Final.pdf" target="_blank" rel="noopener">Senate Policy on Academic Consideration for Students in Extenuating Circumstances</a> was approved at Senate in April, 2017. Each Faculty has developed a protocol to provide a consistent and equitable approach in dealing with requests for academic consideration for students facing extenuating circumstances. Arts and Science undergraduate students can find the Faculty of Arts and Science protocol and the portal where a request can be submitted at: <a href="http://www.queensu.ca/artsci/accommodations" target="_blank" rel="noopener">http://www.queensu.ca/artsci/accommodations</a>. Students in other Faculties and Schools who are enrolled in this course should refer to the protocol for their home Faculty.</p><p>If you need to request academic consideration for this course, you will be required to provide the name and email address of the instructor/coordinator. Please use the following the information provided in the Teaching Team widget on the course homepage.</p>',
    Integrity: '<p>Academic integrity is constituted by the <a href="http://www.academicintegrity.org" target="_blank" rel="noopener noreferrer">six core fundamental values</a> of honesty, trust, fairness, respect, responsibility, and courage.</p><p>These values are central to the building, nurturing and sustaining of an academic community in which all members of the community will thrive. Adherence to the values expressed through academic integrity forms a foundation for the "freedom of inquiry and exchange of ideas" essential to the intellectual life of the University.</p><p>Students are responsible for familiarizing themselves with the regulations concerning academic integrity and for ensuring that their assignments conform to the principles of academic integrity. Information on academic integrity is available in the Arts and Science Calendar (see <a href="http://www.queensu.ca/artsci/students-at-queens/academic-calendar" target="_blank" rel="noopener noreferrer">Academic Regulation 1</a>), on the <a href="http://www.queensu.ca/artsci/students-at-queens/academic-integrity" target="_blank" rel="noopener noreferrer">Arts and Science website</a>, and from the instructor of this course.</p><p>Departures from academic integrity include plagiarism, use of unauthorized materials, facilitation, forgery and falsification, and are antithetical to the development of an academic community at Queen&rsquo;s. Given the seriousness of these matters, actions which contravene the regulation on academic integrity carry sanctions that can range from a warning or the loss of grades on an assignment to the failure of a course to a requirement to withdraw from the university.</p>',
    ComputerRequirements: '<div class="row"><div class="col-sm-6"><h5>Microsoft Windows Client</h5><p>Vista/Windows 7/Windows 8<br />Intel Core 2 Duo processor<br />4 GB RAM<br />Soundcard with speakers and microphone or preferably a headset<br />Webcam</p></div><div class="col-sm-6"><h5>Mac Client</h5><p>OS X 10.8 or higher<br />Intel i5 processor<br />4 GB RAM<br />Internal, USB or external iSight microphone or preferably a headset<br />Webcam</p></div></div><div class="row"><div class="col-sm-6"><h5>Supported Browsers</h5><p>Chrome (latest version)<br />Firefox (latest version)<br />Safari (latest version on 64-bit Intel processors only)</p></div><div class="col-sm-6"><h5>Internet Connection</h5><p>Wired high speed access: Cable or better<br />(wifi is not recommended)</p></div></div><div class="row"><div class="col-sm-4"><h5>Java</h5><p>Latest version</p></div><div class="col-sm-4"><h5>Media Player</h5><p>Flash (latest version)</p></div><div class="col-sm-4"><h5>Adobe Reader</h5><p>Latest Version</p></div></div>',
    TravellingAbroad: '<p>If you plan to travel, we strongly recommend that you confirm Internet availability in your host country prior to departure. In the past, students in other countries have been blocked from accessing certain websites relevant to their courses, as well as onQ. It is the responsibility of all students to book travel around course work, as we cannot change the format or timing on assessments or assignments as a result of travel plans.</p>',
    HelpfulLinksHeader:'<p style="text-align: center;"><strong>ASO can be reached 9am-4pm Monday to Friday: 613.533.3322 or <a href="mailto:asc.online@queensu.ca" target="_self">asc.online@queensu.ca</a></strong></p><p style="text-align: center;"><strong>For after-hours onQ support: <a href="mailto:asc.online@queensu.ca" target="_self">asc.online@queensu.ca</a></strong><br />This email is monitored on weekends. Someone will respond within 24 hours.</p><h2 style="text-align: center;">How can we help?</h2>',
    HelpfulLinksTechSupport: '<h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Technical Support</h3><p><strong><a href="http://queensu.ca/onqsupport/" target="_blank" rel="noopener noreferrer">onQ Support</a></strong></p><p><strong><a href="https://wiki.queensu.ca/display/ASOCR/Zoom" target="_blank" rel="noopener noreferrer">Zoom</a></strong></p>',
    HelpfulLinks: '<div class="row"><div class="col-sm-6"><h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Student Support</h3><p><strong><a href="https://www.queensu.ca/inclusive/" target="_blank" rel="noopener">Inclusive Queen&rsquo;s</a></strong></p><p><strong><a href="http://www.queensu.ca/artsci_online/current-students/learning-support#section-academic-advising" target="_blank" rel="noopener noreferrer">Academic Advising</a></strong></p><p><a href="http://www.queensu.ca/accessibility/home" target="_blank" rel="noopener noreferrer"><strong>Accessibility Hub</strong></a></p><p><strong><a href="http://www.queensu.ca/studentwellness/accessibility-services" target="_blank" rel="noopener noreferrer">Queen&rsquo;s Student Accessibility Services</a></strong></p><p><a href="http://www.queensu.ca/studentwellness/home" target="_blank" rel="noopener noreferrer"><strong>Student Wellness Services</strong></a></p><p><strong><a href="http://www.queensu.ca/studentwellness/counselling-services" target="_blank" rel="noopener noreferrer">Counselling Services</a></strong></p><p><strong><a href="https://www.queensu.ca/fourdirections/" target="_blank" rel="noopener">Four Directions Indigenous Student Centre</a></strong></p><p><strong><a href="http://www.queensu.ca/studentwellness/health-services/resources/community-resources/lgbtq" target="_blank" rel="noopener">LGBTQ Resources</a></strong></p><p><strong><a href="http://banrighcentre.queensu.ca/" target="_blank" rel="noopener">Ban Righ Foundation for Continuing Education for Women</a></strong></p></div><div class="col-sm-6"><h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Program Support</h3><p><strong><a href="http://www.queensu.ca/artsci_online/current-students/exams" target="_blank" rel="noopener noreferrer">Exam Information</a></strong></p><p><strong><a href="http://www.queensu.ca/artsci_online/current-students/dates-and-deadlines" target="_blank" rel="noopener noreferrer">Important Dates and Deadlines</a></strong></p><p><strong><a href="http://www.queensu.ca/artsci_online/about-us/faqs" target="_blank" rel="noopener noreferrer">FAQs</a></strong></p></div></div><div class="row"><div class="col-sm-6"><h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Learning Resources</h3><p><strong><a href="http://library.queensu.ca/?gclid=CI-N9vadicwCFQYuaQodLqEPbA" target="_blank" rel="noopener noreferrer">Library</a></strong></p><p><strong><a href="http://www.queensu.ca/qlc/home?gclid=CNGtxYieicwCFQYNaQodgfcPig" target="_blank" rel="noopener noreferrer">Learning Commons</a></strong></p><p><strong><a href="https://sass.queensu.ca/" target="_blank" rel="noopener noreferrer">Student Academic Success Services</a></strong></p><p><strong><a href="http://sass.queensu.ca/writingcentre/distance-students/" target="_blank" rel="noopener noreferrer">Student Academic Success Services - Distance Students</a></strong></p><p><strong><a href="https://www.queensu.ca/lynda" target="_blank" rel="noopener">Lynda.com</a></strong></p><p><strong><a href="https://office365.queensu.ca/" target="_blank" rel="noopener">Office365</a></strong></p></div><div class="col-sm-6"><h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Arts &amp; Science Online</h3><p><strong><a href="http://www.queensu.ca/artsci_online/" target="_blank" rel="noopener noreferrer">Arts &amp; Science Online (ASO) Homepage</a></strong></p><p><strong><a href="https://www.queensu.ca/artsci_online/learning-resources" target="_blank" rel="noopener noreferrer">Learning Resources</a></strong></p><p><strong><a href="https://www.queensu.ca/artsci_online/future-students/how-online-learning-works" target="_blank" rel="noopener noreferrer">How Online Learning Works</a></strong></p></div></div>',
    ZoomInfo: '<p>Please access the meting from the Zoom page in your course or from the Outlook Calendar invite if it was provided to you. If you are prompted to wait for the meeting to start, choose <strong>login</strong> at the center of the window and enter your login information on the left. The email address format will be <strong>netid@queensu.ca</strong>. You will have created a password when you activated your Zoom account and thus it might be different than your Queen&rsquo;s password.</p><p>If you are not logged in with your host account, you will be redirected to the Zoom waiting page. If you see this, choose&nbsp;<strong>login</strong>&nbsp;and enter your host account information.</p><p><img src="/content/enforced/218978-CWRI295/Administrative/../Images/Zoom%20Login.PNG" alt="Zoom Login" title="Zoom Login" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto;" data-d2l-editor-default-img-style="true" /></p><p>If you have forgotten your password, please use Zoom&rsquo;s password recovery function.</p><p><img src="/content/enforced/218978-CWRI295/Administrative/../Images/Zoom%20Password%20Recovery.png" alt="Zoom Password Recovery" title="Zoom Password Recovery" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto;" data-d2l-editor-default-img-style="true" /></p><p>A tech support person should be on hand 30 minutes prior to the session start to provide you access to the session. In the event that the tech support person is absent, please use the credentials below to access your session and contact CDS at <a href="mailto:asozoom@queensu.ca">asozoom@queensu.ca</a> to inform us of the tech support person&rsquo;s absence.</p><p>Support is also available directly through Zoom. Support can be reached via live chat or by phone (1.888.799.9666 ext 2). Please see <a href="https://support.zoom.us/hc/en-us/articles/201362003" target="_blank">https://support.zoom.us/hc/en-us/articles/201362003</a> for more information.</p><h4>Instructional Resources</h4><ul type="disc"><li><a href="https://wiki.queensu.ca/display/ASOCR/Zoom+for+Instructors" target="_blank" rel="noopener noreferrer">Instructor Technical Guide</a></li><li><a href="/d2l/common/viewFile.d2lfile/Content/636413412074778939/Best%20Practices%20for%20Online%20Synchronous%20Sessions.pdf?ou=53625&amp;fid=L2NvbnRlbnQvY2RzL2Nkcy9JbnN0cnVjdG9yIFJlc291cmNlcy9CZXN0IFByYWN0aWNlcyBmb3IgT25saW5lIFN5bmNocm9ub3VzIFNlc3Npb25zLnBkZg" target="_blank" rel="noopener noreferrer">Best Practices for Online Synchronous Sessions</a></li></ul>'
  }
})

var app2 = new Vue({
  el: '.container-fluid',
  data: {
    FallTuitionDue: 'Sep 1',
    FallClassesStart: 'Sep 6',
    FallFinAddDrop: 'Sep 19',
    FallAcadDrop: 'Nov 2',
    FallClassesEnd: 'Nov 30',
    WinterTuitionDue: 'Jan 10',
    WinterClassesStart: 'Jan 7',
    WinterFinAddDrop: 'Jan 18',
    WinterAcadDrop: 'Mar 1',
    WinterClassesEnd: 'Apr 5',
    WinterExams: 'Apr 11-27'
  }
})
