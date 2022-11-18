import React from 'react';
import {Button, Container, Navbar, Nav, Stack, Image} from 'react-bootstrap';
import group from './assets/images/group.png';
import Login from './Login';
import Register from './Register';
import css from './assets/css/Global.module.css';

// images
import profileIcon from './assets/images/usericon.png'
import chartIcon from './assets/images/chart.png'

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
          <Stack direction="horizontal" gap={3} className="mx-5" style={{ fontFamily: "Poppins"}}>
          {}
          {/* logout */}
            <div className='px-1'>
            <Button variant='outline-danger' className={css.btnOD} onClick={() => setModalRegisterShow(true)}>Register</Button>
            <Register show={modalRegisterShow} Hide={() => setModalRegisterShow(false)} setModalLoginShow={setModalLoginShow} setModalRegisterShow={setModalRegisterShow}/>
            </div>
            <div>
            <Button variant='danger' className={css.btnD} onClick={() => setModalLoginShow(true)}>Login</Button>
            <Login show={modalLoginShow} Hide={()=> setModalLoginShow(false)} setModalLoginShow={setModalLoginShow} setModalRegisterShow={setModalRegisterShow} />
            </div>
      
          {/* login */}
            <div className='px-3'>
            <Image src={chartIcon}/>
            </div>
            <div>
            <Image src={profileIcon}/>
            </div>

          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarBucks;