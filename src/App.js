import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';

import './App.css';

function App() {
  return (
    <div className="App">
      {/*La barre de navigation */ }
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My Company</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* The heading */}
      <h1>Mon checkpoint reactjs Numéro 1</h1>
      {/* The three cards */}
      <Container fluid>
      <Row>
        <Col>
          <Card>
          <Card.Header>Propriété 1</Card.Header>
            <Card.Body>
              <Card.Title>Ma carte</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Mon sous-titre de carte</Card.Subtitle>
              <Card.Text>
                Ceci est un exemple de carte avec un titre, un sous-titre,
                une description de la carte et des liens.
              </Card.Text>
              <Card.Link href="#">lien 1</Card.Link>
              <Card.Link href="#">Lien 2</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card >
          <Card.Header>Propriété 2</Card.Header>
            <Card.Body>
              <Card.Title>Ma carte</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Mon sous-titre de carte</Card.Subtitle>
              <Card.Text>
                Ceci est un exemple de carte avec un titre, un sous-titre,
                une description de la carte et des liens.
              </Card.Text>
              <Card.Link href="#">lien 1</Card.Link>
              <Card.Link href="#">Lien 2</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
          <Card.Header>Propriété 3</Card.Header>
            <Card.Body>
              <Card.Title>Ma carte</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Mon sous-titre de carte</Card.Subtitle>
              <Card.Text>
                Ceci est un exemple de carte avec un titre, un sous-titre,
                une description de la carte et des liens.
              </Card.Text>
              <Card.Link href="#">lien 1</Card.Link>
              <Card.Link href="#">Lien 2</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    </div>

    
  );
}

export default App;
