import React from "react";
import { InputGroup } from "react-bootstrap";

function Input(props) {
  return (
    <>
      <InputGroup className="mb-3">
      {props.children}
      </InputGroup>
    </>
  );
}

export default Input;
