"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Andy';
// have to check first w/ unknow type before assign value
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {} is never type too
}
var result = generateError('An error occurred!', 500);
console.log(result);
