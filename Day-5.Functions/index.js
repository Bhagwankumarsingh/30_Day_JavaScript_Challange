// Activity 1: Function Declaration 

function checkeo(val1){
    if(val1%2==0) console.log("even");
    else console.log("odd");
}

checkeo(8);

function findsq(val){
    return val*val;
}

console.log(findsq(5));

// Activity 2: Function expression

let findmax=function(val,val1){
    return Math.max(val,val1);
}

console.log(findmax(5,6));

let concstring=function concatst(val,val1){
     return val+" "+val1;
}

console.log(concstring("Hello","World"));

// Activity 3: Arrow Function

let sum=(x,y)=>{
    return x+y;
}
console.log(sum(6,7));

let check=(s)=>{
    for(let i=0;i<s.length;i++){
        if(s[i]=='?') return true;
    }
    return false;
}

console.log(check("jn?jn"));

// Activity 4: Function parameter and Default values

function product(a,b){
    return a*b;
}
console.log(product(5,6));

function greet(val,val2=18){
    return `Hello ${val} age ${val2}`
}

console.log(greet("Ishant",59));

// Activity 5: Higher-Order Function

function callNTimes(func, n) {
    return function(...args) {
        for (let i = 0; i < n; i++) {
            func(...args);
        }
    }
}

// Example usage:
function printHello() {
    console.log("Hello");
}

// Call the printHello function 5 times
const callFiveTimes = callNTimes(printHello, 5);
callFiveTimes();

function compose(func1, func2, value) {
    return func2(func1(value));
}

// Example usage:
function add2(x) {
    return x + 2;
}

function multiply3(x) {
    return x * 3;
}

const result = compose(add2, multiply3, 5); // (5 + 2) * 3 = 21
console.log(result); // 21
