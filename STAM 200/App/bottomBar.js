

	window.onresize = function(event) {


		document.getElementById('modalPage').classList.add('resize');

	};

	function credits(){
 	document.getElementById('modalTitle').innerHTML="Credits";
	document.getElementById('modalDiv1').innerHTML="<p><span class=\"role\">Funding  </span>University of British Columbia</p>";
	document.getElementById('modalDiv2').innerHTML="<p><span class=\"role\">Project Leader  </span> Mike Whitlock</p>";
	document.getElementById('modalDiv3').innerHTML="<p><span class=\"role\">Programmers  </span> Boris Dalstein, Mike Whitlock, Zahraa Almasslawi</p>";
	document.getElementById('modalDiv4').innerHTML="<p><span class=\"role\">Art  </span> Derek Tan</p>";
	document.getElementById('modalDiv5').innerHTML="<p><span class=\"role\">Translation  </span> Rémi Matthey-Doret, Laura Melissa Guzman</p>";
	document.getElementById('modalDiv6').innerHTML="<p><span class=\"role\">Testing  </span> Melissa Lee, Gaitri Yapa, Bruce Dunham</p>";
	document.getElementById('modalDiv7').innerHTML="<p><span class=\"role\">Thanks  </span> to  Darren Irwin, Dolph Schluter, Nancy Heckman, Kaylee Byers, Brandon Doty, Kim Gilbert, Sally Otto, Wilson Whitlock, Jeff Whitlock, Jeremy Draghi, Karon MacLean, Fred Cutler, Diana Whistler, Andrew Owen, Mike Marin, Leslie Burkholder, Eugenia Yu, Doug Bonn, Michael Scott, the UBC Physics Learning Group, and the UBC Flex Stats initiative for numerous suggestions and improvements.</p>";
	document.getElementById('modalDiv8').innerHTML="<p><span class=\"role\">Queen's University Customization  </span>William Nelson, Wanda Beyer, Erik Bigras, Nadia Morel</p>";
	}

	function license(){
 	document.getElementById('modalTitle').innerHTML="License";
	document.getElementById('modalDiv1').innerHTML="<p>This web-page and its code is released on a <a href=\"https://wiki.creativecommons.org/wiki/CC0\">Creative Commons Zero</a> agreement, meaning that it is freely available for use, re-use, and modification. We request that you give us credit, when possible. This work is in the public domain.</p>";
	document.getElementById('modalDiv2').innerHTML="<p align=\"right\"><a rel=\"license\"     href=\"http://creativecommons.org/publicdomain/zero/1.0/\">   <img src=\"http://i.creativecommons.org/p/zero/1.0/88x31.png\" style=\"border-style: none;\" alt=\"CC0\" />  </a></p>";
	document.getElementById('modalDiv3').innerHTML="";
	document.getElementById('modalDiv4').innerHTML="";
	document.getElementById('modalDiv5').innerHTML="";
	document.getElementById('modalDiv6').innerHTML="";
	document.getElementById('modalDiv7').innerHTML="";
	document.getElementById('modalDiv8').innerHTML="";
	}

	function contactInfo(){
 	document.getElementById('modalTitle').innerHTML="Contact info";
	document.getElementById('modalDiv1').innerHTML="<p>This page is used as part of a multi-disciplinary statistics course at Queen's University. For more information, please contact <a href=\"mailto:asc.online@queensu.ca\">contact us</a>. </p>";
	document.getElementById('modalDiv2').innerHTML="";
	document.getElementById('modalDiv3').innerHTML="";
	document.getElementById('modalDiv4').innerHTML="";
	document.getElementById('modalDiv5').innerHTML="";
	document.getElementById('modalDiv6').innerHTML="";
	document.getElementById('modalDiv7').innerHTML="";
	document.getElementById('modalDiv8').innerHTML="";

	}
