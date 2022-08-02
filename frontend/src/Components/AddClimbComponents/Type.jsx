import React from 'react'
import { Container, Form } from 'react-bootstrap';

const Type = (props) => {
  //const [type, setType] = useState("")

  return (
    <Container>
        <Form.Select
          onChange={(event) => {
            const selectedValue = event.target.value;
            //setType(selectedValue)
            props.sendValue(selectedValue)
          }}
          >
            <option value="Bouldering" >Bouldering</option>
            <option value="Sport" >Sport</option>
            <option value="Trad">Trad</option>
        </Form.Select>
        {/* <Button onClick={() => props.sendValue(type)}>Send to Parent</Button> */}
    </Container>
  )
}

export default Type