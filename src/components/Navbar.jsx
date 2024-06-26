import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function NavbarExample() {
    const navigate = useNavigate();
  return (
    <Navbar expand="lg" style={{backgroundColor:"#F08000"}}>
    <Container>
      <Navbar.Brand  style={{ color: "yellow" }}>
        🍰 Cake Story
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <button onClick={()=>navigate('/')} className="nav-head">Home</button>
          <button onClick={()=>navigate('/aboutus')} className="nav-head">
            About Us
          </button>
          <button onClick={()=>navigate('/delivery')} className="nav-head">
            Delivery
          </button>
          <button onClick={()=>navigate('/products')} className="nav-head">
            Our Products
          </button>
          <button onClick={()=>navigate('/custom/cakes')} className="nav-head">
            Customized Cakes
          </button>
          <button onClick={()=>navigate('/contactus')} className="nav-head">
            Contact Us
          </button>
        </Nav>
        {/* ------------------------------ whatsapp icon section ---------------------------- */}

        <div className="whatspp-maindiv">
          <div style={{ display: "flex" }}>
            <div className="whatsapp-iconDiv">
              <p>
                <FontAwesomeIcon icon={faWhatsapp} />
              </p>
            </div>
            <div style={{ width: "70%" }}>
              <Link
                to={"https://web.whatsapp.com/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p className="orderNow-Btn">Order Now!!</p>
              </Link>
            </div>
          </div>
        </div>
        {/* ----------------------------- whatsapp icon section end ---------------------------- */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarExample;