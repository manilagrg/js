

var arr = [1, 2, 3, "Ram", "shyam", "sita"];

console.log(arr[0]);
console.log(arr[3])
console.log(arr.length)
console.log(arr[arr.length - 1]);

var newArr = [];

newArr.push ("hari");
newArr.push (5);
newArr.push ("neets");

newArr.unshift("hello");
newArr.unshift("world");

var test = [];

/*
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

var b = 0;

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
*/

for(var n = 0; n < 20; n++){
    console.log(test.push(n))
    if( n % 3 == 0){
        console.log("Divisable by Three")
    }
}
