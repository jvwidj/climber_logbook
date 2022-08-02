import React from 'react'
import { Container, Form  } from 'react-bootstrap'

const ClimbAttempt = (props) => {
  return (
    <Container>
        <Form 
        onChange={(event) => {
        const selectedValue = event.target.value;
        props.sendValue(selectedValue)
      }}
        >
        <Form.Label>Attempt</Form.Label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            value="1"
            label="1"
            name="group1"
            type={type}
            defaultChecked="true"
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            value="2"
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            value="3"
            name="group1"
            label="3+"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
    </Container>
  )
}

export default ClimbAttempt