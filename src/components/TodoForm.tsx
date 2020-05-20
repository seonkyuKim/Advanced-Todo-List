import React, { useState } from "react";
import { useABCDETodosDispatch } from "../contexts/TodosContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useABCDETodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: "CREATE",
      text: value
    });

    setValue("");
  };

  return (
    <Form inline={true} onSubmit={onSubmit} style={{marginBottom: 10}}>
      <Form.Group controlId="formTodo">
        <Form.Label className="mx-1">할 일:</Form.Label>
        <Form.Control
          className="mx-1"
          type="text"
          placeholder="ex) 자격증 공부, 독서"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mx-1">
        등록
      </Button>
    </Form>
  );
}

export default TodoForm;
