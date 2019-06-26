
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


//ask 2 questions 
// get the size of each question
// show output of only largest answer