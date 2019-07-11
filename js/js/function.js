/*
function sum(a,b){
    return a + b;
}

console.log(sum("My", "World"));

function substract(a,b){
    if(b > a){
        return b - a;
    }
    return a - b;
}

console.log(substract(10,100));

function multi(c,d){
    return c * d;
}
console.log(multi(10,10));


function divide( e, f){
    return e / f;
}
console.log(divide(50,2));

//Assiment ask 2 question on number and use function to show grater than and less than

*/
/*
function fullName(a){
    var name = "Manila" + " " + a;
    return name;
}
var lastName = "Gurung"
console.log(fullName(lastName));
*/



function takeTest(){
    var question1 = prompt("Do you like orange ?");
    var question2 = prompt("Do you like furits");
    console.log("Orange", question1)
    console.log("Fruits", question2)
}

function askUserForInput(){
    var answer = confirm("Do you want to take quiz")
    if (answer){
        console.log(answer)
        takeTest()
    }
    else{
        alert("Goodbye");
    }
}

askUserForInput()

function test (){
    var firstnum = prompt("Enter a number");
    var secondnum = prompt("Enter second number");

    console.log("Second input is greater than", firstnum);

    if(firstnum > secondnum){
        return secondnum;
    }
    else{
        return firstnum;
    }
        
}

function inputNum(){
    var ans = confirm("Which is greater");
    if(ans){
        console.log(ans);
        test()
    }
    else{
        alert("Thank you");
    }
}


console.log(inputNum());
/*
function addnum (){
    var firstnum = prompt("Enter a number");

}
*/

