// const dog = {
//     name : "doggie",
//     legCount : 2,
//     speaks : "bhow bhow"
// }

// const cat = {
//     name  : "cat",
//     legCount : 2,
//     speaks : "meow meow"
// }

// console.log("animal "+dog["name"] + " " + dog["speaks"] + " with " + dog["legCount"]);


class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    
    }
    static myType(){
        console.log("Animal");
    }
    speak(){
        console.log("hi there " +  this.speaks);
    }
}

console.log(Animal.myType());
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");
dog.speak();
cat.speak();

const currdate = new Date();

console.log(currdate.getDate());
console.log(currdate.getFullYear());

console.log(currdate.getHours());
console.log(currdate.getMinutes());


//json

const users = '{"name" : "Ritiik", "age" : 21 , "gender" : "male"}';

const user = JSON.parse(users);   // it will convert it into js object

console.log(user["name"]);


const alpha = {
    name : "Ritik",
    gender : "male"
}

const finalstring = JSON.stringify();

console.log(finalstring);