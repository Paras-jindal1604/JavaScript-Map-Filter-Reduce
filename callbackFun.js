

//? Callback Function -  A callback is a function passed as an argument to another function.

// This technique allows a function to call another function
// A callback function can run after another function has finished


//^ Note -  When you pass a function as an argument, remember not to use parenthesis.

function greet(fun){
    console.log("hello, batman");
    fun();
}

// if parameter is not called inside function body, it will not be a callback function.

function meet(){
    console.log("im a callback function.")
}

greet(meet);

// one function is send as argument to another, but the function in which it has passed :
// should have a function as parameter called inside functions body.



// we can write the whole function as argument in calling function.


function buoy(func){
    console.log("do or die");
    func();
}

buoy( function (){
    console.log("legends never die");
});


// we can also store function in a variable and then pass variable in another function.

const x = function(){
    console.log("sun");
}

function night(funct){
    console.log("moon");
    funct();
}

night(x);






