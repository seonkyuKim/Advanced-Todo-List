import React, { useState } from "react";
import "./TodoItem.css";
import { ABCDETodo } from "../models/Todo";
import { useABCDETodosDispatch, useABCDETodosState } from "../contexts/TodosContext";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export interface ABCDETodoItemProps {
  todo: ABCDETodo;
}

function TodoItem({ todo }: ABCDETodoItemProps) {
  const [text, setText] = useState<string>(todo.text);
  const [letterValue, setLetterValue] = useState<string>("");
  const [numberValue, setNumberValue] = useState<string>("");

  const dispatch = useABCDETodosDispatch();
  const todos = useABCDETodosState();

  const hasImportanceLetter = (todos: ABCDETodo[]) => {
    // every 는 배열 안의 모든 요소가 통과하면 true를 반환
    return todos.every(
      (todo: ABCDETodo) => {
        return todo.importanceLetter === "" ? false : true;
      }
    )
  }

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

  const onChangeText = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setText(e.target.value);
  };

  const onChangeImportanceLetter = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLetterValue(e.target.value);

    dispatch({
      type: "UPDATELETTER",
      id: todo.id,
      value: e.target.value
    });
  };

  const onChangeImportanceNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      e.target.value === "" ? "" : e.target.value.replace(/[^0-9]/g, "");

    setNumberValue(newValue);

    dispatch({
      type: "UPDATENUMBER",
      id: todo.id,
      value: newValue
    });
  };

  return (
    <Form.Row>
      <Form.Group as={Col} md="8" controlId={`todoText${todo.id}`}>
        <Form.Control type="text" value={text} onChange={onChangeText} />
      </Form.Group>
      <Form.Group as={Col} md="2" controlId={`todoImportanceLetter${todo.id}`}>
        <Form.Control
          as="select"
          onChange={onChangeImportanceLetter}
          value={letterValue}
        >
          <option value="">선택해주세요</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} md="2" controlId={`todoImportanceNumber${todo.id}`}>
        <Form.Control
          type="number"
          value={numberValue}
          onChange={onChangeImportanceNumber}
          disabled={hasImportanceLetter(todos) ? false : true}
        />
      </Form.Group>
    </Form.Row>

    // <li className={`TodoItem ${todo.isDone ? "done" : ""}`}>
    //   <span className="text" onClick={onToggle}>
    //     {todo.text}
    //   </span>
    //   <select
    //    onChange={onChangeImportanceLetter}
    //    value={letterValue}>
    //     <option value=''></option>
    //     <option value='A'>A</option>
    //     <option value='B'>B</option>
    //     <option value='C'>C</option>
    //     <option value='D'>D</option>
    //     <option value='E'>E</option>
    //   </select>

    //   <input
    //     className="input"
    //     type="number"
    //     value={numberValue}
    //     onChange={onChangeImportanceNumber}
    //   />
    //   <span className="remove" onClick={onRemove}>
    //     (x)
    //   </span>
    // </li>
  );
}

export default TodoItem;
