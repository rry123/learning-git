// function onDone(){
//     console.log("Hi there");
// }

// setTimeout(onDone, 1000);
// console.log("After Settimeout");

const fs = require('fs');
// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data);
// })


// fs.readFile("a1.txt", "utf-8", function(err, data){
//     data = data + "ritik raj yadav";
//     fs.writeFile("a1.txt", data, function(err){
//         console.log("successfully written");
//     });
// })


// promises
// function myOwnSetTimeout(duration){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve, 1000);
//     })
//     return p;
// }

// myOwnSetTimeout(1000).then(function(){
//     console.log("log the first thing");
// })


function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        } , duration);
    });
    return p;
}

//promise 
const ans = promisifiedMyOwnSetTimeout(1000);

console.log(ans);

ans.then(function(){
    console.log("timeout is done");
})