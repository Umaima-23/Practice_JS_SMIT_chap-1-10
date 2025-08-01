//   ======chapter 6 Math Expression ======
// Question 1
var a = 10;
document.write("<h1>" + "Result" + "</h1>")
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + ++a + "<br>")
document.write("Now the value of a is: " + a + "<br><br>")

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br> <br>")

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br> <br>")

document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br> <br>")

// Question 2
var a = 2
var b = 1
var step1 = --a;
var step2 = --a - --b;
var step3 = ++b;
var step4 = b--;
document.write("<h1> Result </h1>")
document.write(" Step 1 --a is " + step1 + "<br>")
document.write(" Step 2 --a - --b is " + step2 + "<br>")
document.write(" Step 3 --a - --b + ++b is " + step3 + "<br>")
document.write(" Step 4 --a - --b + ++b + b-- is " + step4 + "<br>")
var result = step1 - step2 + step3 + step4
document.write("The result is " + result);

// Question 3
var userName = prompt("Enter your name")
alert("Hey!" + userName + " Thanks for visiting our website")

// Question 4/5
var userInp = +prompt("Enter a number to display multiplication table")
var num = userInp || 5
document.write("<h1>" + "Multiplication table of " + num + "</h1>")
document.write(num + "* 1 =" + (num * 1) + "<br>")
document.write(num + "* 2 =" + (num * 2) + "<br>")
document.write(num + "* 3 =" + (num * 3) + "<br>")
document.write(num + "* 4 =" + (num * 4) + "<br>")
document.write(num + "* 5 =" + (num * 5) + "<br>")
document.write(num + "* 6 =" + (num * 6) + "<br>")
document.write(num + "* 7 =" + (num * 7) + "<br>")
document.write(num + "* 8 =" + (num * 8) + "<br>")
document.write(num + "* 9 =" + (num * 9) + "<br>")
document.write(num + "* 10 =" + (num * 10) + "<br>")

// Question 6
var userSub1 = prompt("enter 1st subject name")
var userSub2 = prompt("enter 2nd subject name")
var userSub3 = prompt("enter 3rd subject name")
var totalPerSub = 100
var marks1 = +prompt("Enter obtained marks for " + userSub1)
var marks2 = +prompt("Enter obtained marks for " + userSub2)
var marks3 = +prompt("Enter obtained marks for " + userSub3)
var totalMarks = totalPerSub * 3
var totalObtMarks = marks1 + marks2 + marks3;
var per = (totalObtMarks / totalMarks) * 100

document.write("<h1> Marks Sheet</h1>")
document.write("<table border = '1'>" +
    "<tr>" +
    "<th>Subjects</th>" +
    "<th>Total Marks</th>" +
    "<th>Obtained Marks</th>" +
    " <th>Percentage</th>" +
    "</tr>" +

    " <tr>" +
    " <td>" + userSub1 + "</td>" +
    " <td>" + totalPerSub + "</td>" +
    "<td>" + marks1 + "</td>" +
    "<td>" + (marks1/totalPerSub*100) + " % "+ "</td>" +
    " </tr >" +

    // subject 2
    
    " <tr>" +
    " <td>" + userSub2 + "</td>" +
    " <td>" + totalPerSub + "</td>" +
    "<td>" + marks2 + "</td>" +
    "<td>" + (marks2/totalPerSub*100) + " % "+ "</td>" +
    " </tr >" +

    // subject 3
    " <tr>" +
    " <td>" + userSub3 + "</td>" +
    " <td>" + totalPerSub + "</td>" +
    "<td>" + marks3 + "</td>" +
    "<td>" + (marks3/totalPerSub*100) + " % "+ "</td>" +
    " </tr >" +

     " <tr>" +
    " <th>" + "</th>" +
    " <th>" + totalMarks + "</th>" +
    "<th>" + totalObtMarks  + "</th>" +
    "<th>" + (totalObtMarks/totalMarks*100) + " % "+ "</th>" +
    " </tr >" +
    "</table > ")

    // Chapter 9-10
    // ques 1
var userCity = prompt("Enter the City name (capitalize 1st word as:Karachi)")
if (userCity == "Karachi"){
alert ("Welcome to the city of lights")
}else{
    alert("invalid city")
};

// ques 2
var userGen = prompt( "Enter your Gender (in lower case)")
if (userGen == "male"){
    alert("Good morning Sir")
}else if(userGen == "female"){
    alert("Good morning Ma,am")
}else{
    alert("Invalid Gender. Please type male or female" )
};

// ques 3
var userSig = prompt("Enter the signal color (in lower case) to check what to do")
if (userSig == "yellow"){
    alert("Ready to move")
}else if (userSig == "red"){
    alert ("Must Stop")
}else if (userSig == "green"){
    alert("Move now")
}else{
    alert("Invalid color. choose from green red or yellow")
};

// ques 4
var fuelRem = +prompt( "Enter the remaining fuel in litres")
if (fuelRem < 0.25){
    alert("Please refill the fuel in your car")
}else{
    alert("No need to refill")
}

// Ques 5     (a)
var a = 4;    //output: given condition for variable a is true
if(++a === 5){
    alert("given condition for variable a is true")
}
 // 5(b)
var b = 82;
if(b++ === 83){
    alert("given condition for variable b is true")
}

// 5(c)
var c = 12; //2 and 4 is true
if(c++ === 13){
    alert("condition 1 is true")
}
if(c === 13){
    alert("condition 2 is true")
}
if(++c < 14){
    alert("condition 3 is true")
}
if(c === 14){
    alert("condition 4 is true")
};

// 5(d) //cost equals
var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;
if(totalCost === labourCost + materialCost){
    alert("The cost equals")
};
 //5 (e)
 var trueOrfalse = prompt("Type true or false")
if(trueOrfalse=="true"){ //True
    alert("true is" +" True");
}
else if(trueOrfalse=="false"){
    alert("false is" +" False")
}else{
    alert( "Please type 'true' or 'false'")
};
//5 (f)
var big = prompt("What is smaller car or cat")
if ("car" < "cat"){
    alert ("car is smaller than cat")
}else{
    alert ("cat is bigger than car")
}

//ques 6
var marksObt1 = +prompt ("Enter the marks obtained in subject 1")
if(marksObt1>100){
    alert("invalid marks")
}
var marksObt2 = +prompt ("Enter the marks obtained in subject 2")
if(marksObt2>100){
    alert("invalid marks")
}
var marksObt3 = +prompt ("Enter the marks obtained in subject 3")
if(marksObt3>100){
    alert("invalid marks")
}
var totalMarksObt = marksObt1 + marksObt2 + marksObt3
var totalMarksOfAll = 300
var resPer = totalMarksObt/totalMarksOfAll * 100
document.write (" <h1> MARKSHEET </h1>")
document.write("Total Marks : " + totalMarksOfAll +"<br>")
document.write("Marks obtained : " + totalMarksObt + "<br>")
document.write("Percentage : " + resPer +"<br>")
 if(resPer >= 80){
    document.write("Grade: A+" + "<br>")
    document.write("Remarks: Excellent")
    "</tr>"
}else if (resPer >= 70) {
    document.write("Grade: A" +"<br>")
    document.write("Remarks: Good")
}else if (resPer >= 60){
    document.write( "Grade: B" +  "<br>")
    document.write("Remarks: You need to improve")
}else if( resPer < 60){
    document.writeln("Grade: Fail"+ "<br>")
    document.write("Remarks: Sorry")
}
// ques 7
var secretNum = 3;
var userGuess = +prompt("Guess the secret number (between 1 to 10)")
if(userGuess == secretNum){
    alert("Bingo! Correct answer.")
}else if(userGuess === secretNum + 1){
    alert("Close enough to the correct answer.")
}else{
    alert("Please try again!")
}
// ques 8
divNum = +prompt("Enter the number to check if number is divisible by 3")
if(divNum % 3 == 0){
    alert(divNum + " is divisible by 3")
}else{
    alert(divNum + " is not divisible by 3")
}

// ques 9
var userEven = +prompt("Enter the number to check if it is even or odd");
if(userEven % 2 == 0){
    alert(userEven + " is an even number")
}else{
    alert(userEven + " is an odd number")
};

// ques 10
var tempInp = +prompt("Enter the temperature in number")

if(tempInp>40){
    alert("It is too hot outside")
}else if(tempInp>30){
    alert("The Weather today is Normal")
}else if(tempInp>20){
    alert("Today's Weather is cool")
}else if(tempInp>10){
    alert("OMG! Today's Weather is so Cool")
}

// ques 11
var inp1 = +prompt("Please enter first number to perform the operation")
var inp2 = +prompt("Please enter second number to perform the operation")
var opr = prompt("Enter operation you want to perform + , _ , * , / , %")
var resultOpr
if(opr == "+"){
    resultOpr = inp1 + inp2
}else if(opr == "-"){
    resultOpr = inp1 - inp2
}else if(opr == "*"){
    resultOpr = inp1 * inp2
}else if(opr == "/"){
    resultOpr = inp1 / inp2
}else if(opr == "%"){
    resultOpr = inp1 % inp2
}else{
    alert("please enter valid operation (+ , - , * , / ,%)")
    resultOpr = "invalid"
}
alert("Result: "+ resultOpr)







