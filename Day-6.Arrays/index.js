// Activity 1: Array Creation and Access

var arr=[1,2,3,4,5]
console.log(arr);

console.log(arr[0]);
console.log(arr[arr.length-1]);

// Activity 2: Array Method (Basic)
arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(1);
console.log(arr);

// Activity 3: Array Methods (intermediate)
let myarr=[2,3,4,5]
let newarr=myarr.map(myfunction)

function myfunction(num){
    return num*2;
}

console.log(newarr);

let arrx=[23,4,5,56,78,98,77,32,21,43,45,67,6,9,88,64];
const newarrx=arrx.filter(checkeven)

function checkeven(num){
    return num%2===0;
}

console.log(newarrx);



const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);


// Activity 4: Array Iteration

let mya=[2,3,4,5,6,7,8];
for(let i=0;i<mya.length;i++){
    console.log(mya[i]);
}

mya.forEach(myf);
function myf(num){
    console.log(num);
}

// Activity 5: Multi-dimensional Arrays

let matrix=[[1,2],[3,4],[5,6]];
console.log(matrix);

for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
        console.log(matrix[i][j]);
    }
}