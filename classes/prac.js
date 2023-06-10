class TodoList{
    constructor(){
        this.todolist = [];
        this.isCompleted = false;
    }
    addTask(task){
       this.todolist.push(task);
       return this
    }
    taskCompleted(task){
        if(task === task){
          return  this.isCompleted = true
        }
    }
    totalNUmberOfTask(){
            return this.todolist.length
        }
    }


let cooking = new TodoList();
console.log(cooking.addTask("fry"));
console.log(cooking.addTask("warm"));
console.log(cooking.taskCompleted('warm'));
// console.log(cooking.addTask("warm"));
console.log(cooking.totalNUmberOfTask());
