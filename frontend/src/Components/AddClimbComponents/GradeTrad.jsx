import React from 'react'
import { Container, Form } from 'react-bootstrap';

const GradeTrad = (props) => {
  return (
    <Container>
    <Form.Select 
      onChange={(event) => {
        const selectedValue = event.target.value;
        props.sendValue(selectedValue)
      }}
      >
        <option value="Mod">Mod</option>
        <option value="Diff">Diff</option>
        <option value="VDiff">VDiff</option>
        <option value="HVD">HVD</option>
        <option value="Sev">Sev</option>
        <option value="HS">HS</option>
        <option value="VS">VS</option>
        <option value="HVS">HVS</option>
        <option value="E1">E1</option>
        <option value="E2">E2</option>
        <option value="E3">E3</option>
        <option value="E4">E4</option>
        <option value="E5">E5</option>
        <option value="E6">E6</option>
        <option value="E7">E7</option>
        <option value="E8">E8</option>
        <option value="E9">E9</option>
    </Form.Select>
</Container>
  )
}

export default GradeTrad