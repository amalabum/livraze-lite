import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "@/styles/Home.module.css";

function Nav_bar() {
  return (
    <div className={styles.standard_header}>
      <div className={styles.logo_img}>
        <a href="/">
          <img src="/logo-livraze.png" alt="logo livraze" />
        </a>
      </div>
      <div className={styles.menu_principal}>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">acceuil</Nav.Link>
              <Nav.Link href="/apropos">à propos </Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
              <NavDropdown title="Soirée littéraire" id="basic-nav-dropdown">
                <NavDropdown.Item href="presentationSoireeLitteraire">
                  Présention
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Prochaine Soirée
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Collections" id="basic-nav-dropdown">
                <NavDropdown.Item href="/collection-congolaise">
                  Congolaise
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Internationnale
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/concours">Concours</Nav.Link>
              <Nav.Link href="/partenariat">Partenariat</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className={styles.recherche_bar}>
        <img src="/search_ic.png" alt="barre de recherche" />
      </div>
    </div>
  );
}

export default Nav_bar;
