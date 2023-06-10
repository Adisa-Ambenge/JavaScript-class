let person = {
    name:"Angela",
    age:24,
    friend:{
        name:"Adisa",
        age:20,
        myFriend:{
            name:"Ambenge",
            age:21
        }
    }
}
let person2 = new Object();
person2.name = "Tivona" //adding properties
person2["age"]=30;
console.log(person2);
person.age=56;        //updating properties
console.log({person});


console.log(person.name); //access a property
console.log(person.friend.myFriend.name);
console.log(person["friend"]["myFriend"]["name"]);
delete person.age;
console.log(person);

let person3 = Object.assign(person);
console.log({person3});
let keys = Object.keys(person3);
console.log({keys});
