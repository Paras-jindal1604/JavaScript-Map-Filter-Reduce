
//?  map  -  it uses a callback function and can modify the result. it returns an array.

const arr = [1,2,3,4,5];

const result = arr.map( num => num*num);
console.log(result);

//^ it also take upto three arguments :  number, index, array

// now we can modify the return statement of callback function using map.



//^ we can use map and filter both in chain like manner - 

console.log( arr.filter(num=> num%2 == 0).map(num => num*num));

// filter took out even numbers and map make their squares.





