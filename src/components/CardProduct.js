import React from "react";
import { Card, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cssModules from "../components/assets/css/Global.module.css"
import Products from "./Products";


const ProductList = (props) => {
  const navigate = useNavigate()
  return (
    <>
        <Card key={props.id} style={{ width: '18rem', borderRadius: '13px', background: "#F7DADA", border: "none" }} onClick={() => {navigate(`/product/${props.title}/${props.id}`)}}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body className={cssModules.poppins}>
            <Card.Title style={{ color: "#BD0707", fontSize: "18px"}}><b>{props.title}</b></Card.Title>
            <Card.Text style={{ fontSize: "14px" }}>
                Rp. {props.price}
            </Card.Text>
          </Card.Body>
          
        </Card>
    </>
  )
}


const CardProduct = () => {
    return (
    <Stack direction="horizontal" gap={3} className='' style={{margin: "50px auto 20px", width: "1072px", height: "392px"}} >

        {/* card */}
        {Products.map((Products) => (
        <ProductList key={Products.id} id={Products.id} title={Products.title} image={Products.image} price={Products.price}/>
        ))}
    
    </Stack>
    )
}

export default CardProduct