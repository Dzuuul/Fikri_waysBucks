import React from 'react';
import {Button, Container, Navbar, Nav, Stack, Image, OverlayTrigger, Popover} from 'react-bootstrap';
import group from './assets/images/group.png';
import Login from './Login';
import Register from './Register';
import css from './assets/css/Global.module.css';
import { Link, useNavigate } from 'react-router-dom';


// images
import profileIcon from './assets/images/usericon.png'
import chartIcon from './assets/images/chart.png'

//popover icon
import profileIconPop from './assets/images/profileDropdownIcon.png'
import logoutIcon from './assets/images/logoutIcon.png'

const NavbarBucks = () => {
  const [modalRegisterShow, setModalRegisterShow] = React.useState(false);
  const [modalLoginShow, setModalLoginShow] = React.useState(false);

  const loginData = JSON.parse(localStorage.getItem("LOGIN_DATA"))

  const navigate = useNavigate()

  const Logout = () => {
    localStorage.removeItem("LOGIN_DATA")
    navigate("/")
  }

  
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className='mx-5' href="/"><img src={group} style={{width: '76px'}} alt=''/></Navbar.Brand>
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          </Nav>
          <Stack direction="horizontal" gap={3} className="mx-5" style={{ fontFamily: "Poppins"}}>
          {loginData === null ? (
            <>
            <div className='px-1'>
            <Button variant='outline-danger' className={css.btnOD} onClick={() => setModalRegisterShow(true)}>Register</Button>
            <Register show={modalRegisterShow} Hide={() => setModalRegisterShow(false)} setModalLoginShow={setModalLoginShow} setModalRegisterShow={setModalRegisterShow}/>
            </div>
            <div>
            <Button variant='danger' className={css.btnD} onClick={() => setModalLoginShow(true)}>Login</Button>
            <Login show={modalLoginShow} Hide={()=> setModalLoginShow(false)} setModalLoginShow={setModalLoginShow} setModalRegisterShow={setModalRegisterShow} />
            </div>
            </>
          ) : (
            <>
            <div className='px-3'>
            <Link to="/cart">
            <Image src={chartIcon}/>
            </Link>
            </div>
            {/* dropdown user */}
            <div>
            <OverlayTrigger
              trigger="hover"
              delay={{ show: 250, hide: 1200 }}
              rootClose
              key='bottom'
              placement='bottom-end'
              overlay={
              <Popover id={`popover-positioned-bottom`}>
                  <Popover.Body className={css.poppins}>
                  <div className='mb-2 pt-2 ps-2 pb-2 pe-5'>
                  <Link to="/profile" style={{textDecoration: "none", color: "black"}} ><Image src={profileIconPop} /><span className='fw-bold ps-3 fs-5 btn'> Profile </span></Link>
                  </div>
                  <div className='position-relative'>
                  <hr/>
                  </div>
                  <div className='pt-2 pb-2 ps-2 pe-5'>
                  <Image src={logoutIcon} /> <span className='fw-bold ps-3 fs-5 btn' onClick={Logout}> Logout </span>
                  </div>
                  </Popover.Body>
                  </Popover>
                  }>
              <Image className='btn' src={profileIcon} style={{border: "none"}} />
            </OverlayTrigger>
            </div>
            {/* dropdown admin */}
            {/* <div>
            <OverlayTrigger
              trigger="click"
              rootClose
              key='bottom'
              placement='bottom-end'
              overlay={
              <Popover id={`popover-positioned-bottom`}>
                  <Popover.Body className={css.poppins}>
                  <div className='mb-2 pt-2 ps-2 pb-2 pe-5'>
                  <Link to="/profile" style={{textDecoration: "none", color: "black"}} ><Image src={profileIconPop} /><span className='fw-bold ps-3 fs-5'> Profile </span></Link>
                  </div>
                  <div className='position-relative'>
                  <hr/>
                  </div>
                  <div className='pt-2 pb-2 ps-2 pe-5'>
                  <Image src={logoutIcon} /> <span className='fw-bold ps-3 fs-5 btn' onClick={Logout}> Logout </span>
                  </div>
                  </Popover.Body>
                  </Popover>
                  }>
              <Image className='btn' src={profileIcon} style={{border: "none"}} />
            </OverlayTrigger>
            </div> */}

            </>
            )
          }

          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarBucks;