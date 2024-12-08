import React from "react";
import { Form } from "react-bootstrap";

function FormControl(props) {
  return (
    <Form.Control
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      {...props}
    />
  );
}

export default FormControl;
