import { TodoI } from "@/types";

let todos = [
  {
    id: Math.floor(Math.random() * 9999999).toString(),
    name: "Learn Next.js",
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 9999999).toString(),
    name: "Learn HTML",
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 9999999).toString(),
    name: "Start new sideproject",
    isDone: false,
  },
];

export const addTodo = (name: string) => {
  let newTodo = {
    id: Math.floor(Math.random() * 9999999).toString(),
    name,
    isDone: false,
  };
  todos.push(newTodo);
};

export const deleteTodo = (id: string) => {
  todos = todos.filter((obj) => {
    return obj.id !== id;
  });
};

export const updateTodo = ({ id, isDone }: { id: string, isDone: boolean }) => {
  // only isDone can be updated atm
  let newTodos: TodoI[] = [];
  todos.map((obj) => {
    let newTodo = { ...obj };
    if (obj.id == id) {
      newTodo = {
        id,
        name: obj.name,
        isDone,
      };
    }
    newTodos.push(newTodo);
  });
  todos = newTodos;
};
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<{ todos: TodoI[] }>) {
  res.status(200).json({ todos });
}