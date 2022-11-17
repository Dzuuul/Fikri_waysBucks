import React, { useState} from 'react'
import { Card, Button, Form, Modal } from 'react-bootstrap'
import cssModules from './assets/css/Global.module.css'

const Register = (props) => {
  const users = []
  const [login, setLogin] = useState(true)

  const [state, setState] = useState({
    email: "",
    password: "",
    fullname: ""
  })


  const handleOnSubmit = (e) => {
    e.preventDefault()
      users.push(state)
      localStorage.setItem("DATA_USER", JSON.stringify(users))
  }

  return (
    <Modal
    {...props}
    aria-labelledby="contained-modal-title-vcenter" centered className='position-absolute top-50 start-50 translate-middle p-4'  style={{width: "360px"}}
  >
    <div className='form-group'>
        <Form onSubmit={handleOnSubmit}>
          <Card className='p-4' style={{width: "320px"}} >
          <p className={cssModules.h2Bucks}>Register</p>
          <Form.Group controlId="formBasicEmail">
          <Form.Control className='mb-3' onChange={(e)=>{setState({...state, email : e.target.value})}} name="email" type="email" placeholder="Email" required/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Control className='mb-3' onChange={(e)=>{setState({...state, password : e.target.value})}} name="password" type="password" placeholder="Password" required/>
          </Form.Group> 
          <Form.Group className='mb-4' controlId="formBasicName">
          <Form.Control type="text" placeholder="Full Name" name='fullname' onChange={(e)=>{setState({...state, fullname : e.target.value})}} required/>
          </Form.Group>
          <Button type='submit' className={cssModules.bucksBtnRed}>Register</Button>
          <Card.Text>
          Already have an account ? Klik <span>Here</span>
          </Card.Text>
          </Card>
        </Form>
    </div>
    </Modal>
  )
}

export default Register