import React from 'react';
import TodoItem from './TodoItem';
import { compareABCDETodo } from '../models/Todo';
import { useABCDETodosState } from '../contexts/TodosContext'
import Form from "react-bootstrap/Form";

function TodoList() {
  const todos = useABCDETodosState();

  return (
    <Form>
      {todos
        .sort(compareABCDETodo)
        .map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
    </Form>
  )
}

export default TodoList;