import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./TodoBoard.css";
import { TodosContextProvider } from "../contexts/TodosContext";


function TodoBoard() {
  return (
    <div className="TodoBoard">
      {/* ABCDE 우선순위 정하기 */}
      <TodosContextProvider>
        <TodoForm />
        <TodoList />
      </TodosContextProvider>
    </div>
  );
}

export default TodoBoard;
