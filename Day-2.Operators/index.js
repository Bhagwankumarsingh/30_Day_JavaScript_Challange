// Activity 1: Arithmetic Operator

/* ***************** */

// Task 1: 
const a=10;
const b=20;
console.log(`Sum of ${a} and ${b} is: `,a+b);
 
/* ***************** */

// Task 2:
const c=50;
const d=20;
console.log(`Subraction of ${c} and ${d} is: `,c-d);

/* ***************** */

// Task 3:
const e=3;
const f=5;
console.log(`Multiplication of ${e} and ${f} is: `,e*f);

/* ***************** */

// Task 4:
const g=50;
const h=10;
console.log(`Division of ${g} and ${h} is:`,g/h);

/* ***************** */

// Task 5:
const i=40;
const j=6;
console.log(`Remainder is:`,i%j);


// Activity 2: Assignment Operators

/* ***************** */

// Task 6:
var x=10;
var y=5;
x+=y;
console.log("Answer is: ",x);

// Task 7:
var x=50;
var y=70;
y-=x;
console.log("Answer is: ",y);

// Activity 3: Comparison Operator

/* ***************** */

// Task 8:
var num=50;
if(num<100){
    console.log("Num is less then 100");
}

var num=100;
if(num>=100){
    console.log("num is greater then 50");
}

/* ***************** */
// Task 9:
var number=50;
if(number>=50){
    console.log("num is greater then or equal to 50");
}

var number=100;
if(number<=200){
    console.log("num is less then or equal to 200");
}

/* ***************** */
// Task 10:
var t=30;
var s="30"

if(t==s){
    console.log("value of T is equal to value of S");
}

var t=300;
var s=300;

if(t===s){
  console.log("Value and type of both t and s is same");
}

// Activity 4: Logical Operators
// Task 11:

var x=10;
var y=20;
if(x>5 && y>10){
    console.log(`Addition of ${x} and ${y} is: `,x+y);
}

// Task 12:

var num="Ishant";
var num2="";
if(num || num2){
    console.log(num+num2);
}

// Task 13:

var res=10;
if(res!=20){
    console.log("value of res is not equal to 20");
}

// Activity 5:Ternary Operator
// Task 14:

var num=-10;
num>=0 ? console.log("num is Positive") : console.log("num is Negative");

// Feature Request

var num=200;
var num2=10;

console.log(`Addition of ${num} and ${num2} is `,num+num2,` Subtraction of ${num} and ${num2} is `,num-num2,
    `Multiplication of ${num} and ${num2} is`,num*num2,
    `Division of ${num} and ${num2} is `,num/num2,
    `Remainder of num and num2 is `,num%num2
);

var num1=30;
var num2=50;

if(num1>num2){
    console.log("num1 is greater then num2");
}
else if(num1<num2){
    console.log("num1 is less then num2");
}
else{
    console.log("num1 is equal to num2");
}

var nm=10;
num>=0?console.log("nm is positive"):console.log("nm is negative");