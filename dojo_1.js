var assert = require("assert");

//assert(1 + 1 == 1, '1 + 1 does not equal 1');
//assert.equal(1, 1 + 1, '1 + 1 does not equal 1');

/**
* four functions with two parameters:
* - addition
* - subtraction
* - multiplication
* - division
*
* Must accept positive and negative Numbers (int or
* float) AND zero. Must not make an error!
*/
 
/**
* testing addition():
* one | two | out
* ====+=====+====
* +1 | +1 | +2
* +1 | +0 | +1
* +1 | -1 | +0
* -1 | +1 | +0
* -1 | +0 | -1
* -1 | -1 | -2
* +0 | +1 | +1
* +0 | +0 | +0
* +0 | -1 | -1
*/


var myVar=addFunction();
var add = addition(a, b) {
     return (a+b);
}

function addFunction(a,b) {
    var a=1;
    var b=1;
    return (a+b);
}

var sub = function(a, b) {
     return (a-b);
}

function subFunction(a,b) {
    var a=5;
    var b=4;
    return (a-b);
}

var Times = functionTimes(a, b) {
     return (a*b);
}

function functionTimes(a,b) {
    var a = 4;
    var b = 3;
    return (a*b);
} 

var Divide = function(a, b) {
     return (a/b);
}

function divFunction(a,b) {
    var a=10;
    var b=5;
    return (a/b);
}

//These are addition tests
assert.equal(2,addition(1,1));
assert.equal(1,addition(1,0));
assert.equal(0,addition(1,-1));
assert.equal(0,addition(-1,1));
assert.equal(-1,addition(-1,0));
assert.equal(-2,addition(-1,-1));

//This is a subtraction test
assert.equal(0,sub(1,1));
assert.equal(1,sub(1,0));
assert.equal(2,sub(1,-1));
assert.equal(-1,sub(0,1));
assert.equal(0,sub(0,0));

assert.equal(0,multi(0,1));
