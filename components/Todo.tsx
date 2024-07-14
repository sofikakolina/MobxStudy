"use client"
import todo from '@/store/todo'
import { observer } from 'mobx-react-lite'
import TodoCard from './TodoCard'

const Todo: React.FC = observer(() => {
    return (
    <div className='flex flex-col gap-5'>
        <div className='flex justify-center'>
            <button onClick={() => todo.fetchToDos()} className='bg-gray-500 rounded-2xl px-5 py-1'>fetch data</button>
        </div>
        {
            todo.todos.map(todoItem => <TodoCard todoItem={todoItem}/>)
        }
    </div>
  )
})

export default Todo