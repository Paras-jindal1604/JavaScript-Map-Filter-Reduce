
//? reduce - takes a callback function and initialization to perform some operations.

//^ syntax - 

// array.reduce( callbackfun, initialization);
// Array.reduce( (acc, curr) =>{
         // fun body
//     return acc;
// }, initialization);


// it takes two parameters, one is callback function and other is initialization.
// in callback function, it takes two parameters - accumulator and current value.
// current value is taken from each array element at once.
// accumulator is initialized from initialization and every value obtained in body is stored in acc.
// the callback function returns final value of acc.


const arr = [10,20,30,40,50];

const res = arr.reduce( (acc,curr)=>{
    console.log(acc, curr);
    acc += curr;
    return acc;
}, 0);

// const res = arr.reduce( (acc,curr)=> acc+curr,0);

console.log(res);

// it is just like recursion inside function because value of acc is returned to function at each step.



//^ object.hasOwnProperty() check for a key in object and return true if present else return false.

// ----------------------------------------------------------------------

// Q -> consider the array and return output in form of object with values as total occurence of keys in array.


const array = ["apple","mango","orange","mango","apple","grapes","apple","orange","mango"];

const result = array.reduce( (acc,curr) =>{
    if(acc.hasOwnProperty(curr)){
        acc[curr]++;
    }else{
        acc[curr] = 1;
    }
    return acc;
}, {} );

// this can also be written using ternary operator -

// const result = array.reduce((acc,curr)=>{
//     acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] = 1;
//     return acc;
// }, {} )


console.log(result);

// Approach
// 1. need an object in answer, so initialize acc with empty object.
// 2. using hasOwnProperty to check if acc object contains curr key
// 3. if it contains then increase its value by one 
// 4. if it dont contains then assign 1 to it






