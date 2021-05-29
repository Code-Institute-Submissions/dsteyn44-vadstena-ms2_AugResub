

/// that is to be displayed along with my weather app. This is credit to Joe Dracup on YouTube

//This is going to trigger our time to run

window.onload = function () {
initTime();
};

function initTime(){
var mydate = new Date();
var year = mydate.getYear();
if (year < 1000){
    year += 1900;
} 
///Date variables to retrieve the days of the week 
var day = mydate.getDay();
var month = mydate.getMonth();
var daym = mydate.getDate();
var dayarray = new Array("Sunday, ","Monday, ","Tuesday, ","Wednesday, ","Thursday, ","Friday, ","Saturday, "); 
var montharray = new Array("January","February","March","April","May","June","July", "August","September","October","November","December"); //if the year is less than 100

//time
var currentTime = new Date();
var hr = currentTime.getHours();
var mn = currentTime.getMinutes();
var sc = currentTime.getSeconds();

if(hr == 24){
    hr = 0; 
} else if (hr > 12){
    hr = hr - 0

}

if(hr < 10){
    hr = "0" + hr; 
}

if(mn < 10){
  mn = "0" + mn; 
}

if(sc < 10){
  sc = "0" + sc; 
}

var myClock = document.getElementById("clockDisplay"); //This is so we can add our own display
myClock.textContent = "" +dayarray[day]+ "  " + daym + "  " + montharray[month] + " " + year + " " + "|" + " " + hr + ":" + mn + ":" + sc;
myClock.innerText = "" +dayarray[day]+ "  " + daym + "  " + montharray[month] + " " + year +  " " + "|" +  " " + hr + ":" + mn + ":" + sc;

setTimeout("initTime()", 1000);

}
console.log(initTime());