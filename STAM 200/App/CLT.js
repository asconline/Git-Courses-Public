
///////////////////////////////////////////////////////////////////////////////
//                      APPLET GLOBAL PARAMETERS                             //
///////////////////////////////////////////////////////////////////////////////

//To control y for DIY
var DIYMouse="resting";

//Testing for touch screends inside DIY choice needs this variable
var hasTouch = false;

//temp colors
//Queen's Blue: #12335e
//Queen's Red: #9e1839
//Queen's Yellow: #edbc31

KFlightblue = "#f4f4f4";
KForange = "#4f9bd5";
KFblack = "#000000";
var tutorialBoxColor = "#024880";

// Fish distribution parameters
var meanND = 2.51;
var stdDeviationND = 3.814;
var sampleSize = 10;

//Choosong a distribution
var whichDist = "coffee";
var proportionRed = 0.7;

// D3 fish distribution. Call nd() to generate the random length of a new fish
var nd = d3.random.normal(meanND,stdDeviationND);

// Return a random number uniformally distributed in [min,max]
function randomUniform(min, max) { return min + Math.random() * (max-min); }

// Bell curve function: used to plot the probability density of the distribution
function bell(x,mu,sd) { return 1/(sd*Math.sqrt(2*Math.PI))*Math.exp(-(x-mu)*(x-mu)/(2*sd*sd)); }



// Min and max length values used for histogram plotting
var minLength = 0;
var maxLength = 200;

// Width of the histograms' intervals
var histogramIntervalWidth = 2;
var meanHistogramIntervalWidth = 2;

var numberIncrementsForDistLine = 200;

// How big are the fish drawn in the pool:
//   * A fish of length 150 will have a pixel width of fishPoolRatio * poolWidth
//   * A fish of length l   will have a pixel width of fishPoolRatio * poolWidth * L/150
var fishPoolRatio = 2;

// Size of the original SVG fish image
var fishSVGWidth = 200;
var fishSVGHeight = 200;
var kingfisherSVGWidth = 82.79;
var kingfisherSVGHeight = 111.50;

// Pool parameters
var numFishInPool = 20;

// Value for the button "Compute N means"
var numMeansForSpeedUp = 100;

// Proportional font sizes
tickFontSize = 0.75;
var lastSampledFishLength = 10;


var distMax = coffeeDist(0);
var fishImageRef =  "cup_no_steam.svg#fishSVG";
var DIYFirstTime = true;




function randomIndividual() {
	if (whichDist=="coffee") {return randomCoffee()};
	if (whichDist=="normal") {return randomNormal()};
	if (whichDist=="spanishFlu") {return randomFlu()};
	if (whichDist=="vote") {return randomVote()};
	if (whichDist=="DIY") {return randomDIY()};
};

function distributionDrawer(length) {
	if(whichDist=="coffee") {return coffeeDist(length)};
	if(whichDist=="normal") {return normalDist(length)};
	if (whichDist=="spanishFlu") {return fluDist(length)};
	if (whichDist=="vote") {return voteDist(length)};
	if (whichDist=="DIY") {return DIYdist(length, DIYdistsum);};
};

//Zahraa changed 10-27
function myDistributionDrawer(length, myDIYdistsum) {
	if (whichDist=="DIY") {
		return DIYdist(length, myDIYdistsum);
		};
} //End Zahraa changed 10-27

var DIYf=[];
var DIYdistsum =100;
var lastX=0;
var lastY=0;

///////////////////////////////////////////////////////////////////////////////
//                           VARYING DISTRIBUTIONS                           //
///////////////////////////////////////////////////////////////////////////////
//Channging the base distribution
function distributionChanger(newdist) {
	whichDist = newdist;
	buttonBackgroundDefault();


	if (newdist == "coffee"){
		frameCurrentQuestion.attr("text","Facebook and Facebook friends are the new ‘face’ of social connections. Interestingly, the distribution of Facebook friends has an ‘exponential’ shape where most people have few friends and only a few people have many friends. The top figure shows the distribution of Facebook Friends for several thousand users. Use the buttons and slider on the left to see what the sampling distribution (bottom figure) looks like. Start by taking a single sample by clicking the ’sample individuals’ button. Then click the ‘calculate mean’ button to see the mean of your sample. Do this 10 times to begin building up the sampling distribution. Then, try adding many samples at once by clicking the ‘means for many samples’ button. What happens to the sampling distribution that you see as you add more and more (and more) samples? What is the shape of the sampling distribution? Try changing the size of the sample. What happens to the sampling distribution when sample size increases?");
		coffeeButton.attr("background-color",tutorialBoxColor);
		minLength = 0;
		maxLength = 200;
		histogramIntervalWidth = 2;
		meanHistogramIntervalWidth = 2;
		fishPoolRatio = 2;
		fishSVGWidth = 200;
		fishSVGHeight = 200;
		distMax = coffeeDist(0);
		d3.select("#IndAxisLabel")[0][0].textContent="Number of Friends (x10)";
		fishImageRef =  "cup_no_steam.svg#fishSVG";
		meanND = 32.9;
		stdDeviationND = 22.2;
		numberIncrementsForDistLine = 200;
		// add line to updateFish for each new dist type
		//Also change showCurrentValueBar (near end of file) to change text there.
	}

	if (newdist == "normal"){
		frameCurrentQuestion.attr("text","'Old Faithful' is a geyser in Yellow Stone National Park. Beyond being located in a spectacular landscape, the geyser is well know how regular the water eruptions are. The top figure shows the distribution of time between eruptions in minutes. It has an odd distribution with two distinct peaks centred around 55 mins and 80 minutes, which is known as a ‘bimodal’ distribution. Use the buttons and slider on the left to see what the sampling distribution (bottom figure) looks like. Start by taking a single sample by clicking the ’sample individuals’ button. Then click the ‘calculate mean’ button to see the mean of your sample. Do this 10 times to begin building up the sampling distribution. Then, try adding many samples at once by clicking the ‘means for many samples’ button. What happens to the sampling distribution that you see as you add more and more (and more) samples? What is the shape of the sampling distribution? Try changing the size of the sample. What happens to the sampling distribution when sample size increases?");
		normalButton.attr("background-color",tutorialBoxColor);
		minLength = 0;
		maxLength = 120;
		histogramIntervalWidth = 1;
		meanHistogramIntervalWidth = 2;
		fishPoolRatio = 2;
		fishSVGWidth = 200;
		fishSVGHeight = 200;
		distMax = normalDist(82);
		d3.select("#IndAxisLabel")[0][0].textContent="Time Between Eruptions (minutes)";
		fishImageRef =  "fish.svg#fishSVG";
		meanND = 71.12;
		stdDeviationND = 7.356;
		numberIncrementsForDistLine = 120;
		// add line to updateFish for each new dist type
		//Also change showCurrentValueBar (near end of file) to change text there.
	}

	if (newdist == "spanishFlu"){
		frameCurrentQuestion.attr("text","Net Promoter Scores (NPS) are used by companies to gauge the loyalty of their customers. They are based on the following question “How likely is it that you would recommend our company/product/service to a friend or colleague?”. Scores of 9 or 10 represent customers who are promoters of a product, scores of 7 or 8 are passive customers, and scores less than 7 are detractors. The top figure shows a typical distribution of Net Promoter Scores. It has an odd U-shaped distribution with customers typically either loving a product or hating it. Use the buttons and slider on the left to see what the sampling distribution (bottom figure) looks like. Start by taking a single sample by clicking the ’sample individuals’ button. Then click the ‘calculate mean’ button to see the mean of your sample. Do this 10 times to begin building up the sampling distribution. Then, try adding many samples at once by clicking the ‘means for many samples’ button. What happens to the sampling distribution that you see as you add more and more (and more) samples? What is the shape of the sampling distribution? Try changing the size of the sample. What happens to the sampling distribution when sample size increases?");
		fluButton.attr("background-color",tutorialBoxColor);
		minLength = 0;
		maxLength = 12;
		histogramIntervalWidth = 0.5;
		meanHistogramIntervalWidth = 0.2;
		fishPoolRatio = 2;
		fishSVGWidth = 200;
		fishSVGHeight = 200;
		distMax = fluDist(10);
		d3.select("#IndAxisLabel")[0][0].textContent="NPS Rating";
		fishImageRef =  "blackbox.svg#fishSVG";
		meanND = 7.408;
		stdDeviationND = 2.5;
		numberIncrementsForDistLine = 12;


		// add line to updateFish for each new dist type
		//Also change showCurrentValueBar (near end of file) to change text there.
		// add lines to randomIndividual() and to distributionDrawer()
	}

	if (newdist == "vote"){
		frameCurrentQuestion.attr("text","The top figure shows the distribution of the number of people dying (per 100K) at each age in the USA. Use the buttons and slider on the left to see what the sampling distribution (bottom figure) looks like. Start by taking a single sample by clicking the ’sample individuals’ button. Then click the ‘calculate mean’ button to see the mean of your sample. Do this 10 times to begin building up the sampling distribution. Then, try adding many samples at once by clicking the ‘means for many samples’ button. What happens to the sampling distribution that you see as you add more and more (and more) samples? What is the shape of the sampling distribution? Try changing the size of the sample. What happens to the sampling distribution when sample size increases?");
		voteButton.attr("background-color",tutorialBoxColor);
		minLength = 0;
		maxLength = 121;
		histogramIntervalWidth = 2;
		meanHistogramIntervalWidth = 2;
		fishPoolRatio = 2;
		fishSVGWidth = 200;
		fishSVGHeight = 200;
		distMax = voteDist(89);
		d3.select("#IndAxisLabel")[0][0].textContent="Age (years)";
		fishImageRef =  "skull.svg#skull";
		meanND = 78.2;
		stdDeviationND = 11.378;
		numberIncrementsForDistLine = 121;


		// add line to updateFish for each new dist type
		//Also change showCurrentValueBar (near end of file) to change text there.
		// add lines to randomIndividual() and to distributionDrawer()
	}

	if (newdist == "DIY"){
		if (DIYFirstTime) d3.selectAll("#equationDiv").style("display","block");
		DIYFirstTime = false;
		frameCurrentQuestion.attr("text","Use the mouse to draw your own distribution of individuals at the right.<br><br>Using the mouse, click anywhere inside the individual distribution graph and draw while holding down the mouse button. (You don't need to use the pencil and you don't need to drag the line that is already there.)<br><br>When you lift the mouse button, the program will re-scale the graph so that the histogram for each sample will better fit into the window. It will still be the same distribution that you drew.");
		DIYButton.attr("background-color",tutorialBoxColor);
		minLength = 0;
		maxLength = 100;
		for(i = 0; i<101;i++){
			DIYf[i]=1;
		}
		DIYdistsum = 100;
		// var hasTouch;
		window.addEventListener('touchstart', function setHasTouch () {
		    hasTouch = true;
		    alert("Sorry, the draw it yourself feature may not work with all touch screens.");
		    // Remove event listener once fired, otherwise it'll kill scrolling
		    // performance
		    window.removeEventListener('touchstart', setHasTouch);
		}, false);

		histogramIntervalWidth = 5;
		meanHistogramIntervalWidth = 2;
		fishPoolRatio = 0.6;
		fishSVGWidth = 200;
		fishSVGHeight = 200;
		distMax = 1;
		d3.select("#IndAxisLabel")[0][0].textContent="Individual X value";
		fishImageRef =  "pencil.svg#pencil";
		d3.select(".bigcup").attr("opacity",0);
		recalcDIYdist();
		numberIncrementsForDistLine = 100;


		// add line to updateFish for each new dist type
		//Also change showCurrentValueBar (near end of file) to change text there.
		// add lines to randomIndividual() and to distributionDrawer()
	}
	//fixBigImage(whichDist);
	clearAllHistograms();
	appletSvg.selectAll(".fish").transition();
	appletSvg.selectAll(".fish").remove();
	createNRandomFish(numFishInPool);
	histogramWidgetIndividuals.update();
	onresizeAll();
	fixBigImage(whichDist);
	d3.select("#meanBoxValue").text(Math.round(10*meanND)/10)

}

function fixBigImage(newdist){
	d3.select(".bigcup").attr("opacity",0);
	d3.select(".bigfish").attr("opacity",0);
	d3.select(".fludeaths").attr("opacity",0);
	d3.select(".vote").attr("opacity",0);
	d3.select(".pencil").attr("opacity",0);
	if(newdist=="coffee"){	d3.select(".bigcup").attr("opacity",1);};
	if(newdist=="normal"){	d3.select(".bigfish").attr("opacity",1);};
	if(newdist=="spanishFlu"){	d3.selectAll(".fludeaths").attr("opacity",1);};
	if(newdist=="vote"){	d3.selectAll(".vote").attr("opacity",1);};
	if(newdist=="DIY"){	d3.selectAll(".pencil").attr("opacity",1);};
}

//Distribution of coffee drinking (per student per week)
function randomCoffee(){
	var runif = randomUniform(1,3191.559);
	var i = 0;
	//coffeeFrequencies give number of people out of 375 who had <index> cups of coffee per week
	var coffeeFrequencies = [92.42096,89.20307,85.98517,82.86493,80.20895,77.55297,74.89699,72.24101,69.58899,68.14631,66.70362,65.26094,63.81826,62.37557,60.93289,59.49021,58.04752,56.60484,55.16216,53.71947,52.27679,50.88167,49.64751,48.41335,47.17919,45.94503,44.71087,43.47671,42.24255,41.00839,39.77423,38.54007,37.30591,36.07175,34.83759,33.60343,32.36927,31.35762,30.71918,30.08073,29.44229,28.80385,28.16541,27.52696,26.88852,26.25008,25.61164,24.97319,24.33475,23.69631,23.05786,22.41942,21.78098,21.14254,20.50409,19.86565,19.22721,18.58877,17.95032,17.31188,16.67344,16.035,15.39655,14.75811,14.11967,13.48123,12.84278,12.20434,11.5659,10.92746,10.28901,9.931237,9.785942,9.640646,9.495351,9.350056,9.20476,9.059465,8.914169,8.768874,8.623579,8.478283,8.332988,8.187692,8.042397,7.897102,7.751806,7.606511,7.461215,7.31592,7.170624,7.025329,6.880034,6.734738,6.589443,6.444147,6.298852,6.153557,6.008261,5.862966,5.71767,5.572375,5.42708,5.281784,5.136489,4.991193,4.845898,4.700602,4.555307,4.410012,4.264716,4.119421,3.974125,3.82883,3.683535,3.538239,3.392944,3.247648,3.102353,2.957058,2.811762,2.666467,2.521171,2.375876,2.23058,2.085285,1.93999,1.794694,1.649399,1.504103,1.358808,1.213513,1.107245,1.085725,1.064206,1.042686,1.021167,0.999648,0.978128,0.956609,0.935089,0.91357,0.892051,0.870531,0.849012,0.827492,0.805973,0.784453,0.762934,0.741415,0.719895,0.698376,0.676856,0.655337,0.633817,0.612298,0.590779,0.569259,0.54774,0.52622,0.504701,0.483182,0.461662,0.440143,0.418623,0.397104,0.375584,0.354065,0.332546,0.311026,0.289507,0.267987,0.246468,0.224948,0.203429,0.18191,0.16039,0.138871,0.128822,0.122966,0.117111,0.111255,0.1054,0.099544,0.093689,0.087833,0.081978,0.076122,0.070267,0.064411,0.058555,0.0527,0.046844,0.040989,0.035133,0.029278,0.023422,0.017567,0.011711,0.005856,0];
	var sum = 92.42096;

	while(sum < runif) {
		i++;
		sum=sum+coffeeFrequencies[i];
	};
	return i;
}

//Coffee distribution for show distribution plot
function coffeeDist(length){
	var coffeeFrequencies = [92.42096,89.20307,85.98517,82.86493,80.20895,77.55297,74.89699,72.24101,69.58899,68.14631,66.70362,65.26094,63.81826,62.37557,60.93289,59.49021,58.04752,56.60484,55.16216,53.71947,52.27679,50.88167,49.64751,48.41335,47.17919,45.94503,44.71087,43.47671,42.24255,41.00839,39.77423,38.54007,37.30591,36.07175,34.83759,33.60343,32.36927,31.35762,30.71918,30.08073,29.44229,28.80385,28.16541,27.52696,26.88852,26.25008,25.61164,24.97319,24.33475,23.69631,23.05786,22.41942,21.78098,21.14254,20.50409,19.86565,19.22721,18.58877,17.95032,17.31188,16.67344,16.035,15.39655,14.75811,14.11967,13.48123,12.84278,12.20434,11.5659,10.92746,10.28901,9.931237,9.785942,9.640646,9.495351,9.350056,9.20476,9.059465,8.914169,8.768874,8.623579,8.478283,8.332988,8.187692,8.042397,7.897102,7.751806,7.606511,7.461215,7.31592,7.170624,7.025329,6.880034,6.734738,6.589443,6.444147,6.298852,6.153557,6.008261,5.862966,5.71767,5.572375,5.42708,5.281784,5.136489,4.991193,4.845898,4.700602,4.555307,4.410012,4.264716,4.119421,3.974125,3.82883,3.683535,3.538239,3.392944,3.247648,3.102353,2.957058,2.811762,2.666467,2.521171,2.375876,2.23058,2.085285,1.93999,1.794694,1.649399,1.504103,1.358808,1.213513,1.107245,1.085725,1.064206,1.042686,1.021167,0.999648,0.978128,0.956609,0.935089,0.91357,0.892051,0.870531,0.849012,0.827492,0.805973,0.784453,0.762934,0.741415,0.719895,0.698376,0.676856,0.655337,0.633817,0.612298,0.590779,0.569259,0.54774,0.52622,0.504701,0.483182,0.461662,0.440143,0.418623,0.397104,0.375584,0.354065,0.332546,0.311026,0.289507,0.267987,0.246468,0.224948,0.203429,0.18191,0.16039,0.138871,0.128822,0.122966,0.117111,0.111255,0.1054,0.099544,0.093689,0.087833,0.081978,0.076122,0.070267,0.064411,0.058555,0.0527,0.046844,0.040989,0.035133,0.029278,0.023422,0.017567,0.011711,0.005856,0];
	var sum = 92.42096;
	return coffeeFrequencies[length]/3191.559;
}

//New Normal Distribution
function randomNormal(){
	var runif = randomUniform(1,200);
	var i = 0;
	//coffeeFrequencies give number of people out of 375 who had <index> cups of coffee per week
	var normalFrequencies = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.3,0.3,1,1,3.3,3.3,2.7,2.7,4,4,4.3,4.3,5.6,5.6,2.7,2.7,4,4,2.2,2.2,2.6,2.6,2.6,2.6,1,1,1,1,3.2,3.2,3,3,5,5,7.7,7.7,9.1,9.1,7.7,7.7,9.5,9.5,6.7,6.7,3,3,3.4,3.4,2.8,2.8,1,1,0.3,0.3,0.3,0.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var sum = 0;

	while(sum < runif) {
		i++;
		sum=sum+normalFrequencies[i];
	};
	return i;
}

//New Normal Distribution
function normalDist(length){
	var normalFrequencies = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.3,0.3,1,1,3.3,3.3,2.7,2.7,4,4,4.3,4.3,5.6,5.6,2.7,2.7,4,4,2.2,2.2,2.6,2.6,2.6,2.6,1,1,1,1,3.2,3.2,3,3,5,5,7.7,7.7,9.1,9.1,7.7,7.7,9.5,9.5,6.7,6.7,3,3,3.4,3.4,2.8,2.8,1,1,0.3,0.3,0.3,0.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var sum = 0;
	//return normalFrequencies[length]/200;
	return normalFrequencies[length]/200;
}

//New Flu Distribution
function randomFlu(){
	var runif = randomUniform(1,100);
	var i = 0;
	//coffeeFrequencies give number of people out of 375 who had <index> cups of coffee per week
	var fluFrequencies = [10,3,2,2,2,4,3,7,12,11,44];
	var sum = 10;

	while(sum < runif) {
		i++;
		sum=sum+fluFrequencies[i];
	};
	return i;
}

//New Flu Distribution
function fluDist(length){
	var fluFrequencies = [10,3,2,2,2,4,3,7,12,11,44];
	var sum = 10;
	return fluFrequencies[length]/100;
}

//New Vote Distribution
function randomVote(){
	var runif = randomUniform(1,1019.7);
	var i = 0;
	//coffeeFrequencies give number of people out of 375 who had <index> cups of coffee per week
	var voteFrequencies = [5.88,0.4,0.25,0.2,0.15,0.13,0.13,0.12,0.11,0.1,0.09,0.1,0.12,0.17,0.24,0.31,0.39,0.47,0.56,0.64,0.73,0.82,0.89,0.94,0.96,0.98,1.01,1.04,1.07,1.11,1.16,1.2,1.25,1.29,1.33,1.38,1.44,1.5,1.57,1.64,1.73,1.84,1.96,2.11,2.28,2.46,2.67,2.91,3.2,3.52,3.86,4.23,4.6,4.98,5.38,5.79,6.23,6.68,7.12,7.57,8.06,8.59,9.13,9.66,10.21,10.82,11.52,12.3,13.16,14.1,15.18,16.35,17.54,18.73,19.96,21.33,22.85,24.4,25.96,27.55,29.23,30.94,32.52,33.87,35.01,35.95,36.64,37,36.94,36.36,35.18,33.38,30.98,28.08,24.79,21.2,17.54,14.04,10.88,8.16,5.99,4.29,2.99,2.03,1.33,0.84,0.52,0.3,0.17,0.09,0.04,0.02,0.01,0,0,0,0,0,0,0];
	var sum = 5.88;

	while(sum < runif) {
		i++;
		sum=sum+voteFrequencies[i];
	};
	return i;
}

//New Vote Distribution
function voteDist(length){
	var voteFrequencies = [5.88,0.4,0.25,0.2,0.15,0.13,0.13,0.12,0.11,0.1,0.09,0.1,0.12,0.17,0.24,0.31,0.39,0.47,0.56,0.64,0.73,0.82,0.89,0.94,0.96,0.98,1.01,1.04,1.07,1.11,1.16,1.2,1.25,1.29,1.33,1.38,1.44,1.5,1.57,1.64,1.73,1.84,1.96,2.11,2.28,2.46,2.67,2.91,3.2,3.52,3.86,4.23,4.6,4.98,5.38,5.79,6.23,6.68,7.12,7.57,8.06,8.59,9.13,9.66,10.21,10.82,11.52,12.3,13.16,14.1,15.18,16.35,17.54,18.73,19.96,21.33,22.85,24.4,25.96,27.55,29.23,30.94,32.52,33.87,35.01,35.95,36.64,37,36.94,36.36,35.18,33.38,30.98,28.08,24.79,21.2,17.54,14.04,10.88,8.16,5.99,4.29,2.99,2.03,1.33,0.84,0.52,0.3,0.17,0.09,0.04,0.02,0.01,0,0,0,0,0,0,0];
	var sum = 5.88;
	return voteFrequencies[length]/1019.7;
}

//DIY starting uniform distribution
function randomDIY(){

	var runif = randomUniform(0,1)*DIYdistsum;
	var i = 0;
	var sum = DIYf[1];
	while(sum < runif) {
		i++;
		sum=sum+DIYf[i];
	};
	return i;
};

function DIYdist(x,DIYdistsum){
	if(x<0) {return 0};
	if(x>100) {return 0};



	return DIYf[Math.floor(x)]/DIYdistsum;


}

function recalcDIYdist(){
	DIYdistsum=0;
	meansum=0
	xsqsum=0;

	for(i=0;i<100;i++){
		DIYdistsum = DIYdistsum+DIYf[i];
		meansum = meansum + i*DIYf[i];
		xsqsum = xsqsum +i*i*DIYf[i];
	}



	meanND = meansum / DIYdistsum;
	d3.select("#meanBoxValue").text(Math.round(10*meanND)/10);
	var meanSqX = xsqsum / DIYdistsum;
	stdDeviationND = Math.sqrt(meanSqX - meanND*meanND);
	//distMax = Math.max(...DIYf); //This code does not work in chrome
	distMax = Math.max.apply(Math, DIYf)/DIYdistsum*histogramIntervalWidth;  //This code works in chrome too //MIKE CHANGED 10/26 (there was a typo)

}

function buttonBackgroundDefault(){
	coffeeButton.attr("background-color",KForange);
	normalButton.attr("background-color",KForange);
	fluButton.attr("background-color",KForange);
	voteButton.attr("background-color",KForange);
	DIYButton.attr("background-color",KForange);
}

function getDIYdist(){
	//yScale_Individuals.invert(143.64)  will return the y value on the histogram scale when given the pxel y value of 143.64
}

// distributionChanger("coffee");

///////////////////////////////////////////////////////////////////////////////
//                              MAIN LAYOUT                                  //
///////////////////////////////////////////////////////////////////////////////

// The initialization function for this specific applet
function initApplet(){
	////////// Fish pool, buttons and sliders -- Top-left //////////

	var padding = 0.05;
    var leftColumnWidth = 0.5;

	// Top-left frame, (fish pool + buttons + sliders)
	framePool = new Frame({
		"background-color": KFlightblue,
		"top": 0,
		"left": 0.0,
		"width": leftColumnWidth,
		"height": 0.45,
		"border-color": KFlightblue
	});

	frameTutorial = new Frame({
		"top": 0.35,
		"left": 0.0,
		"width": leftColumnWidth,
		"height": 0.65,
		"border-color": KFlightblue,
		"background-color": KFlightblue//KForange//,
		//"background-opacity": 1.0,

	});

	middleFrame = new Widget(
	{
		"background-color": "white" ,
		"top": 0,
		"left": leftColumnWidth,
		"width": 1-leftColumnWidth,
		"height": 1
	});



	bigCup = new BigCup({
		"parent": framePool,
		"top": 0.15,
		"left": 0.55,
		"width": 1,
		"height": 0.8,

	});

	bigFish = new BigFish({
		"parent": framePool,
		"top": 0.18,
		"left": 0.55,
		"width": 1,
		"height": 0.16,

	});

	fluDeath = new FluDeath({
		"parent": framePool,
		"top": 0.15,
		"left": 0.54,
		"width": 0.4,
		"height": 0.4,
	});

	vote = new Vote({
		"parent": framePool,
		"top": 0.12,
		"left": 0.55,
		"width": 0.5,
		"height": 0.5,
	});

	pencil = new Pencil({
		"parent": framePool,
		"top": 0.12,
		"left": 0.58,
		"width": 0.5,
		"height": 0.2,
	});

	var choiceButtonHeight = 0.09;
	var choiceButtonSpacer = 0.04;

	coffeeButton = new Button({
		"text": "FACEBOOK",
		"parent": framePool,
		"top": 0.05,
		"left": .84,
		"width": .14,
		"height": choiceButtonHeight,
		"font-size":"1",
		"background-color":KForange,
		"onclick": function(){distributionChanger("coffee")},
	});

	normalButton = new Button({
		"text": "GEYSER",
		"parent": framePool,
		"top": 0.05 + (choiceButtonHeight + choiceButtonSpacer),
		"left": .84,
		"width": .14,
		"height": choiceButtonHeight,
		"font-size":"1",
		"background-color":KForange,
		"onclick": function(){distributionChanger("normal")},
	});

	fluButton = new Button({
		"text": "NPS",
		"parent": framePool,
		"top": 0.05 + 2*(choiceButtonHeight + choiceButtonSpacer),
		"left": .84,
		"width": .14,
		"height": choiceButtonHeight,
		"font-size":"1",
		"background-color":tutorialBoxColor,
		"onclick": function(){distributionChanger("spanishFlu")},
	});

	voteButton = new Button({
		"text": "DEATH",
		"parent": framePool,
		"top": 0.05 + 3*(choiceButtonHeight + choiceButtonSpacer),
		"left": .84,
		"width": .14,
		"height": choiceButtonHeight,
		"font-size":"1",
		"background-color":tutorialBoxColor,
		"onclick": function(){distributionChanger("vote")},
	});

	DIYButton = new Button({
		"text": "CUSTOM",
		"parent": framePool,
		"top": 0.05 + 4*(choiceButtonHeight + choiceButtonSpacer),
		"left": .84,
		"width": .14,
		"height": choiceButtonHeight,
		"font-size":"1",
		"background-color":tutorialBoxColor,
		"onclick": function(){distributionChanger("DIY")},
	});

	var buttonWidth = 0.47;
	var buttonHeight = 0.18;
	var sliderHeight = 0.2;
	var sliderWidth = 0.4;
	var buttonMargin = function (w,h) {return 0.05*h;};
	var sliderMargin = function (w,h) {return 0.03*h;};

	// "Sample 1 individual" button
	// buttonSampleOneIndividual = new Button({
	// 	"text": "SAMPLE 1 INDIVIDUAL",
	// 	"parent": framePool,
	// 	"top": buttonHeight*0,
	// 	"left": 0,
	// 	"width": buttonWidth,
	// 	"height": buttonHeight,
	// 	"margin-left": buttonMargin,
	// 	"margin-top": buttonMargin,
	// 	"onclick": sampleOneIndividual
	// });

	// "Complete sample" button
	buttonCompleteSample = new Button({
		"text": "SAMPLE " + "n = " + sampleSize + " INDIVIDUALS",
		"parent": framePool,
		"top": buttonHeight*1,
		"left": 0,
		"width": buttonWidth,
		"height": buttonHeight,
		"margin-left": buttonMargin,
		"margin-top": buttonMargin,
		"onclick": completeSample
	});

	// "Calculate mean" button
	buttonCalculateMean = new Button({
		"text": "CALCULATE SAMPLE MEAN",
		"parent": framePool,
		"top": buttonHeight*2,
		"left": 0,
		"width": buttonWidth,
		"height": buttonHeight,
		"margin-left": buttonMargin,
		"margin-top": buttonMargin,
		"onclick": calculateMean
	});

    // buttonCalculateMean.disable();

	// "Speed up" button
	buttonCalculateManyMeans = new Button({
		"text": "MEANS FOR MANY SAMPLES",
		"parent": framePool,
		"top": buttonHeight*3,
		"left": 0,
		"width": buttonWidth,
		"height": buttonHeight,
		"margin-left": buttonMargin,
		"margin-top": buttonMargin,
		"onclick": calculateNMean
	});

	// Frame delimiting the allowed area for fish
	frameFishPool = new Widget({
		"parent": framePool,
		"top": 0,
		"left": buttonWidth,
		"width": buttonWidth,
		"height": 4*buttonHeight
	});

	// Fill the pool with plenty of fish!
	createNRandomFish(numFishInPool);

	// Sliders

	var sliderMarginTopBottom = function (w,h) {return 2*sliderMargin(w,h);};

	sliderN = new Slider({
		"parent": framePool,
		"top": 0,
		"left": 0,
		"width": buttonWidth,
		"height": 1-4*sliderHeight,
		"margin-left": buttonMargin,
		"margin-top": sliderMarginTopBottom,
		"margin-bottom": sliderMarginTopBottom,
		"slider-caption-y": 0.7,
		"slider-caption": "n",
		"slider-min": 10,
		"slider-max": 100,
		"slider-value": sampleSize,
		"slider-onvaluechanged": function (v) {
									clearAllHistograms();
									sampleSize = v;
									buttonCompleteSample.attr("text","SAMPLE " + "n = " + sampleSize + " INDIVIDUALS");
									nd = d3.random.normal(meanND,stdDeviationND);
									histogramWidgetIndividuals.update();
									histogramWidgetMeans.update();
								 }
	});

	frameCurrentQuestion = new HtmlText({
		"parent": framePool,
		"top": 0.75,
		"left": 0.075,//buttonWidth + 0.03,
		"width": 0.85,
		"height": "auto",
		"background-color": "#f4f4f4",
		// "margin-bottom": 2*sliderMarginTopBottom,
		"text-color": KFblack,
		"font-size": 1.2,
		"border-width": 2,
		"border-color": "#f4f4f4"
	});


	/////////////// Measure fish and histograms -- Right column ///////////////

	var histogramFrameWidth = 1 - leftColumnWidth;
	var histogramHeight = 0.375;
	var measureHeight = 1.0 - 2.0*histogramHeight;
	var histogramMargin = function (w,h) {return 0.03*h;};

	// Measure fish widget (top-right)
	frameMeasureFish = new MeasureFishWidget({
		"top": 0,
		"left": leftColumnWidth,
		"width": histogramFrameWidth,
		"height": measureHeight,
		"margin-bottom": histogramMargin,
		"margin-left": histogramMargin,
		"margin-right": histogramMargin
	});

	// Length histogram widget (middle-right)
	histogramWidgetIndividuals = new HistogramWidget_Individuals({
		"top": measureHeight-0.10,
		"left": leftColumnWidth,
		"width": histogramFrameWidth,
		"height": histogramHeight,
		"margin-bottom": histogramMargin,
		"margin-left": histogramMargin,
		"margin-right": histogramMargin
	});

	indMeanText = new HtmlBox({
		"top": measureHeight-0.12,
		"left": 0.86,
		"width": histogramFrameWidth,
		"height": 0.05,
		"text":"True mean = <span id=\"meanBoxValue\"> XXX</span>",
	});


	// Means histogram widget (bottom-right)
	histogramWidgetMeans = new HistogramWidget_Means({
		"top": measureHeight+histogramHeight,
		"left": leftColumnWidth,
		"width": histogramFrameWidth,
		"height": histogramHeight,
		"margin-bottom": histogramMargin,
		"margin-left": histogramMargin,
		"margin-right": histogramMargin
	});

	createCurrentValueBar();

	if(demoOrTutorial=="tutorial"){
		returnToTutorialStart();
	}

	distributionChanger("coffee");

	makeEqFrame();
} // end intiApplet()

function clearAllHistograms()
{
    appletSvg.selectAll(".picked-fish").transition();
    appletSvg.selectAll(".picked-fish").remove();
	appletSvg.selectAll(".fish").transition(); //MIKE CHANGED OCT 28
	appletSvg.selectAll(".fish").remove(); //MIKE CHANGED OCT 28
	createNRandomFish(numFishInPool);//MIKE CHANGED OCT 28
	clearHistogramIndividuals();
	clearHistogramMeans();
    //buttonSampleOneIndividual.enable();
    buttonCompleteSample.enable();
    buttonCalculateMean.disable();
	hasCalculateMeanBeenPressed = false;
	coffeeButton.enable();
	normalButton.enable();
	voteButton.enable();
	fluButton.enable();
	DIYButton.enable();

}


///////////////////////////////////////////////////////////////////////////////
//                         TUTORIAL TOGGLES                                  //
///////////////////////////////////////////////////////////////////////////////

returnToTutorialStart = function(){
	distributionChanger("normal");
	sliderN.attr("slider-value", 40);
	// sampleSize = 40;
	// sliderN.setValue_(sampleSize);
	// sliderMu.setValue_(meanND);
	// sliderSigma.setValue_(stdDeviationND);
	onresize();
	clearAllHistograms();
	//buttonSampleOneIndividual.disable();
	buttonCompleteSample.disable();
	buttonCalculateManyMeans.disable();
	buttonCalculateMean.disable();
	// showHideButtonIndividuals.disable();
	showHideButtonMeans.disable();
	coffeeButton.disable();
	voteButton.disable();
	fluButton.disable();
	DIYButton.disable();

}

returnToDemoMode = function(){
	clearAllHistograms();
	//showHideButtonIndividuals.enable();  //MIKE CHANGE NOV 5 - delete
	showHideButtonMeans.enable();
	buttonCalculateManyMeans.enable(); //MIKE CHANGE NOV 5
	tutorialNextButton.attr("text","TUTORIAL");
	tutorial.enableNext;
	tutorial.init();
	tutorialNextButton.attr("border-color", "white");

}

///////////////////////////////////////////////////////////////////////////////
//                         ONRESIZE FUNCTION                                 //
///////////////////////////////////////////////////////////////////////////////

// When the window is resized, common.js automatically:
//   1. Resizes the SVG container
//   2. Computes the global position/size for all widgets,
//      which can be accessed with widget.geometry.x (resp. y, w, h)
//   3. Call widget.onresize() for all widgets
//   4. Call the onresize() function defined below
//
// Use this function to update position/size of elements which
// are not themselves widgets (e.g. fish, histogram boxes, etc.)
function onresizeApplet()
{
	// Update position/size of all fish in the pool
	d3.selectAll(".fish").each( function (d) {
		updateFish(d3.select(this));
	});

	// Update position/size of all boxes in the histogram of individuals
	d3.selectAll(".histogram-individuals-box").each( function (d) {
		updateHistogramIndividualsBox(d3.select(this));
	});


	// Update position/size of all boxes in the histogram of means
	d3.selectAll(".histogram-means-box").each( function (d) {
		updateHistogramMeansBox(d3.select(this));
	});

	updateHistogramMeansStableBoxes();
	updateHistogramIndividualsStableBoxes();

	updateAxisFontSize();
}

function updateAxisFontSize()
{
	d3.selectAll(".tick, .ruler-tick-text")
		.style("font-size",fontSize(tickFontSize));

	d3.selectAll(".label")
		.style("font-size",fontSize(1.3));
}

///////////////////////////////////////////////////////////////////////////////
//                             KINGFISHER                                    //
///////////////////////////////////////////////////////////////////////////////

function Kingfisher (geometry)
{
	Widget.call(this, geometry);

	// Create SVG element corresponding to widget
	this.kingfisher = this.g().append("use")
		.classed("kingfisher",true)
		.attr("xlink:href", "kingfisher.svg#kingfisher");

	// Set onresize function
	this.setOnresize(function (left, top, width, height) {
		var s = height / kingfisherSVGHeight;
		this.kingfisher.attr("transform", "translate(" + left + "," + top + ") scale(" + s + ")");
	});
}


///////////////////////////////////////////////////////////////////////////////
//                             BIG CUP                                    //
///////////////////////////////////////////////////////////////////////////////

function BigCup (geometry)
{
	Widget.call(this, geometry);

	// Create SVG element corresponding to widget
	this.bigcup = this.g().append("use")
		.classed("bigcup",true)
		.attr("xlink:href", "cup_no_steam.svg#fishSVG");

	// Set onresize function
	this.setOnresize(function (left, top, width, height) {
		var s = height / 400;
		this.bigcup.attr("transform", "translate(" + left + "," + top + ") scale(" + s + ")");
	});
}

function BigFish (geometry)
{
	Widget.call(this, geometry);

	// Create SVG element corresponding to widget
	this.bigfish = this.g().append("use")
		.classed("bigfish",true)
		.attr("xlink:href", "fish.svg#fishSVG");

	// Set onresize function
	this.setOnresize(function (left, top, width, height) {
		var s = height / 80;
		this.bigfish.attr("transform", "translate(" + left + "," + top + ") scale(" + s + ")");
	});
}

function FluDeath (geometry)
{
	Widget.call(this, geometry);

	// Create SVG element corresponding to widget
	this.fludeaths = this.g().append("use")
		.classed("fludeaths",true)
		.attr("xlink:href", "blackbox.svg#fishSVG");

	// Set onresize function
	this.setOnresize(function (left, top, width, height) {
		var s = height / 220;
		this.fludeaths.attr("transform", "translate(" + left + "," + top + ") scale(" + s + ")");
	});
}

function Vote (geometry)
{
	Widget.call(this, geometry);

	// Create SVG element corresponding to widget
	this.vote = this.g().append("use")
		.classed("vote",true)
		.attr("xlink:href", "skull.svg#skull");

	// Set onresize function
	this.setOnresize(function (left, top, width, height) {
		var s = height / 230;
		this.vote.attr("transform", "translate(" + left + "," + top + ") scale(" + s + ")");
	});
}
function Pencil (geometry)
{
	Widget.call(this, geometry);

	// Create SVG element corresponding to widget
	this.pencil = this.g().append("use")
		.classed("pencil",true)
		.attr("xlink:href", "pencil.svg#pencil");

	// Set onresize function
	this.setOnresize(function (left, top, width, height) {
		var s = height / 100;
		this.pencil.attr("transform", "translate(" + left + "," + top + ") scale(" + s + ")");
	});
}


///////////////////////////////////////////////////////////////////////////////
//                           HISTOGRAM AXES                                  //
///////////////////////////////////////////////////////////////////////////////

// Axis to measure the fish length (top-right).

var rulerLeft = 0.1;
var rulerRight = 1.0;
var rulerWidth = rulerRight - rulerLeft;

var rulerTop = 0.79;
var rulerBottom = 1.0;
var rulerHeight = rulerBottom - rulerTop;

var xScaleLeft = rulerLeft + 0.025;
var xScaleRight = rulerRight - 0.025;
var xScaleWidth = xScaleRight - xScaleLeft;

var tickHeight = 0.04;
var tickHeightLong = 0.08;
var tickTextY = 0.935;

var numMeans = 0;
var numMeansStable = 0;

// Note: xScale is used throughout the JS file to convert from fish length to window x coordinate
var xScale; // D3 linear scale. Call xScale(fishLength) to get the corresponding window x coordinate
var xAxis;  // D3 horizontal axis, with styling and tick properties.
function MeasureFishWidget (geometry)
{
	Widget.call(this, geometry);


	// Create SVG element corresponding to widget
	this.svg = appletSvg.append("g").classed("measure-fish-widget",true);

	// // Add ruler yellow round rect
	// var yellow = "#FFE0B2";//#ffd333";//mike change
	// var rulerRoundRectSize = 4;
	// this.svg.append("rect")
 //    	.attr("class", "ruler-rect ")
	// 	.attr("rx", rulerRoundRectSize)
	// 	.attr("ry", rulerRoundRectSize)
	// 	.style("stroke", "black")
	// 	.style("stroke-width", "1px")
	// 	.style("fill", yellow);

	// // Add ruler ticks
	// for(var l=0; l<=maxLength; l+=histogramIntervalWidth)
	// {
	// 	this.svg.append("line")
 //    		.attr("class", "ruler-tick crisp")
	// 		.style("stroke", "black")
	// 		.style("stroke-width", "1px");
	// }

	// // Add ruler ticks' text
	// for(var l=0; l<=maxLength; l+=histogramIntervalWidth*5)
	// {
	// 	this.svg.append("text")
 //    		.attr("class", "ruler-tick-text")
	// 		.attr("text-anchor", "middle")
	// 		.text(l);
	// }

	// Inherits Widget, and define the onresize function
	this.setOnresize(function (x,y,w,h) {

		// Update D3 scale
		xScale = d3.scale.linear()
			.domain([minLength, maxLength])
			.range([x+xScaleLeft*w,x+xScaleRight*w]);

		// Update D3 axis
		xAxis = d3.svg.axis()
			.scale(xScale)
			.ticks(10)
			.tickSize(6);

		// Update ruler yellow round rect
		this.svg.selectAll(".ruler-rect")
			.attr("x",Math.floor(x+rulerLeft*w)+0.5)
			.attr("y",Math.floor(y+rulerTop*h)+0.5)
			.attr("width",Math.floor(rulerWidth*w))
			.attr("height",Math.floor(rulerHeight*h));

		// Update ruler yellow round rect
		var y1 = y+rulerTop*h;
		var y2short = y1 + tickHeight*h;
		var y2long = y1 + tickHeightLong*h;
		this.svg.selectAll(".ruler-tick")
			.attr("x1", function(d,i) { return xScale(i*histogramIntervalWidth); })
			.attr("x2", function(d,i) { return xScale(i*histogramIntervalWidth); })
			.attr("y1", y1)
			.attr("y2", function(d,i) { return (i%5) ? y2short : y2long; });

		// Update ruler tick text
		var yTickText = y + tickTextY*h;
		this.svg.selectAll(".ruler-tick-text")
			.attr("x", function(d,i) { return xScale(i*histogramIntervalWidth*5); })
			.attr("y", yTickText);
	});
}


// Axes for the "individuals" histogram
var yScale_Individuals; // Note: no need for xScale_Individuals, use shared xScale instead
var yAxis_Individuals;  // Note: no need for xAxis_Individuals, use shared xAxis instead
function HistogramWidget_Individuals (geometry)
{
	Widget.call(this, geometry);

	// Create SVG element corresponding to widget
	this.svg = appletSvg.append("g").classed("length-histogram-widget",true);

	// Add SVG horizontal axis
	this.svg.append("g")
    	.attr("class", "x axis");

	// Add SVG vertical axis
	this.svg.append("g")
    	.attr("class", "y axis");

    // Add SVG horizontal axis label
	this.svg.append("text")
    	.attr("class", "y label")
    	.attr("text-anchor", "middle")
    	.text("Frequency");

    // add invisible rectangle under graphing space to use to capture mouseovers for drawing dists
    this.svg.append("rect")
    	.attr("class", "drawingArea")
    	.attr("fill","transparent")
    	.attr("stroke","transparent");

	this.svg.append("text")
    	.attr("class", "drawingAlert");

    // Add SVG vertical axis label
	this.svg.append("text")
    	.attr("class", "ind x label")
    	.attr("id","IndAxisLabel")
    	.attr("text-anchor", "middle")
    	.text("Number of friends (x100)");

	// Add graph
	graphdistributionIndividuals = this.svg.append("path")
                        .classed("graphdistribution",true)
                        .attr("stroke", "#182c48") // dark blue
                        .attr("stroke-width", 3)
                        .attr("fill", "none");

	// Inherits Widget, and define the onresize function
	this.setOnresize(function (x,y,w,h) {

		// Compute yMin and yMax
		var yMin = y+0.05*h;
		var yMax = y+0.8*h;



		// Update D3 scale
		yMaxDomain = yMaxDomainInds();
		yScale_Individuals = d3.scale.linear()
			.domain([0, yMaxDomain])
			.range([yMax,yMin]);

		// Update D3 axis
		yAxis_Individuals = d3.svg.axis()
			.orient("left")
			.scale(yScale_Individuals)
			.ticks(0)
			.tickSize(6)
			.tickFormat("")
			.outerTickSize(0);

		// Update SVG horizontal axis
		this.svg.selectAll(".x.axis")
     		.attr("transform", "translate(0," + yMax + ")")
      		.call(xAxis);

		// Update SVG vertical axis
		this.svg.selectAll(".y.axis")
     		.attr("transform", "translate(" + xScale(0) + ",0)")
      		.call(yAxis_Individuals);

    	updateAxisFontSize();


		// Update SVG horizontal axis label
		this.svg.selectAll(".x.label")
     		.attr("transform", "translate(" + xScale(0.5*maxLength) + "," + (yMax+0.14*h+10) + ")");

		// Update SVG vertical axis label
		this.svg.selectAll(".y.label")
     		.attr("transform", "translate(" + (xScale(0)-0.07*w) + "," + yScale_Individuals(0.5*yMaxDomain) + ") rotate(-90) ");

		//trying to add mouseover function
     	//this.svg.on("mouseover",function(){distributionChanger("vote")});

		// // Update SVG horizontal axis label
		// this.svg.selectAll(".x.label")
  //    		.attr("transform", "translate(" + xScale(0.5*maxLength) + "," + (yMax+0.2*h) + ")");

		// // Update SVG vertical axis label
		// this.svg.selectAll(".y.label")
  //    		.attr("transform", "translate(" + (xScale(0)-0.1*w) + "," + yScale_Individuals(0.5*yMaxDomain) + ") rotate(-90) ");

     	// Update graph




		var lineData = [];
		var lineDataTr = [];


		var n = numberIncrementsForDistLine;
		var length;
		for(var i=0; i<=n; ++i)
		{
			length = minLength + i*(maxLength-minLength)/n;
			var ydTr;
			var xd = xScale(length);
			var yd = yScale_Individuals(histogramIntervalWidth/histogramIntervalWidth*100*distributionDrawer(length));

			//For mosemove drawing phase
			if(((DIYMouse === "mousedown")|| (DIYMouse === "mouseup")) && (whichDist==="DIY")){
				//Y for drawing phase
				yd = yScale_Individuals(myDistributionDrawer(length, 1));
				//Y for re-scaled graph while drawing
				ydTr = yScale_Individuals(histogramIntervalWidth*sampleSize*distributionDrawer(length));
				//ydTr = yd;

			}


	//		if(whichDist=="vote") {yd = yScale_Individuals(sampleSize*distributionDrawer(length));};



			lineData.push({x:xd,y:yd});


			if(DIYMouse === "resting"){
				lineDataTr.push({x:xd,y:yd});
			}
			if(((DIYMouse === "mousedown") || (DIYMouse === "mouseup")) && (whichDist==="DIY")){
				lineDataTr.push({x:xd,y:ydTr});

			}



		}


		var lineFunction = d3.svg.line()
							 .x(function(d) { return d.x; })
							 .y(function(d) { return d.y; })
							 .interpolate("linear");



		var path = this.svg.selectAll(".graphdistribution")
							.attr("d", lineFunction(lineData));


		//Transition between drawing and re-scaling phases
        if((DIYMouse === "mouseup") && (whichDist==="DIY")){

				this.svg.selectAll(".graphdistribution")
				.attr("d", lineFunction(lineData))
				.transition()
				  .duration(500)
				  .ease("linear")
				  .attr("d", lineFunction(lineDataTr));
		}



		var drawingAlert = this.svg.selectAll(".drawingAlert");//Zahraa CHANGED 10/29

    		drawingAlert.attr("x", xScale(0))//Zahraa CHANGED 10/29 increase the drawingArea size so we can draw at zero easily
			.attr("y", yScale_Individuals(yMaxDomain)-10); //Zahraa CHANGED 10/29


		this.svg.selectAll(".drawingArea")
    		.attr("x", xScale(0)-10)//Zahraa CHANGED 10/28 increase the drawingArea size so we can draw at zero easily
			.attr("y", yScale_Individuals(yMaxDomain)-10) //Zahraa CHANGED 10/28
			.attr("width", xScale(maxLength)-xScale(0)+20)//Zahraa CHANGED 10/28
			.attr("height", yScale_Individuals(0)-yScale_Individuals(yMaxDomain)+30)//Zahraa CHANGED 10/28
			.on("mousedown",reDrawing);


	});



	// Create a child widget with the button to show/hide the actual distribution
	// showHideButtonIndividuals = new Button({
	// 	"text": "HIDE POPULATION",
	// 	"parent": this,
	// 	"type": "proportional",
	// 	"top": 0.05,
	// 	"left": 0.6,
	// 	"width": 0.4-0.025,
	// 	"height": 0.15,
	// 	"onclick":  function () {
	// 					var currentWidth = graphdistributionIndividuals.attr("stroke-width");
	// 					var newWidth;
	// 					if (currentWidth == 0) {
	// 						showHideButtonIndividuals.attr("text","HIDE POPULATION");
	// 						graphdistributionIndividuals.attr("stroke-width",3);
	// 					}
	// 					else {
	// 						showHideButtonIndividuals.attr("text","SHOW POPULATION");
	// 						graphdistributionIndividuals.attr("stroke-width",0);
	// 					}
	// 			    }
	// });



}

function yMaxDomainInds()
{
	return Math.max(3,100*distMax);
}

function yMaxDomainMeans()
{
	// return Math.max(10, 0.45*nuMeans);
	return Math.max(50,meanHistogramIntervalWidth*numMeans*bell(meanND,meanND,stdDeviationND/(Math.sqrt(sampleSize))));
}

// Axes for the "sample means" histogram
var yScale_Means; // Note: no need for xScale_Means, use shared xScale instead
var yAxis_Means;  // Note: no need for xAxis_Means, use shared xAxis instead
function HistogramWidget_Means (geometry)
{
	Widget.call(this, geometry);

    // Create SVG element corresponding to widget
    this.svg = appletSvg.append("g").classed("means-histogram-widget",true);

    // Add SVG horizontal axis
    this.svg.append("g")
    	.attr("class", "x axis");

    // Add SVG vertical axis
    this.yAxis = this.svg.append("g")
    	.attr("class", "y axis");

    // Add SVG horizontal axis label
    this.svg.append("text")
    	.attr("class", "y label")
    	.attr("text-anchor", "middle")
    	.text("Frequency");

    // Add SVG vertical axis label
		this.svg.append("text")
		.attr("class", "x label")
		.attr("text-anchor", "middle")
    .text("Sample Means");



	// Add graph
	graphDistributionMeans = this.svg.append("path")
                        .classed("graphdistribution",true)
                        .attr("stroke", "#501d00")
                        .attr("stroke-width", 0)
                        .attr("fill", "none");

	// Inherits Widget, and define the onresize function
	this.setOnresize(function (x,y,w,h) {

		// Compute yMin and yMax
		var yMin = y+0.05*h;
		var yMax = y+0.8*h;

		// Update D3 scale
		var yMaxDomain = yMaxDomainMeans();
		yScale_Means = d3.scale.linear()
			.domain([0, yMaxDomain])
			.range([yMax,yMin]);

		// Update D3 axis
		yAxis_Means = d3.svg.axis()
			.orient("left")
			.scale(yScale_Means)
			.ticks(5)
			.tickSize(6)
			.outerTickSize(0);
		// Update SVG horizontal axis
		this.svg.selectAll(".x.axis")
     		.attr("transform", "translate(0," + yMax + ")")
      		.call(xAxis);

		// Update SVG vertical axis
		this.svg.selectAll(".y.axis")
     		.attr("transform", "translate(" + xScale(0) + ",0)")
      		.call(yAxis_Means);

		// Update SVG horizontal axis label
		this.svg.selectAll(".x.label")
     		.attr("transform", "translate(" + xScale(0.5*maxLength) + "," + (yMax+0.2*h) + ")");

		// Update SVG vertical axis label
		this.svg.selectAll(".y.label")
     		.attr("transform", "translate(" + (xScale(0)-0.07*w) + "," + yScale_Means(0.5*yMaxDomain) + ") rotate(-90) ");

     	// Update graph
		var lineData = [];
		var n = 500;
		var heightAtMean = yMaxDomain/bell(meanND,meanND,stdDeviationND/(Math.sqrt(sampleSize)));
		for(var i=-50; i<=n; ++i)
		{
			var length = minLength + i*(maxLength-minLength)/n;
			var xd = xScale(length);
			//var yd = yScale_Means(meanHistogramIntervalWidth*yMaxDomain *bell(length,meanND,stdDeviationND/(Math.sqrt(sampleSize))));
			var yd = yScale_Means(heightAtMean * bell(length,meanND,stdDeviationND/(Math.sqrt(sampleSize))));

			lineData.push({x:xd,y:yd});
		}

		var lineFunction = d3.svg.line()
	    	                     .x(function(d) { return d.x; })
	    	                     .y(function(d) { return d.y; })
	    	                     .interpolate("linear");

				this.svg.selectAll(".graphdistribution")
    	                    .attr("d", lineFunction(lineData));
	});

}


///////////////////////////////////////////////////////////////////////////////
//                     FILLING THE POOL WITH FISH                            //
///////////////////////////////////////////////////////////////////////////////

// Add n random fish to the pool
function createNRandomFish(n)
{
	for(var i=0; i<n; ++i)
		createRandomFish();
}

// Add one random fish to the pool
function createRandomFish()
{
	createRandomFishDelayed(0);
}

// Add one random fish to the pool
function createRandomFishDelayed(delay)
{
	// Get random length using normal distribution. Negative lengths are clamped to zero.
	var length = randomIndividual();
	if(length<0)
		length = 0;

	// Get x and y values in [0,1] where to place the fish in the pool.
	var x = randomUniform(0,1);
	var y = randomUniform(0,1);

	// Create fish using the computed values
	createFishDelayed(x,y,length, delay);
}

// Add one fish to the the pool, with the given length and (x,y) position
var bottomFish = null;     // Track the bottom fish (wrt drawing order). New fish is added just below.
function createFishDelayed(x,y,length, delay)
{
	// Insert the fish as a SVG element at an appropriate position in the DOM
	var newFish;
	if(bottomFish) // If there is already one fish in the pool
	{
		newFish = appletSvg.insert("use",".first.fish") // Create the new fish, just below the bottom fish
		bottomFish.classed("first",false);        // Remove the class "first" of the previous bottom fish
	}
	else // If it is the first fish created
	{
		newFish = appletSvg.append("use"); // Create new fish, at the top of the SVG container
	}
	bottomFish = newFish; // Set new fish as bottom fish

    // Set classes and drawing attributes of the fish
	newFish
		.classed("first",true)
		.classed("fish",true)
		.attr("opacity", 0)
		.attr("xlink:href", fishImageRef)
		.datum({"x": x, "y": y, "length": length })
		.transition()
			.delay(delay)
			.attr("opacity", 0);

	// Compute position and size w.r.t window size
	updateFish(newFish);
}

// Compute position and size of a fish w.r.t window size
function updateFish(fish)
{
	// Get fish data
	var d = fish.datum();

	// Compute position of fish in pixel coordinates
	// var s = fishPoolRatio * (frameFishPool.width()) * d.length / (150*fishSVGWidth);
	var s;
	s = 0.001 * frameFishPool.width()
	var x = frameFishPool.left() + d.x * (frameFishPool.width() - s*fishSVGWidth);
	var y = frameFishPool.top() + d.y * (frameFishPool.height() - s*fishSVGHeight);

	// Set transform attribute
	fish.attr("transform", "translate(" + x + "," + y + ") scale(" + s + ")");
}



///////////////////////////////////////////////////////////////////////////////
//          SAMPLE INDIVIDUALS --> MEASURE --> ADD TO HISTOGRAM              //
///////////////////////////////////////////////////////////////////////////////

// Current histogram values.
// Usage: histogramIndividualsValues[i] gives the number of fish in the i-th interval
var numIndividuals = 0;
var numIndividualsStable = 0;
var histogramIndividualsValues = [];
var histogramIndividualsValuesStable = [];
var histogramIndividualsStableBox = [];

// Clear histogram individuals
function clearHistogramIndividuals(length)
{
	currentMean = 0;
	numIndividuals = 0;
	numIndividualsStable = 0;
	numSampledFish = 0;
	histogramIndividualsValues = [];
 	histogramIndividualsValuesStable = [];
 	histogramIndividualsStableBox = [];
	appletSvg.selectAll(".histogram-individuals-stable-box").transition();
	appletSvg.selectAll(".histogram-individuals-stable-box").remove();
	appletSvg.selectAll(".histogram-individuals-box").transition();
	appletSvg.selectAll(".histogram-individuals-box").remove();
}

// Helper method. Convert from fish length to histogram interval index
function getHistogramIntervalIndex(length)
{
	return  Math.floor(length/histogramIntervalWidth);
}

// Helper method. Get how many fish are currently in the i-th interval (counting those still "falling" into the histogram)
function getHistogramIndividualsValue(index)
{
	if(index in histogramIndividualsValues)
	{
		return histogramIndividualsValues[index];
	}
	else
	{
		return 0;
	}
}

// Helper method. Add one fish to the count of the i-th interval
function incrementHistogramIndividuals(index)
{
	numIndividuals++;
	if(index in histogramIndividualsValues)
	{
		histogramIndividualsValues[index]++;
	}
	else
	{
		histogramIndividualsValues[index] = 1;
	}
}

function updateHistogramIndividualsStableBoxes()
{
	// Select stable boxes
	var selection = appletSvg.selectAll(".histogram-individuals-stable-box");

	// Compute new size and position
	var w = [];
	var h = [];
	var x = [];
	var y = [];
	selection.each( function (d) {
		var i = d.i;
		var l = i*histogramIntervalWidth;
		var n = histogramIndividualsValuesStable[i];
		w[i] = xScale(l+histogramIntervalWidth) - xScale(l) - 1;
		h[i] = yScale_Individuals(0) - yScale_Individuals(n);
		x[i] = xScale(l);
		y[i] = yScale_Individuals(n);
	});

	// Apply size and position
	selection
		.attr("x", function (d) { return x[d.i]; })
		.attr("y", function (d) { return y[d.i]; })
		.attr("width", function (d) { return w[d.i]; })
		.attr("height", function (d) { return h[d.i]; });
}


// Helper method. Add one fish to the count of the i-th interval
function incrementHistogramIndividualsStable(index)
{
	numIndividualsStable++;
	if(index in histogramIndividualsValuesStable)
	{
		histogramIndividualsValuesStable[index] += 1;
	}
	else
	{
		histogramIndividualsValuesStable[index] = 1;
		histogramIndividualsStableBox[index] = appletSvg.insert("rect",".length-histogram-widget")
			.classed("histogram-individuals-stable-box",true)
			.datum({ "i":index } )
			.style("fill", "#396aaf") // blue
			.style("stroke", "#182c48"); // dark blue
	}

	updateHistogramIndividualsStableBoxes();
}


// Complete a sample
function completeSample()
{
	var delayBetweenIndividuals = 500 / sampleSize; // i.e. completing a sample always takes 500ms, regardless of sampleSize
	var nFishToSample = sampleSize-numSampledFish;
	for(var i=0; i<nFishToSample; ++i)
		sampleIndividualDelayed(delayBetweenIndividuals*i);
}

// Sample one individual
function sampleOneIndividual()
{
	sampleIndividualDelayed(0);
	showCurrentValueBar(lastSampledFishLength);
}

// Sample one individual after waiting 'delay' milliseconds.
var numSampledFish = 0;
var currentMean = 0;
function sampleIndividualDelayed(delay)
{
	numSampledFish++;
	if(numSampledFish >= sampleSize)
	{
		//buttonSampleOneIndividual.disable();
		buttonCompleteSample.disable();
		buttonCalculateMean.enable();
	}

	// Get top fish and its length
	var fish = d3.selectAll(".fish").last();
	var length = fish.datum().length;
	lastSampledFishLength = length;

	// Update current mean
	currentMean = ((numSampledFish-1)*currentMean + length)/numSampledFish;

	// Compute its new position and size (so that it's inside the "measure fish" widget)
	var x = xScale(0);
	var w = 0.35* (xScale(length) - x);
	x = x + 2.5*w;
	if(length==0) {
		w = 0.5* (xScale(3) - x);
		x = xScale(0);
		};
	var s = w / fishSVGWidth;
	var h = s * fishSVGHeight;
	var midY = frameMeasureFish.top() + 0.5 * frameMeasureFish.height();
	var y = midY - 0.5 * h;




	// Compute new position and size after shrinking to box
	var midYBox = frameMeasureFish.top() + 0.53 * frameMeasureFish.height();
	var i = getHistogramIntervalIndex(length);
	var l = i*histogramIntervalWidth; // e.g., if length=123mm, then l = 120mm
	var wbox = xScale(histogramIntervalWidth) - xScale(0) - 1;
	var hbox = yScale_Individuals(0) - yScale_Individuals(1);
	var xbox = xScale(l);
	var trick = 1;
	var yBox = midYBox - 0.55*(hbox*trick); // The "*trick" is an empirical value to compensate
	                                // for the fact that we want the dark blue body --not the full fish BBox-- to morph to
	                                // the histogram box position and size.
	var sx = wbox / fishSVGWidth*trick*0.8; // scale ratio, so that fishSVGWidth * sx = wbox
	var sy = hbox / fishSVGHeight * trick; // scale ratio, so that fishSVGHeight * sy = hbox

	// Remove the class "fish", so that it's not considered anymore for picking,
	// and its position is not moved back to the pool when window is resized
	fish.classed("fish", false).classed("picked-fish",true);

	// Define animation
	fish.transition() // Move fish from pool to measure fish widget
			.duration(500)
			.delay(delay)
			.ease("cubic-out")
			.attr("opacity", 1)
			.attr("transform", "translate(" + x + "," + y + ") scale(" + s + ")")
		.transition() // Wait one second to let the student read the fish length
			.duration(1000)
		.transition() // Shrink fish to histogram box size and position
			.duration(500)
			.ease("quad-in")
			.attr("transform", "translate(" + (xbox) + "," + yBox + ") scale(" + sx + "," + sy + ")")
			.attr("r",0)
			.each("end", function () {  createHistogramIndividualsBox(length, midYBox); }) // Create histogram box and start animation of box
		//.transition()
		//	.delay(5000)
		.remove(); // Delete fish

	// create random fish
	createRandomFishDelayed(delay);
}

function createHistogramIndividualsBox(length, midY)
{
	// Get index and interval information
	var i = getHistogramIntervalIndex(length);
	var l = i*histogramIntervalWidth; // e.g., if length=123mm, then l = 120mm

	// Increment value in histogram
	incrementHistogramIndividuals(i);
	var n = getHistogramIndividualsValue(i);

	// Get start size and position
	var w = xScale(l+histogramIntervalWidth) - xScale(l) - 1;
	var h = yScale_Individuals(0) - yScale_Individuals(1);
	var x = xScale(l);
	var yStart = midY - 0.5*h;

	// Get end size and position
	var yEnd = yScale_Individuals(n);

	// Create SVG rectangle
	var rect = appletSvg.insert("rect",".length-histogram-widget")
		.classed("histogram-individuals-box",true)
		.datum({ "length":length, "i":i, "n":n } )
		.style("fill", "#396aaf") // blue
		.style("stroke", "#182c48"); // dark blue


	// Move to start position
	rect
		.attr("x", x)
		.attr("y", yStart)
		.attr("width", w)
		.attr("height", h);

	// Transition to end position
	rect
		.transition()
			.delay(500)
			.duration(1000)
			.ease("bounce")
			.attr("y",yEnd)
			.each("end", function (d) {
				incrementHistogramIndividualsStable(d.i);
				if(hasCalculateMeanBeenPressed && numIndividualsStable == sampleSize)
					doCalculateMean();})
		.remove();

		/*
		// add mouseover interaction
		.on("mouseover",showCurrentValueBar)
		.on("mouseout",hideCurrentValueBar)*/
}

function updateHistogramIndividualsBox(rect)
{
	// Get index and interval information
	var i = rect.datum().i;
	var l = i*histogramIntervalWidth;
	var n = rect.datum().n;

	// Get size and position
	var w = xScale(l+histogramIntervalWidth) - xScale(l) - 1;
	var h = yScale_Individuals(0) - yScale_Individuals(1);
	var x = xScale(l);
	var y = yScale_Individuals(n);

	// Update size and position
	rect
		.attr("x", x)
		.attr("y", y)
		.attr("width", w)
		.attr("height", h);
}



///////////////////////////////////////////////////////////////////////////////
//   CALCULATE MEAN --> MERGE INDIVIDUALS --> ADD TO HISTOGRAM OF MEANS      //
///////////////////////////////////////////////////////////////////////////////


// Current histogram values.
// Usage: histogramIndividualsValues[i] gives the number of fish in the i-th interval
var histogramMeansValues = [];
var histogramMeansValuesStable = [];
var histogramMeansStableBox = [];

// Helper method. Convert from fish length to histogram interval index
function getHistogramMeansIndex(length) // Note: this function is identical to getHistogramIndividualsIndex(length)
                                        //       but it might change, if we decide that intervals are different for
                                        //       individuals than for means
{
	return  Math.floor(1.000001*length/meanHistogramIntervalWidth);
}

// Clear histogram means
function clearHistogramMeans(length)
{
 	numMeans = 0;
 	numMeansStable = 0;
	histogramMeansValues = [];
 	histogramMeansValuesStable = [];
 	histogramMeansStableBox = [];
	appletSvg.selectAll(".histogram-means-stable-box").transition();
	appletSvg.selectAll(".histogram-means-stable-box").remove();
	appletSvg.selectAll(".histogram-means-box").transition();
	appletSvg.selectAll(".histogram-means-box").remove();
}

// Helper method. Get how many fish are currently in the i-th interval (counting those still "falling" into the histogram)
function getHistogramMeansValue(index)
{
	if(index in histogramMeansValues)
	{
		return histogramMeansValues[index];
	}
	else
	{
		return 0;
	}
}

// Helper method. Add one fish to the count of the i-th interval
function incrementHistogramMeans(index, k)
{
	k = k || 1; // set default value to 1 if not provided

	if(index in histogramMeansValues)
	{
		histogramMeansValues[index] += k;
	}
	else
	{
		histogramMeansValues[index] = k;
	}
}


function updateHistogramMeansStableBoxes()
{
	// Select stable boxes
	var selection = appletSvg.selectAll(".histogram-means-stable-box");

	// Compute new size and position
	var w = [];
	var h = [];
	var x = [];
	var y = [];
	selection.each( function (d) {
		var i = d.i;
		var l = (i)*meanHistogramIntervalWidth;
		var n = histogramMeansValuesStable[i];
		w[i] = xScale(l+meanHistogramIntervalWidth) - xScale(l) - 1;
		h[i] = yScale_Means(0) - yScale_Means(n);
		x[i] = xScale(l);
		y[i] = yScale_Means(n);
	});

	// Apply size and position
	selection
		.attr("x", function (d) { return x[d.i]; })
		.attr("y", function (d) { return y[d.i]; })
		.attr("width", function (d) { return w[d.i]; })
		.attr("height", function (d) { return h[d.i]; });
}


// Helper method. Add one fish to the count of the i-th interval
function incrementHistogramMeansStable(index, k)
{
	k = k || 1; // set default value to 1 if not provided

	if(index in histogramMeansValuesStable)
	{
		histogramMeansValuesStable[index] += k;
	}
	else
	{
		histogramMeansValuesStable[index] = k;
		histogramMeansStableBox[index] = appletSvg.insert("rect",".means-histogram-widget")
			.classed("histogram-means-stable-box",true)
			.datum({ "i":index } )
			.style("fill", "#d0570a") // orange
			.style("stroke", "#501d00"); // dark orange
	}

	updateHistogramMeansStableBoxes();
}


// Calculate mean, merge individual boxes, and insert mean in histogram
var hasCalculateMeanBeenPressed = false;
function calculateMean()
{
	hasCalculateMeanBeenPressed = true;
	buttonCalculateMean.disable();
	if(hasCalculateMeanBeenPressed && numIndividualsStable == sampleSize)
		doCalculateMean();
}

// Calculate mean, merge individual boxes, and insert mean in histogram
function doCalculateMean()
{
	updateYScaleMeansAfterAddingNMean(1);
	calculateMeanDelayed(0);
}

// Sample one individual after waiting 'delay' milliseconds.
function calculateMeanDelayed(delay)
{
	numSampledFish = 0;
	//buttonSampleOneIndividual.enable();
	buttonCompleteSample.enable();
	buttonCalculateMean.disable();
	hasCalculateMeanBeenPressed = false;

	// Select all histogram individuals boxes
	//var individualsBoxes = d3.selectAll(".histogram-individuals-box");
	var individualsBoxes = d3.selectAll(".histogram-individuals-stable-box");

	// Compute mean
	var maxN = 5; // highest histogram bar
	/*
	var numIndividuals = 0;
	var sumIndividuals = 0;
	var maxN = 0; // highest histogram bar
	individualsBoxes.each(function (d) {
		numIndividuals++;
		sumIndividuals += d.length;
		maxN = Math.max(maxN, d.n);
	} );
	var mean = sumIndividuals / numIndividuals; // Note: numIndividuals should be equal to sampleSize
*/
	var mean = currentMean; // Note: numIndividuals should be equal to sampleSize

	// Compute start position and size of mean box
	var i = getHistogramMeansIndex(mean);
	var m = i*meanHistogramIntervalWidth; // e.g., if length=123mm, then l = 120mm
	var w = xScale(meanHistogramIntervalWidth) - xScale(0) - 1;
	var h =  Math.max(yScale_Means(0) - yScale_Means(1), 2);
	var x = xScale(m);
	var y = yScale_Individuals(0.7 * maxN);

	// Remove class "histogram-individuals-box" for all boxes
	individualsBoxes.classed("histogram-individuals-stable-box", false);

	// Define animation
	individualsBoxes.transition() // Move individual box to mean box start position
			.duration(500)
			.delay(delay)
			.ease("cubic-out")
			.attr("x", x)
			.attr("y", y)
			.attr("width", w)
			.attr("height", h)
			.style("fill", "#d0570a") // orange
			.each("end", function (d, j) {  createHistogramMeansBox(j, mean, i, m, x, y, w, h); }) // Create histogram ,ean box and start animation of box
		.remove(); // Delete all individuals box


	// Clear histogram individuals counts. Note: must be after mean = currentMean;
	clearHistogramIndividuals();
	updateHistogramIndividualsStableBoxes();
}

function createHistogramMeansBox(j, mean, i, m, x, y, w, h)
{
	var delay = 0;
	createHistogramMeansBoxDelayed(j, mean, i, m, x, y, w, h, delay);
}

function updateHistogramMeansScale()
{
	// Update D3 scale
	var yMaxDomain = yMaxDomainMeans();
	yScale_Means
		.domain([0, yMaxDomain]);

	// Update D3 axis
	histogramWidgetMeans.yAxis
  		.call(yAxis_Means);

	d3.selectAll(".tick")
		.style("font-size",fontSize(tickFontSize));

	// Update mean boxes
	d3.selectAll(".histogram-means-box").each( function (d) {
		updateHistogramMeansBox(d3.select(this));
	});
}


function createHistogramMeansBoxDelayed(j, mean, i, m, x, y, w, h, delay, k)
{
	// Only create a mean box for the first individual box
	if(j>0)
		return;

	k = k || 1; // set default value to 1 if not provided

	// Increment value in histogram
	numMeans += k;
	incrementHistogramMeans(i,k);
	var n = getHistogramMeansValue(i);
	//updateHistogramMeansScale();

	// Get end size and position
	var yEnd = yScale_Means(n);

	// Create SVG rectangle
	var rect = appletSvg.insert("rect",".means-histogram-widget")
		.classed("histogram-means-box",true)
		.datum({ "mean":mean, "i":i, "n":n, "k":k } )
		.style("fill", "#d0570a") // orange
			.style("stroke", "#501d00"); // dark orange


	// Move to start position
	rect
		.attr("x", x)
		.attr("y", y)
		.attr("width", w)
		.attr("height", h);

	if(delay>15)
		rect.attr("opacity", 0);

	rect.transition()
			.delay(0)
			.duration(delay)
			.each("end", function () {rect.attr("opacity", 1);} )
		.transition()
			.duration(1000)
			.ease("bounce")
			.attr("y",yEnd)
			.each("end", function (d) {
				numMeansStable++;
				incrementHistogramMeansStable(d.i, d.k);} )
		.remove();
}

function updateHistogramMeansBox(rect)
{
	// Get index and interval information
	var i = rect.datum().i;


	var m = i*meanHistogramIntervalWidth;
	var n = rect.datum().n;

	// Get size and position
	var w = xScale(m+meanHistogramIntervalWidth) - xScale(m) - 1;
	var h = Math.max(yScale_Means(0) - yScale_Means(1), 2);
	var x = xScale(m);
	var y = yScale_Means(n);

	// Update size and position
	rect
		.attr("x", x)
		.attr("y", y)
		.attr("width", w)
		.attr("height", h);
}

function updateYScaleMeansAfterAddingNMean(n)
{
	// Update D3 scale
	numMeans += n;
	var yMaxDomain = yMaxDomainMeans();
	numMeans -= n;
	yScale_Means
		.domain([0, yMaxDomain]);

	// Update D3 axis
	histogramWidgetMeans.yAxis
  		.call(yAxis_Means);

	d3.selectAll(".tick")
		.style("font-size",fontSize(tickFontSize));


	// Update mean boxes
	d3.selectAll(".histogram-means-box").each( function (d) {
		updateHistogramMeansBox(d3.select(this));
	});

	updateHistogramMeansStableBoxes();
}

function calculateNMean()
{
	var alpha = 0.5;
	var n = Math.min( Math.round(alpha*(1000+numMeans)), 1e+5 );

	var k = 1; // Grouping means for performance speedup, i.e., we only create a SVG box when k of
	           // them are in the same bin. But this box counts as k.
	var maxSVGBoxes = 300;
	if(n > maxSVGBoxes)
	{
		k = Math.round(n / maxSVGBoxes) + 1;
	}
	var deltaTime = 1000.0 / n; // total time to create the n means is 1000ms
	updateYScaleMeansAfterAddingNMean(n);

	var bufferMeansToCreate = []; // To accumulate the means box until k of them are present
	for(var ii=0; ii<n; ++ii)
	{
		// Compute mean from random samples
    	var mean = 0;
    	for(var kk=0; kk<sampleSize; ++kk)
    		mean += randomIndividual();
    	mean /= sampleSize;

    	// Compute bin index
    	var j=0;
    	var i = getHistogramMeansIndex(mean);

    	// Create the histogram box and start animation
    	// For performance reason, we wait to have k means in the same bin
    	// before actually creating it
    	if(k==1)
    	{
    		// Compute start position and size of mean box
    		var m = i*meanHistogramIntervalWidth; // e.g., if length=123mm, then l = 120mm
    		var w = xScale(meanHistogramIntervalWidth) - xScale(0) - 1;
    		var h = Math.max(yScale_Means(0) - yScale_Means(1), 2);
    		var x = xScale(m);
    		var y = yScale_Individuals(0);

    		// Make SVG box
    		createHistogramMeansBoxDelayed(j, mean, i, m, x, y, w, h, deltaTime*ii, k);
    	}
    	else
    	{
    		if(i in bufferMeansToCreate)
    		{
	    		var k2 = bufferMeansToCreate[i];
	    		if(k2+1 == k)
	    		{
	    			// empty buffer
	    			bufferMeansToCreate[i] = 0;

		    		// Compute start position and size of mean box
		    		var m = i*meanHistogramIntervalWidth; // e.g., if length=123mm, then l = 120mm
		    		var w = xScale(meanHistogramIntervalWidth) - xScale(0) - 1;
		    		var h = Math.max(yScale_Means(0) - yScale_Means(1), 2);
		    		var x = xScale(m);
		    		var y = yScale_Individuals(0);

		    		// Make SVG box
	    			createHistogramMeansBoxDelayed(j, mean, i, m, x, y, w, h, deltaTime*ii, k);
	    		}
	    		else
	    		{
	    			bufferMeansToCreate[i] = k2+1;
	    		}
	    	}
	    	else
	    	{
	    		bufferMeansToCreate[i] = 1;
	    	}
	    }
	}

	// empty buffer
	for (var i in bufferMeansToCreate)
	{
		var k2 = bufferMeansToCreate[i];
		if(k2 > 0)
		{
		    // Compute start position and size of mean box
		    var j=0;
		    var m = i*meanHistogramIntervalWidth; // e.g., if length=123mm, then l = 120mm
		    var w = xScale(meanHistogramIntervalWidth) - xScale(0) - 1;
		    var h = Math.max(yScale_Means(0) - yScale_Means(1), 2);
		    var x = xScale(m);
		    var y = yScale_Individuals(0);
			var mean = (i+0.5)*meanHistogramIntervalWidth; // not acurate, but ignored anyway

    		// Make SVG box
	    	createHistogramMeansBoxDelayed(j, mean, i, m, x, y, w, h, deltaTime*n, k2);
		}
	}
}


function createCurrentValueBar()
{
	var col = "#555555"; // grey

    currentValueBar = appletSvg.append("g")
    		.classed("current-value-bar",true);

	currentValueBarLine = currentValueBar.append("line")
    		.style("stroke",col)
    		.style("opacity", 0);

    currentValueBarText = currentValueBar.append("text")
    	.style("fill",col)
    	.style("opacity", 0);
}


function showCurrentValueBar(length)
{
	// Set new position
	var y1 = frameMeasureFish.top() + 0.3 * frameMeasureFish.height();
	var y1Text = frameMeasureFish.top() + 0.2 * frameMeasureFish.height();
	var x1 = Math.min(xScale(length)+5,frameMeasureFish.left() +0.4*frameMeasureFish.width());

	var cupOrCups = "cups";
	var linetext;

	if (length==1) cupOrCups="cup";
	if (whichDist == "coffee") {linetext = "This person drinks " + length.toFixed(0) + " "+cupOrCups+" of coffee per week."};
	if (whichDist == "spanishFlu") {linetext = "This person died of the flu at " + length.toFixed(1) + " years old."};
	if (whichDist == "vote"&&length==1) {linetext = "This person voted for the red candidate."};
	if (whichDist == "vote"&&length==0) {linetext = "This person voted for the blue candidate."};
	if (whichDist == "DIY") {linetext = "This individual has X = " + length.toFixed(0) + "."};


	currentValueBarLine
    		.attr("x1",xScale(length))
    		.attr("y1",y1)
    		.attr("x2",xScale(length))
    		.attr("y2",yScale_Individuals(0));
	currentValueBarText
    		.attr("x",x1) //xScale(length)+5)
    		.attr("y",y1Text)
    		.text(linetext);

    // Hide now.
    // Commented out after test. This allows students to see all lengths when serial-clicking 1st button
	//currentValueBarLine.transition(); // stop any active transition
    //currentValueBarText.transition(); // stop any active transition
	//currentValueBarLine.style("opacity", 0);
    //currentValueBarText.text("");

    // Show then hide, after some delay
	currentValueBarLine
		.transition()
			.delay(500)
			.duration(250)
    		.each("end", function () { currentValueBarLine.style("opacity", 1) })
    	.transition()
			.delay(3500)
			.duration(300)
    		.each("end", function () { currentValueBarLine.style("opacity", 0) });
	currentValueBarText
		.transition()
			.delay(500)
			.duration(250)
    		.each("end", function () { currentValueBarText.style("opacity", 1) })
    	.transition()
			.delay(3500)
			.duration(300)
    		.each("end", function () { currentValueBarText.style("opacity", 0) });
}

//fucntion to capture x and y coordinates from DIY distribution drawing and change th distribution


function reDrawing(){
	if(whichDist=="DIY"){
		//var div = d3.select(this);
      		//.classed("active", true);
		//var w=d3.select(window);
		//To make the drawing event specific to the DIY graph we have to select the graph itself insteed of window
		 var w=d3.select(".length-histogram-widget"); //Zahraa CHANGED 10/27

			w.on("mousedown", DIYmousedown);

		}



			function DIYmousedown(){

				w.style('cursor', 'pointer');
			    d3.select(".drawingAlert").text("Drawing").style('fill','grey'); //Zahraa CHANGED 10/29
				//div.classed("active", true);
				DIYMouse = "mousedown";

				var coord = d3.mouse(w.node());
				var x = coord[0];
				var y = coord[1];



				lastX = Math.round(xScale.invert(x));
				lastY = yScale_Individuals.invert(y);

				w.on("mousemove",DIYmousemove);
				w.on("mouseup", mouseup);
				w.on("mouseleave", mouseup); //Zahraa CHANGED 10/27


			}

			function DIYmousemove(){
				//w.style('cursor', 'pointer');

				d3.select(".drawingAlert").text("Drawing"); //Zahraa CHANGED 10/29
				var coord = d3.mouse(w.node());
				var x = coord[0];
				var y = coord[1];

				x = Math.round(xScale.invert(x));
				y = yScale_Individuals.invert(y);
				y=Math.max(y,0);


				if(x>=0 &&x<=100){ //MIKE CHANGED NOV 3
					DIYf[x]=y;
				}
				//DIYinbetween(x,y,lastX,lastY);
				jumpFix(x, lastX); //Here we fix the jumps

				lastX = x;
				lastY = y;
				histogramWidgetIndividuals.update();


			}

			function mouseup() {
			w.style('cursor', 'auto');
			d3.select(".drawingAlert").text("Re-scaling graph to fit window better").style('fill','red'); //Zahraa CHANGED 10/29
			//div.classed("active", false);
			DIYMouse = "mouseup";
			//histogramWidgetIndividuals.update();  //MIKE CHANGED 10/26
			if(whichDist=="DIY"){ //Zahraa CHANGED 10/28 (Without this if, for some reason the cofee and flu graphs get rescaled when we click on them(This does not happend for histogramWidgetIndividuals.update();))
				recalcDIYdist(); //MIKE CHANGED 10/26
				onresizeAll();  //MIKE CHANGED 10/26
				clearAllHistograms(); //MIKE CHANGED 10/26
			} //Zahraa CHANGED 10/28
			 //histogramWidgetIndividuals.update(); //MIKE CHANGED 10/26
			// histogramWidgetMeans.update(); //MIKE CHANGED 10/26

			w.on("mousemove", null).on("mouseup", null).on("mouseleave", null);

			setTimeout(function(){ d3.select(".drawingAlert").text(""); }, 1000); //MIKE CHANGE NOV 3

		  }

}

function DIYinbetween(x,y,lastX,lastY){
	if(x>lastX){
		for(i=1;i<x-lastX;i++){
			DIYf[x+i]=i*(y-lastY)/(x-lastX);
		}
	}
	if(x<lastX){
		for(i=1;i<lastX-x;i++){
			DIYf[lastX+i]=i*(y-lastY)/(x-lastX);
		}
	}
}

function jumpFix(x, lastX){
	var difJumpX = x-lastX;
	var difJumpY= DIYf[x]-DIYf[lastX];
	var jumpFixPortion = difJumpY/Math.abs(difJumpX);
        if(difJumpX>=2){
			for(i=1; i<difJumpX; i++){
				//DIYf[lastX+i] = DIYf[x]+(Math.abs(i)*jumpFixPortion);
				DIYf[lastX+i] = (DIYf[x]+DIYf[lastX])/2;
			}
		}
		if(difJumpX<=-2){
			for(i=-1; i>difJumpX; i--){
				//DIYf[lastX+i] = DIYf[x]+(Math.abs(i)*jumpFixPortion);
				DIYf[lastX+i] = (DIYf[x]+DIYf[lastX])/2;
			}
		}
}

function lineToCompareMeans(){

}

eraseEquationFrame = function(){
	d3.selectAll("#equationDiv").style("display","none");
}

makeEqFrame = function(){
	var left = "50px";
	var top = "50px";
	var width = "500px";
	var height = "200px";

	d3.selectAll("#equationDiv").style("left",left).style("top",top)
							    .style("width",width).style("height",height);



	var closeEqXID = d3.select("#eqFrameX");

	closeEqXID.on("click",function(){
		eraseEquationFrame();
	});


};
