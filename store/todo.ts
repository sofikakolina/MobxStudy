import { makeAutoObservable } from "mobx"

class Todo {
    todos = [
        {id:1, title: "One", completed: false},
        {id:2, title: "Two", completed: true},
        {id:3, title: "Three", completed: true},
        {id:4, title: "Four", completed: false},
    ]

    ids = 0;

    constructor () {
        makeAutoObservable(this)
    }
    
    addToDo(todo: { id: number; title: string; completed: boolean }){
        this.todos.push(todo)
        console.log(todo)
    }

    removeToDo(id: number){
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completedJob(id: number){
        this.todos = this.todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo)
    }

    fixTodoArray() {
        this.todos = this.todos.map((todo, index) => {
            if (this.ids > todo.id) {
                const newId =  this.ids + 1
                this.ids = newId
                return { ...todo, id: newId };
            } else {
                this.ids = todo.id
                return todo;
            }
        });
        this.ids=0
    }

    fetchToDos = async () => {
        await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.todos = [...this.todos, ...json]
            })
        this.fixTodoArray()
    }
    
}

export default new Todo