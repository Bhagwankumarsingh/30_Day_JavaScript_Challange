// Activity 1: Template literal
let name='Ishant'
let age=22
let finalString=`The person name is ${name} having age ${age}`
console.log(finalString);

let num=3
let num2=5
let final=`Then number is ${num} and ${num2} \nand the sum is ${num+num2}`
console.log(final);

// Activity 2: Destructuring 
const arr=[1,2,3,4,5]
const [firstelement,secondelement]=arr
console.log(firstelement);
console.log(secondelement);

const profile={
    firstName:"Sam",
    lastName:"Altman",
    website:"OpenAI.com"
}

const {firstName,lastName,website}=profile

console.log(firstName);
console.log(lastName);
console.log(website);

// Activity  3: Spread and Reast Operators

const arr1=[2,3,4,5,6];
const newArr=[...arr1,7,9,85]
console.log(newArr);

function sum(...numbers){
    return numbers.reduce((total,num)=>total+num,0);
}

console.log("Sum of numbers are ",sum(1,2,3,4));

// Activity 4: Default Parameters

function findMultiplication(num,num1=1){
    return num*num1;
}

console.log("Multiplication of numbers are: ",findMultiplication(5));

// Activity 5: Enhanced Object Literals

const nam="Sam"
const ag=30

const person={
    nam,
    ag,
    greet(){
        console.log(`Hello my name is ${nam} and my age is ${age} `);
    },
    incrementAge(){
        this.age++;
        console.log(`I am now ${this.age} years old`);
    }
}

console.log(person);
person.greet();
person.incrementAge();

const propName='dynamicProperty'
const value='This is a dynamic value'

const myObject={
    [propName]:value
}

console.log(myObject);