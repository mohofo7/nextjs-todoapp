"use client";

import { TodoI } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";

async function updateTodo(id: string, isDone: boolean, refresh: () => void) {
  await axios.post(`/api/todo/update`, {
    body: JSON.stringify({ id, isDone })
  });
  refresh();
}

async function deleteTodo(id: string, refresh: () => void) {
  await axios.delete(`/api/todo/delete?id=${id}`);
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