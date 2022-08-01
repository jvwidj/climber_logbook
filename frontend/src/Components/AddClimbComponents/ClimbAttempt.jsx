import React from 'react'
import { Container, Form  } from 'react-bootstrap'

const ClimbAttempt = () => {
  return (
    <Container>
        <Form>
        <Form.Label>Attempt</Form.Label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
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