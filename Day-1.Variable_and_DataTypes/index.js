// Activity :- 1

var number=10;
console.log(number);

let name="Ishant";
console.log(name);

// Activity :- 2

const flag=true;
console.log(flag);

// Activity :- 3

var num=20;
var str="Hello World";
var f=false;
var obj={};
const arr=[1,2,3,4,5];

console.log(typeof num);
console.log(typeof str);
console.log(typeof f);
console.log(typeof obj);
console.log(typeof arr);


// Activity :- 4

let marks=20;
console.log("Initial Value: ",marks);

marks=50;
console.log("After Assigning New Value: ",marks);


// Activity 5
// const s=5;
// s=7;
// console.log(s);


// Feature Request
const demoArray=[1,"Ishant",3,true,{}];
for(let i=0;i<demoArray.length;i++){
    console.log(`Value is ${demoArray[i]} and type is ${typeof demoArray[i]}`);
}

// Reassignment Demo

let a=10;
console.log("Initial Value of a: ",a);

a=20;
console.log("reassigned Value of a: ",a);

const b=40;
console.log("Initial Value of b: ",b);

try {
    b=50;
} catch (error) {
    console.log("Error while Reassigning ",error.message);
}