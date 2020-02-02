import React from 'react';
import TodoItem from './TodoItem';
import { compareABCDETodo } from '../models/Todo';
import { useABCDETodosState } from '../contexts/TodosContext'

function TodoList() {
  const todos = useABCDETodosState();

  return (
    <ul>
      {todos
        .sort(compareABCDETodo)
        .map((todo) => (
         <TodoItem todo={todo} key={todo.id} />)
        )
      }
    </ul>
  )
}

export default TodoList;