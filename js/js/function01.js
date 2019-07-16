// Write down some notes before you start learing or to do practice
//.reduce is stand for run all the 

var arr = [1,2,3,4,5,];
var result1 = arr.reduce (function(a,b){
    return(a * b)
})



//these two example are same just the method of writing is different

function newArr (firstnum, secondnum){
    return firstnum * secondnum;
}
var result2 = arr.reduce(newArr)

//.filter is stand for extract certain value of 
var testArr = [1,2,3,4,5,6,7,8,9,10];

function testNum(value){
    if(value > 3 && value < 8){
        return true;
    }
    return false;
}

var filterData1 = testArr.filter(testNum)
console.log(filterData1)

//These two example are same the differences are in 1st example we write function outside, n in 2nd we did it inside

var result = testArr.filter(function(value){
    if(value > 3 && value < 8){
        return true;
    }
    return false;
})

console.log(result);

//write down the process and the method on notebook

var newArr1 = []
for(var i = 0; i < 100; i++){
    newArr1.push(i);
}
function nums(value1){
    if(value1 > 40 && value1 < 70){
        return true;
    }
    return false;

}

var filterData2 = newArr1.filter(nums);
console.log(filterData2)

//creat an array with name and count character with less than 4 and grater than 6
//practice with all other example for cahracter count


var personName = ["Jhon", "Tyalor", "Sam", "Bronuo", "James"];


function nameCharacter(value){

    if(value.length > 4 && value.length < 6){
        return true;
    }
    return false;
}
var filterName = personName.filter(nameCharacter)

//===========================

var characterLength = personName.filter(function(value){
    if( value.length > 3 && value.length < 6){
        return true;
    }
    return false;
})


var test = []

for(var i = 0; i <= 100;i++){
    test.push(i)
}

//Filtering out the datas

var filteredData = test.filter(function(value){
    if(value <= 30 && value > 9){
        return true
    }
    return false
})
 
