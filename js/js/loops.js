
var initializer = 1


for(initializer; initializer < 100; initializer= initializer +1){
    console.log(initializer)

    if(initializer % 5 == 0){
        console.log("Divisible by five")
    }
}

for(var i = 0; i < 10; i++){
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
var ins = 1;
//Condition passed on while
while(ins < 20){
    console.log(ins)

    if(ins % 5 == 0){
        console.log("Divisible by five")
    }
    //The stepper
    ins= ins +1
}

/*

first we initialize a variable
//on while loop we pass the condition
//we write the code we want to execute on the loop
//and finally we provide stepper
*/