
//? filter  -  it uses a callback function to filter out data from array. It returns an array.

const arr = [11,22,33,44,55];

// const result = arr.filter( num => { return num%2 == 0 });

// no need to write return statement in arrow function.

const result = arr.filter( num => num%2==0);

console.log(result);

//^ it also take upto three arguments :  number, index, array


//--------------------------- an important case of filter

// filter out students whose marks are more than 50

const a = [
    {name:"rohan", age : 23, marks : 70},
    {name: "sohan", age : 30, marks : 40},
    {name :"mohan", age : 19, marks : 55},
    {name : "mohit", age : 25, marks : 90}
];

// const res = a.filter( (obj) => {
//     return obj.marks > 50;
// })

// console.log(res);


//^ this can be made shorter as : 

// const res = a.filter( obj => obj.marks>50);
// console.log(res);


//^ we can also destructure object in function argument to get only that value we needed as :

const res = a.filter( ({marks}) => marks>50);
console.log(res);
