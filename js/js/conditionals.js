
var firstNum = 10; 
var secondNum = 20;

console.log(firstNum > secondNum);

if (firstNum > secondNum){
    console.log("The first number is grater");
} else {
    console.log("The second number is grater");
}

var question = prompt("Which is grater");
console.log(question);

var message = prompt("which is smaller")
console.log(message);

if (question.length == message.length){
    console.log("both are equal");

}
if (question.length > message.length){
    console.log("largest answer "+question);
    
} else {console.log("largest answer "+message);

}

//====================================================
var firstString = prompt("Enter a number");
var secondString = prompt("Enter another number");

console.log ("the types of varibles before the conversition", typeof firstString)

var firstNum = parseInt(firstString);
var secondNum = parseInt(secondString);

console.log ("the types of variables after the conversition", typeof firstNum)

if(firstNum > secondNum)
{
    console.log("The first num is greater with the value of ", firstNum)
} else{
    console.log("The second num is greater with the value of ", secondNum)
}

if(isNaN (firstNum)){
    console.error ("the number you enter is not valid")

}

if(isNaN (secondNum)){
    console.error ("the second number you enter is not valid")
}

if(isNaN(firstNum) || isNaN(secondNum)){
    if(isNaN(firstNum)){
        console.log("The first Number is not valid")
    }
    else{
        console.log("The second Numbr is not a number")
    }
    console.error("Both has to be a number")
}

//======================================================




