import React from 'react'
import { Container, Form } from 'react-bootstrap'

const ClimbCompleted = () => {
  return (
    <Container>
        <Form>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="Competed"
            />
        </Form>
    </Container>
  )
}

export default ClimbCompleted