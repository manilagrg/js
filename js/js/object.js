var product = [{
    name: "Tshirt",
    color: "Black",
    size: "Large"
}]

for(a = 0; a < product.length; a++){
    console.log(product.length[a])
}
//to change the name 
product.name = "Blouse"

console.log(product[0].name)
console.log(product[0].color)
console.log(product[0].size)


var newProduct = {
    name: "Sweat Pants",
    brand: "ADIDDAS",
    description: "This is the pants for daily use",
    size: {
        s : 10,
        m: 5,
        l: 15
    },
    sku: 15,
    price: 1500,
    offer: null,
    color: ["Black", "White", "Gray"],
    productCode: "SWP"

}

console.log(newProduct.name)
console.log(newProduct.size.m)
console.log(newProduct.color)
for(var i = 0; i < newProduct.color.length; i++){
    console.log(newProduct.color[i])
}

var obj = {
    name: "Manila",
    surName: "Gurung",
    bio: "Lorem ipsum dolor sit amet",
    fullName: function(){
        return this.name + " " + this.surName
    }
}

/*
var obj = {
    name: "John",
    lastName: "Doe",
    bio: "Lorem ipsum dolor sit amet",
    fullName: function(){
        return this.name +" "+ this.lastName
    }
}
*/

//These are same thing
// firstProduct = firstProduct / 2
// firstProduct /= 2

// firstProduct = firstProduct + 2
// firstProduct += 2


function sum(a,b){
    return a+b;
}
var a = 1;
var b = 2;
console.log("The sum function", sum(a,b));

console.log(sum("This","World"));


function substract (a,b){
    if(b > a){
        return b - a;
    }
    return a - b;
}

console.log(substract(10,6));


function substract(a,b){
    return a - b;
}
console.log(substract(5,10));

function sum(a,b){
    return a+b;
}

console.log("The sum function", sum("a","b"));
console.log(sum("Hello", "World"))

function multi(c,d){
    return c * d;
}
console.log(multi(10,10));


function divide( e, f){
    return e / f;
}
console.log(divide(50,2));





