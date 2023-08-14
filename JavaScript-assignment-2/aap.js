                                //  Assignment # 2: JavaScript
                                        // Chapter # 6: 
// Q # 1
// var a = 10;

// document.write("Result: <br> ")
// document.write("The vaue of a is: " + a + "<br>....................................................." + "<br>")

// var a = ++a; 
// document.write("<br>The value of ++a is: " + a + "<br> Now the value of a is:  " + a + "<br>");
// var a = a++; 
// document.write("<br>The value of a++ is: " + a);
// var a = ++a; 
// document.write("<br> Now the value of a is:  " + a + "<br>")
// var a = --a; 
// document.write("<br>The value of --a is: " + a + "<br> Now the value of a is:  " + a + "<br>");
// var a = a--; 
// document.write("<br>The value of a-- is: " + a );
// var a = --a;
// document.write("<br> Now the value of a is:  " + a + "<br>")

// Q # 2:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(" a is = "+ a +"<br> b is = "+ b + "<br>" + " <h4>--a - --b + ++b + b-- </h4><br>" + 
// "Result: " + result);
// --a; =====> 1
// --a - --b; =====> 1 - 0 = 1
// --a - --b + ++b; ======> 1 - 0 + 1 = 2
// --a - --b + ++b + b--;  =====> 1 - 0 + 1 + 1 = 3

// Q # 3:
// var userName = prompt("Please Enter Your Name");
// alert("Hello " + userName + ", Welcome to our website!");

// Q # 5:
// var num = prompt("Enter any number to get its table");
// if ( num >= 2 ){
//         document.write( num +" * 1 = " + num * 1 + "<br>" + num+ " * 2 = " + num * 2 + "<br>" + num+ " * 3 = " + num * 3
//         + "<br>" + num+ " * 4 = " + num * 4 + "<br>" + num+ " * 5 = " + num * 5 + "<br>" + num+ " * 6 = " + num * 6
//         + "<br>" + num+ " * 7 = " + num * 7 + "<br>" + num+ " * 8 = " + num * 8 + "<br>" + num+ " * 9 = " + num * 9
//         + "<br>" + num+ " * 10 = " + num * 10);
// }
// else{
//         document.write("5 * 1 = 5" + "<br> 5 * 2 = 10 " + "<br> 5 * 3 = 15 " + 
//         " <br> 5 * 4 = 20 " + " <br> 5 * 5 = 25" + " <br> 5 * 6 = 30" + " <br> 5 * 7 = 35" + "<br> 5 * 8 = 40" +
//         " <br> 5 * 9 = 45" + " <br> 5 * 10 = 50")
// }

// Q # 6:
// var subj1 = prompt("Enter your Subject-1 Name");
// var subj2 = prompt("Enter your Subject-2 Name");
// var subj3 = prompt("Enter your Subject-3 Name");
// var totalMarks = 100;
// var allSubjectMarks = 300;

// var subj1_Obtained_Marks = prompt("Enter " + subj1 + " Marks:");
// var subj2_Obtained_Marks = prompt("Enter " + subj2 + " Marks:");
// var subj3_Obtained_Marks = prompt("Enter " + subj3 + " Marks:");

// var percentage1 = (subj1_Obtained_Marks / totalMarks) * 100;
// var percentage2 = (subj2_Obtained_Marks / totalMarks) * 100;
// var percentage3 = (subj3_Obtained_Marks / totalMarks) * 100;
// var totalPercentage = (percentage1 + percentage2 + percentage3)/3

// document.write("<h4>Subject  Total-Marks  Obtained-Marks   Percentage </h4> <br>" +
//     subj1 + " " + totalMarks + " " + subj1_Obtained_Marks + " " + percentage1 + "%" + "<br>" +
//     subj2 + " " + totalMarks + " " + subj2_Obtained_Marks + " " + percentage2 + "%" + "<br>" +
//     subj3 + " " + totalMarks + " " + subj3_Obtained_Marks + " " + percentage3 + "%" + "<br>" +
//      " " + allSubjectMarks + " " + totalPercentage + "%");

// chapter 9: 
// Q # 1:
// var cityName = prompt("Enter your city name");
// if(cityName === "Karachi"){
//         alert("'Wecome to city of lights'");
// }
// else{
//         alert("Welcome to " + cityName + "!");
// }

// Q # 2:
// var gender = prompt("Type your Gender (Male or Female)");
// if(gender.toLowerCase () === "male"){
//         alert("Good Morning Sir");
// }
// else if(gender.toLowerCase() === "female"){
//         alert("Good Morning Ma'am.")
// }
// else{
//         alert("Good Morning " + gender)
// }

// Q # 3:
// var trafficSignalColor = prompt("Enter color of road traffic signal. (e.g. Red or Green or Yellow)");
// if(trafficSignalColor.toLowerCase ()=== "red"){
//         alert("Must stop")  
// }
// else if(trafficSignalColor.toLowerCase()=== "yellow"){
//         alert("Move now");
// }
// else if(trafficSignalColor.toLowerCase()=== "green"){
//         alert("Ready to move");
// }
// else{
//         alert("Learn traffic rules first.")
// }

// Q # 4:
// var fuelInCar = +prompt("Enter remaining fuel in your car");
// if(fuelInCar <= 0.25){
//         alert("Please refill the fuel in your car.");
// }
// else{
//         alert("You have sufficient fuel in your car.")
// }
// Q # 5:
                        // a true
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

                        // b not true
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
                        // c  conditions 2, 4 are true
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
                        // d  true
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
                        // e  true
// if (true){
// alert("True")
// }
// if (false){
// alert("False");
// }
                        // f  true
// if("car" < "cat"){
//         alert("car is smaller than cat");
// }

// Q # 6:
// var totalMarks = +prompt("Enter Total Marks");
// var obtainedMarks = +prompt("Enter Obtained Marks");
// var percentage = obtainedMarks / totalMarks * 100
// if(percentage >= "80"){
//         document.write("<h1>Marks Sheet</h1>" + "Total Marks: " + totalMarks  +"<br>Marks Obtained: " + obtainedMarks + 
//           "<br> Percentage: " + percentage + "%" + "<br> Grade: A-one" + "<br> Remarks: <b>Excellent")
// }
// else if(percentage >= "70"){
//         document.write("<h1>Marks Sheet</h1>" + "Total Marks: " + totalMarks  +"<br>Marks Obtained: " + obtainedMarks + 
//           "<br> Percentage: " + percentage + "%" + "<br> Grade: A" + "<br> Remarks: Good")
// }
// else if(percentage >= "60"){
//         document.write("<h1>Marks Sheet</h1>" + "Total Marks: " + totalMarks  +"<br>Marks Obtained: " + obtainedMarks + 
//           "<br> Percentage: " + percentage + "%" + "<br> Grade: B" + "<br> Remarks: You need to improve")
// }
// else{ 
//         document.write("<h1>Marks Sheet</h1>" + "Total Marks: " + totalMarks  +"<br>Marks Obtained: " + obtainedMarks + 
//                   "<br> Percentage: " + percentage + "%" + "<br> Grade: Fail" + "<br> Remarks: Sorry")
// }

// Q # 7:
// var secretNumber = 7;
// var guessNumber = +prompt("Guess the secret Number:");
// if( guessNumber === secretNumber){
//         alert("Bingo! Correct Answer.")
// }
// else if(guessNumber === ++secretNumber){
//         alert("“Close enough to the correct answer”.");
// }
// else{
//         alert("Incorrect number.");
// }

// Q # 8:
// var number = +prompt("Enter Your Number");
// var divisibilty = number % 3;
// if(divisibilty === 0 ){
//         alert("Yes, " + number + " is divisible by 3.")
// }
// else{
//         alert("No, " + number + " is not divisible by 3.")
// }

// Q # 9:
// var number = +prompt("Enter Your Number.");
// var evenNumber = number % 2;
// if(evenNumber === 0){
//         alert( number + " is even.")
// }
// else{
//         alert(number + " is odd.")
// }

// Q # 10:
// var temperature = +prompt("Enter today temperature. (e.g 35)");
// if(temperature > 40){
//         alert("“It is too hot outside.”")
// }
// else if(temperature > 30){
//         alert("“The Weather today is Normal.”")
// }
// else if(temperature > 20){
//         alert("“Today’s Weather is cool.”")
// }
// else if(temperature > 10){
//         alert("“OMG! Today’s weather is so Cool.”")
// }
// else{
//         alert("OMG! Today I am freezing")
// }

// Q # 11:
// var firstNumber = +prompt("Enter your first number:");
// var secondNumber = +prompt("Enter your second number:");
// var operation = prompt("Enter the operation (+ , - , * , / , %):")
// if( operation === "+"){
//         alert(firstNumber + secondNumber)
// }
// else if( operation === "-"){
//         alert(firstNumber - secondNumber)
// }
// else if( operation === "*"){
//         alert(result = firstNumber * secondNumber)
// }
// else if (operation === "/") {  
//         alert(firstNumber / secondNumber);
// }
// else if (operation === "%") {
//         alert(firstNumber % secondNumber);
// } 
// else{
//         alert("Invalid operation");
// }

                                                // chapter # 12 
// Q # 1
// var inputCharacter = prompt("Enter a character");
// var asciiCode = inputCharacter.charCodeAt(0);
// if(asciiCode >= 48 && asciiCode <= 57){
//         alert("The input character is number.")
// }
// else if( asciiCode >= 65 && asciiCode <= 90){
//         alert("The input character is Uppercase letter.");
// }
// else if( asciiCode >= 97 && asciiCode <= 122){
//         alert("The input character is lowercase letter.");
// }
// else{
//         alert("The input character is not a number, uppercase, or lowercase letter.")
// }

// Q # 2:
// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter scond number");
// if(firstNumber > secondNumber){
//         alert("First Number is larger " + firstNumber)
// }
// else if(secondNumber > firstNumber){
//         alert("Second Number is larger " + secondNumber)
// }
// else if(firstNumber === secondNumber){
//         alert("Both are equal " + firstNumber + "=" + secondNumber)
// }
// else{
//         alert("None of them")
// }

// Q # 3:
// var userNumber = +prompt("Enter Your Number:");

// if(userNumber > 0){
//         alert("The number is positive.")
// }
// else if(userNumber === 0){
//         alert("The number is zero.")
// }
// else if(userNumber < 0){
//         alert("The number is negative.")
// }
// else{
//         alert("Invalid input")
// }

// Q # 4:
// var inputCharacter = prompt("Enter a character (length 1):");
// var lowercaseChar = inputCharacter.toLowerCase();
// var isVowel = lowercaseChar === 'a' || lowercaseChar === 'e' || lowercaseChar === 'i' ||
// lowercaseChar === 'o' || lowercaseChar === 'u';

// if (isVowel) {
//         alert("The character is a vowel.");
// } else {
//         alert("The character is not a vowel.");
// }

// Q # 5:
// var correctPassword = "iqbalhussain110"
// var userPassword = prompt("Enter your password.");
// if(userPassword === correctPassword){
//         alert("“Correct! The password you entered matches the original password”.")
// }
// else{
//         alert("“ Please enter your password”")
// }

// Q # 6:
// var greeting = prompt("Enter the time (only hours):");
// if(greeting <= 13){
//         alert("Good Day")
// }
// else if(greeting <= 24){
//         alert("Good Eveing")
// }
// else{
//         alert("Invalid input")
// }


 