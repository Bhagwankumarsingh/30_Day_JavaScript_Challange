// Activity 1: For Loop

for(let i=1;i<=10;i++){
    console.log(i);
}

var t=5;
for(let i=1;i<=10;i++){
    console.log(t*i);
}

// Activity 2: While loop
var sum=0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log("Sum of number from 1 to 10 is ",sum);

let x=10;
while(x>=1){
    console.log(x);
    x--;
}

// Activity 3: Do...While loop
var t=1;
do{
    console.log(t);
    t++;
}while(t<=5)

var num=5;
var res=1;
var y=1;
do{
    res*=y;
    y++;
}while(y<=num)

console.log(`Factorial of ${num} is : `,res);

// Activity 4: Nested Loops
var n=5;
for(let p=1;p<=n;p++){
    let pattern="";
    for(let j=1;j<=p;j++){
        pattern+='* '
    }
    console.log(pattern);
}

// Activity 5: Loop Control statements

for(let i=1;i<=10;i++){
    if(i==5) continue;
    else console.log(i);
}

for(let i=1;i<=10;i++){
    if(i==7) break;
    else console.log(i);
}


