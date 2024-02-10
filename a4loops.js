//call back functions 

// function square(a){
//     return a*a;
// }

// function squaresum(a, b){
//     const val1 = square(a);
//     const val2 = square(b);
//     return val1+val2;
// }

// console.log(squaresum(1,2));


//call back function

function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function sumOfSomething(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1+val2;
}

console.log(sumOfSomething(2,3, square));
console.log(sumOfSomething(4,5, cube));


// anonymous function





