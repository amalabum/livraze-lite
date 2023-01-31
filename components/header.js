import styles from "@/styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Link from "next/link";
const Nav_bar = () => {
  return (
    <div className="Main_header">
      <div className="logo">
        <Link href="../">
          <img className="img" src="/logo-livraze.png" alt="logo livraze" />
        </Link>
      </div>
      <div className="menu_principal justify-content-end">
        <Navbar expand="lg" className={styles.menu_nd}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="../">acceuil</Nav.Link>
              <Nav.Link href="../apropos">à propos </Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
              <NavDropdown title="Soirée littéraire" id="basic-nav-dropdown">
                <NavDropdown.Item href="../presentationSoireeLitteraire">
                  Présention
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Prochaine Soirée
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Collections" id="basic-nav-dropdown">
                <NavDropdown.Item href="../collection-congolaise">
                  Congolaise
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">
                  Internationnale
                </NavDropdown.Item> */}
              </NavDropdown>
              {/* <Nav.Link href="/concours">Concours</Nav.Link> */}
              <Nav.Link href="../partenariat">Partenariat</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <ul className="nav_ul">
          <Link className="Link" href="../">
            <li className="menu_item">Acceuil</li>
          </Link>
          <Link href="../apropos">
            <li className="menu_item">à propos</li>
          </Link>

          <li href="#" className="menu_item">
            <NavDropdown title="Soirée littéraire" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="menu_item"
                href="../presentationSoireeLitteraire"
              >
                {" "}
                Présention
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="menu_item" href="#action/3.4">
                Prochaine Soirée
              </NavDropdown.Item>
            </NavDropdown>
          </li>

          <li href="#" className="menu_item">
            <NavDropdown title="Collections" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="menu_item"
                href="../collection-congolaise"
              >
                {" "}
                congolaise
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="menu_item" href="#action/3.4">
                internationnale
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <Link href="concours">
            <li className="menu_item d-none">Concours</li>
          </Link>
          <Link href="../partenariat">
            <li className="menu_item">partenariat</li>
          </Link>
        </ul> */}
      </div>
      <div className="recherche_bar d-none">
        <img className="img" src="/search_ic.png" alt="barre de recherche" />
      </div>
    </div>
  );
};
export default Nav_bar;
