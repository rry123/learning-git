function getLength(str){
    console.log("Original string : ", str);
    console.log("Length of string : ", str.length)
}

getLength("Hello Ritik Raj");

function getIndex(str, target){
    console.log("The index is at ", str.indexOf(target));
}

getIndex("Hello World", "World");

function getSlice(str, start, end){
    console.log("The slice is : ", str.slice(start, end));
}

getSlice("Ritikraj", 0, 5);

const str = "Hello world";
console.log(str.replace("world", "ritik"));

const val = "hi my name is ritik raj";

const words = val.split(" ");
console.log(words);


const alpha = "          ritik raj         ";

const beta = alpha.trim();
console.log(beta);


console.log(parseInt("42"));
console.log(parseInt("42x"));
console.log(parseInt("abc42abc"));
console.log(parseInt("3.14"));

const inarr = [1, 2, 3];

inarr.shift();
inarr.unshift(6);
console.log(inarr);

const farr = [1, 3, 5];
const sarr = [4,5,6];

console.log(inarr.concat(sarr));


function logThing(str){
    console.log(str);
}

inarr.forEach(logThing);

// above one is same as

// logThing(1)
// logThing(2)
// logThing(3)