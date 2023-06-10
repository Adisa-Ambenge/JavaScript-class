let items = [2,5,"sweet",false,45];
//Array Methods
items.push(62);//adding an item to the end of an array
console.log(items);
items.unshift(6.5);//adds an item at the start
console.log(items);
items.pop();//removing an item at the end of an array
console.log(items);
items.shift()//removes an item at the start of an array
console.log(items);

let num=[1,9,34,12,25,30];
let sorted =num.sort((a,b)=> a -b);
console.log(sorted);

// Given an array of x elements,return an array with each  element in x multiplied by 2
// create an array of x
// go through every element in array x
// multiply every element by 2
const result = num.map(
    (item)=>{
        return item * 2
    }
)
console.log(result);

//for each
console.log(result);
let newArray=[]
const result2 = num.array.forEach(element => {
    
});

let a = [1,2,3,];
let b =[4,5,6];

let joined1 = a.concat(b);
console.log({joined1});
//destructuring storing array elements inside a variable

let c = [1,48,...a,...b];
console.log({c});
let [z,x, ...e] = c;
console.log({z});
console.log({x});
console.log({e});



