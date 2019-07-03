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
*/

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



