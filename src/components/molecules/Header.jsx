import "./Header.scss";
import Button from "../atoms/Button";
import { Container, Row, Col } from "react-bootstrap";
import { iconPrint } from "../../res/iconPrint";

export default function Navbar() {
  return (
    <header className="header">
      <Container fluid>
        <Row>
          <Col xs={4}>
            <Button icon={"menu"} text={"Secciones"} style={"button-200"} />
            <Button icon={"search"} text={"Buscar"} style={"button-200"} />
          </Col>
          <Col xs={7} xl={4}>
            <h1 className="header__title title-bold ">Newspaper</h1>
          </Col>
          <Col xs={4}>
            <Button text={"Suscribite"} style={"button-suscribite"} />
            <Button text={"Ingresar"} style={"button-ingresar"} />
          </Col>
          <Col xs={4}>
            <a className="header__a" href="">
              Suscribite
            </a>
          </Col>
          <Col xs={1}>{iconPrint("search")}</Col>
        </Row>
      </Container>
    </header>
  );
}
