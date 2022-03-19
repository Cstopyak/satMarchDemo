

// single comment

/*
multi-line comment
hey
whats 
up
*/

// data types

//array
 var myArray = [1,2,3,4,5,6,7]
             // 0 1 2 3 4 5 6
console.log(myArray)

//strings
var myString = "Good morning , after noon";
console.log(myString)


// nums
 var myNum = 7;

 console.log(" my lucky number is = " + myNum)
console.log(myNum)

 //objects

 var myObj= {firstName:"mary", lastName:"jane", age:30}
 console.log(myObj)


 // find max [3,4,5,7,10]

 //iteration -> forloop
 //var named max
 //check something -> if statement

function maxInArray(arr){
    var max = arr[0]

    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }

    }
    return max
}
 console.log(maxInArray([3,4,5,7,10]))

