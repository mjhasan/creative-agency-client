import React, { useContext } from 'react';
import './HomeHeader.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../img/logos/logo.png';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { UserContext } from '../../../App';

const HomeHeader = () => {
    const [user] = useContext(UserContext)
    return (
        <div>
            <Navbar className="navbar-style" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" width="130px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="#" className="nav-link home">Home</Link>
                            <Link to="#" className="nav-link">Our Portfolio</Link>
                            <Link to="#" className="nav-link">Our Team</Link>
                            <Link to="/admin-dashboard" className="nav-link login">
                                {user.emailVerified ? 'Admin' : 'Login'}
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HomeHeader;