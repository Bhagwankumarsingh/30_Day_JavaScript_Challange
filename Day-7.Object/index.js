// Activity 1: Object creation and access

let book={
   title:"Horror",
   author:"Ishant",
   year:2002
}

console.log(book);

console.log(book.title);
console.log(book.author);
console.log(book.year);

// Activity 2: Object Methods
function myf(Object){
   return Object.title+" "+Object.author+" "+Object.year
}

console.log(myf(book));

function myf2(Object,year){
    Object.year=year;
    return Object.year
}
console.log(myf2(book,2004));
console.log(book);

// Activity 4: this keyword

let books={
    title:"Romantic",
    author:"Sam",
    year:2019,
    myf3:function(){
        return `This book with title ${this.title} written by ${this.author} published in the year ${this.year}`
    }
}

console.log(books.myf3());

// Activity 5: Object Iteration

for(let i in books){
    console.log(books[i]);
}

for(let i in books){
    console.log(`Key is ${i.keys} and value is ${i.values}`);
}
