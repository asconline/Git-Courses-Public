function OpenAll() {
document.getElementById("week1collapse").className = "collapse in";
document.getElementById("week2collapse").className = "collapse in";
document.getElementById("week3collapse").className = "collapse in";
document.getElementById("week4collapse").className = "collapse in";
document.getElementById("week5collapse").className = "collapse in";
document.getElementById("week6collapse").className = "collapse in";
document.getElementById("week7collapse").className = "collapse in";
document.getElementById("week8collapse").className = "collapse in";
document.getElementById("week9collapse").className = "collapse in";
document.getElementById("week10collapse").className = "collapse in";
document.getElementById("week11collapse").className = "collapse in";
document.getElementById("week12collapse").className = "collapse in";
 document.getElementById("ToggleButton").setAttribute( "onClick", "javascript: CloseAll();" );
}

function CloseAll() {
document.getElementById("week1collapse").className = "collapse";
document.getElementById("week2collapse").className = "collapse";
document.getElementById("week3collapse").className = "collapse";
document.getElementById("week4collapse").className = "collapse";
document.getElementById("week5collapse").className = "collapse";
document.getElementById("week6collapse").className = "collapse";
document.getElementById("week7collapse").className = "collapse";
document.getElementById("week8collapse").className = "collapse";
document.getElementById("week9collapse").className = "collapse";
document.getElementById("week10collapse").className = "collapse";
document.getElementById("week11collapse").className = "collapse";
document.getElementById("week12collapse").className = "collapse";
 document.getElementById("ToggleButton").setAttribute( "onClick", "javascript: OpenAll();" );
}