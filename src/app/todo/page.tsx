import React from 'react'
import NewTodo from './NewTodo'
import TodoList from './TodoList'

export default function Home() {
  return (
    <div>
      <NewTodo />
      <TodoList />
    </div>
  )
}
