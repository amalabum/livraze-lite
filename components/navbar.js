import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "@/styles/Home.module.css";

function Nav_bar() {
  return (
    <div className={styles.standard_header}>
      <div className={styles.logo_img}>
        <img src="/logo-livraze.png" alt="logo livraze" />
      </div>
      <div className={styles.menu_principal}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">acceuil</Nav.Link>
                <Nav.Link href="#home">à propos </Nav.Link>
                <Nav.Link href="#link"></Nav.Link>
                <NavDropdown title="Soirée littéraire" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3">
                    Présention
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Prochaine Soirée
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Collections" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3">
                    Congolaise
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Internationnale
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Concours</Nav.Link>
                <Nav.Link href="#home">Partenariat</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className={styles.recherche_bar}>
        <img src="/search_ic.png" alt="barre de recherche" />
      </div>
    </div>
  );
}

export default Nav_bar;
