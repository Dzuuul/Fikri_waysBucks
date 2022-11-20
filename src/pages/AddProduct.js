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

  ImgProduct: {
    position: "relative",
    width: "350px",
  },

  // Image Product 1
  ImgLogo: {
    position: "absolute",
    width: "130px",
    height: "auto",
    top: "35%",
    left: "77%",
  },
}

function AddProduct() {
    const products = []
    const [DataProduct, setState] = useState({
      id: 0,
      title: "",
      price: 0,
      image: ""
    })

    const addDataProduct = JSON.parse(localStorage.getItem("DATA_PRODUCT"))
  
    const handleOnChange = (e) => {
      setState({
        ...DataProduct,
        [e.target.name]: e.target.value,
      })
    }
  
    const handleOnSubmit = (e) => {
      e.preventDefault()
  
      if (addDataProduct === null) {
        products.push(DataProduct)
        localStorage.setItem("DATA_PRODUCT", JSON.stringify(products))
      } else {
        for (let i = 0; i < addDataProduct.length; i++) {
          products.push(addDataProduct[i])
        } 
        DataProduct.id = addDataProduct.length
        DataProduct.price = parseInt(products.price)
        products.push(DataProduct)
        localStorage.setItem("DATA_PRODUCT", JSON.stringify(products))
      }
      document.getElementById("addProduct").reset()
    }
  
    return (
      <Container className="my-5">
        <Card className="mt-5" style={{ border: "white" }}>
          <Row>
            <Col sm={8}>
              <Card.Body className="m-auto" style={{ width: "80%" }}>
                <Card.Title className="mb-5" style={style.textTitle}>
                  Product
                </Card.Title>
                <Form
                  onSubmit={handleOnSubmit} id="addProduct"
                  className="m-auto mt-3 d-grid gap-2 w-100"
                >
                  <Form.Group className="mb-3 " controlId="title">
                    <Form.Control
                      onChange={handleOnChange}
                      name="title"
                      style={{
                        border: "2px solid #BD0707",
                        backgroundColor: "#E0C8C840",
                      }}
                      type="text"
                      placeholder="Name Product"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="price">
                    <Form.Control
                      onChange={handleOnChange}
                      name="price"
                      style={{ border: "2px solid #BD0707" }}
                      type="text"
                      placeholder="Price"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="image">
                    <Form.Control
                      onChange={handleOnChange}
                      name="image"
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
                    Add Product
                  </Button>
                </Form>
              </Card.Body>
            </Col>
            <Card.Img
              variant="top"
              src={DataProduct.image}
              style={style.ImgProduct}
            />
          </Row>
        </Card>
      </Container>
    )
  }
  
  export default AddProduct