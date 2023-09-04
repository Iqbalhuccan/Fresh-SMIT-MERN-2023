// ASSIgnment # 3: JavaScript
                // Q # 1: Declare an empty array using JS literal notation to store student names in future.
// var studentName = [];

                // Q # 2: Declare an empty array using JS object notation to store student names in future.
// var studentName = {
//     names: []
// };

                // Q # 3: Declare and initialize a strings array.
// var studentName = ["Iqbal", "Azhar", "Sadaqat", "Mohsin", "Ali", "Muddassir", "Ismail", "Ovais"]
// alert(studentName[3])

                // Q # 4: Declare and initialize a numbers array.
// var numberArray = [2, 3, 4, 5, 6, 7];
// alert(numberArray[3])


                //Q # 5: Declare and initialize a boolean array.
// var booleanArray = [true, false, true, false];
// alert(booleanArray[2])

                //Q # 6: Declare and initialize a mixed array.
// var mixedArray = ["Iqbal", "Azhar", "Ali", 10, 12, 23, true, false, false, true];
// alert(mixedArray[6])

                //Q # 7:
// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// var serialNumber = 0;
// document.write("<h1>Qualifications: </h1>");
// for(i=0; i<educationQualifications.length; i++){
//     document.write("${++serialNumber} ${educationQualifications[i]}<br>")
// }

            //Q # 8:
// var studentName = ["Michael", "John","Tony"];
// var studentScore = [320, 230, 480];
// var totalScore = 500;
// document.write("Score of "+ studentName[0] + " is "+ studentScore[0] +": "+ "Percentage: " + studentScore[0]/ totalScore * 100 + "% <br>"
//  + "Score of "+ studentName[1] + " is "+ studentScore[1] +": "+ "Percentage: " + studentScore[1]/ totalScore * 100 + "% <br>"
// + "Score of "+ studentName[2] + " is "+ studentScore[2] +": "+ "Percentage: " + studentScore[2]/ totalScore * 100 + "%"
//  );

// var studentName = ["Michael", "John", "Tony"];
// var studentScore = [320, 230, 480];
// var totalScore = 500;

// for( var i=0; i < studentName.length; i++){
//     var percentage = (studentScore[i] / totalScore) * 100;
//     document.write("Score of " + studentName[i] + " is " + studentScore[i] + ": " + "Percentage: " + percentage.toFixed(2) + "% <br>");
// }


         //Q # 9: a
// var colorNames = ["Red", "Blue", "Orange"];
// var enterColorName = prompt("Add color to the start: "+ colorNames);
// colorNames.unshift(enterColorName);

        //Q # 9: b
// var enterColorName = prompt("Add color to the end : "+ colorNames);
// colorNames.push(enterColorName);

        //Q # 9: c
// var enterColorName = prompt(" Add two colors (comma-separated): "+ colorNames);
// colorNames.splice(0,0, enterColorName,)

         //Q # 9: d
// var enterColorName = prompt("Remove the first color: "+ colorNames);
// colorNames.shift (enterColorName);

        //Q # 9: e
// var enterColorName = prompt("Remove the last color: "+ colorNames);
// colorNames.pop (enterColorName);

        //Q # 9: f
// var yourIndex = +prompt("Enter the index where you want to add a color: " + colorNames)
// var enterColorName = prompt("Enter the color name: "+ colorNames);
// colorNames.splice (yourIndex, 0,enterColorName);

        //Q # 9: g
// var yourIndex = parseInt(prompt("Enter the index where you want to remove a color: " + colorNames));
// var toRemoveColor = parseInt(prompt("How many colors do you want to remove: " + colorNames));
// var enterColorName = promtp("Enter the color name: "+ colorNames);
// colorNames.splice(yourIndex, toRemoveColor)
// document.write(colorNames);

// Q #10
// var studentScores = [320, 230,480,120];
// var sorting = prompt("Enter score")
// studentScores.sort()




                                        



