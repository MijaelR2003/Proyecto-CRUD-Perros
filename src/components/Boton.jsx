import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Boton( props ) {
  return (
    <>
      <Button
        as={Link}
        size="sm"
        {...props}
      >
        {props.children}
      </Button>
    </>
  );
}

export default Boton;
