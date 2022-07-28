import React from 'react'
import {
    Container,
    Nav,
    Navbar
    } from 'react-bootstrap'

const NavbarFooter = () => {
  return (
    <>
      <Navbar fixed='bottom' bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#activity">Activity</Nav.Link>
            <Nav.Link href="#session">Add Session</Nav.Link>
            <Nav.Link href="#performance">Performance</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </>
  )
}

export default NavbarFooter