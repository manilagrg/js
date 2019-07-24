var continer = document.getElementsByClassName("continer")

var header = document.getElementById("header")

var firstContiner = document.querySelector(".continer")

var parapraph = document.querySelectorAll('p');

var allDivs = document.querySelectorAll('div')

//var allHeadings = document.getElementsByTagName("h1")
var firstHeader = document.querySelector("#header h1")

var herf = document.querySelector("a")

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

function myFunction(){
    //document.getElementById('header').style = "background-color: black; color: white"
    header.style = "background-color: black; color: white"
}

function changeColor(){
    //document.querySelectorAll('p')[2].style = "background-color: red"
    parapraph[2].style = "background-color: black; color: white"
}

var body = document.getElementsByTagName("body")
function bodyColor(){
    //document.getElementsByTagName("body")[0].style = "background-color: red"
    body[0].style = "background-color: green"
}