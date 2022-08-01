import React from 'react'
import { Container, Row, Col, Card, Button, Dropdown, Form } from 'react-bootstrap';

const Type = () => {
  return (
    <Container>
        <Form.Select aria-label="Default select example">
            <option value="Bouldering">Bouldering</option>
            <option value="Sport">Sport</option>
            <option value="Trad">Trad</option>
        </Form.Select>
    </Container>
  )
}

export default Type