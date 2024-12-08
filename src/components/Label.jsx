import React from 'react'
import { Form } from 'react-bootstrap'

function Label(props) {
  return (
    <>
    <Form.Label {...props} >{props.children}</Form.Label>
    </>
  )
}

export default Label