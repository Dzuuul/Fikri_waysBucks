import React from "react";
import { Card, Stack } from "react-bootstrap";
import cssModules from "../components/assets/css/Global.module.css"
import Products from "./Products";


const CardProduct = () => {

    return (
    <Stack direction="horizontal" gap={3} className='' style={{margin: "50px auto 20px", width: "1072px", height: "392px"}} >

        {/* card */}
        {Products.map((Product, productId) => (
        <Card style={{ width: '18rem', borderRadius: '13px', background: "#F7DADA", border: "none" }}>

          <Card.Img variant="top" src={Product.image} />
          <Card.Body className={cssModules.poppins}>
            <Card.Title style={{ color: "#BD0707", fontSize: "18px"}}><b>{Product.title}</b></Card.Title>
            <Card.Text style={{ fontSize: "14px" }}>
                Rp. {Product.price}
            </Card.Text>
          </Card.Body>
          
        </Card>
        ))}
    
    </Stack>
    )
}

export default CardProduct