import React from "react";
import jumbotronRectangle from '../components/assets/images/jumbotronRectangle.png'
import jumboImg from '../components/assets/images/jumboImg.png'
import { Stack } from "react-bootstrap";
import cssModules from "../components/assets/css/Global.module.css"
import CardProduct from "../components/CardProduct";


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
    <CardProduct/>
    </>

    )
}

export default Home