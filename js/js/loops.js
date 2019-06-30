
var initializer = 1


for(initializer; initializer < 10; initializer= initializer +1){
    console.log(initializer)

    if(initializer / 5 == 0){
        console.log("Divisible by five")
    }
}

for(var i = 1; i < 10; i++){
    console.log(i, i *2)
if(i % 2 == 0){
    console.log("even number")
}
}

for(var a = 10; a <= 20; a ++ ){
    console.log(a)
}


console.log('==============================================')
//Initialized the variable to pass onto the loop
var a = 1;      
//Condition passed on while
while(a < 20){
    console.log(a)
    if(a % 2 == 0){
        console.log("Divisiable by two")
    }
//The stepper
    a = a +1 
}

var n = 5;
while(n){
    alert(n);
    n--;
}

var ans = 1

for( ans; ans <= 20; ans = ans +1){
    console.log(ans)
    if(ans % 3 == 0 ){
        console.log("Odd number")
    }
}

var n = 1;
while(n <= 20){
    console.log(n, n * 2)
    if(n % 3 == 0){
        console.log("Odd number")
    }
    //add stepper
    n = n +1
}
       
    
    

/*

first we initialize a variable
//on while loop we pass the condition
//we write the code we want to execute on the loop
//and finally we provide stepper
*/