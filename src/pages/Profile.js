import React from "react";
import { Row, Col, Stack, Container } from "react-bootstrap";
import cssModules from "../components/assets/css/Global.module.css"

//images
import avatar from "../components/assets/images/avatar.png"
import transaction from "../components/assets/images/transaction.png"
import logo from "../components/assets/images/group.png"
import barcode from "../components/assets/images/tsbarcode.png"

const Profile = () => {
    return (
        <Stack direction="horizontal" gap={3} className={cssModules.poppins}>
            <div className={cssModules.jumboContainer}>
                <Container>
                <Row>
                    <Col>
                    <p className={cssModules.h3Bucks}>My Profile</p>
                    <Stack direction="horizontal" gap={4}>
                    <div>
                    <img src={avatar} alt=""/>
                    </div>
                    <div className="align-self-start">
                    <p className="fw-bold my-0" style={{color: "#613D2B"}}>Full Name</p>
                    <p className="mb-4">Egi Ganteng</p>
                    <p className="fw-bold my-0" style={{color: "#613D2B"}}>Email</p>
                    <p className="mb-4">egigans@gmail.com</p>
                    </div>
                    </Stack>
                    </Col>

                    <Col>
                    <p className={cssModules.h3Bucks}>My Transaction</p>
                    <Stack direction="horizontal" gap={4} style={{backgroundColor: "#F7DADA", borderRadius: "10px"}}>
                            <div>
                                <Stack direction="horizontal" gap={3} className="pt-4 pb-1 px-4">
                                    <div>
                                        <img src={transaction} alt=""></img>
                                    </div>

                                    <div className="align-self-start">
                                    <p className="fw-bold mb-0" style={{color: "#BD0707", fontSize: "14px"}}>Ice Coffe Palm Sugar</p>
                                    <p className="my-1" style={{color: "#BD0707", fontSize: "9px"}}><b>Saturday,</b> 5 March 2020</p>
                                    <p className="mt-3 mb-1" style={{color: "#BD0707", fontSize: "9px"}}><span>Toping : </span>Bill Berry Boba, Bubble Tea Gelatin</p>
                                    <p className="mt-2" style={{color: "#BD0707", fontSize: "9px"}}><span>Price : </span>Rp.33.000</p>
                                    </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className="pt-1 pb-4 px-4">
                                    <div>
                                        <img src={transaction} alt=""></img>
                                    </div>

                                    <div className="align-self-start">
                                    <p className="fw-bold mb-0" style={{color: "#BD0707", fontSize: "14px"}}>Ice Coffe Palm Sugar</p>
                                    <p className="my-1" style={{color: "#BD0707", fontSize: "9px"}}><b>Saturday,</b> 5 March 2020</p>
                                    <p className="mt-3 mb-1" style={{color: "#BD0707", fontSize: "9px"}}><span>Toping : </span>Bill Berry Boba, Bubble Tea Gelatin</p>
                                    <p className="mt-2" style={{color: "#BD0707", fontSize: "9px"}}><span>Price : </span>Rp.33.000</p>
                                    </div>
                                </Stack>
                            </div>

                            <div className="align-self-start p-4">
                                <img src={logo} alt="" className="ms-4 d-flex justify-content-end" style={{ width: "47px"}}></img>
                                <img src={barcode} alt="" className="pt-4 ms-3 d-flex justify-content-end"></img>
                                <p className="p-2 bg-info mt-2 ms-3" style={{color: "blue", fontSize: "9px", width: "75px"}}>On The Way</p>
                                <p className="mt-2 fw-bold d-flex justify-content-end" style={{color: "#BD0707", fontSize: "12px"}}><span>Sub Total :</span> 69.000</p>
                            </div>

                    </Stack>   
                    </Col>

                </Row>
                </Container>
            </div>
        </Stack>
    )
}

export default Profile