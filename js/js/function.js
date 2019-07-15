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
*/

/*
function test (){
    var firstnum = prompt("Enter a number");
    var secondnum = prompt("Enter second number");

    

    if(firstnum > secondnum){
        console.log("First input is greater than", secondnum);
        return secondnum;
    }
    else{
        console.log("Second input is greater than", firstnum);
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

inputNum();
*/

function go(name, age){
    if (age <= 20){
        return name+`!`;
    }
    
        return name;
}
 var age = go("Manila", 19);
 console.log(age)


function divide(a, b){
    return a/b;
}
function sum(a, b){
    return a + b;
}

function subract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function modulo(a, b){
    return a % b;
}


function takeTest(){
    var question1 = prompt("Enter first Number");
    var question2 = prompt("Enter second Number");

    var question1 = parseInt(question1);
    var question2 = parseInt(question2);

    console.log(question1)
    console.log(question2)


    console.log("The division is", divide(question1,question2));
    console.log("The sum is", sum(question1,question2));
    console.log("The sub is", subract(question1,question2));
    console.log("The multiply is", multiply(question1,question2));
    console.log("The modulo is", modulo(question1,question2));
}

takeTest()

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



function people(name, eyeColor, age){
    for(var a = 0; a < name.length; a++){
      console.log(name[a]);
    }
    return{
    name: name,
    eyeColor: eyeColor,
    age: age,
 };
}
    let person01 = people(["Manila", "Brown", 33]);
    let person02 = people(["Neeta", "Black", 34]);
    let person03 = people(["Dolma", "Black", 27]);





function product(name, brand, sku, price,description){
    for(var a = 0; a < name.length; a++){
        console.log(name[a])
        
    }
    return{
        name: name,
        brand: brand,
        sku: sku,
        price: price,
        description: description
    }
}

var product01 = product(["Pant", "Levis", 5, 1000, "Skinny Jeans"])

var product02 = product(["Blouse", "Gucchi", 6, 1500, "Floweral Blouse"])
//var product03 = product("Trouser", "Jennifer", 5, 800, "Crop Trouser")
//var product04 = product("Vest", "Jocky", 5, 900, "Sendo Vest")
//var product05 = product("Tshirt", "Versca", 5, 2000, "Printed Shrit")


function doesExit (nums, num){
    for(var a = 0; a < nums.length; a ++){
        if( nums[a] === num){
            return true;
        }
    }
        return false;
}



var exit = doesExit([1,5,70,10], 20);
console.log(exit)

