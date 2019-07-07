// Array
/*
let fruits = ["Apple", "Orange", "Mango", "Plum"]

console.log(fruits[0]);
alert(fruits[2]);
console.log(fruits[1]);
alert(fruits[3]);

//we can replace an elements
fruits[2] = 'Lemon';
console.log(fruits)//if we do console.log it will show on console, otherwise you need to type array name on console
// we can add an elements
fruits[4] = "Pears";
alert(fruits[4]);

console.log(fruits.length);

alert(fruits);// Alert will show as fellow (Apple Orange Mango Plum)


let arr = ["Apple", {name: "Jhon"}, true, function () {alert("Hello");}]
alert(arr[1].name);
arr[3]();

console.log(arr.length);
console.log(arr[arr.length - 1]);


console.log(fruits.pop());//pop stand Extracts the last element of the array and returns it
console.log(fruits);

fruits.push("Lemon")// push stand for Append the element to the end of the array:
fruits.push("Watermelon", "Dragon Fruit")


fruits.shift();//shift stand Extracts the first element of the array and returns it
console.log(fruits);

fruits.unshift("Banana");//unshift stand for Add the element to the beginning of the array:
fruits.unshift("Strawberries", "Blueberries", "Cherry");//push and unshift can be add multipal elements once


let animal = ["Chicken"]
let arr = animal;
console.log(animal == arr);
arr.push("Goat", "Fish");
//on above example (two variables reference the same array) which is true therefore you can use both array

let animals = ["Apple", "Orange", "Mango", "Plum"];

for(let a = 0; a < animals.length; a++){
    console.log(animals[a])
}

for( let animal of animals){
    console.log(animal);
}


let fruits = [];
fruits[123] = "Apple";
alert(fruits.length);
*/
/*
var arr = [];
for(var i = 1; i<=100; i++){
    arr.push(i)
}

for(var i = 0; i<=5; i++){// to extract more than one elements from last need to use loop
    arr.pop()
}

arr.splice(0, 9); //splice is stand for to extract more than one elements from array


console.log(arr[arr.length - 6]);
arr.splice(94, 5);// positon of index and number of removel item

*/


var multipalArr = [//multidimensional loops on array
    ["Kathmandu", "Nepal", "Pokhara"],
    ["Ram", "shyam", "Hari"],
    [1, 2, 3, 4]
];

for(var a = 0; a < multipalArr.length; a++){
    //console.log(multipalArr[a])
    for(var b = 0; b < multipalArr[a].length; b++){
        console.log(multipalArr[a][b]);
    }
}



var multi = [
    ["Harry", "Jhon", "Joe"],
    ["student", "doctor", "teacher"],
    [10,20,30],
    ["Kathmandu", "Pokhara", "Bhaktapur"],
    [1,2,3,4,5]
]

for(var i = 0; i < multi.length; i++){
    //console.log(multi[i])
    for(var c = 0; c < multi[i].length; c++){
        console.log(multi[i][c])
    }
}


