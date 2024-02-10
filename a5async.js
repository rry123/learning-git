// function findsum(n){
//     let ans = 0;
//     for(let i=0; i<n; i++){
//         ans+=i;
//     }

//     return ans;
// }


// function findsumtill100(){
//     console.log(findsum(100));
// }

// setTimeout(findsumtill100, 1000);     // means run this function after 1s
// console.log("Hello World");

// Common async functions
// fs.readFile : to read a file from filesystem
// Fetch : to fetch some date from an API endpoint


// Reading a file

const fs = require("fs");

// filesystem module

// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data);
// })


//console.log("hi there");  // runs first because the above one is aynchronous function   



// that one is anonymous function   

// Promises

// Promises are syntactical sugar that makes the code 
// more readable

// ugly way

// function ritikReadFile(callback){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         callback(data);
//     });
// }

// // callback function to call
// function onDone(data){
//     console.log(data);
// }

// ritikReadFile(onDone);


//cleaner way 

// function ritikReadFile(){
//     console.log("inside ritikread");
//     return new Promise(function(resolve){
//         console.log("inside promise");
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             console.log("before resolve");
//             resolve(data);
//         })
//     })
// }

// function onDone(data){
//     console.log(data);
// }


// after the function has done its work then only it will call the resolve


// var a = ritikReadFile();
// console.log(a);
// a.then(onDone);


// what is promise
// it is just a class that makes callbacks and aync functions slightly more readable


// syntax of defining a promise

// var p = new Promise(function(resolve){
//       setTimeout(function(){
//         resolve("foo")
//       }, 1000)
// });

// console.log(p);

// function callback(){
//     console.log(p);
// }
// p.then(callback);

// first argument is a function and function's first argument is resolve


//dummy async functions that almost immediately resolve

// function ritikasyncfunction(){
//     console.log("inside ritik");
//     let p = new Promise(function(resolve){
//         console.log("before resolve");
//         resolve("hi there");
//     });
//     return p;
// }

// const val = ritikasyncfunction();
// console.log("before then statement");
// val.then(function(data){
//     console.log(data);
// })



// function ritikasync(){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve, 2000);
//     })
//     return p;
// }

// const val = ritikasync();
// val.then(function(){
//     console.log("Hi there this is ritik");
// })


// async await syntax
// again just syntactic sugar still uses callbacks/ promises under the hood

function ritikasync(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}

async function main(){
    const val = await ritikasync();
    console.log(val);
}

main();


// await is valid inside only async function thats why it is used inside main function
