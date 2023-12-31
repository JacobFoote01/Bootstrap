import { Container, Nav, Navbar } from "react-bootstrap";

export default function MainNav({ brand, leftLinks, rightLinks }) {
  return (
    <Navbar expand='lg' className="bg-success navbar-dark">
      <Container fluid>
      <Navbar.Brand href="#Home">{brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar">
      <Nav className="me-auto">
        {leftLinks.map(({ url, text }, index) => (
          <Nav.Link key={index} href={url}>
            {text}
          </Nav.Link>
        ))}
      </Nav>
      <Nav>
        {rightLinks.map(({ url, text }, index) => (
          <Nav.Link key={index} href={url}>
            {text}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}
