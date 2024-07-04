import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Boton( props, {modificar} ) {
  return (
    <>
      <Button
        as={Link}
        size="sm"
        className="mx-1 my-1"
        {...props}
      >
        {props.children}
      </Button>
    </>
  );
}

export default Boton;
