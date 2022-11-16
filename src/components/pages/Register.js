import React from 'react'
import { Card, Button, Form, Modal } from 'react-bootstrap'
import cssModules from '../Global.module.css'
import { Link } from 'react-router-dom'

const Register = (props) => {
  return (
    <Modal {...props} size="lg" centered aria-labelledby="contained-modal-title-vcenter">
    <div className={cssModules.poppins}>
      <Card className='position-absolute top-50 start-50 translate-middle p-4' >
        <Card.Title className='mb-5 mt-3 fs-2'>Register</Card.Title>
        <Form.Group className="mb-3">
        <Form.Control className='mb-3' type="email" placeholder="Email"/>
        <Form.Control className='mb-3' type="password" placeholder="Password"/>
        <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Button className={cssModules.bucksBtnRed}>Register</Button>
        <Card.Text>
        Already have an account ? Klik <Link to='/'>Here</Link>
        </Card.Text>
      </Card>
    </div>
    </Modal>
  )
}

export default Register