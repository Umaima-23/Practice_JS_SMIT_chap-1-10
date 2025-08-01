// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var a = 3;
var b = 5;
var add = a+b;
document.write( "Sum of " + a +" and " + b +" is " + add + "<br>") 

/*2. Repeat task1 for subtraction, multiplication, division & 
modulus.*/ 
// subtraction
var sub = a-b;
document.write( "Subtraction of " + a +" and " + b +" is " + sub + "<br>") 
// Multiplication
var mul = a*b;
document.write( "Multiplication of " + a +" and " + b +" is " + mul + "<br>") 
// Division
var div = a/b;
document.write( "Division of " + a +" and " + b +" is " + div + "<br>") 
// Modulus
var mod = a%b;
document.write( "Modulus of " + a +" and " + b +" is " + mod + "<br> <br>") 

/*3. Do the following using JS Mathematic Expressions */
// a. Declare a variable.
var math 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + math + "<br>") 
// c. Initialize the variable with some number. 
math = 5;
// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value is: "+ math + "<br>")
// e. Increment the variable. 
math++
// f. Show the value of variable in your browser 
document.write(math +"<br>")
// g. Add 7 to the variable. 
var math = math + 7
// h. Show the value of variable in your browser 
document.write("Value after addition is: " + math +"<br>")
// i. Decrement the variable.
math--
// j. Show the value of variable in your browser
document.write("Value after decreament is: " + math +"<br>")
// k. Show the remainder after dividing the variable’s value by 3. 
var math = math % 3
document.write("Remainder after diving by 3 is: " + math + "<br><br>")
// l .
var output = math
document.write ("The reamainder is:" + output +"<br>")

// Question 4 
/* 4. Cost of one movie ticket is 600 PKR. Write a script to 
store 
ticket price in a variable & calculate the cost of buying 5 
tickets 
to a movie.*/
var ticketPrice = 600
document.write("The total cost to buy 5 tickets is: " + ticketPrice*5 +"<br>")

// 5. Write a script to display multiplication table of any number in your browser.
document.write("<h1> TABLE OF 5</h1> ")
document.write("5 * 1 = 5 <br> 5 * 2 = 10 <br> 5 * 3 = 15 <br> 5 * 4 = 20 <br>  5 * 5 = 25 <br>  5 * 6 = 30 <br> 5 * 7 = 35 <br>  5 * 8 = 40 <br>  5 * 9 = 45 <br>  5 * 10 = 50 <br>   ")

// 6. The Temperature Converter
document.write("<h1>The Temperature Converter</h1>")
var celsius= 23 ;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius +" degree celsius" + " is equal to" + fahrenheit +" degree fahrenheit + <br>");
var celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit +" degree fahrenheit" + " is equal to " + celsius +" degree celsius + <br>" );

// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
var priceOfItem1 = 500
var priceOfItem2 = 600
var orderedQuantityOfItem1 = 5
var orderedQuantityOfItem2 = 3
var shippingCharges = 200
var totalCost = priceOfItem1 *orderedQuantityOfItem1 + priceOfItem2 * orderedQuantityOfItem2 + shippingCharges
document.write("<h1>SHOPPING CART</h1>")
document.write("Price of Item 1 is " + priceOfItem1 +"<br>");
document.write("Quantity of Item 1 is " + orderedQuantityOfItem1  +"<br>");
document.write("Price of Item 2 is " + priceOfItem2  +"<br>");
document.write("Quantity of Item 2 is " + orderedQuantityOfItem2  +"<br>");
document.write("Shipping charges "+ shippingCharges+"<br> <br>");
document.write("Total cost of your order is "+ totalCost);

/* 8. Store total marks & marks obtained by a student in 2 
variables. Compute the percentage & show the result in 
your browser*/
document.write("<h1>Mark Sheet</h1>")
var totalMarks = 550;
var obatainedMarks = 530;
var studentsPercentage = obatainedMarks / totalMarks *100
document.write("Total marks: "+ totalMarks +"<br>");
document.write("Obtained marks: "+ obatainedMarks +"<br>");
document.write("Percentage:" + studentsPercentage + " %" + "<br><br>");

/*9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression. */
document.write("<h1> Currency in PKR</h1>")
var totalCurrency = (10*104.80 + 25*28)
document.write ("Total currency in PKR:" + totalCurrency + "<br> <br>")

/*  10. Write a program to initialize a variable with some 
number and do arithmetic in following sequence: 
a. Add 5 
b. Multiply by 10 
c. Divide the result by 2 
Perform all calculations in a single expression  */
document.write("<h1> Value after calculating in one expression</h1>")
var int = 5
var calc = int + 5 * 10 / 2
document.write("The value is " + calc + "<br> <br>")
/* 11. The Age Calculator: Forgot how old someone is? 
Calculate it! 
a. Store the current year in a variable. 
b. Store their birth year in a variable. 
c. Calculate their 2 possible ages based on the stored 
values. */
document.write("<h1> Age Calculator</h1>")
var currentYear = 2025
var birthYear = 2006
var age = currentYear - birthYear
document.write("Current Year: " + currentYear + "<br>")
document.write("Birth Year : " + birthYear + "<br>")
document.write("Your age is: "+ age + "<br> <br>")
/* 12. The Geometrizer: Calculate properties of a circle. 
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and 
output 
Calculate the area based on the radius, and output*/

document.write("<h1> The Geometrizer</h1>")
var radius = 40;
var circum = 2*3.142*radius;
var area = 3.142*radius*radius;
document.write("Radius of a circle is: " + radius + "<br>")
document.write("The circumference is : " + circum + "<br>")
document.write("The area is: " +  area + "<br>")

/*13. The Lifetime Supply Calculator: Ever wonder how 
much a “lifetime supply” of your favorite snack is? 
Wonder no more. 
a. Store your favorite snack into a variable 
b. Store your current age into a variable. 
c. Store a maximum age into a variable. 
d. Store an estimated amount per day (as a number). 
e. Calculate how many would you eat total for the rest of 
your life.*/

document.write("<h1> The Lifetime Supply Calculator</h1>");
var favSnack = "donut"
var currentAge = 15
var maxAge = 65 
var snackADay = 3
var day_year = 365
var totalSnack = (maxAge - currentAge ) * day_year * snackADay
document.write("Favourite Snack "+ favSnack + "<br>")
document.write("Current Age "+ currentAge + "<br>")
document.write("Estimated Maximum Age "+ maxAge + "<br>")
document.write(" Amount of snacks per Day "+ snackADay + "<br>")
document.write("  You will need "+ totalSnack + "to last until the ripe old age of" + maxAge +"<br>")
