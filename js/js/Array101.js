

var arr = [1, 2, 3, "Ram", "shyam", "sita"];

var pos = arr.indexOf("sita")// indexOf is stand for to find out index number of an elements
console.log(pos)

console.log(arr[0]);
console.log(arr[3])
console.log(arr.length)
console.log(arr[arr.length - 1]);
/*
var newArr = [];

newArr.push ("hari");
newArr.push (5);
newArr.push ("neets");

newArr.unshift("hello");
newArr.unshift("world");

var test = [];


for(var a = 0; a <= 20; a++){
    test.push(a)
}
console.log(test);

var b = 0;
while( b <= 20){
    test.push(b)
    b++
}
console.log(test)


var b = 1;

for(b; b < 20; b++){
    if(b % 3 == 0){
        test.push(b)
    }
}
console.log(test)


for(b; b <= 20; b++){
    test.unshift( b * 2)
}
console.log(test)


for(var n = 0; n < 20; n++){
    console.log(test.push(n))
    if( n % 3 == 0){
        console.log("Divisable by Three")
    }
}

*/


var test = []
for(var a = 1; a<=50; a++){
    test.push(a)
}
//test.pop()
/*
for(var b = 1; b<=10; b++){
    test.pop()
}


for(var c = 1; c<=10; c++){
    test.shift(c)
}
*/

console.log(test.length - 10)
console.log(test.splice(39, 5))


var multi = [
    ["Mango", "Banana", "Apple", "Strawberris"],
    [10,20,30,40,50,60,70],
    ["chicken", "Mutton", "Tuna", "Fish", "Salmon"],
    ["City", "village", "country"],
    ["Harry", "Potter", "Twilights", "Batman"]
]

var indexnum = multi.indexOf("Tuna")
console.log(indexnum)

/*
for(var d = 0; d < multi.length; d++ ){
    //console.log(multi[d])
    for(var e = 0; e < multi[d].length; e++){
        console.log(multi[d][e])
    }
}
*/
//another way to 
var rows = multi.length;
for( var d = 0; d < rows; d++){
    //console.log(multi[d])
    var indexRows = multi[d].length;
    for(var e = 0; e < indexRows; e++){
        console.log(multi[d][e])
    }
}

