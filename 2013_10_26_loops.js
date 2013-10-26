Loops are handy, if you want to run the same code over and over again, each time with a different value.  Loops can execute a block of code as long as a specific condition is true.

// Loops Example:
Instead of writing:
document.write(cars[0] + "<br>";
document.write(cars[1] + "<br>";
document.write(cars[2] + "<br>";
document.write(cars[3] + "<br>";
document.write(cars[4] + "<br>";
document.write(cars[5] + "<br>";

you can write:
for (var i=0; i<cars.length; i++)
{
document.write(cars[i] + "<br>";
}

//JavaScript supports different kinds of loops;
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true
    
// The for Loop- often the tool you will use when you want to create a loop.

// The for loop has the following syntax:
for (statement 1; statement 2; statement 3)
{
the code block to be executed
}

//Statement 1 is executed before the loop (the coe block) starts.
//Statement 2 defines the condition for the loop (the colde block).
//Statement 3 is executed each time after the loop (the code block) has been executed.

// For loop example:

for (var i=0; i<5; i++)
{
x=x + "The number is " +i+ "<br>";
}

//Statement 1 sets a variable before the loop starts (var i=0).
//Statement 2 defines the condition for the loop to run (i must be less than 5)
//Statement 3 increases a value (i++) each time the code block in the loop has been executed


//Statement 1 - normally you will use statement 1 to initiate the variable used in the loop (var i=0).  Statement 1 is optional.  You can initiate any (or many) values in statement 1:


for (var i=0, len=cars.length; i<len; i++)
{
document.write(cars[i] + "<br>";
}

//And you can omit statement 1 (like when your values are set before the loop starts

var i=2, len=cars.length;
for (; i<len; i++)
{
document.write(cars[i] + "<br>";
}


//Statement 2 - used to evaluate the condition of the initial variable. Statement 2 is optional.  If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.  **if you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end.


//Statement 3 -  often increases the initial variable.  Statement 3 is optional.
//Statement 3 could do anything.  The increment could be negative (i--), or larger (i=i+15).  It can also be omitted (like when you have corresponding code inside the loop):

var i=0, len=cars.length;
for (; i<len; )
{
document.write(cars[i] + "<br>";
i++;
}


//The For/In Loop- loops through the properties of on abject:

var person={fname: "john", lname: "doe" age:25};

for (x in person)
{
txt=txt + person(x);
}


//While loops- loops through a block of code as long as a specified condition is true.

//While Example:
//the loop will continue to run as long as the variable i is less than 5:

while (i<5)
{
x=x + "The number is" +i + "<br<";
i++;
}


//Do/While Loop- This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
The loop will always be executed at least once. Even if the condition is false, because the code block is executed before the condition is tested.

//Do/While Example:

do
{
 x=x + "The number is "  + i + "<br>";
 i++;
}
while (i<5);
}






    
    
    
    
    
    
    
    
    






