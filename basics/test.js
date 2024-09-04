console.log("Hii");
const accnm = 1234;
var namee = "Tinu";
let email = "tinu1@gmail.com";
console.table([accnm,namee,email]);
const num = false;
console.log(typeof(num));

arr = [1,2,3];
for (let i = 0; i < arr.length; i++) {console.log(arr[i]+" ");}

let myobj = {
    name:"hitesh",
    age:22
}

const myfun = function(){
    console.log("Hello World")
}

console.log(typeof arr)
console.log(myobj)
myfun();

console.log(`Hello name is ${namee} and email is ${email}`);

const game = new String(`Hihihisht`);

// console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.split('h'));

const score = 400;
const balance = new Number(400);
console.log(score);
console.log(balance);

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString);
console.log(myDate.toDateString);
console.log(myDate.toLocaleDateString);
console.log(typeof(myDate));                    //gives output *OBJECT*



// ARRAY
myArr = [0,1,2,3,4,5];
console.log("A ", myArr);

const myn1 = myArr.slice(2,4);
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(2,4);
console.log(myn2);

console.log("C ", myArr);

const mySum = Symbol("hii");

const jsuser ={
    name : "Chee",
    "full name" : "Jackie",
    fullname : "Nike",
    [mySum] : "mykey1",
    age : 22,
    location : "Bhiwnai",
    greet : function(){
        console.log(`Hello There ${this.fullname+`   and   `+this["full name"]}`);
    }
}

console.log(jsuser.name);
console.log(jsuser["full name"]);
console.log(jsuser[mySum]);

// console.log(jsuser);

jsuser.greeeting = function(){
    console.log("Hello Welcome here");
}

console.log(jsuser.greeeting());
console.log(jsuser.greet());

function myfun1(num1,num2,...num3){
    return num3;
}
console.log(myfun1(1,2,23,24,25,26));

function chai(){
    let username="Adidas";
    console.log(this);
}
chai();