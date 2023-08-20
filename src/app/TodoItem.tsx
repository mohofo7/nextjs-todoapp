"use client";

import { FC } from "react";

import { Checkbox, Button, Flex, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { remove, update } from "@/features/todo";
import { useAppDispatch } from "@/state/hooks";

import { TodoI } from "@/types";

const TodoItem: FC<{ todo: TodoI }> = ({ todo }) => {

  const dispatch = useAppDispatch();

  const updateTodo = (title: string = todo.title) => {
    dispatch(update({
      todo: {
        isDone: !todo.isDone,
        title
      },
      id: todo.id
    }))
  }

  return (
    <Flex justifyContent="space-between" gap={4} padding={1} marginTop={2} data-test={'list-item'}>
      <Checkbox
        onClick={updateTodo}
        checked={todo.isDone}
        gap={2}>
        <Text noOfLines={1} maxWidth={380} onDoubleClick={() => {
          const newTitle = prompt("New title:", todo.title);
          if (newTitle) {
            updateTodo(newTitle);
          }
        }}>{todo.title}</Text>
      </Checkbox>
      <IconButton
        colorScheme='red'
        aria-label='Search database'
        onClick={() => dispatch(remove({
          id: todo.id
        }))}
        icon={<DeleteIcon />}
        data-test={'delete-btn'}
      />
    </Flex>)
}

export default TodoItem;