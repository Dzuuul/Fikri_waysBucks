import React, { useState} from 'react'
import { Card, Button, Form, Modal } from 'react-bootstrap'
import cssModules from './assets/css/Global.module.css'

const Register = ({show,Hide, setModalRegisterShow,setModalLoginShow}) => {
  const users = []

  const [userData, setState] = useState({
    email: "",
    password: "",
    fullname: ""
  })

  const addUserData = JSON.parse(localStorage.getItem("DATA_USER"))


  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    if (addUserData === null) {
      users.push(userData)
      localStorage.setItem("DATA_USER", JSON.stringify(users))

    } else {
      addUserData.forEach(element => {
        users.push(element)
      })
      users.push(userData)
      localStorage.setItem("DATA_USER", JSON.stringify(users))
    }
      

      setModalRegisterShow(false)
      setModalLoginShow(true)
  }

  return (
    <Modal
      show={show} onHide={Hide}
    aria-labelledby="contained-modal-title-vcenter" centered className='position-absolute top-50 start-50 translate-middle p-4'  style={{width: "380px"}}
  >
    <div className='form-group'>
        <Form onSubmit={handleOnSubmit}>
          <Card className='p-4' style={{width: "340px"}} >
          <p className={cssModules.h2Bucks}>Register</p>
          <Form.Group controlId="formBasicEmail">
          <Form.Control className='mb-3' onChange={(e)=>{setState({...userData, email : e.target.value})}} name="email" type="email" placeholder="Email" required/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Control className='mb-3' onChange={(e)=>{setState({...userData, password : e.target.value})}} name="password" type="password" placeholder="Password" required/>
          </Form.Group> 
          <Form.Group className='mb-4' controlId="formBasicName">
          <Form.Control type="text" placeholder="Full Name" name='fullname' onChange={(e)=>{setState({...userData, fullname : e.target.value})}} required/>
          </Form.Group>
          <Button type='submit' className={cssModules.bucksBtnRed}>Register</Button>
          <p className={cssModules.poppins} style={{fontSize: "11pt", margin: "8px 0 0"}}>Already have an account ? Click <span className='btn text-info' style={{border: "none", padding: "0"}} onClick={() => {setModalRegisterShow(false); setModalLoginShow(true)}}>here</span></p>
          </Card>
        </Form>
    </div>
    </Modal>
  )
}

export default Register