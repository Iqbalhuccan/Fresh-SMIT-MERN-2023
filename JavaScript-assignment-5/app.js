// JavaScript Assignment-5 
// Chapter 26 -30
// Q #1:
// var num = prompt("Enter a number:");
// document.write( "number: "+ num + "<br/>" + "round off value: " + Math.round(num) + "<br/>" + 
// "floor value: " + Math.floor(num) + "<br/>" + "Ceil value: " + Math.ceil(num))

// Q #2:
// var num = prompt("Enter a number:");
// document.write("number: " + num + "<br/>" + "round off value: " + Math.round(num) + "<br/>" + "floor value: " 
// + Math.floor(num) + "<br/>" + "Ceil value: " + Math.ceil(num))

// Q #3:
//  var num = prompt("Enter a number: ");
//  alert( "The absolute value "+ num + " is " + Math.abs(num));

// Q #4:
// var num = Math.random();
// var num1 = (num * 6);
// var impNum = Math.round(num1)
// document.write( "randome dice value: " + impNum)

// Q #5:
// var num = Math.random();
// var num1 = (num * 2);
// var impNum = Math.round(num1)
// var improvedNum = Math.floor(impNum)
// if(improvedNum ==2){
//     document.write(improvedNum + "<br/>" +"random coin value: Head" )
// }
// else{
//     document.write( improvedNum + "<br/>"+"random coin value: Tail")
// }

// Q #6:
// var num = Math.random();
// var num1 = (num * 100);
// var rNum = Math.round(num1)

// document.write( "Random number between 1 and 100:  "+rNum)

// Q #7:

// var weight = +prompt("Enter your weight in kilograms")
// if( weight >= 1){
// document.write("The weight of user is " + weight + " kilograms")
// }
// else{
//     document.write("The weight of user is " + weight + " kilograms")
// }

// Q # 8:

// var num = +prompt("Enter a number between 1 and 10: ");
// var num1 = (num * 10)
// var rNum = Math.round(num1)
// if(num1 <= 10){
//     alert("Congratulates")
// }else{
//     alert("Try again")
// }


// JavaScript Assignment-5 
// Chapter 31-34

// Q # 1:
// var date = new Date()
// document.write(date)

// Q # 2:
// var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = monthNames[theMonth]
// document.write("Current month: " + nameOfMonth)

// Q # 3:
// var dayNames= [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
// var now = new Date();
// var today = now.getDay();
// var nameOfDay = dayNames[today]
// document.write("Today is " + nameOfDay)

// Q # 4:
// var dayNames= [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
// var now = new Date();
// var today = now.getDay();
// var nameOfDay = dayNames[today]
// if(nameOfDay ===  "Sun" || nameOfDay === "Sat"){
//     document.write("It's fun day.")
// }
// else{
//     document.write("Today is " + nameOfDay)
// }

// Q # 5:
// var day = new Date()
// var numOfDays = day.getDate()
// if (numOfDays <= 16) {
//     document.write("“First fifteen days of the month”");
// }else{
//     document.write("“Last days of the month”")
// }

// Q # 6:
// var now = new Date();
// var msCurrent = now.getTime()
// var mCurrent = msCurrent / (1000 * 60)
// document.write("Current Date: " + now)
// document.write("<br/>" + "Elapsed milliseconds since January 1, 1970: " + msCurrent + " milliseconds")
// document.write("<br/>" + "Elapsed minutes since January 1, 1970: " + mCurrent.toFixed() + " minutes")

// Q # 7:
// var now = new Date();
// var currentTime = now.getTime / (1000 * 60 * 60 * 24)
// if( currentTime <= 12){
//     alert("It's AM ")
// }else{
//     alert("It's PM")
// }

// Q # 8:
// var laterDate = new Date(2020, 11, 31)
// alert(laterDate)

// Q # 9:
// var today = new Date();
// var firstRamadan = new Date("March 11, 2024");
// var msToday = today.getTime();
// var msFirstRamadan = firstRamadan.getTime();
// var msDiff = msFirstRamadan - msToday
// var dDiff = msDiff / (1000 * 60 * 60 * 24)
// document.write(Math.floor(dDiff) + " days to Ramadan 2024<br/>");

// var today = new Date();
// var firstRamadan = new Date("March 22, 2023");
// var msToday = today.getTime();
// var msFirstRamadan = firstRamadan.getTime();
// var msDiff = msToday - msFirstRamadan
// var dDiff = msDiff / (1000 * 60 * 60 * 24)
// document.write(Math.floor(dDiff) + " days have passed since 1st Ramadan 2023");

// Q # 10:
// var now = new Date();
// var msNow = now.getTime();
// var laterDate = new Date("June 10, 2023")
// var msLaterDate = laterDate.getTime();
// var msDiff = msNow - msLaterDate
// var dDiff = msDiff / (1000 * 60)
// document.write("On reference date " + now + " ,<br/>")
// document.write(dDiff.toFixed() + " seconds had passed since " + now)



















