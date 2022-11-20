import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"


const style = {
  textTitle: {
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "49px",

    color: "#BD0707",
  },

  textRed: {
    color: "#BD0707",
  },

  bgColor: {
    backgroundColor: "#BD0707",
  },

  textCenter: {
    textAlign: "center",
  },

  link: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
  },

  ImgToping: {
    position: "relative",
    width: "350px",
  },
}

function AddToping() {
    const topings = []
    const [DataToping, setState] = useState({
      nameToping: "",
      price: "",
      imgToping: "",
    })
    const addDataToping = JSON.parse(localStorage.getItem("DATA_TOPING"))
  
    const handleOnChange = (e) => {
      setState({
        ...DataToping,
        [e.target.name]: e.target.value,
      })
    }
  
    const handleOnSubmit = (e) => {
      e.preventDefault()
  
      if (addDataToping === null) {
        topings.push(DataToping)
        localStorage.setItem("DATA_TOPING", JSON.stringify(topings))
      } else {
        addDataToping.forEach((element) => {
          topings.push(element)
        })
        topings.push(DataToping)
        localStorage.setItem("DATA_TOPING", JSON.stringify(topings))
      }
    }
  
    return (
      <Container className="my-5">
        <Card className="mt-5" style={{ border: "white" }}>
          <Row>
            <Col sm={8}>
              <Card.Body className="m-auto" style={{ width: "80%" }}>
                <Card.Title className="mb-5" style={style.textTitle}>
                  Toping
                </Card.Title>
                <Form
                  onSubmit={handleOnSubmit}
                  className="m-auto mt-3 d-grid gap-2 w-100"
                >
                  <Form.Group className="mb-3 " controlId="nameProduct">
                    <Form.Control
                      onChange={handleOnChange}
                      value={DataToping.nameToping}
                      name="nameToping"
                      style={{ border: "2px solid #BD0707" }}
                      type="text"
                      placeholder="Name Toping"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="price">
                    <Form.Control
                      onChange={handleOnChange}
                      value={DataToping.price}
                      name="price"
                      style={{ border: "2px solid #BD0707" }}
                      type="text"
                      placeholder="Price"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="photoProduct">
                    <Form.Control
                      onChange={handleOnChange}
                      value={DataToping.imgToping}
                      name="imgToping"
                      style={{ border: "2px solid #BD0707" }}
                      type="text"
                      placeholder="Photo Product"
                    />
                  </Form.Group>
                  <Button
                    variant="outline-light"
                    style={style.bgColor}
                    type="submit"
                  >
                    Add Toping
                  </Button>
                </Form>
              </Card.Body>
            </Col>
            <Card.Img
              variant="top"
              src={DataToping.imgToping}
              style={style.ImgToping}
            />
          </Row>
        </Card>
      </Container>
    )
  }
  
  export default AddToping