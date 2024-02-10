// console.log("Hello World");
// let firstname = "Ritik";
// let age = 20;
// let ismarried = false;

// console.log("This person name is "+ firstname + " and his age is "+age 
// );


// let ans = 0;
// for(let i=0; i<100; i++){
//     ans= ans +i;
// }

// console.log(ans);

// const personarr = ["Ritik", "Raj", "Yadav"];

// console.log(personarr);


// const user1 = {
//     firstname : "Ritik",
//     gender : "male"
// };

// console.log(user1);
// console.log(user1["firstname"]);

// const allusers = [{firstname :"Ritik", gender : "male"}, 
// {firstname : "Linesh", gender : "female"},
// {firstname: "Tejas", gender : "Trans"}];

// console.log(allusers);


// function sum(a, b){
//     return a+b;
// }

//  const val = sum(4, 6);

// console.log(val);




// function sum(num1, num2, fnToCall){
//     let res = num1+num2;
//     fnToCall(res);
//     return res;
// }

// function displayres(data){
//     console.log("Result of the sum is " + data);
// }


// function displayrespassive(data){
//     console.log("Sum's result is " + data);
// }

// const answer = sum(1, 3, displayres);

function calarithmetic(a, b, type){
    const val = type(a, b);
    return val;
}

function sum(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

console.log(calarithmetic(5, 6, sum));


function greet(){
    console.log("Hello Madarchod");
}

setTimeout(greet, 3000);

