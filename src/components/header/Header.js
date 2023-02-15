import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import App from "../../App";
import Reviews from "../reviews/Reviews";
import ReviewForm from "../reviewForm/ReviewForm";

const Header = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color": 'green'}}>
                <FontAwesomeIcon icon={faCoffee}/>NotSteam
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px'}} navbarScroll>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                </Nav>
                {/* <Button className="game-header-button">Login</Button> */}
                {/* <Button className="game-header-button">Sign Up</Button> */}
                <div id="signInDiv"></div>

                {/* <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    
                    onError={() => {
                        console.log('Login Failed');
                    }}
                /> */}

            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header

