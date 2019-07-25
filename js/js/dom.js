var continer = document.getElementsByClassName("continer")

//var header = document.getElementById("header")

var firstContiner = document.querySelector(".continer")

var parapraph = document.querySelectorAll('p');

var allDivs = document.querySelectorAll('div')

var button = document.querySelectorAll("button")

//var allHeadings = document.getElementsByTagName("h1")
var firstHeader = document.querySelector("header")

//var herf = document.querySelector("a")

// creat the three paragarph and change the color accourdly 

//firstHeader.style = 'text-transform: uppercase'
firstHeader.style = 'text-transform: uppercase'
firstContiner.style = 'text-transform: lowercase'

//firstContiner.style = "background-color: yellow; color: green"
//continer[0].style = "background-color: gray; color: red"
/*
function changeBackground(){
    console.log("test change bg",  allDivs[allDivs.length - 1])
    allDivs[allDivs.length - 1].style = 'background: yellow; color: green'
} 

changeBackground()
*/

allDivs[1].style.font = "italic bold 15px arial"

function changeBackground(){
//document.getElementsByClassName('continer')[0].style = "background-color: red"
//document.querySelector('.continer').style = "background-color: red"
firstContiner.style = "background-color: red"

}
button[0].onclick = changeBackground

function myFunction(){
    //document.getElementById('header').style = "background-color: black; color: white"
    header.style = "background-color: black; color: white"
}
//////////==============================
//The following example are same only way of method is different 
/*
function changeColor(){
    //document.querySelectorAll('p')[2].style = "background-color: red"
    parapraph[2].style = "background-color: blue; color: white"
}

parapraph[2].onclick = changeColor
*/
button[2].onclick = function(){
    parapraph[2].style = "background-color: blue; color: white"
}

//==========================

/*
function bodyColor(){
    document.body.style = "background-color: green";
    
}
*/


//window.body[0].onclick = bodyColor

//create an page with nav bar, picture and to change the background onclick
//to redrict another page
//docment.location.assign(url)
//we can use onclick directly on js
firstHeader.onclick = myFunction
/*
allDivs[1].onclick = function(){
    console.log("click on header")
}
*/
function changeInfo(){
    allDivs[1].innerText = "Get some information about js and practice it"
}
allDivs[1].onclick = changeInfo
/*
firstHeader.onclick = function(event){
    //console.log(event.target)
    firstHeader.classList.add("header")
}
*/
/*
setInterval(function(count){
    //for(var i = 0; i < count; i++)
    console.log("Hello World")
    

}, 5000)
*/

//setTimeout(function(){alert ("Hello There!"), 2000})
//interval with loop

function changeHeader() {
    var heading = document.querySelector('header h1')
    heading.innerText = "Another Header"
}
document.querySelector('header h1').onclick = changeHeader

/*
document.oncontextmenu = function(event){
    event.preventDefault();
    //document.body.style = "background-color: blue"
}
*/

function navigateTo(event) {
    console.log(event)
    event.preventDefault();
    event.target.innerText = "Clicked"
    let href = event.target.getAttribute('href');
    //Set timeout fires the function after the duration
    setTimeout(function () {
        //Redirect to anothre page
        document.location.assign(href)
    }, 5000)
}

document.getElementById('navigate').onclick = navigateTo
document.getElementById('another').onclick = navigateTo

//Math.round to convert decimal on number
function randomnumber(max = 255){
    return Math.round(Math.random() * max)
}

//document.body.style = "background-color: rgb(randomnumber + "," + randomnumber + "," + randomnumber )"

// document.body.style = "background-color: rgb("+ randomnumber() + "," + randomnumber() + "," + randomnumber() +")" 


//document.body.style = `background-color: rgb(${randomnumber()},${randomnumber()},${randomnumber()})`
//`` back tick
function changbodybg(){
    //document.body.style = "background-color: rgb("+ randomnumber() + "," + randomnumber() + "," + randomnumber() +")" 
    document.body.style = `background-color: rgb(${randomnumber()},${randomnumber()},${randomnumber()})`
}

var stopInterval = setInterval(changbodybg, 1000)


button[3].onclick = function(){
    clearInterval(stopInterval)
}

setTimeout(function(){
    clearInterval(stopInterval)
},10000)



