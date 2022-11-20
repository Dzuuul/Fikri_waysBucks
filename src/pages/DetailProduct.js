import { Button, Card, Col, Container, Row, Badge } from "react-bootstrap";
import Toping1 from "../components/assets/images/Toping1.png";
import Toping2 from "../components/assets/images/Toping2.png";
import Toping3 from "../components/assets/images/Toping3.png";
import Toping4 from "../components/assets/images/Toping4.png";
import Toping5 from "../components/assets/images/Toping5.png";
import Toping6 from "../components/assets/images/Toping6.png";
import Toping7 from "../components/assets/images/Toping7.png";
import Toping8 from "../components/assets/images/Toping8.png";
import Approve from "../components/assets/images/Approve.png";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import css from "../components/assets/css/Global.module.css"

const style = {
  card: {
    width: "100%",
    height: "500px",
    position: "relative",
    border: "none"
  },

  imgProduct: {
    width: "30%"
  },

  cardBody: {
    width: "50%",
  },

  cardTitle: {
    fontSize: "47px",
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
    color: "#BD0707",
  },

  cardText: {
    color: "#974A4A",
  },

  textToping: {
    color: "#BD0707",
    textAlign: "center",
  },

  imgToping: {
    width: "25%",
    height: "auto",
    marginLeft: "40%",
  },

  bgColor: {
    backgroundColor: "#BD0707",
  },
};
function DetailProduct() {
  const { id } = useParams();

  return (
    <Container className="my-5 w-90">
      <Card className={css.poppins} style={style.card}>
        <Row>
          <Card.Img style={style.imgProduct} src={Products[id].image} />

          <Card.Body className="my-2" style={style.cardBody}>
            <Col>
              <Card.Title className={css.poppins} style={style.cardTitle}>
                {Products[id].title}
              </Card.Title>
              <Card.Text style={style.cardText}>
                Rp. {Products[id].price}
              </Card.Text>
              <div className="mt-5">
                <Card.Text className="m-2" style={style.cardText}><b>Toping</b></Card.Text>
                <Row xs="4" className="m-2">
                {/* Toping 1 */}
                <div>
                  <div className="position-relative">
                    <Card.Img style={style.imgToping} src={Toping1} />
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

                {/* Toping 2 */}
                <div>
                  <div className="position-relative">
                    <Card.Img style={style.imgToping} src={Toping2} />
                    <Badge
                      style={{ top: "10%", left: "65%" }}
                      className="position-absolute translate-middle bg-success p-0   border border-light rounded-circle"
                    >
                      <img style={{ width: "20px" }} src={Approve} alt="" />
                    </Badge>
                  </div>
                  <Card.Text style={style.textToping}>Manggo</Card.Text>
                </div>

                {/* Toping 3 */}
                <div>
                  <div className="position-relative">
                    <Card.Img style={style.imgToping} src={Toping3} />
                    <Badge
                      style={{ top: "10%", left: "65%" }}
                      className="position-absolute translate-middle bg-success p-0   border border-light rounded-circle"
                    >
                      <img style={{ width: "20px" }} src={Approve} alt="" />
                    </Badge>
                  </div>

                  <Card.Text style={style.textToping}>Green Coconut</Card.Text>
                </div>

                {/* Toping 4 */}
                <div>
                  <div className="position-relative">
                    <Card.Img style={style.imgToping} src={Toping4} />
                    <Badge
                      style={{ top: "10%", left: "65%" }}
                      className="position-absolute translate-middle bg-success p-0   border border-light rounded-circle"
                    >
                      <img style={{ width: "20px" }} src={Approve} alt="" />
                    </Badge>
                  </div>
                  <Card.Text style={style.textToping}>Boba Manggo</Card.Text>
                </div>
              </Row>
              <Row xs="4" className="m-2">
                {/* Toping 5 */}
                <div>
                  <div className="position-relative">
                    <Card.Img style={style.imgToping} src={Toping5} />
                    <Badge
                      style={{ top: "10%", left: "65%" }}
                      className="position-absolute translate-middle bg-success p-0   border border-light rounded-circle"
                    >
                      <img style={{ width: "20px" }} src={Approve} alt="" />
                    </Badge>
                  </div>
                  <Card.Text style={style.textToping}>
                    Bill Berry Boba
                  </Card.Text>
                </div>
                {/* Toping 6 */}
                <div>
                  <div className="position-relative">
                    <Card.Img style={style.imgToping} src={Toping6} />
                    <Badge
                      style={{ top: "10%", left: "65%" }}
                      className="position-absolute translate-middle bg-success p-0   border border-light rounded-circle"
                    >
                      <img style={{ width: "20px" }} src={Approve} alt="" />
                    </Badge>
                  </div>

                  <Card.Text style={style.textToping}>
                    Kiwi Popping Pearl
                  </Card.Text>
                </div>

                {/* Toping 7 */}
                <div>
                  <div className="position-relative">
                    <Card.Img style={style.imgToping} src={Toping7} />
                    <Badge
                      style={{ top: "10%", left: "65%" }}
                      className="position-absolute translate-middle bg-success p-0   border border-light rounded-circle"
                    >
                      <img style={{ width: "20px" }} src={Approve} alt="" />
                    </Badge>
                  </div>

                  <Card.Text style={style.textToping}>
                    Matcha Cantaloupe
                  </Card.Text>
                </div>

                {/* Toping 8 */}
                <div>
                  <div className="position-relative">
                    <Card.Img style={style.imgToping} src={Toping8} />
                    <Badge
                      style={{ top: "10%", left: "65%" }}
                      className="position-absolute translate-middle bg-success p-0   border border-light rounded-circle"
                    >
                      <img style={{ width: "20px" }} src={Approve} alt="" />
                    </Badge>
                  </div>

                  <Card.Text style={style.textToping}>
                    Strawberry Popping
                  </Card.Text>
                </div>
              </Row>
              </div>
              <Row className="m-4">
                <Col xs={12} md={10}>
                  <Card.Text style={style.cardText}>Total</Card.Text>
                </Col>
                <Col xs={6} md={2}>
                  <Card.Text style={style.cardText}>Rp.27.000</Card.Text>
                </Col>
              </Row>
              <Button
                className="w-100"
                variant="outline-light"
                style={style.bgColor}
              >
                Add Cart
              </Button>
            </Col>
          </Card.Body>
        </Row>
      </Card>
    </Container>
  );
}

export default DetailProduct;