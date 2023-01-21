"use client";

import { TodoI } from "@/types";
import { useRouter } from "next/navigation";
import { FC } from "react";

async function updateTodo(id: string, isDone: boolean, refresh: () => void) {
  await fetch(`http://127.0.0.1:3000/api/todo/update`, {
    method: 'POST',
    body: JSON.stringify({ id, isDone })
  });
  refresh();
}

async function deleteTodo(id: string, refresh: () => void) {
  await fetch(`http://127.0.0.1:3000/api/todo/delete?id=${id}`, {
    method: 'DELETE'
  });
  refresh();
}

const TodoItem: FC<{ todo: TodoI }> = ({ todo }) => {
  const { refresh } = useRouter();
  return (<>
    <input
      type="checkbox"
      onChange={(e) => updateTodo(todo.id, e.target.checked, refresh)}
      checked={todo.isDone}
    />
    <span>{todo.name}</span>
    <button onClick={() => deleteTodo(todo.id, refresh)}>
      Delete
    </button>
  </>)
}

export default TodoItem;