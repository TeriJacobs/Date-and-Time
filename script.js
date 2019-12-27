var d = new Date();

var year = d.getFullYear();
var month = d.getMonth() + 1;
//var day = d.getDay(); // this indicates the day of the week but within the index format.
var date = d.getDate();

//displaying day of the week

var day = d.getDay();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

console.log(weekday);


 document.getElementById("date").innerHTML = weekday[d.getDay()] + " " + year + "-" + month + "-" + date ;

 



 //displaying the time

 var d = new Date();

 var hours = d.getHours();
 var minutes = d.getMinutes();

 if (minutes < 10){
     add = "0";
 }else {
     add = "";
 }
    

 document.getElementById("time").innerHTML = hours + "h" + add + minutes;

