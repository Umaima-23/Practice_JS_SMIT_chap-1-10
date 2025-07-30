// 1. Declare 3 variables in one statement. 
var a = 1; var b = 2; var c = 3;
// 2. Declare 5 legal & 5 illegal variable names. 
/* ILLEGAL:
1-variables cant start with numeric 
2-only numbers cant be the name of variable
3-no space is accepted betwwen 2 words as (my name!)
4-no special characters can be used in name of variable
5-variable names cannot contain hyphen -
*LEGAL
1-any character except 1st can be numeric
2-underscore is allowed anywhere (_)
3-Dollar sign alllowed anywhere($)
4-any letter after 1st can be capital
5-camelCase is preferrable
 */
// legal
var userName;
var my_name;
var $money;
var abc1;
var _value;

/* illegal
var 123
var hello world 
var 1ab 
var ab%c
var #12*/

// 3. Display this in your browser
document.write("<h1>RULES FOR NAMING JS variables</h1> <br>"
   +   "Variable names can only contain numbers, $,  and__. For example : $my _1stVariable <br>"
+ " Variables must begin with a letter, $ or __. For example :$name,_name or name <br>"
+"Variable names are case sensitive <br>"
+"Variable names should not be JS keywords" )

