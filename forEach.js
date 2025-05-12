
//? for-each - it expects a callback function and take each value of array as function argument one at a time.

const arr = [11,22,33,44,55];

arr.forEach(function(num){
    console.log(num);
});

// it takes each array element as callback function argument one at a time.



// we can also use arrow function in for-Each

let a = [10,20,30];

a.forEach( (num,idx)=> console.log(num, idx));

// by using arrow function, we can write it in single line.

//^ if we take 2 arguments then second value will be index of array.

//^ if we take 3 arguments then third value will be array reference : num, index, array



// for each doesnot return anything.

