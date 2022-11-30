import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"


const Navigation = () => {
  return (
    <Navbar style={{backgroundColor:'black'}} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img width={100} src="https://th.bing.com/th/id/R.d01a8fbdf7bbb4d9dc936d06e151039f?rik=M%2fRoSy9w3784Dg&riu=http%3a%2f%2fwww.tubefilter.com%2fwp-content%2fuploads%2f2016%2f07%2fNetflix_logo.jpg&ehk=P%2b64IrAZDD9owhjJ6jQ9ubpeHNhDoTjfAZZ0VABXp3E%3d&risl=&pid=ImgRaw&r=0"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/movies" className="nav-item">Movies</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;                                                                                                      
