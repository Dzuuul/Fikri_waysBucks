import React, {useState} from 'react'
import { Button, Form, Modal, Card } from 'react-bootstrap'
import cssModules from './assets/css/Global.module.css'
import { Link } from 'react-router-dom'

const Login = ({show,Hide, setModalRegisterShow,setModalLoginShow}) => {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [home, setHome] = useState(true);
  const [login, setLogin] = useState(true);

  const handleOnSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <Modal
      show={show} onHide={Hide}
      aria-labelledby="contained-modal-title-vcenter" centered className='position-absolute top-50 start-50 translate-middle p-4'  style={{width: "340px"}}
    >
    <Form onSubmit={handleOnSubmit}>
      <Card className='p-4' style={{width: "320px"}} >
          <p className={cssModules.h2Bucks}>Login</p>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className='mb-3' type="email" placeholder="Email" />
          <Form.Control className='mb-3' type="password" placeholder="Password" />
          </Form.Group>
          <Button type='submit' className={cssModules.bucksBtnRed}>Login</Button>
          <p className={cssModules.poppins} style={{fontSize: "11pt", margin: "8px 0 0"}}>Don't have an account ? Click <span className='btn text-info' style={{border: "none", padding: "0"}} onClick={() => {setModalLoginShow(false); setModalRegisterShow(true)}}>here</span></p>
        </Card>
    </Form>
    </Modal>
    </>
  )
}

export default Login