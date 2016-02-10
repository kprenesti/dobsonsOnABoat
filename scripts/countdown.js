var target_date = new Date("May 10, 2016 10:00:00").getTime();
var weeks, days, hours, minutes, seconds;
var weeksContainer = document.getElementById('weeks');
var daysContainer = document.getElementById('days');
var hoursContainer = document.getElementById('hours');
var minsContainer = document.getElementById('minutes');
var secsContainer = document.getElementById('seconds');

setInterval(function () {
  "use strict";
  var currentDate = new Date().getTime();
  var seconds_left = (target_date - currentDate) / 1000;
  weeks = parseInt(seconds_left / 604800);
  seconds_left %= 604800;
  
  days = parseInt(seconds_left / 86400);
  seconds_left %= 86400;
  
  hours = parseInt(seconds_left / 3600);
  seconds_left %= 3600;
  
  minutes = parseInt(seconds_left / 60);
  seconds = parseInt(seconds_left % 60);
  
  weeksContainer.innerHTML= weeks;
  daysContainer.innerHTML= days;
  hoursContainer.innerHTML= hours;
  minsContainer.innerHTML= minutes;
  secsContainer.innerHTML= seconds;

}, 1000);