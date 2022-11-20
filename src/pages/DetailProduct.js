import { Button, Card, Col, Container, Row, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import css from "../components/assets/css/Global.module.css"
import Topping from "../components/Topping";
import ToppingList from "../components/SelectTopping";

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
                {Topping.map((Topping) => (
                  <ToppingList key={Topping.id} id={Topping.id} title={Topping.title} image={Topping.image} price={Topping.price} />
                  ))}
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
                variant="danger"
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