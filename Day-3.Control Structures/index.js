// Activity 1: If Else Statements

var a=10;
if(a==0){
    console.log("Zero");
}
else if(a>0){
    console.log("Positive");
}
else{
    console.log("Negative");
}

var age=29;
if(age>=18){
    console.log("This Person is Eligible for vote");
}
else{
    console.log("Not Eligible for Vote");
}


// Activity  2: Nested If-Else Statements

var a=10
var b=20
var c=35

if(a>b && a>c){
    console.log("a is greatest");
}
else if(a<b && b>c){
    console.log("b is greatest");
}
else{
    console.log("c is greatest");
}


// Activity 3: Switch Case

var day=5;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Please enter the value greater then 0 and less then 8");
        break;
}

// Activity 4: Conditional (Ternary) Operator

var num=11;

num%2==0 ? console.log("even") : console.log("Odd");

// Activity 5: Combining Conditions

var year=2024;

if(year%4==0 && (year%100!=0 || year%400==0)){
    console.log("Leap Year");
}
else{
    console.log("Not a leap Year");
}

// Feature Request:

var n=10;
if(n==0) console.log("Zero");
else if(n>0) console.log("Positive");
else console.log("Negative");

var age=30;
if(age>=18) console.log("Eligible for Vote");
else console.log("Not Eligible for vote");

var day=2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Please Enter Valid day");
        break;
}

