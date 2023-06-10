let student = {
    name:"Steven",
    age:19,
    greet:function(){
        console.log("Hello");
        console.log(`Hello my name is ${student.name} and I am ${student.age} years old`);
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`); //refers to the object my 

    }
};
student.greet();
student.talk = function(){
    console.log("Hello WOrld");
    console.log(student.name);
};
student.talk();