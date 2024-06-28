import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.css"

function NavbarExample() {
    const navigate = useNavigate();
  return (
    <Navbar expand="lg" style={{backgroundColor:"black"}}>
    <Container>
      <Navbar.Brand  style={{ color: "#fff",fontSize:"x-large" }}>
        <img src="https://i.pinimg.com/736x/ae/38/01/ae38016bd1b7cd525f0bf6afe9bafac6.jpg"  style={{width:"3rem"}}/>
       Top-Gear
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <button onClick={()=>navigate('/')} className="navHeadBtn">Home</button>
          <button onClick={()=>navigate('/about')} className="navHeadBtn">
            About 
          </button>
          <button onClick={()=>navigate('/service')} className="navHeadBtn">
          Service
          </button>
          <button onClick={()=>navigate('/contact-us')} className="navHeadBtn">
            Contact Us
          </button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarExample;