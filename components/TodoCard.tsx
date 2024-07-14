import { observer } from 'mobx-react-lite'
import todo from '@/store/todo'
import { useState } from 'react'
import { TodoItem } from '@/interfaces';

interface TodoCardProps {
    todoItem: TodoItem;
}

const TodoCard: React.FC<TodoCardProps> = observer(({ todoItem }) => {

    return (
        <div className='flex gap-5' key={todoItem.id}>
                    <input type="checkbox" checked={todoItem.completed} onChange={() => todo.completedJob(todoItem.id)}/>
                    <h3>{todoItem.id}</h3>
                    <h3>{todoItem.title}</h3>
                    <h3>{todoItem.completed ? "true" : "false"}</h3>
                    <button onClick={() => todo.removeToDo(todoItem.id)} className=' px-2 rounded-3xl bg-red-600'>x</button>
                </div>
    )
})

export default TodoCard