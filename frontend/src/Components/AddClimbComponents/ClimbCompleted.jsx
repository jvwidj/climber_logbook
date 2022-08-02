import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const ClimbCompleted = (props) => {

  const [switchState, setSwitchState] = useState(true)

  const handleChange=() => {
    setSwitchState(!switchState)
    props.sendValue(switchState)
  }

  return (
    <Container>
        <Form>
            <Form.Check 
                type="switch" 
                id="custom-switch"
                label="Competed"
                defaultChecked={!switchState}
                onChange={handleChange}
            />
        </Form>
    </Container>
  )
}

export default ClimbCompleted