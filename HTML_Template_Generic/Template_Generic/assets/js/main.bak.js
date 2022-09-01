/* Change Dates on the Timeline*/
function ChangeDates () {
// COMMENTS ON USAGE
// notes: everything starts with index zero, due to the structure of javascript
// so for arrweeks[week#] to use it, you insert the week of interest minus 1
// example: if we want week 2, then arrweeks[1]
// for September 2017 Fall term,this would output Sept 18-24
// for arrdays[week#][day#], the first item is the week minus 1, and the second is the day minus 1
// Monday = 0, Tuesday =1, Wednesday =2, Thursday = 3, Friday =4, Saturday =5, Sunday =6
// if in doubt, just ask me. If there is a bug ask me

//	this is the only area that needs to be updated
// 	set the start dates as Monday one week prior to semester start
var indateFall = new Date("August 29, 2022 00:00:01"); 	// input date
var fallStart = new Date("September 6, 2022 00:00:01");  // Semester fall start date
var indateWinter = new Date("January 2, 2023 00:00:01"); 	// input date
var indateSummer = new Date("May 2, 2022 00:00:01"); 	// input date
var indateLSummer = new Date("June 27, 2022 00:00:01"); 	// input date

// exam dates
var examF = "Dec 8-22, 2022";
var examW = "Apr 14-28, 2023";
var examNS1 = "Jun 20-22, 2022";
var examNS2 = "Aug 2-10, 2022";
var examS = "Aug 15-17, 2022";

// end of the part that needs to be updated

// DO NOT MESS AROUND BEYOND HERE
// UNLESS YOU KNOW WHAT YOU ARE DOING

// Calculated dates
var readingweekW; // calculated post wk 5 Mon-Fri
var readingweekF;

// create the arrays
// (don't forget everything starts at 0)
// week and individual day arrays
var arrdaysF = new Array(16);
var arrweekF = new Array(16);
var arrdaysW = new Array(16);
var arrweekW = new Array(16);
var arrdaysS = new Array(16);
var arrweekS = new Array(16);
var arrdaysLS = new Array(10);
var arrweekLS = new Array(10);
// creates a 2D array that is essentially empty organized by [week][day]
for (var i = 0; i < 16; i++) {
  arrdaysF[i] = new Array(7);
  arrdaysW[i] = new Array(7);
  arrdaysS[i] = new Array(7);
}
for (var i = 0; i < 10; i++) {
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
for(var i = 0; i < 16; i++){ // cycle through weeks
    // cycle through days of each week

    // FALL wks
    dayMon = mvWeekF.getDate();
    nmonthMon = mvWeekF.getMonth();
    monthMon = mvWeekF.toLocaleString("en-us", { month: "short" });
    if(i == 12){ // last week of the term ends on a Friday
   		mvWeekF.setDate(mvWeekF.getDate()+4); // add 4 days to Friday
    }
    else{
        mvWeekF.setDate(mvWeekF.getDate()+6); // add 6 days to it for Sunday
	}
    daySun = mvWeekF.getDate();
    nmonthSun = mvWeekF.getMonth();
    monthSun = mvWeekF.toLocaleString("en-us", { month: "short" });

    if(i==1){// first week of term starts on a different day than Monday week 1
    arrweekF[1] = fallStart.toLocaleString("en-us", { month: "short" }) + " " + fallStart.getDate() + " - " + daySun.toString()+ "\n";
    }

    else{
        if ((nmonthSun - nmonthMon) == 0) {
        arrweekF[i] = monthMon.toString() + " " + dayMon.toString() +" - " + daySun.toString()+ "\n";
    }
    else{
    arrweekF[i] = monthMon.toString() + " " + dayMon.toString() +" - " + monthSun.toString() + " " +daySun.toString()+ "\n";
    }
    }

     mvWeekF.setDate(mvWeekF.getDate()+1); // bring it to the next Monday
     //checks and intersperses a reading week
     if(i == 5){
 		dayTue = mvWeekF.getDate()+1;
 		monthMon = mvWeekF.toLocaleString("en-us", { month: "short" });
 		mvWeekF.setDate(mvWeekF.getDate()+4); // brings it to Friday
 		dayFri = dayTue+3;
         monthSun = mvWeekF.toLocaleString("en-us", { month: "short" });
 		readingweekF = monthMon.toString() + " " + dayTue.toString() +" - " + 	dayFri.toString();
     	mvWeekF.setDate(mvWeekF.getDate()+3); // brings it to next week
     }

    // WINTER wks
    // intersperces a reading week after week 5
    dayMon = mvWeekW.getDate();
    nmonthMon = mvWeekW.getMonth();
    monthMon = mvWeekW.toLocaleString("en-us", { month: "short" });
    if(i == 12){ // last week of the term ends on a Friday
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
    if(i == 6){
		dayTue = mvWeekW.getDate()+1;
		monthMon = mvWeekW.toLocaleString("en-us", { month: "short" });
		mvWeekW.setDate(mvWeekW.getDate()+4); // brings it to Friday
		dayFri = dayTue+3;
        monthSun = mvWeekW.toLocaleString("en-us", { month: "short" });
		readingweekW = monthMon.toString() + " " + (dayTue.toString()) +" - " + 	(dayFri.toString());
    	mvWeekW.setDate(mvWeekW.getDate()+3); // brings it to next week
    }

    // EARLY SUMMER
    //listed as 12 weeks, just use 6 week of 12 for 6 week courses
    dayMon = mvWeekS.getDate();
    nmonthMon = mvWeekS.getMonth();
    monthMon = mvWeekS.toLocaleString("en-us", { month: "short" });
    if(i == 12){ // last week of the term ends on a Friday
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
    if(i<10) // since these are only 6 week courses
    {
        dayMon = mvWeekLS.getDate();
    	nmonthMon = mvWeekLS.getMonth();
    	monthMon = mvWeekLS.toLocaleString("en-us", { month: "short" });
    	if(i == 6){ // last week of the term ends on a Friday
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
        //checks and intersperses a reading week
       	if(i == 5){
       		if(j == 6){
              	movedateF.setDate(movedateF.getDate()+7);
            }
        }

		// Winter Days
        // intersperses a reading week after week 5
        day = movedateW.getDate();
        month = movedateW.toLocaleString("en-us", { month: "short" });
        arrdaysW[i][j] = month.toString() +" "+  day.toString();
        movedateW.setDate(movedateW.getDate()+1); // increment the day by one
       	//checks and intersperses a reading week
       	if(i == 6){
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
        if(i <10){
        	day = movedateLS.getDate();
        	month = movedateLS.toLocaleString("en-us", { month: "short" });
        	arrdaysLS[i][j] = month.toString() +" "+  day.toString();
        	movedateLS.setDate(movedateLS.getDate()+1); // increment the day by one
    	}
    }// end of inner (daily) for


}// end of outer (weekly) for

//Fall
var arrayfallWeeks = [/week0F/g, /week1F/g, /week2F/g, /week3F/g, /week4F/g, /week5F/g, /week6F/g, /week7F/g, /week8F/g, /week9F/g, /week10F/g, /week11F/g, /week12F/g, /week13F/g, /week14F/g, /week15F/g,];
var arrayfallMonday = [/wk0Fmon/g, /wk1Fmon/g, /wk2Fmon/g, /wk3Fmon/g, /wk4Fmon/g, /wk5Fmon/g, /wk6Fmon/g, /wk7Fmon/g, /wk8Fmon/g, /wk9Fmon/g, /wk10Fmon/g, /wk11Fmon/g, /wk12Fmon/g, /wk13Fmon/g, /wk14Fmon/g, /wk15Fmon/g];
var arrayfallTuesday = [/wk0Ftue/g, /wk1Ftue/g, /wk2Ftue/g, /wk3Ftue/g, /wk4Ftue/g, /wk5Ftue/g, /wk6Ftue/g, /wk7Ftue/g, /wk8Ftue/g, /wk9Ftue/g, /wk10Ftue/g, /wk11Ftue/g, /wk12Ftue/g, /wk13Ftue/g, /wk14Ftue/g, /wk15Ftue/g];
var arrayfallWednesday = [/wk0Fwed/g, /wk1Fwed/g, /wk2Fwed/g, /wk3Fwed/g, /wk4Fwed/g, /wk5Fwed/g, /wk6Fwed/g, /wk7Fwed/g, /wk8Fwed/g, /wk9Fwed/g, /wk10Fwed/g, /wk11Fwed/g, /wk12Fwed/g, /wk13Fwed/g, /wk14Fwed/g, /wk15Fwed/g];
var arrayfallThursday = [/wk0Fthu/g, /wk1Fthu/g, /wk2Fthu/g, /wk3Fthu/g, /wk4Fthu/g, /wk5Fthu/g, /wk6Fthu/g, /wk7Fthu/g, /wk8Fthu/g, /wk9Fthu/g, /wk10Fthu/g, /wk11Fthu/g, /wk12Fthu/g, /wk13Fthu/g, /wk14Fthu/g, /wk15Fthu/g];
var arrayfallFriday = [/wk0Ffri/g, /wk1Ffri/g, /wk2Ffri/g, /wk3Ffri/g, /wk4Ffri/g, /wk5Ffri/g, /wk6Ffri/g, /wk7Ffri/g, /wk8Ffri/g, /wk9Ffri/g, /wk10Ffri/g, /wk11Ffri/g, /wk12Ffri/g, /wk13Ffri/g, /wk14Ffri/g, /wk15Ffri/g];
var arrayfallSaturday = [/wk0Fsat/g, /wk1Fsat/g, /wk2Fsat/g, /wk3Fsat/g, /wk4Fsat/g, /wk5Fsat/g, /wk6Fsat/g, /wk7Fsat/g, /wk8Fsat/g, /wk9Fsat/g, /wk10Fsat/g, /wk11Fsat/g, /wk12Fsat/g, /wk13Fsat/g, /wk14Fsat/g, /wk15Fsat/g];
var arrayfallSunday = [/wk0Fsun/g, /wk1Fsun/g, /wk2Fsun/g, /wk3Fsun/g, /wk4Fsun/g, /wk5Fsun/g, /wk6Fsun/g, /wk7Fsun/g, /wk8Fsun/g, /wk9Fsun/g, /wk10Fsun/g, /wk11Fsun/g, /wk12Fsun/g, /wk13Fsun/g, /wk14Fsun/g, /wk15Fsun/g];

for (var fallweekscounter = 0; fallweekscounter < 16; fallweekscounter++) {
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arrayfallWeeks[fallweekscounter], arrweekF[fallweekscounter]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arrayfallMonday[fallweekscounter], arrdaysF[fallweekscounter][0]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arrayfallTuesday[fallweekscounter], arrdaysF[fallweekscounter][1]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arrayfallWednesday[fallweekscounter], arrdaysF[fallweekscounter][2]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arrayfallThursday[fallweekscounter], arrdaysF[fallweekscounter][3]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arrayfallFriday[fallweekscounter], arrdaysF[fallweekscounter][4]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arrayfallSaturday[fallweekscounter], arrdaysF[fallweekscounter][5]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arrayfallSunday[fallweekscounter], arrdaysF[fallweekscounter][6]);
}

// Winter
var arraywinterWeeks = [/week0W/g, /week1W/g, /week2W/g, /week3W/g, /week4W/g, /week5W/g, /week6W/g, /week7W/g, /week8W/g, /week9W/g, /week10W/g, /week11W/g, /week12W/g, /week13W/g, /week14W/g, /week15W/g,];
var arraywinterMonday = [/wk0Wmon/g, /wk1Wmon/g, /wk2Wmon/g, /wk3Wmon/g, /wk4Wmon/g, /wk5Wmon/g, /wk6Wmon/g, /wk7Wmon/g, /wk8Wmon/g, /wk9Wmon/g, /wk10Wmon/g, /wk11Wmon/g, /wk12Wmon/g, /wk13Wmon/g, /wk14Wmon/g, /wk15Wmon/g];
var arraywinterTuesday = [/wk0Wtue/g, /wk1Wtue/g, /wk2Wtue/g, /wk3Wtue/g, /wk4Wtue/g, /wk5Wtue/g, /wk6Wtue/g, /wk7Wtue/g, /wk8Wtue/g, /wk9Wtue/g, /wk10Wtue/g, /wk11Wtue/g, /wk12Wtue/g, /wk13Wtue/g, /wk14Wtue/g, /wk15Wtue/g];
var arraywinterWednesday = [/wk0Wwed/g, /wk1Wwed/g, /wk2Wwed/g, /wk3Wwed/g, /wk4Wwed/g, /wk5Wwed/g, /wk6Wwed/g, /wk7Wwed/g, /wk8Wwed/g, /wk9Wwed/g, /wk10Wwed/g, /wk11Wwed/g, /wk12Wwed/g, /wk13Wwed/g, /wk14Wwed/g, /wk15Wwed/g];
var arraywinterThursday = [/wk0Wthu/g, /wk1Wthu/g, /wk2Wthu/g, /wk3Wthu/g, /wk4Wthu/g, /wk5Wthu/g, /wk6Wthu/g, /wk7Wthu/g, /wk8Wthu/g, /wk9Wthu/g, /wk10Wthu/g, /wk11Wthu/g, /wk12Wthu/g, /wk13Wthu/g, /wk14Wthu/g, /wk15Wthu/g];
var arraywinterFriday = [/wk0Wfri/g, /wk1Wfri/g, /wk2Wfri/g, /wk3Wfri/g, /wk4Wfri/g, /wk5Wfri/g, /wk6Wfri/g, /wk7Wfri/g, /wk8Wfri/g, /wk9Wfri/g, /wk10Wfri/g, /wk11Wfri/g, /wk12Wfri/g, /wk13Wfri/g, /wk14Wfri/g, /wk15Wfri/g];
var arraywinterSaturday = [/wk0Wsat/g, /wk1Wsat/g, /wk2Wsat/g, /wk3Wsat/g, /wk4Wsat/g, /wk5Wsat/g, /wk6Wsat/g, /wk7Wsat/g, /wk8Wsat/g, /wk9Wsat/g, /wk10Wsat/g, /wk11Wsat/g, /wk12Wsat/g, /wk13Wsat/g, /wk14Wsat/g, /wk15Wsat/g];
var arraywinterSunday = [/wk0Wsun/g, /wk1Wsun/g, /wk2Wsun/g, /wk3Wsun/g, /wk4Wsun/g, /wk5Wsun/g, /wk6Wsun/g, /wk7Wsun/g, /wk8Wsun/g, /wk9Wsun/g, /wk10Wsun/g, /wk11Wsun/g, /wk12Wsun/g, /wk13Wsun/g, /wk14Wsun/g, /wk15Wsun/g];

for (var winterweekscounter = 0; winterweekscounter < 16; winterweekscounter++) {
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraywinterWeeks[winterweekscounter], arrweekW[winterweekscounter]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraywinterMonday[winterweekscounter], arrdaysW[winterweekscounter][0]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraywinterTuesday[winterweekscounter], arrdaysW[winterweekscounter][1]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraywinterWednesday[winterweekscounter], arrdaysW[winterweekscounter][2]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraywinterThursday[winterweekscounter], arrdaysW[winterweekscounter][3]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraywinterFriday[winterweekscounter], arrdaysW[winterweekscounter][4]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraywinterSaturday[winterweekscounter], arrdaysW[winterweekscounter][5]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraywinterSunday[winterweekscounter], arrdaysW[winterweekscounter][6]);
}

//Summer (May-June & May-July)
var arraysummernsWeeks = [/week0NS/g, /week1NS/g, /week2NS/g, /week3NS/g, /week4NS/g, /week5NS/g, /week6NS/g, /week7NS/g, /week8NS/g, /week9NS/g, /week10NS/g, /week11NS/g, /week12NS/g, /week13NS/g, /week14NS/g, /week15NS/g,];
var arraysummernsMonday = [/wk0NSmon/g, /wk1NSmon/g, /wk2NSmon/g, /wk3NSmon/g, /wk4NSmon/g, /wk5NSmon/g, /wk6NSmon/g, /wk7NSmon/g, /wk8NSmon/g, /wk9NSmon/g, /wk10NSmon/g, /wk11NSmon/g, /wk12NSmon/g, /wk13NSmon/g, /wk14NSmon/g, /wk15NSmon/g];
var arraysummernsTuesday = [/wk0NStue/g, /wk1NStue/g, /wk2NStue/g, /wk3NStue/g, /wk4NStue/g, /wk5NStue/g, /wk6NStue/g, /wk7NStue/g, /wk8NStue/g, /wk9NStue/g, /wk10NStue/g, /wk11NStue/g, /wk12NStue/g, /wk13NStue/g, /wk14NStue/g, /wk15NStue/g];
var arraysummernsWednesday = [/wk0NSwed/g, /wk1NSwed/g, /wk2NSwed/g, /wk3NSwed/g, /wk4NSwed/g, /wk5NSwed/g, /wk6NSwed/g, /wk7NSwed/g, /wk8NSwed/g, /wk9NSwed/g, /wk10NSwed/g, /wk11NSwed/g, /wk12NSwed/g, /wk13NSwed/g, /wk14NSwed/g, /wk15NSwed/g];
var arraysummernsThursday = [/wk0NSthu/g, /wk1NSthu/g, /wk2NSthu/g, /wk3NSthu/g, /wk4NSthu/g, /wk5NSthu/g, /wk6NSthu/g, /wk7NSthu/g, /wk8NSthu/g, /wk9NSthu/g, /wk10NSthu/g, /wk11NSthu/g, /wk12NSthu/g, /wk13NSthu/g, /wk14NSthu/g, /wk15NSthu/g];
var arraysummernsFriday = [/wk0NSfri/g, /wk1NSfri/g, /wk2NSfri/g, /wk3NSfri/g, /wk4NSfri/g, /wk5NSfri/g, /wk6NSfri/g, /wk7NSfri/g, /wk8NSfri/g, /wk9NSfri/g, /wk10NSfri/g, /wk11NSfri/g, /wk12NSfri/g, /wk13NSfri/g, /wk14NSfri/g, /wk15NSfri/g];
var arraysummernsSaturday = [/wk0NSsat/g, /wk1NSsat/g, /wk2NSsat/g, /wk3NSsat/g, /wk4NSsat/g, /wk5NSsat/g, /wk6NSsat/g, /wk7NSsat/g, /wk8NSsat/g, /wk9NSsat/g, /wk10NSsat/g, /wk11NSsat/g, /wk12NSsat/g, /wk13NSsat/g, /wk14NSsat/g, /wk15NSsat/g];
var arraysummernsSunday = [/wk0NSsun/g, /wk1NSsun/g, /wk2NSsun/g, /wk3NSsun/g, /wk4NSsun/g, /wk5NSsun/g, /wk6NSsun/g, /wk7NSsun/g, /wk8NSsun/g, /wk9NSsun/g, /wk10NSsun/g, /wk11NSsun/g, /wk12NSsun/g, /wk13NSsun/g, /wk14NSsun/g, /wk15NSsun/g];

for (var summernsweekscounter = 0; summernsweekscounter < 16; summernsweekscounter++) {
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummernsWeeks[summernsweekscounter], arrweekS[summernsweekscounter]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummernsMonday[summernsweekscounter], arrdaysS[summernsweekscounter][0]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummernsTuesday[summernsweekscounter], arrdaysS[summernsweekscounter][1]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummernsWednesday[summernsweekscounter], arrdaysS[summernsweekscounter][2]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummernsThursday[summernsweekscounter], arrdaysS[summernsweekscounter][3]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummernsFriday[summernsweekscounter], arrdaysS[summernsweekscounter][4]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummernsSaturday[summernsweekscounter], arrdaysS[summernsweekscounter][5]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummernsSunday[summernsweekscounter], arrdaysS[summernsweekscounter][6]);
}

//Summer (July-August)
var arraysummersWeeks = [/week0S/g, /week1S/g, /week2S/g, /week3S/g, /week4S/g, /week5S/g, /week6S/g, /week7S/g, /week8S/g, /week9S/g];
var arraysummersMonday = [/wk0Smon/g, /wk1Smon/g, /wk2Smon/g, /wk3Smon/g, /wk4Smon/g, /wk5Smon/g, /wk6Smon/g, /wk7Smon/g, /wk8Smon/g, /wk9Smon/g];
var arraysummersTuesday = [/wk0Stue/g, /wk1Stue/g, /wk2Stue/g, /wk3Stue/g, /wk4Stue/g, /wk5Stue/g, /wk6Stue/g, /wk7Stue/g, /wk8Stue/g, /wk9Stue/g];
var arraysummersWednesday = [/wk0Swed/g, /wk1Swed/g, /wk2Swed/g, /wk3Swed/g, /wk4Swed/g, /wk5Swed/g, /wk6Swed/g, /wk7Swed/g, /wk8Swed/g, /wk9Swed/g];
var arraysummersThursday = [/wk0Sthu/g, /wk1Sthu/g, /wk2Sthu/g, /wk3Sthu/g, /wk4Sthu/g, /wk5Sthu/g, /wk6Sthu/g, /wk7Sthu/g, /wk8Sthu/g, /wk9Sthu/g];
var arraysummersFriday = [/wk0Sfri/g, /wk1Sfri/g, /wk2Sfri/g, /wk3Sfri/g, /wk4Sfri/g, /wk5Sfri/g, /wk6Sfri/g, /wk7Sfri/g, /wk8Sfri/g, /wk9Sfri/g];
var arraysummersSaturday = [/wk0Ssat/g, /wk1Ssat/g, /wk2Ssat/g, /wk3Ssat/g, /wk4Ssat/g, /wk5Ssat/g, /wk6Ssat/g, /wk7Ssat/g, /wk8Ssat/g, /wk9Ssat/g];
var arraysummersSunday = [/wk0Ssun/g, /wk1Ssun/g, /wk2Ssun/g, /wk3Ssun/g, /wk4Ssun/g, /wk5Ssun/g, /wk6Ssun/g, /wk7Ssun/g, /wk8Ssun/g, /wk9Ssun/g];

for (var summersweekscounter = 0; summersweekscounter < 10; summersweekscounter++) {
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummersWeeks[summersweekscounter], arrweekLS[summersweekscounter]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummersMonday[summersweekscounter], arrdaysLS[summersweekscounter][0]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummersTuesday[summersweekscounter], arrdaysLS[summersweekscounter][1]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummersWednesday[summersweekscounter], arrdaysLS[summersweekscounter][2]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummersThursday[summersweekscounter], arrdaysLS[summersweekscounter][3]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummersFriday[summersweekscounter], arrdaysLS[summersweekscounter][4]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummersSaturday[summersweekscounter], arrdaysLS[summersweekscounter][5]);
  document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(arraysummersSunday[summersweekscounter], arrdaysLS[summersweekscounter][6]);
}

// replace Key Dates
document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(/examF/g, examF);
document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(/examW/g, examW);
document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(/examNS1/g, examNS1);
document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(/examNS2/g, examNS2);
document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(/examS/g, examS);
document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(/readingweekW/g, readingweekW);
document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML.replace(/readingweekF/g, readingweekF);
}
/*END of Change Date function*/

/*START Change all LaTex to size 11pt font*/
$( document ).ready(function() {
  var y = document.querySelectorAll('math').length;

  for (var i = 0; i < y; i++) {
  document.getElementsByTagName("math")[i].parentElement.style.fontSize = "11pt";
  }
});
/*END LaTex change*/

/*START Activate Popovers */
$('[data-toggle="popover"]').popover({
    container: 'body'
});
/*END of Activate Popovers*/

/*START Open and Close Module Navigation sidebar */
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
/*END of Open and Close Module sidebar*/

/*START Opens and Closes all module sections for easy searching with CTRL-F*/
function OpenAll() {
  document.getElementById("OpenSections").style.display = "none";
  document.getElementById("CloseSections").style.display = "block";

  var y = document.querySelectorAll('[id^=section]').length;

  for (var i = 1; i < y+1; i++) {
      document.getElementById("section" + i).className = "tab-pane fade in active";
      }
}

function CloseAll() {
  document.getElementById("OpenSections").style.display = "block";
  document.getElementById("CloseSections").style.display = "none";
  var y = document.querySelectorAll('[id^=section]').length;
  document.getElementById("section1").className = "tab-pane fade in active";
  for (var i = 2; i < y+1; i++) {
      document.getElementById("section" + i).className = "tab-pane fade";
      }
}
/*END Open and close all modules*/

/*START Scroll to top on click in bootstrap Tabs*/
$('[data-toggle="tab"]').click(function(e)
{
window.parent.parent.scrollTo(0,0)
document.getElementById("OpenSections").style.display = "block";
document.getElementById("CloseSections").style.display = "none";
e.preventDefault();
});
/*END of Scroll to top*/

/*START Open and Close all Assignment Steps*/
function OpenSteps() {
  document.getElementById("OpenSteps").style.display = "none";
  document.getElementById("CloseSteps").style.display = "block";

  var y = document.querySelectorAll('[id^=step]').length;

  for (var i = 1; i < y+1; i++) {
      document.getElementById("step" + i).className = "panel-collapse collapse in";
      }
}

function CloseSteps() {
  document.getElementById("OpenSteps").style.display = "block";
  document.getElementById("CloseSteps").style.display = "none";

  var y = document.querySelectorAll('[id^=step]').length;

  for (var i = 1; i < y+1; i++) {
      document.getElementById("step" + i).className = "panel-collapse collapse";
      }
}
/*END Open and Close all steps*/

/*START Remove Download Button on onQ Pages*/
(function() {
     $(window.top.document).find("[id^='d2l_content_']").remove();
})();
/*END Remove Download*/

/*START FRST 105 Tooltip*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
/*END of FRST 105 tooltip*/

/*START Opens Accordions for Editing*/
$(document).ready(function(){
  var y = document.querySelectorAll('[id^=step]').length;

  for (var i = 1; i < y+1; i++) {
      document.getElementById("step" + i).className = "panel-collapse collapse";
      }
});
/*END opens accordions*/

/*START Format dropdown assignment menu*/
$(document).ready(function(){
  var x = document.querySelectorAll(".dropselect");

  document.getElementById("topnav").className = "nav navbar-nav";

  for (var i = 0; i < x.length; i++) {
      x[i].className = "dropdown-menu";
    }
});
/*END Format assignment menu*/

/*START Link to section in module AND module Formating*/

/*Instructions
1) remove onload=FormatModule() from the body tag of both pages.
2) make sure the Vue.JS script (<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>) is included on both pages and ABOVE the main.min.js scripts
3) Add hyperlink as normal through onQ quicklinks
4) Manually add section number as anchor at the end of the url (ie, linking to seciton 8 means added #section8 at the end of the URL that was added on the page)
*/
var sectionnumber = localStorage.getItem("sectionHrefNumber");
var y = document.querySelectorAll('[id^=section]').length;

if (sectionnumber == undefined) {
  sectionnumber = 1;
} else {
  sectionnumber = localStorage.getItem("sectionHrefNumber");
}

for (var i = 1; i < y+1; i++) {
   if (i == sectionnumber) {
     document.getElementById("section" + sectionnumber).className = "tab-pane fade in active";
     } else {
       document.getElementById("section" + i).className = "tab-pane fade";
       }
   }

localStorage.setItem("sectionHrefNumber", 1);
sectionnumber = 1;
/*END link to section in module*/

/*START Vue.JS Scripts */
var app1 = new Vue({
  el: '.container-fluid',
  data: {
    FallNoExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ FallTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div>',
    FallExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ FallTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallAccomm }}</strong></p></div><div class="col-sm-10"><p>Last day to submit exam accommodation requests (if applicable)</div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallExams }}</strong></p></div><div class="col-sm-10"><p>Exam Period</p></div></div>',
    FallWinterNoExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div>',
    FallWinterExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterFallAccomm }}</strong></p></div><div class="col-sm-10"><p>Last day to submit Fall exam accommodation requests (if applicable)</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterFallExams }}</strong></p></div><div class="col-sm-10"><p>Fall Exam Period</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterWinterAccomm }}</strong></p></div><div class="col-sm-10"><p>Last day to submit Winter exam accommodation requests (if applicable)</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ FallWinterWinterExams }}</strong></p></div><div class="col-sm-10"><p>Winter Exam Period</p></div></div>',
    WinterNoExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ WinterTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{WinterFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div>',
    WinterExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ WinterTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterAccomm }}</strong></p></div><div class="col-sm-10"><p>Last day to submit exam accommodation requests (if applicable)</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ WinterExams }}</strong></p></div><div class="col-sm-10"><p>Exam Period</p></div></div>',
    SpringNoExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ SpringTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{SpringFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div>',
    SpringExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ SpringTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringAccomm }}</strong></p></div><div class="col-sm-10"><p>Last day to submit exam accommodation requests (if applicable)</div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringExams }}</strong></p></div><div class="col-sm-10"><p>Exam Period</p></div></div>',
    SpringSummerNoExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div>',
    SpringSummerExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p><p>Last day to submit Midyear exam accommodation requests (if applicable)</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringExams }}</strong></p></div><div class="col-sm-10"><p>Midyear Exam Period (if applicable)</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerAccomm }}</strong></p></div><div class="col-sm-10"><p>Last day to submit exam accommodation requests (if applicable)</div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SpringSummerExams }}</strong></p></div><div class="col-sm-10"><p>Final Exam Period</p></div></div>',
    SummerNoExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ SummerTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div>',
    SummerExam: '<div class="row"><div class="col-sm-2"><p><strong>{{ SummerTuitionDue }}</strong></p></div><div class="col-sm-10"><p>Tuition due</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerClassesStart }}</strong></p></div><div class="col-sm-10"><p>Classes start</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerAdd }}</strong></p></div><div class="col-sm-10"><p>Last day to add courses</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerFinDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop courses without financial penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerAccomm }}</strong></p></div><div class="col-sm-10"><p>Last day to submit exam accommodation requests (if applicable)</div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerAcadDrop }}</strong></p></div><div class="col-sm-10"><p>Last day to drop without academic penalty</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerClassesEnd }}</strong></p></div><div class="col-sm-10"><p>Classes end</p></div></div><div class="row"><div class="col-sm-2"><p><strong>{{ SummerExams }}</strong></p></div><div class="col-sm-10"><p>Exam Period</p></div></div>',
    ProctoredFinalExam: '<h4>Proctored Exams</h4><h5>Location</h5><p>Students enrolled exclusively in online courses will have two options to write their proctored exams:</p><ol><li>You may choose to write your exam(s) online using Examity proctoring services where you will be charged the additional $100 exam fee to your Solus account;</li><li>You may choose to write your exam(s) in-person on Queen&rsquo;s campus in Kingston where you will NOT be charged the additional $100 exam fee</li></ol><p>Students enrolled in at least one on-campus course are expected to write  all their exams on-campus during the scheduled exam time.</p><h5>Remote Proctoring (if applicable)</h5><p>Selected assessments in this course will use remote proctoring provided by Examity, which is a third-party, cloud-based service that enables the completion of a proctored exam or test from an off-campus location, through onQ. This cloud-based proctoring solution was chosen as part of the approach to maintaining academic integrity when remote proctoring is required. Queen&rsquo;s has conducted an extensive privacy and security review of Examity and has entered into a binding agreement with terms that address the appropriate collection, use and disclosure of personal information in accordance with Ontario&rsquo;s privacy legislation. You should also take measures yourself to protect your information by keeping your NetID password and challenge questions private, closing all applications prior to starting an exam/test, and ensuring your device is updated and safeguarded against malware. For more information about remote proctoring, please see <a href="http://www.queensu.ca/registrar/students/examinations/exams-office-services/remote-proctoring" target="_blank">http://www.queensu.ca/registrar/students/examinations/exams-office-services/remote-proctoring</a><p>If you registered to write online with Examity, all information pertaining to the technical requirements and preparation for writing online with Examity will be posted in onQ well in advance of your exam.</p><p>In order to become familiar with the authentication process and test out your technology, you will have a chance to take practice test to help prepare you for your proctored exam via Examity. There is no need to study for this test; it will focus on your general Queen&rsquo;s trivia knowledge and will not count towards your course grade. <strong>The questions provided are merely to help you test and potentially troubleshoot your system in advance of your exam</strong>.</p><h5>Timing of Final Examinations</h5><p>Once the exam schedule has been finalized the exam date will be posted on your SOLUS account. The exam dates for each Term are listed on the Faculty of Arts and Science webpage under "<a href="https://www.queensu.ca/artsci/important-dates" target="_blank">Important Dates</a>." Student exam schedules for the Fall Term are posted via SOLUS immediately prior to the Thanksgiving holiday; for the Winter Term they are posted on the Friday before Reading Week, and for the Summer Term they are individually noted on the Arts and Science Online syllabi. <strong>Students should delay finalizing any travel plans until after the examination schedule has been posted. Exams will not be moved or deferred to accommodate employment, travel/holiday plans or flight reservations. For more information regarding what is considered extenuating circumstances and qualifications for Academic Consideration, please visit <a href="https://www.queensu.ca/artsci/undergrad-students/student-services/academic-consideration-for-students" target="_blank">https://www.queensu.ca/artsci/undergrad-students/student-services/academic-consideration-for-students</a> or email <a href="mailto:asc.consideration@queensu.ca" target="_blank">asc.consideration@queensu.ca</a>.</strong></p>',
    Grading: '<p>All components of this course will receive numerical percentage marks. The final grade you receive for the course will be derived by converting your numerical course average to a letter grade according to Queen&rsquo;s Official Grade Conversion Scale:</p><h5>Queen&rsquo;s Official Grade Conversion Scale</h5><div class="table-responsive" style="margin-left: auto; margin-right: auto; width: 45%;"><table class="table-bordered" style="width: 100%;"><tbody><tr><td style="text-align: center;"><strong>Grade</strong></td><td style="text-align: center;"><strong>Numerical Course<br />Average (Range)</strong></td></tr><tr><td style="text-align: center;">A+</td><td style="text-align: center;">90-100</td></tr><tr><td style="text-align: center;">A</td><td style="text-align: center;">85-89</td></tr><tr><td style="text-align: center;">A-</td><td style="text-align: center;">80-84</td></tr><tr><td style="text-align: center;">B+</td><td style="text-align: center;">77-79</td></tr><tr><td style="text-align: center;">B</td><td style="text-align: center;">73-76</td></tr><tr><td style="text-align: center;">B-</td><td style="text-align: center;">70-72</td></tr><tr><td style="text-align: center;">C+</td><td style="text-align: center;">67-69</td></tr><tr><td style="text-align: center;">C</td><td style="text-align: center;">63-66</td></tr><tr><td style="text-align: center;">C-</td><td style="text-align: center;">60-62</td></tr><tr><td style="text-align: center;">D+</td><td style="text-align: center;">57-59</td></tr><tr><td style="text-align: center;">D</td><td style="text-align: center;">53-56</td></tr><tr><td style="text-align: center;">D-</td><td style="text-align: center;">50-52</td></tr><tr><td style="text-align: center;">F</td><td style="text-align: center;">49 and below</td></tr></tbody></table></div>',
    ContactingTeachingTeam: '<p>Throughout this course, you may come upon some general questions about the course and assignments. If you think that your question may benefit other students, you are invited to post your question in the Course Questions discussion forum. Feel free to help answer your peers&rsquo; questions on this forum. The teaching team will monitor this discussion forum and answer questions. Most questions are answered within 24 hours. Any other questions that you would prefer to share privately, please contact me or your TA at one of the emails listed at the top of this syllabus.  The teaching team contact information is located on the homepage of the course</p>',
    CourseFeedback: '<p>At various points during the course, I may ask you to take part in a variety of feedback activities, such as surveys and questionnaires. This feedback enables my teaching team and me to make any adjustments necessary to improve your learning environment. Additional feedback may be requested throughout the course. All surveys are anonymous and are directly related to activities, assessments, and other course material.</p>',
    Netiquette: '<p>In any course you often communicate with your peers and teaching team through electronic communication. You are expected to use the utmost respect in your dealings with your colleagues or when participating in activities, discussions, and online communication.</p><p>Here is a list of netiquette guidelines. Please read them carefully and use them to guide your communication in this course and beyond.</p><ol><li>Make a personal commitment to learn about, understand, and support your peers.</li><li>Assume the best of others and expect the best of them.</li><li>Acknowledge the impact of oppression on the lives of other people and make sure your writing is respectful and inclusive.</li><li>Recognize and value the experiences, abilities, and knowledge each person brings.</li><li>Pay close attention to what your peers write before you respond. Think through and re-read your writings before you post or send them to others.</li><li>It&rsquo;s ok to disagree with ideas, but do not make personal attacks.</li><li>Be open to being challenged or confronted on your ideas and to challenging others with the intent of facilitating growth. Do not demean or embarrass others.</li><li>Encourage others to develop and share their ideas.</li></ol>',
    QueensEmail: '<p>The university communicates with students via Queen&rsquo;s email. Please check your email regularly to ensure you do not miss important information related to your course.</p>',
    Copyright1: 'Course materials created by the course instructor, including all slides, presentations, handouts, tests, exams, and other similar course materials, are the intellectual property of the instructor. It is a departure from academic integrity to distribute, publicly post, sell or otherwise disseminate an instructor’s course materials or to provide an instructor’s course materials to anyone else for distribution, posting, sale or other means of dissemination, without the instructor’s express consent.  A student who engages in such conduct may subject to penalty for a departure from academic integrity and may also face adverse legal consequences for infringement of intellectual property rights.',
    Copyright2: '',
    Copyright3: '',
    Accessibility: '<p>Queen&rsquo;s University is committed to achieving full accessibility for people with disabilities. Part of this commitment includes arranging academic accommodations for students with disabilities to ensure they have an equitable opportunity to participate in all of their academic activities. The <a href="https://www.queensu.ca/secretariat/policies/senate/academic-accommodations-students-disabilities-procedure" target="_blank">Senate Policy for Accommodations for Students with Disabilities</a> was approved at Senate in November 2016. If you are a student with a disability and think you may need academic accommodations, you are strongly encouraged to contact the Queen&rsquo;s Student Accessibility Services (QSAS) and register as early as possible.  For more information, including important deadlines, please visit the <a href="https://www.queensu.ca/studentwellness/accessibility-services" target="_blank">QSAS website</a>.</p><p>Students with course accommodatiosn should enter their request into Ventus as soon as possible, to have the appropriate arrangements added to their courses and exams.</p><p>Please see the Teaching Team page for all contact information regarding Academic Accommodations and Considerations.</p>',
    Consideration: '<p>Academic consideration is a process for the university community to provide a compassionate response to assist students experiencing unforeseen, short-term extenuating circumstances that may impact or impede a student’s ability to complete their academics. This may include but is not limited to</p><ul><li>Short-term physical or mental health issues (e.g., stomach flu, pneumonia, COVID diagnosis, vaccination, etc.),</li><li>Responses to traumatic events (e.g., death of a loved one, divorce, sexual assault, social injustice, etc.),</li><li>Requirements by law or public health authorities (e.g., court date, isolation due to COVID exposure, etc.).</li></ul><p>Queen&rsquo;s University is committed to providing academic consideration to students experiencing extenuating circumstances. For more information, please see the <a href="https://www.queensu.ca/secretariat/policies/senate/academic-consideration-students-extenuating-circumstances-policy" target="_blank">Senate Policy on Academic Consideration for Students in Extenuating Circumstances</a>.</p><p>Each Faculty has developed a protocol to provide a consistent and equitable approach in dealing with requests for academic consideration for students facing extenuating circumstances.  For more information, undergraduate students in the Faculty of Arts and Sciences should consult the Faculty&rsquo;s webpage on <a href="https://www.queensu.ca/artsci/undergrad-students/student-services/academic-consideration-for-students" target="_blank">Academic Consideration in Extenuating Circumstances</a> and submit a request via the <a href="https://www.queensu.ca/artsci/undergrad-students/student-services/academic-consideration-for-students" target="_blank">Academic Consideration Request Portal</a>. Students in other Faculties and Schools who are enrolled in this course should refer to the protocol for their home Faculty.</p><p>Students are encouraged to submit requests as soon as the need becomes apparent and to contact their instructor and/or course coordinator as soon as possible once Academic Consideration has been granted. Any delay in contact may limit the options available for Academic Consideration.</p><p>For more information on the Academic Consideration process, what is and is not an extenuating circumstance, and to submit an Academic Consideration request, please see the Faculty of Arts and Science <a href="https://www.queensu.ca/artsci/undergrad-students/student-services/academic-consideration-for-students" target="_blank">Academic Consideration website</a>. ASO courses include links to information on <strong>Academic Accommodation</strong> on your <strong>Course Homepage</strong> in onQ.</p><p>Please see the Teaching Team page for all contact information regarding Academic Accommodations and Considerations.</p>',
    Integrity: '</p>Queen&rsquo;s students, faculty, administrators and staff all have responsibilities for upholding the fundamental values of academic integrity: <a href="https://academicintegrity.org/" target="_blank">honesty, trust, fairness, respect, responsibility and courage</a>. These values are central to the building, nurturing and sustaining of an academic community in which all members of the community will thrive. Adherence to the values expressed through academic integrity forms a foundation for the "freedom of inquiry and exchange of ideas" essential to the intellectual life of the University (see the <a href="http://www.queensu.ca/secretariat/policies/senate/report-principles-and-priorities" target="_blank">Senate Report on Principles and Priorities</a>).</p><p>Students are responsible for familiarizing themselves with the regulations concerning academic integrity and for ensuring that their assignments and their behaviour conform to the principles of academic integrity. Information on academic integrity is available in the Arts and Science Calendar (see <a href="http://www.queensu.ca/artsci/academic-calendars/regulations/academic-regulations/regulation-1" target="_blank">Academic Regulation 1</a>), on the <a href="https://www.queensu.ca/artsci/students-at-queens/academic-integrity" target="_blank">Arts and Science website</a>, and from the instructor of this course. Departures from academic integrity include plagiarism, use of unauthorized materials, facilitation, forgery and falsification, and are antithetical to the development of an academic community at Queen&rsquo;s. Given the seriousness of these matters, actions which contravene the regulation on academic integrity carry sanctions that can range from a warning or the loss of grades on an assignment to the failure of a course to a requirement to withdraw from the university.</p><p>You may benefit from visiting these websites for further tips on what constitutes plagiarism and how to avoid it.</p><ul><li><a href="https://integrity.mit.edu/handbook/academic-writing/avoiding-plagiarism-paraphrasing" target="_blank">Avoiding Plagiarism: Paraphrasing</a></li><li><a href="https://writing.wisc.edu/handbook/assignments/quotingsources/" target="_blank">Quoting and Paraphrasing</a></li></ul>',
    ComputerRequirements: '<p>Please note that mobile devices are not recommended for the course as they cause several known issues in onQ.</p><div class="row"><div class="col-sm-4"><h4><strong>Computer Specifications</strong></h4><ul><li>Windows 8.1 or newer</li><li>OS X 10.13 (High Sierra) or newer</li><li>Dual Core 2 GHz processor</li><li>4 GB RAM</li><li>Soundcard</li><li>USB headset</li><li>Webcam</li></ul></div><div class="col-sm-4"><h4><strong>Supported Browsers</strong></h4><ul><li>Chrome (preferred - latest version)</li><li>Firefox (latest version)</li><li><strong><em>Safari is not recommended as it causes several known issues in onQ</em></strong></li><li><strong><em>Edge is not recommended as it causes several known issues in onQ</em></strong></li></ul></div><div class="col-sm-4"><h4><strong>Internet Connection</strong></h4><ul><li>Wired high speed access: Cable or better</li><li><strong><em>Wifi is not recommended</em></strong></li><li>A minimum download speed of 10 Mbps and up to 20 Mbps for multimedia is recommended</li><li> Click here for an <a href="https://www.speedtest.net/" target="_blank">Internet speed test</a></li></ul></div></div><div class="row"><div class="col-sm-4"><h4><strong>Java</strong></h4><ul><li>Latest version</li></ul></div><div class="col-sm-4"><h4><strong>Media Player</strong></h4><ul><li>HTML5 compatible</li></ul></div><div class="col-sm-4"><h4><strong>Adobe Reader</strong></h4><ul><li>Latest Version</li></ul></div></div>',
    TravellingAbroad: '<p>If you plan to travel, we strongly recommend that you confirm Internet availability in your host country prior to departure. In the past, students in other countries have been blocked from accessing certain websites relevant to their courses, as well as onQ. It is the responsibility of all students to book travel around course work, as we cannot change the format or timing on assessments or assignments as a result of travel plans.</p>',
    HelpfulLinksHeader:'<p style="text-align: center;"><strong>ASO can be reached 9am-4pm Monday to Friday: 613.533.3322 or <a href="mailto:asc.online@queensu.ca" target="_self">asc.online@queensu.ca</a></strong></p><h2 style="text-align: center;">How can we help?</h2>',
    HelpfulLinksTechSupport: '<h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Technical Support</h3><p><strong><a href="http://queensu.ca/onqsupport/" target="_blank" rel="noopener noreferrer">onQ Support</a></strong></p><p><strong><a href="https://wiki.queensu.ca/display/ASOCR/Zoom" target="_blank" rel="noopener noreferrer">Zoom</a></strong></p>',
    HelpfulLinks: '<div class="row"><div class="col-sm-6"><h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Student Support</h3><p><strong><a href="https://www.queensu.ca/campuslife/health" target="_blank" rel="noopener">Health & Wellness</a></strong></p><p><strong><a href="https://www.queensu.ca/inclusive/" target="_blank" rel="noopener">Inclusive Queen&rsquo;s</a></strong></p><p><strong><a href="http://www.queensu.ca/artsci_online/current-students/learning-support#section-academic-advising" target="_blank" rel="noopener noreferrer">Academic Advising</a></strong></p><p><a href="http://www.queensu.ca/accessibility/" target="_blank" rel="noopener noreferrer"><strong>Accessibility Hub</strong></a></p><p><strong><a href="https://www.queensu.ca/studentwellness/accessibility-services" target="_blank" rel="noopener noreferrer">Queen&rsquo;s Student Accessibility Services</a></strong></p><p><a href="http://www.queensu.ca/studentwellness/home" target="_blank" rel="noopener noreferrer"><strong>Student Wellness Services</strong></a></p><p><strong><a href="https://www.queensu.ca/studentwellness/counselling-services" target="_blank" rel="noopener noreferrer">Counselling Services</a></strong></p><p><strong><a href="https://www.queensu.ca/fourdirections/" target="_blank" rel="noopener">Four Directions Indigenous Student Centre</a></strong></p><p><strong><a href="https://www.queensu.ca/hreo/education/positive-space" target="_blank" rel="noopener">Positive Space</a></strong></p><p><strong><a href="https://www.facebook.com/levanaGAC/" target="_blank" rel="noopener">Levana Gender Advocacy Centre</a></strong></p><p><strong><a href="https://www.queensu.ca/hreo/education/positive-space" target="_blank" rel="noopener">COVID-19 LGBTQ+ Resources and Supports</a></strong></p><p><strong><a href="https://www.queensu.ca/ban-righ-centre/" target="_blank" rel="noopener">Ban Righ Foundation for Continuing Education for Women</a></strong></p></div><div class="col-sm-6"><h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Program Support</h3><p><strong><a href="http://www.queensu.ca/artsci_online/current-students/exams" target="_blank" rel="noopener noreferrer">Exam Information</a></strong></p><p><strong><a href="http://www.queensu.ca/artsci_online/current-students/dates-and-deadlines" target="_blank" rel="noopener noreferrer">Important Dates and Deadlines</a></strong></p><p><strong><a href="http://www.queensu.ca/artsci_online/about-us/faqs" target="_blank" rel="noopener noreferrer">FAQs</a></strong></p></div></div><div class="row"><div class="col-sm-6"><h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Learning Resources</h3><p><strong><a href="http://library.queensu.ca" target="_blank" rel="noopener noreferrer">Library</a></strong></p><p><strong><a href="https://library.queensu.ca/help-services/queens-learning-commons" target="_blank" rel="noopener noreferrer">Learning Commons</a></strong></p><p><strong><a href="https://sass.queensu.ca/" target="_blank" rel="noopener noreferrer">Student Academic Success Services</a></strong></p><p><strong><a href="https://sass.queensu.ca/students/distance-students/" target="_blank" rel="noopener noreferrer">Student Academic Success Services - Distance Students</a></strong></p><p><strong><a href="https://www.linkedin.com/learning/me?u=2204553" target="_blank" rel="noopener">Lynda.com/Linkedin Learning</a></strong></p><p><strong><a href="https://office365.queensu.ca/" target="_blank" rel="noopener">Office365</a></strong></p></div><div class="col-sm-6"><h3 style="text-align: center; padding-top: 0.25em; padding-bottom: 0.25em; background-color: #f6f6f6;">Arts &amp; Science Online</h3><p><strong><a href="http://www.queensu.ca/artsci_online/" target="_blank" rel="noopener noreferrer">Arts &amp; Science Online (ASO) Homepage</a></strong></p><p><strong><a href="https://www.queensu.ca/artsci_online/learning-resources/ask-questions" target="_blank" rel="noopener noreferrer">Why Participation Matters</a></strong></p><p><strong><a href="https://www.queensu.ca/artsci_online/learning-resources/manage-your-time-self-discipline-and-scheduling-your-learning-time" target="_blank" rel="noopener noreferrer">Manage Your Time</a></strong></p><p><strong><a href="https://www.queensu.ca/artsci_online/current-students/learning-support" target="_blank" rel="noopener noreferrer">Learning Support</a></strong></p><p><strong><a href="https://www.queensu.ca/artsci_online/about-us/mentor-program" target="_blank" rel="noopener">Mentor Program</a></strong></p><p><strong><a href="https://www.queensu.ca/artsci_online/learning-resources" target="_blank" rel="noopener noreferrer">Learning Resources</a></strong></p><p><strong><a href="https://www.queensu.ca/artsci_online/future-students/how-online-learning-works" target="_blank" rel="noopener noreferrer">How Online Learning Works</a></strong></p></div></div>',
    NewAccommodation: '<div class="row"><div class="col-sm-6"><h3>ACADEMIC ACCOMMODATION</h3><p>Queen&rsquo;s University is committed to achieving full accessibility for persons with disabilities. Part of this commitment includes arranging academic accommodations for students with disabilities to ensure they have an equitable opportunity to participate in all of their academic activities.</p><p>The <strong><a href="https://www.queensu.ca/secretariat/policies/senate/academic-accommodations-students-disabilities-procedure" target="_blank">Senate Policy for Accommodations for Students with Disabilities</a></strong> was approved at Senate in November 2016. If you are a student with a disability and think you may need accommodations, you are strongly encouraged to contact the Queen&rsquo;s Student Accessibility Services (QSAS) and register as early as possible. For more information, please visit the <strong><a href="https://www.queensu.ca/studentwellness/accessibility-services" target="_blank">QSAS website</a></strong></p><p><strong>Students with course accommodations should add their information to Ventus using the widget located on the course homepage.</strong></p></div><div class="col-sm-6"><h3>ACADEMIC CONSIDERATION</h3><p>Queen&rsquo;s University is committed to providing academic consideration to students experiencing extenuating circumstances that are beyond their control and are interfering with their ability to complete academic requirements related to a course for a short period of time. Click here to view the <strong><a href="https://www.queensu.ca/secretariat/sites/webpublish.queensu.ca.uslcwww/files/files/policies/senateandtrustees/Academic%20Considerations%20for%20Extenuating%20Circumstances%20Policy%20Final.pdf" target="_blank">Senate Policy on Academic Consideration for Students in Extenuating Circumstances</a></strong>.</p><p>Each Faculty has developed a protocol to provide a consistent and equitable approach in dealing with requests for academic consideration for students facing extenuating circumstances. Arts and Science undergraduate students can find the <strong><a href="https://www.queensu.ca/artsci/undergrad-students/academic-consideration-for-students" target="_blank">Faculty of Arts and Science protocol here</a></strong>; students in other Faculties and Schools who are enrolled in this course should refer to the protocol for their home Faculty.</p><h5>Situation 1: Athletics</h5><ol><li>If you have a University sanctioned athletic game at the same time as an assessment, then you are eligible for academic consideration. Note that practices or travel to events are not eligible for academic consideration.</li><li>To be eligible for an academic consideration for athletics, you must make a request for academic consideration according to the <strong>&ldquo;Excused Absence for Significant Event&rdquo; <a href="https://www.queensu.ca/artsci/undergrad-students/academic-consideration-for-students" target="_blank" rel="noopener">protocol outlined here</a></strong>. Please also include the time and location of the game.</li><li>If your request for academic consideration is approved, please forward the confirmation email you receive from the Faculty Office <strong>directly</strong> to your <strong>instructor</strong>. In your email, make sure to indicate what assessment items you are requesting accommodation for, as well as the assessment date.</li><li><strong>Your instructor will then advise Arts & Science Online</strong> of what they would liek arranged (in light of the consideration) and what changes need to be made in onQ.</li></ol><h5>Situation 2: Extenuating Circumstances</h5><ol><li>Submit a request for academic consideration through your Faculty. For Arts & Science students, such requests should be made through the <strong><a href="https://webapp.queensu.ca/artsci/acrp/" target="_blank">student portal</a></strong>. Students in all other faculties should follow the protocol of their home faculty (even though you are taking an Arts & Science elective). Please note that family events such as vacations, weddings, transportation, competing commitments, and academic stress are not considered extenuating circumstances.</li><li>If your request for academic consideration is approved, please forward the confirmation email (or a screenshot of the email) <strong>directly</strong> to your <strong>instructor</strong>. Make sure to indicate what assessment items you are requesting accommodation for, as well as the assessment date.</li><li><strong>Your instructor will then advise Arts & Science Online</strong> of what they would like arranged (in light of the consideration) and what changes need to be made in onQ.</li></ol></div></div>',
    ZoomInfo: '<h2><b>ITS Zoom Tech Support*: your go-to for <i>technical difficulties</i></b></h2><ul type="disc"><li>The Queen&rsquo;s IT Support Centre offers basic Zoom support for all faculty and students via <a target="_blank" href="https://chat.its.queensu.ca/" rel="noopener">Online Chat</a> or by phone (613) 533-6666 (8am to 5pm Monday-Thursday, 8am to 5pm Friday).</li><li>Please note: there currently is no support available on weekends or outside of the IT Support Centre hours listed above.</li><li><b>If you or your students are having difficulty logging into a Zoom meeting, accessing the features of Zoom, or any other technical difficulty, please contact the IT Support Centre via&nbsp;</b><a target="_blank" href="https://chat.its.queensu.ca/" rel="noopener"><b>Online Chat</b></a><b> or by phone (613) 533-6666 (5am to 10pm Monday-Friday).</b></li></ul><h2><b>ASO Zoom Tech Support: your go-to for <i>bookings, training, and recordings</i></b></h2><ul type="disc"><li><u><a target="_blank" href="https://forms.office.com/Pages/ResponsePage.aspx?id=O8se1rE41UKCxO-yg4uSXCopRkUWatFFjRk1A8SQUtpUOUtWSU1UQ0NMM1dKSVVMNFIxSFhWODJHQy4u" rel="noopener">Click here to access the Meeting Booking and Training Form.</a></u></li><li>ASO provides optional training for teaching teams early in the term to ensure you’re comfortable with the technology and able to utilize all the features of Zoom, including polling and breakout rooms.</li><li><b>If you have a question about your booking, setting up Zoom links in your course, or your Zoom recordings, please contact </b><a target="_blank" href="mailto:asozoom@queensu.ca" rel="noopener"><b>asozoom@queensu.ca</b></a><b> (email monitored during ASO office hours: 8:30am - 4:30pm Monday-Friday)</b></li></ul><h2><b>onQ Integration</b></h2><p>Starting in Winter 2022, Zoom meetings can be created, managed, and joined from one link without the need to login a second time. Recordings can also be managed and published from the integration. If the integration was enabled in your course, meetings will now be accessed as follows:</p><ul><li>Visit your course’s Zoom page</li><li>Click <b>Access Zoom Meetings </b>at the bottom of the page</li><li>Select <b>Open in a New Window</b></li></ul><p><b>Note</b>: if you are accessing the integration for the first time you will be prompted to allow permission for onQ to access your Zoom account. Please allow this.</p><h2><b>Join a Zoom Meeting (if created outside of the onQ integration)</b></h2><ul type="disc"><li>Login to <a target="_blank" href="https://queensu.zoom.us" rel="noopener">https://queensu.zoom.us</a> with your NetID@queensu.ca email address and password.</li><li>Visit your course Zoom page and click on the Zoom link.</li><li>If you are prompted to wait for the meeting host, please contact the IT Support Centre</li></ul><p><b>Please note</b> that it is important that you are logged in to <a target="_blank" href="https://queensu.zoom.us" rel="noopener">https://queensu.zoom.us</a> before accessing your meeting. Being logged in to onQ doesn’t necessarily mean that you are logged in to Zoom.</p><p>In order to ensure you have appropriate access to your meetings please test the links on the course’s Zoom page before your meeting is scheduled to begin. ASO email support is only available Monday-Friday 8:30am-4:30pm.</p><p>Instructors will be added to the course meetings as Alternative Hosts by default. TAs will be added as well if a request has been made. Your course meetings can only be accessed from the course’s Zoom page. They will not appear in your Zoom app.</p><h2><b>Additional Resources</b></h2><ul type="disc"><li><a target="_blank" href="https://wiki.queensu.ca/display/ASOCR/Zoom+for+Instructors" rel="noopener">ASO Zoom for Instructors Wiki</a></li><li><a target="_blank" href="https://onq.queensu.ca/d2l/common/viewFile.d2lfile/Content/636413412074778939/Best%20Practices%20for%20Online%20Synchronous%20Sessions.pdf?ou=53625&amp;fid=L2NvbnRlbnQvY2RzL2Nkcy9JbnN0cnVjdG9yIFJlc291cmNlcy9CZXN0IFByYWN0aWNlcyBmb3IgT25saW5lIFN5bmNocm9ub3VzIFNlc3Npb25zLnBkZg" rel="noopener">Best Practices for Online Synchronous Sessions</a></li><li><a target="_blank" href="https://queensu.service-now.com/esm?id=kb_article&amp;sysparm_article=KB0012375&amp;sys_kb_id=14faf1941be1f4102f15bb39cd4bcbaa" rel="noopener">Zoom Security Considerations at Queen&rsquo;s</a></li><li><a target="_blank" href="https://www.queensu.ca/accessandprivacy/faqs" rel="noopener">FAQs on Recordings Online Classes and Meetings</a></li></ul>',
    ZoomInstructions: '<h2 class="section-block">Instructions for Zoom</h2><div class="row"><div class="col-sm-3"><div style="border: 2px solid black; border-radius: 10px; padding: 5%;"><p>Need Help with Zoom? Please contact the ITServices Support Centre (5am to 10pm Monday-Friday).</p><ul><li><a href="https://chat.its.queensu.ca/" target="_blank" rel="noopener">Online Chat</a></li><li>By Phone (613) 533-6666</li></ul></div></div><div class="col-sm-9"><p>Before joining your Zoom meeting:</p><ol><li>Ensure you are on a stable internet connect with a strong wireless signal. Using a wired connection is preferred</li><li>If your computer or device has been on for a long time, please restart it.</li><li>Connect any peripherals (e.g. headset or headphones) to your computer before joining any meetings</li><li>Join the&nbsp;<a href="https://zoom.us/test" target="_blank" rel="noopener">Zoom Test Meeting</a> to ensure the software is installed and the meeting can launch properly.</li></ol><p>For more information on using Zoom, please consult the <a href="https://wiki.queensu.ca/display/ASOCR/Zoom" target="_blank" rel="noopener">Zoom Student Resources Pag</a>e and the <a href="https://support.zoom.us/hc/en-us/articles/201362033-Getting-Started-on-PC-and-Mac" target="_blank" rel="noopener">Getting Started with Zoom Page</a>.</p><p><strong>Please note:</strong> Arts and Science Online currently does not support mobile devices. Zoom meetings should be accessed using a laptop or desktop computer.</p></div></div>',
    ZoomInstructions1: '<h2 class="section-block">Instructions for Zoom</h2><div class="row"><div class="col-sm-3"><div style="border: 2px solid black; border-radius: 10px; padding: 5%;"><p>Need Help with Zoom? Please contact the ITServices Support Centre (5am to 10pm Monday-Friday).</p><ul><li><a href="https://chat.its.queensu.ca/" target="_blank" rel="noopener">Online Chat</a></li><li>By Phone (613) 533-6666</li></ul></div></div><div class="col-sm-9"><p>Before joining your Zoom meeting:</p><ol><li>Ensure you are on a stable internet connect with a strong wireless signal. Using a wired connection is preferred</li><li>If your computer or device has been on for a long time, please restart it.</li><li>Connect any peripherals (e.g. headset or headphones) to your computer before joining any meetings</li><li>Join the&nbsp;<a href="https://zoom.us/test" target="_blank" rel="noopener">Zoom Test Meeting</a> to ensure the software is installed and the meeting can launch properly.</li><li>To view a meeting recording, click the link below and choose the <strong>Recording</strong> tab. Select the meeting you would like to view and choose the video. Paste the passcode in by entering CTRL + V (on a PC) or COMMAND + V (on a Mac).</li></ol><p>For more information on using Zoom, please consult the <a href="https://wiki.queensu.ca/display/ASOCR/Zoom" target="_blank" rel="noopener">Zoom Student Resources Pag</a>e and the <a href="https://support.zoom.us/hc/en-us/articles/201362033-Getting-Started-on-PC-and-Mac" target="_blank" rel="noopener">Getting Started with Zoom Page</a>.</p><p><strong>Please note:</strong> Arts and Science Online currently does not support mobile devices. Zoom meetings should be accessed using a laptop or desktop computer.</p></div></div>',
    TimelineHeader: '<div class="row"><div class="col-sm-12 bg-info"><p>The Course Timeline shows all relevant course dates, including assessments, as well as links to other important course information. As dates may change, you should consult the Timeline each time you log in to the course.</p><p>Please note, some students may see an onQ Calendar for their course. However, the onQ calendar does not display all dates associated with your course assignments. For complete information all of your assignments in this course and the start and close dates, please refer to the Course Timeline below.</p><p>If there are discrepancies between dates in the course onQ site, the Timeline will be considered accurate.</p><p>All times are in Kingston time (Eastern Time).</p></div></div>',
    TimelineHeaderSyllabus: '<div class="row"><div class="col-sm-12"><p>The Course Timeline shows all relevant course dates, including assessments, as well as links to other important course information. As dates may change, you should consult the Timeline each time you log in to the course.</p><p>Please note, some students may see an onQ Calendar for their course. However, the onQ calendar does not display all dates associated with your course assignments. For complete information all of your assignments in this course and the start and close dates, please refer to the <strong>Course Timeline</strong>.</p><p>If there are discrepancies between dates in the course onQ site, the Timeline will be considered accurate.</p><p>All times are in Kingston time (Eastern Time).</p></div></div>',
    AcademicAccommodation: '<p>Queen&rsquo;s University is committed to achieving full accessibility for persons with disabilities. Part of this commitment includes arranging academic accommodations for students with disabilities to ensure they have an equitable opportunity to participate in all of their academic activities.</p><p>The <a href="https://www.queensu.ca/secretariat/policies/senate/academic-accommodations-students-disabilities-procedure" target="_blank">Senate Policy for Accommodations for Students with Disabilities</a> was approved at Senate in November 2016. If you are a student with a disability and think you may need accommodations, you are strongly encouraged to contact the Queen&rsquo;s Student Accessibility Services (QSAS) and register as early as possible. For more information, please visit the <a href="https://www.queensu.ca/studentwellness/accessibility-services" target="_blank">QSAS website</a></p><p><strong>Students with course accommodations should add their information to Ventus using the widget located on the course homepage.</strong></p>',
    AcademicConsideration: '<p>Queen&rsquo;s University is committed to providing academic consideration to students experiencing extenuating circumstances that are beyond their control and are interfering with their ability to complete academic requirements related to a course for a short period of time. Click here to view the&nbsp;<strong><a href="https://www.queensu.ca/secretariat/sites/webpublish.queensu.ca.uslcwww/files/files/policies/senateandtrustees/Academic%20Considerations%20for%20Extenuating%20Circumstances%20Policy%20Final.pdf" target="_blank" rel="noopener">Senate Policy on Academic Consideration for Students in Extenuating Circumstances</a></strong>.</p><p>Each Faculty has developed a protocol to provide a consistent and equitable approach in dealing with requests for academic consideration for students facing extenuating circumstances. Arts and Science undergraduate students can find the&nbsp;<strong><a href="https://www.queensu.ca/artsci/undergrad-students/academic-consideration-for-students" target="_blank" rel="noopener">Faculty of Arts and Science protocol here</a></strong>; students in other Faculties and Schools who are enrolled in this course should refer to the protocol for their home Faculty.</p><div class="row"><div class="col-sm-6"><h5>Situation 1: Athletics</h5><ol><li>If you have a University sanctioned athletic game at the same time as an assessment, then you are eligible for academic consideration. Note that practices or travel to events are not eligible for academic consideration.</li><li>To be eligible for an academic consideration for athletics, you must make a request for academic consideration according to the&nbsp;<strong>&ldquo;Excused Absence for Significant Event&rdquo;&nbsp;<a href="https://www.queensu.ca/artsci/undergrad-students/academic-consideration-for-students" target="_blank" rel="noopener">protocol outlined here</a></strong>. Please also include the time and location of the game.</li><li>If your request for academic consideration is approved, please forward the confirmation email you receive from the Faculty Office <strong>directly&nbsp;to your&nbsp;instructor</strong>. In your email, make sure to indicate what assessment items you are requesting accommodation for, as well as the assessment date.</li><li><strong>Your instructor will then advise Arts &amp; Science Online</strong>&nbsp;of what they would liek arranged (in light of the consideration) and what changes need to be made in onQ.</li></ol></div><div class="col-sm-6"><h5>Situation 2: Extenuating Circumstances</h5><ol><li>Submit a request for academic consideration through your Faculty. For Arts &amp; Science students, such requests should be made through the&nbsp;<strong><a href="https://webapp.queensu.ca/artsci/acrp/" target="-blank">student portal</a></strong>. Students in all other faculties should follow the protocol of their home faculty (even though you are taking an Arts &amp; Science elective). Please note that family events such as vacations, weddings, transportation, competing commitments, and academic stress are not considered extenuating circumstances.</li><li>If your request for academic consideration is approved, please forward the confirmation email (or a screenshot of the email) <strong>directly&nbsp;to your&nbsp;instructor</strong>. Make sure to indicate what assessment items you are requesting accommodation for, as well as the assessment date.</li><li><strong>Your instructor will then advise Arts &amp; Science Online</strong>&nbsp;of what they would like arranged (in light of the consideration) and what changes need to be made in onQ.</li></ol></div></div>',
    Turnitin: '<p>This course makes use of Turnitin, a third-party application that helps maintain standards of excellence in academic integrity. Normally, students will be required to submit their course assignments through onQ to Turnitin. In doing so, students&rsquo; work will be included as source documents in the Turnitin reference database, where they will be used solely for the purpose of detecting plagiarism.</p><p>Turnitin is a suite of tools that provide instructors with information about the authenticity of submitted work and facilitates the process of grading. Turnitin compares submitted files against its extensive database of content, and produces a similarity report and a similarity score for each assignment. A similarity score is the percentage of a document that is similar to content held within the database. Turnitin does not determine if an instance of plagiarism has occurred. Instead, it gives instructors the information they need to determine the authenticity of work as a part of a larger process.</p><p>Please read <a href="https://help.turnitin.com/Privacy_and_Security/Privacy_and_Security.htm" target="_blank">Turnitin&rsquo;s Privacy Pledge, Privacy Policy, and Terms of Service</a>, which governs users&rsquo; relationship with Turnitin. Also, please note that Turnitin uses cookies and other tracking technologies; however, in its service contract with Queen&rsquo;s Turnitin has agreed that neither Turnitin nor its third-party partners will use data collected through cookies or other tracking technologies for marketing or advertising purposes. For further information about how you can exercise control over cookies, see <a href="https://help.turnitin.com/Privacy_and_Security/Privacy_and_Security.htm#policy" target="_blank">Turnitin&rsquo;s Privacy Policy</a>.</p><p>Turnitin may provide other services that are not connected to the purpose for which Queen&rsquo;s University has engaged Turnitin. Your independent use of Turnitin&rsquo;s other services is subject solely to Turnitin&rsquo;s Terms of Service and Privacy Policy, and Queen&rsquo;s University has no liability for any independent interaction you choose to have with Turnitin.</p><p>As a student, you have the right to opt out of Turnitin. You must notify the instructor by the end of Week 3 of the term, and make arrangements for additional work or alternative strategies to ensure the integrity of the work. In such instances, the instructor is still expected to ensure the integrity of your work.</p>',
    ZoomSyllabus: '<p>Synchronous (live) classes will be delivered in this course through Zoom and/or Teams, video conferencing platforms supported by the University.  Steps have been taken by the University to configure these platforms in a secure manner. Classes will be recorded with video and audio (and, in some cases, transcription) and will be made available to students in the course for the duration of the term. The recordings may capture your name, image or voice through the video and audio recordings. By attending these live classes, you are consenting to the collection of this information for the purposes of administering the class and associated coursework. If you are concerned about the collection of your name and other personal information in the class, please contact the course instructor to identify possible alternatives.</p><p>To learn more about how your personal information is collected, used and disclosed by Queen&rsquo;s University, please see the <a href="https://www.queensu.ca/accessandprivacy/privacy/notice-collection" target="_blank" rel="noopener">Notice of Collection, Use and Disclosure of Personal Information</a>.</p>',
    AcademicSupport: '<p>All undergraduate students face new learning and writing challenges as they progress through university: essays and reports become more complex; effectively incorporating research into writing becomes more important; the types of assignments become more diverse; managing your time and developing the skills you need to read and think critically gets more challenging. I encourage students to contact <strong>Student Academic Success Services (SASS)</strong>. SASS offers many different ways to receive support:</p><ul><li>Free online or in-person <a href="https://sass.queensu.ca/programs/appointments/" target="_blank" rel="noopener">appointments</a> to get personalized support on writing and academic skills from expert staff and trained peers.</li><li><a href="https://sass.queensu.ca/programs/workshops/" target="_blank" rel="noopener">Workshops</a> and <a href="https://sass.queensu.ca/drop-in/" target="_blank" rel="noopener">drop-in programs</a>. SASS&rsquo; <a href="https://sass.queensu.ca/events/" target="_blank" rel="noopener">Events Calendar lists events coming soon</a>.</li><li><a href="https://sass.queensu.ca/onlineresource/topics/#WC" target="_blank" rel="noopener">Online resources</a> that provide strategies for academic skills and writing development at university.</li><li>If English is not your first language, SASS has specific resources for <a href="https://sass.queensu.ca/eal/" target="_blank" rel="noopener">English as Additional Language students</a>, including weekly programs and EAL academic skills appointments. You can meet on an ongoing basis with an EAL consultant to work on your academic writing, speaking, listening, and reading skills.</li></ul>',
    Equity: '<p>Queen&rsquo;s University recognizes that the values of equity and diversity are vital to and in harmony with its educational mission and standards of excellence. It acknowledges that direct, indirect and systemic discrimination exists within our institutional structures, policies and practices and in our community. These take many forms and work to differentially advantage and disadvantage persons across social identities such as race, ethnicity, disability, gender identity, sexual orientation, faith and socioeconomic status, among other examples. In this class I will work to promote an anti-discriminatory, anti-racist and accountable environment where everyone feels welcome. Students in this class are encouraged to participate during class discussions and to support others in their participation. Because the class will represent a diversity of individuals, beliefs, backgrounds, and experiences, every member of this class is asked to show respect for every other member.</p>',
    Name: '<p>Knowing and applying students&rsquo; names and pronouns is a crucial part of developing a productive learning environment that fosters safety, inclusion, and personal dignity. This is an important part of the inclusion work here at Queen&rsquo;s</p><p>If you wish to change how your name appears in onQ and on class lists, please follow these steps. You may also use this process to add your pronouns to the appearance of your name.</p><ol><li>Log into SOLUS.</li><li>Click on Personal Information tab.</li><li>Click on the Names tab</li><li>Click on the Add New Name tab</li><li>Choose Preferred from the Name Type drop down menu</li><li>Enter your preferred name.</li><li>Click Save.</li></ol><p>Please allow 24 to 48 hours for your preferred name to be registered within the system. If you have further questions or concerns please contact ITS at Queen&rsquo;s University.</p>',
    Calculator: '<p>As noted in Academic Regulation 9.2, “Calculators acceptable for use during quizzes, tests and examinations are intended to support the basic calculating functions required by most Arts and Science courses. For this purpose, the use of the Casio 991 series calculator is permitted and is the only approved calculator for Arts and Science students.”</p>',
    Announcements: '<p>Throughout the course, I encourage you to routinely check the Announcements section of the course homepage. I encourage you to actively check the course onQ main page for course announcements throughout the semester for reminders and additional course information or learning opportunities. </p>',
    VirtualMeetings: '<p>The use of cameras is optional but encouraged during our online synchronous sessions. Turning your camera on allows for a more personal experience. Since the online tutorial is considered a virtual classroom, you are expected to behave as if you were in a classroom. We do, however, understand when pets or family members interrupt!</p><p>Live sessions are designed to encourage students to practice using their vocabulary, grammar, comprehension, and oral skills through group activities. Students will be required to participate in synchronous sessions and appear on video because body language helps us to communicate. Each tutorial session will be offered multiple times to accommodate students&rsquo; schedules.</p><p>The Zoom Tutorial Chat function is available to all students. In fact, all students are encouraged to use the chat to ask your TAs questions and communicate amongst yourselves regarding the tutorial assignment. However, the Zoom Tutorial Chat is intended strictly for questions and dialogues pertaining to course and material.</p>'
  }
})

var app2 = new Vue({
  el: '.container-fluid',
  data: {
    FallTuitionDue: 'Sep 1',
    FallClassesStart: 'Sep 6',
    FallAdd: 'Sep 19',
    FallFinDrop: 'Sep 19',
    FallAcadDrop: 'Nov 1',
    FallExamCentre: 'TBD',
    FallAccomm: 'TBD',
    FallClassesEnd: 'Dec 5',
    FallExams: 'Dec 8-22',
    WinterTuitionDue: 'Jan 2',
    WinterClassesStart: 'Jan 9',
    WinterAdd: 'Jan 20',
    WinterFinDrop: 'Jan 20',
    WinterAcadDrop: 'Mar 3',
    WinterExamCentre: 'TBD',
    WinterAccomm: 'TBD',
    WinterClassesEnd: 'Apr 6',
    WinterExams: 'Apr 14-28',
    FallWinterTuitionDue: 'Sep 1',
    FallWinterClassesStart: 'Sep 6',
    FallWinterAdd: 'Sep 19',
    FallWinterFinDrop: 'Sep 19',
    FallWinterFallExamCentre: 'N/A',
    FallWinterFallAccomm: 'TBD',
    FallWinterFallExams: 'Dec 8-22',
    FallWinterAcadDrop: 'Mar 3',
    FallWinterWinterExamCentre: 'TBD',
    FallWinterWinterAccomm: 'TBD',
    FallWinterClassesEnd: 'Apr 6',
    FallWinterWinterExams: 'Apr 14-28',
    SpringTuitionDue: 'May 2',
    SpringClassesStart: 'May 9',
    SpringAdd: 'May 13',
    SpringFinDrop: 'May 13',
    SpringExamCentre: 'N/A',
    SpringAccomm: 'N/A',
    SpringAcadDrop: 'Jun 3',
    SpringClassesEnd: 'Jun 17',
    SpringExams: 'Jun 20-22',
    SpringSummerTuitionDue: 'May 2',
    SpringSummerClassesStart: 'May 9',
    SpringSummerAdd: 'May 13',
    SpringSummerFinDrop: 'May 20',
    SpringSummerAcadDrop: 'Jul 1',
    SpringSummerExamCentre: 'N/A',
    SpringSummerAccomm: 'N/A',
    SpringSummerClassesEnd: 'Jul 29',
    SpringSummerExams: 'Aug 2-10',
    SummerTuitionDue: 'Jul 4',
    SummerClassesStart: 'Jul 4',
    SummerAdd: 'Jul 8',
    SummerFinDrop: 'Jul 8',
    SummerExamCentre: 'N/A',
    SummerAccomm: 'N/A',
    SummerAcadDrop: 'Jul 29',
    SummerClassesEnd: 'Aug 12',
    SummerExams: 'Aug 15-17'
  }
})
/*END of Vue.js scripts*/

/*START Retrieve section number for link to tab*/
$("a").not("[data-toggle*='tab']").click(function() {
    var value = $(this).attr('href');
    var SplitSectionHrefNumber = value.split('section')[1];
    localStorage.setItem("sectionHrefNumber", SplitSectionHrefNumber);
});
/*END Retrieve section number*/
