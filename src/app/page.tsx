import { TodoI } from '@/types';
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';

const getTodos = async (): Promise<{ todos: TodoI[] }> => {
  const res = await fetch(`http://127.0.0.1:3000/api/todo/list`, {
    next: {
      revalidate: 10
    }
  });
  return res.json()
}

export default async function Todo() {


  const { todos } = await getTodos();

  return (
    <div>
      <NewTodo />
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
