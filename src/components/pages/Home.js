import React from "react";
import jumbotronRectangle from '../images/jumbotronRectangle.png'
import jumboImg from '../images/jumboImg.png'
import { Stack, Card } from "react-bootstrap";
import cssModules from "../Global.module.css"

//product image
import p1 from '../images/product1.png';
import p2 from '../images/product2.png';
import p3 from '../images/product3.png';
import p4 from '../images/product4.png';

const Home = () => {
    return (
    <>
    <Stack direction="horizontal" gap={3}>
        <div className={cssModules.jumboContainer}>
            <div className={cssModules.jumboRect}>
                <p className={cssModules.jumboTitle}>WAYSBUCKS</p>
                <p className={cssModules.jumboSubTitle}>Things are changing, but we're still here for you</p>
                <p className={cssModules.jumboDescription}>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available<br/><br/>Let's Order...</p>
                <img src={jumbotronRectangle} alt="" />
            </div>
            <div className={cssModules.jumboImg}>
                <img src={jumboImg} alt="" />
            </div>
        </div>
    </Stack>
    <div className={cssModules.jumboContainer} style={{height: "50px"}}>
        <p className={cssModules.h2Bucks} >Let's Order</p>
    </div>
    <Stack direction="horizontal" gap={3} className='' style={{margin: "50px auto 20px", width: "1072px", height: "392px"}} >

        {/* card1 */}
    <Card style={{ width: '18rem', borderRadius: '13px', background: "#F7DADA", border: "none" }}>
      <Card.Img variant="top" src={p1}  />
      <Card.Body className={cssModules.poppins}>
        <Card.Title style={{ color: "#BD0707", fontSize: "18px"}}><b>Ice Coffee Palm Sugar</b></Card.Title>
        <Card.Text style={{ fontSize: "14px" }}>
            Rp.27.000
        </Card.Text>
      </Card.Body>
    </Card>

        {/* card2 */}
    <Card style={{ width: '18rem', borderRadius: '13px', background: "#F7DADA", border: "none" }}>
      <Card.Img variant="top" src={p2} />
      <Card.Body className={cssModules.poppins}>
        <Card.Title style={{ color: "#BD0707", fontSize: "18px"}}><b>Ice Coffee Green Tea</b></Card.Title>
        <Card.Text style={{ fontSize: "14px" }}>
            Rp.31.000
        </Card.Text>
      </Card.Body>
    </Card>

        {/* card3 */}
    <Card style={{ width: '18rem', borderRadius: '13px', background: "#F7DADA", border: "none" }}>
      <Card.Img variant="top" src={p3} />
      <Card.Body className={cssModules.poppins}>
        <Card.Title style={{ color: "#BD0707", fontSize: "18px"}}><b>Hanami Latte</b></Card.Title>
        <Card.Text style={{ fontSize: "14px" }}>
            Rp.29.000
        </Card.Text>
      </Card.Body>
    </Card>

        {/* card4 */}
    <Card style={{ width: '18rem', borderRadius: '13px', background: "#F7DADA", border: "none" }}>
      <Card.Img variant="top" src={p4} />
      <Card.Body className={cssModules.poppins}>
        <Card.Title style={{ color: "#BD0707", fontSize: "18px"}}><b>Clepon Coffee</b></Card.Title>
        <Card.Text style={{ fontSize: "14px" }}>
            Rp.28.000
        </Card.Text>
      </Card.Body>
    </Card>
    </Stack>
    </>

    )
}

export default Home