import React from 'react';
import {Button, Container, Navbar, Nav, Stack} from 'react-bootstrap';
import group from './images/group.png';
import Login from './pages/Login';
import Register from './pages/Register';

const NavbarBucks = () => {
  const [modalRegisterShow, setModalRegisterShow] = React.useState(false);
  const [modalLoginShow, setModalLoginShow] = React.useState(false);
  
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className='mx-5' href="/"><img src={group} style={{width: '76px'}} alt=''/></Navbar.Brand>
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Stack direction="horizontal" gap={3} className="mx-5">
            <Button variant="outline-danger" className='px-3' onClick={() => setModalRegisterShow(true)}>Register</Button>
            <Register show={modalRegisterShow} onHide={() => setModalRegisterShow(false)}/>
            <Button variant="danger" className='px-4' onClick={() => setModalLoginShow(true)}>Login</Button>
            <Login show={modalLoginShow} onHide={() => setModalLoginShow(false)}/>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarBucks;