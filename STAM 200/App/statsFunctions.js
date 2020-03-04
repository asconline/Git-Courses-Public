// This file will have some useful statistical fucntions

//////////////////////////
//  Calculating critical values from a Student;s t distribution

// A straightforward way to tdo this is from look up tables

// tLookup95 and tLookup99 give the critical value from the t distribution, 
// where the index of the array is the df. 
// The "95 "  and "99" refer to 95% and 99%  confidence levels.

tLookup95 = ["NA", 12.71, 4.3, 3.18, 2.78, 2.57, 2.45, 2.36, 2.31, 2.26, 2.23, 2.2, 2.18, 2.16, 2.14, 2.13, 2.12, 2.11, 2.1, 2.09, 2.09, 2.08, 2.07, 2.07, 2.06, 2.06, 2.06, 2.05, 2.05, 2.05, 2.04, 2.04, 2.04, 2.03, 2.03, 2.03, 2.03, 2.03, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,] ;

tLookup99 = ["NA", 63.66, 9.92, 5.84, 4.60, 4.03, 3.71, 3.50, 3.36, 3.25, 3.17, 3.11, 3.05, 3.01, 2.98, 2.95, 2.92, 2.90, 2.88, 2.86, 2.85, 2.83, 2.82, 2.81, 2.80, 2.79, 2.78, 2.77, 2.76, 2.76, 2.75, 2.74, 2.74, 2.73, 2.73, 2.72, 2.72, 2.72, 2.71, 2.71, 2.70, 2.70, 2.70, 2.70, 2.69, 2.69, 2.69, 2.68, 2.68, 2.68, 2.68, 2.68, 2.67, 2.67, 2.67, 2.67, 2.67, 2.66, 2.66, 2.66, 2.66, 2.66, 2.66, 2.66, 2.65, 2.65, 2.65, 2.65, 2.65, 2.65, 2.65, 2.65, 2.65, 2.64, 2.64, 2.64, 2.64, 2.64, 2.64, 2.64, 2.64, 2.64, 2.64, 2.64, 2.64];

//These next two values look up the critical values, for a broader
//range of df than is available in the lookup tables.

function tCritValue95 (df){
	if (df>=473) {return 1.96};
	if (df>=159) {return 1.97};
	if (df>=96) {return 1.98};
	if (df>=69) {return 1.99};
	return tLookup95[df]
};

function tCritValue99 (df){
	if (df>=538) {return 2.58};
	if (df>=259) {return 2.59};
	if (df>=171) {return 2.60};
	if (df>=128) {return 2.61};
	if (df>=102) {return 2.62};
	if (df>=85) {return 2.63};
	return tLookup99[df]
};

//This last function is one that can be called simply in the main code
function tCritValue (df, ConfLevel){
	if (ConfLevel == 95) {return tCritValue95(df)};
	if (ConfLevel == 99) {return tCritValue99(df)};
};