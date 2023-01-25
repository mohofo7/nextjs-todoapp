"use client";

import TodoItem from './TodoItem';
import { Button } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { removeAll } from '@/features/todo';

const TodoList = () => {

  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}

      {todos.length > 1 &&
        <Button onClick={() => dispatch(removeAll())} colorScheme="teal" mb={6}>
          Delete All
        </Button>}
    </div>
  )
}

export default TodoList