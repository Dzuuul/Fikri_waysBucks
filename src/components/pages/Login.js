import React, {useState} from 'react'
import { Button, Form, Modal, Card } from 'react-bootstrap'
import cssModules from '../Global.module.css'
import { Link } from 'react-router-dom'

const Login = (props) => {

  return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered style={{width: "300px"}}
    >
      <Card className='p-4' >
          <Card.Title className='mb-5 mt-3 fs-2' >Login</Card.Title>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className='mb-3' type="email" placeholder="Email" />
          <Form.Control className='mb-3' type="password" placeholder="Password" />
          </Form.Group>
          <Button className={cssModules.bucksBtnRed}>Login</Button>
          <Card.Text>
          Don't have an account ? Klik <Link to='/'>Here</Link>
          </Card.Text>
        </Card>
    </Modal>
  //   <>
  //   <Modal show={show} onHide={handleClose}>
        // <Card className='position-absolute top-50 start-50 translate-middle p-4'>
        //   <Card.Title className='mb-5 mt-3 fs-2' >Login</Card.Title>
        //   <Form.Group className="mb-3" controlId="formBasicPassword">
        //   <Form.Control className='mb-3' type="email" placeholder="Email" />
        //   <Form.Control className='mb-3' type="password" placeholder="Password" />
        //   </Form.Group>
        //   <Button className={cssModules.bucksBtnRed}>Login</Button>
        //   <Card.Text>
        //   Don't have an account ? Klik <Link to='/'>Here</Link>
        //   </Card.Text>
        // </Card>
  //   </Modal>
  // </>

  )
}

export default Login