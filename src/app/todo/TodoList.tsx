"use client";

import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import '../../styles/list.css';
import TodoItem from './TodoItem';
import { TodoI } from '@/types';

const getTodos = async (): Promise<AxiosResponse<{ todos: TodoI[] }>> => {
  return await axios.get(`/api/todo/list`);
}

const TodoList = () => {

  const [todos, setTodos] = useState<TodoI[]>([]);

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList