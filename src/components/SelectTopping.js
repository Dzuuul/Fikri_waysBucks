import React from "react";
import Topping from "./Topping";
import Approve from "../components/assets/images/Approve.png";
import { Badge, Card } from "react-bootstrap";

const ToppingList = (props) => {
    const style = {
        textToping: {
            color: "#BD0707",
            textAlign: "center",
          },
        
          imgToping: {
            width: "25%",
            height: "auto",
            marginLeft: "40%",
          },
    }
    return (
        <div>
        <div className="position-relative">
          <Card.Img style={style.imgToping} src={props.image}  />
          <Badge
            style={{ top: "10%", left: "65%" }}
            className="position-absolute translate-middle bg-success p-0 border border-light rounded-circle"
          >
            <img style={{ width: "20px" }} src={Approve} alt="" />
          </Badge>
        </div>
        <Card.Text style={style.textToping}>
          Bubble Tea Gelatin
        </Card.Text>
      </div>
    )
}

export default ToppingList