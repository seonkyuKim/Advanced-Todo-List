import React, { useState } from "react";
import "./TodoItem.css";
import { ABCDETodo, numberWithEmptyString } from "../models/Todo";
import { useABCDETodosDispatch } from "../contexts/TodosContext";

export interface ABCDETodoItemProps {
  todo: ABCDETodo;
}

function TodoItem({ todo }: ABCDETodoItemProps) {
  const [letterValue, setLetterValue] = useState<string>("");
  const [numberValue, setNumberValue] = useState<numberWithEmptyString>("");

  const dispatch = useABCDETodosDispatch();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id: todo.id
      // TODO 완료날짜
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id
    });
  };

  const onChangeImportanceLetter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLetterValue(e.target.value);
    
    dispatch({
      type: "UPDATELETTER",
      id: todo.id,
      value: e.target.value
    });
  };

  const onChangeImportanceNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    
    const newValue = e.target.value === "" ? "" : Number(e.target.value.replace(/[^0-9]/g, ""));
    

    setNumberValue(newValue);

    dispatch({
      type: "UPDATENUMBER",
      id: todo.id,
      value: newValue
    });
  };

  return (
    <li className={`TodoItem ${todo.isDone ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <select
       onChange={onChangeImportanceLetter}
       value={letterValue}>
        <option value=''></option>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
        <option value='D'>D</option>
        <option value='E'>E</option>
      </select>
      
      <input
        className="input"
        type="number"
        value={numberValue}
        onChange={onChangeImportanceNumber}
      />
      <span className="remove" onClick={onRemove}>
        (x)
      </span>
    </li>
  );
}

export default TodoItem;
