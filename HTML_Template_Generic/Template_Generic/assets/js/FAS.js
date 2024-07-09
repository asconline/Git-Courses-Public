function ScrollTop() {
document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function DivSwitch() {
var current = new Date();
var week1 = new Date("September 1, 2018 00:00:00"); 
var week2 = new Date("September 22, 2018 00:00:00");
var week3 = new Date("October 6, 2018 00:00:00");
var week4 = new Date("October 20, 2018 00:00:00");
var week5 = new Date("November 3, 2018 00:00:00");
var week6 = new Date("November 17, 2018 00:00:00");
var week7 = new Date("December 1, 2018 00:00:00");



switch (true) {
  case (current > week7):
      document.getElementById("topic1online").style.display = "none";
      document.getElementById("topic2online").style.display = "none";
      document.getElementById("topic3online").style.display = "none";
      document.getElementById("topic4online").style.display = "none";
      document.getElementById("topic5online").style.display = "none";
      document.getElementById("topic6online").style.display = "none";
      document.getElementById("retreatonline").style.display = "block";
      document.getElementById("topic1oncampus").style.display = "none";
      document.getElementById("topic2oncampus").style.display = "none";
      document.getElementById("topic3oncampus").style.display = "none";
      document.getElementById("topic4oncampus").style.display = "none";
      document.getElementById("topic5oncampus").style.display = "none";
      document.getElementById("topic6oncampus").style.display = "none";
      document.getElementById("retreatoncampus").style.display = "block";
  break;
  case (current > week6):
     document.getElementById("topic1online").style.display = "none";
     document.getElementById("topic2online").style.display = "none";
     document.getElementById("topic3online").style.display = "none";
     document.getElementById("topic4online").style.display = "none";
     document.getElementById("topic5online").style.display = "none";
     document.getElementById("topic6online").style.display = "block";
     document.getElementById("retreatonline").style.display = "none";
     document.getElementById("topic1oncampus").style.display = "none";
     document.getElementById("topic2oncampus").style.display = "none";
     document.getElementById("topic3oncampus").style.display = "none";
     document.getElementById("topic4oncampus").style.display = "none";
     document.getElementById("topic5oncampus").style.display = "none";
     document.getElementById("topic6oncampus").style.display = "block";
     document.getElementById("retreatoncampus").style.display = "none";
  break;
  case (current > week5):
     document.getElementById("topic1online").style.display = "none";
     document.getElementById("topic2online").style.display = "none";
     document.getElementById("topic3online").style.display = "none";
     document.getElementById("topic4online").style.display = "none";
     document.getElementById("topic5online").style.display = "block";
     document.getElementById("topic6online").style.display = "none";
     document.getElementById("retreatonline").style.display = "none";
     document.getElementById("topic1oncampus").style.display = "none";
     document.getElementById("topic2oncampus").style.display = "none";
     document.getElementById("topic3oncampus").style.display = "none";
     document.getElementById("topic4oncampus").style.display = "none";
     document.getElementById("topic5oncampus").style.display = "block";
     document.getElementById("topic6oncampus").style.display = "none";
     document.getElementById("retreatoncampus").style.display = "none";
  break;
  case (current > week4):
     document.getElementById("topic1online").style.display = "none";
     document.getElementById("topic2online").style.display = "none";
     document.getElementById("topic3online").style.display = "none";
     document.getElementById("topic4online").style.display = "block";
     document.getElementById("topic5online").style.display = "none";
     document.getElementById("topic6online").style.display = "none";
     document.getElementById("retreatonline").style.display = "none";
     document.getElementById("topic1oncampus").style.display = "none";
     document.getElementById("topic2oncampus").style.display = "none";
     document.getElementById("topic3oncampus").style.display = "none";
     document.getElementById("topic4oncampus").style.display = "block";
     document.getElementById("topic5oncampus").style.display = "none";
     document.getElementById("topic6oncampus").style.display = "none";
     document.getElementById("retreatoncampus").style.display = "none";
  break;
    case (current > week3):
       document.getElementById("topic1online").style.display = "none";
       document.getElementById("topic2online").style.display = "none";
       document.getElementById("topic3online").style.display = "block";
       document.getElementById("topic4online").style.display = "none";
       document.getElementById("topic5online").style.display = "none";
       document.getElementById("topic6online").style.display = "none";
       document.getElementById("retreatonline").style.display = "none";
       document.getElementById("topic1oncampus").style.display = "none";
       document.getElementById("topic2oncampus").style.display = "none";
       document.getElementById("topic3oncampus").style.display = "block";
       document.getElementById("topic4oncampus").style.display = "none";
       document.getElementById("topic5oncampus").style.display = "none";
       document.getElementById("topic6oncampus").style.display = "none";
       document.getElementById("retreatoncampus").style.display = "none";
    break;
    case (current > week2):
       document.getElementById("topic1online").style.display = "none";
       document.getElementById("topic2online").style.display = "block";
       document.getElementById("topic3online").style.display = "none";
       document.getElementById("topic4online").style.display = "none";
       document.getElementById("topic5online").style.display = "none";
       document.getElementById("topic6online").style.display = "none";
       document.getElementById("retreatonline").style.display = "none";
       document.getElementById("topic1oncampus").style.display = "none";
       document.getElementById("topic2oncampus").style.display = "block";
       document.getElementById("topic3oncampus").style.display = "none";
       document.getElementById("topic4oncampus").style.display = "none";
       document.getElementById("topic5oncampus").style.display = "none";
       document.getElementById("topic6oncampus").style.display = "none";
       document.getElementById("retreatoncampus").style.display = "none";
    break;
    case (current > week1):
       document.getElementById("topic1online").style.display = "block";
       document.getElementById("topic2online").style.display = "none";
       document.getElementById("topic3online").style.display = "none";
       document.getElementById("topic4online").style.display = "none";
       document.getElementById("topic5online").style.display = "none";
       document.getElementById("topic6online").style.display = "none";
       document.getElementById("retreatonline").style.display = "none";
       document.getElementById("topic1oncampus").style.display = "block";
       document.getElementById("topic2oncampus").style.display = "none";
       document.getElementById("topic3oncampus").style.display = "none";
       document.getElementById("topic4oncampus").style.display = "none";
       document.getElementById("topic5oncampus").style.display = "none";
       document.getElementById("topic6oncampus").style.display = "none";
       document.getElementById("retreatoncampus").style.display = "none";
    break;
}
}

window.onload=function Start() {
ScrollTop();
DivSwitch();
}
