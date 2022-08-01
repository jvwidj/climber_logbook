import React from 'react'
import { Container, Form } from 'react-bootstrap'

const GradeSport = () => {
  return (
    <Container>
    <Form.Select aria-label="Default select example">
        <option value="4">4</option>
        <option value="4+">4+</option>
        <option value="5">5</option>
        <option value="5+">5+</option>
        <option value="6a">6a</option>
        <option value="6a+">6a+</option>
        <option value="6b">6b</option>
        <option value="6b+">6b+</option>
        <option value="6c">6c</option>
        <option value="6c+">6c+</option>
        <option value="7a">7a</option>
        <option value="7a+">7a+</option>
        <option value="7b">7b</option>
        <option value="7b+">7b+</option>
        <option value="7c">7c</option>
        <option value="7c+">7c+</option>
        <option value="8a">8a</option>
        <option value="8a+">8a+</option>
        <option value="8b">8b</option>
        <option value="8b+">8b+</option>
        <option value="8c">8c</option>
        <option value="8c+">8c+</option>
    </Form.Select>
</Container>
  )
}

export default GradeSport