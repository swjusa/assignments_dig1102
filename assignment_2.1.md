1. Find at least three different methods getting the date for today, tomorrow and yesterday using the date object.  
   	getDate() //Returns the day of the month (from 1-31)
	getDay()	//Returns the day of the week (from 0-6)
	getFullYear()	Returns the year (four digits)

	YESTERDAY-- date.setDate(date.getDate() - 1);?
	
	TOMORROW-- var day=new Date();
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";

	document.getElementById('tomorrow').innerHTML = weekday[day.getDay() + 1];

2. What does the Math.ceil() built-in function do? 
      Round a number upward to it's nearest integer:
      Math.ceil(1.4)
      The result will be: 2  

   What is the default return value?  
      Default return value always goes upward to next whole #.
   What are some other built-in functions that do something similar? 
      Math.floor()  
      Math.round()

3. What is the Nan type in Javascript and what does it stand for? 
      NAN means NOT A NUMBER.
   When would you encounter it? 
      This property indicates that a value is not a legal number.
      The NaN property is the same as the Number.Nan property.
      Tip: Use the isNaN() global function to check if a value is a NaN value.

4. How would I find the largest possible value that can be represented in Javascript? 
      MAX_VALUE	Returns the largest number possible in JavaScript
   What about the smallest?
      MIN_VALUE	Returns the smallest number possible in JavaScript 