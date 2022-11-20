import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

import { Outlet, Link, NavLink, useNavigate, Navigate, } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {


    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const account = useSelector(state => state.user.account)
    const Navigate = useNavigate()
    const handlelogin = () => {
        Navigate('/login')
    }
    const handleSignup = () => {
        Navigate('/signup')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='navbar-nav'>Duong Manh manh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to="/" className="nav-link">HOME</NavLink>
                        <NavLink to="/users" className="nav-link">User</NavLink>
                        <NavLink to="/admin" className="nav-link">Admin</NavLink>

                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">User</Nav.Link>
                        <Nav.Link href="#link">Admin</Nav.Link> */}

                    </Nav>

                    <Nav>
                        {isAuthenticated === false ?
                            <>
                                <button className='btn-login' onClick={() => handlelogin()}>log in</button>
                                <button className='btn-signup' onClick={() => { handleSignup() }}


                                >Sign up</button>
                            </> :
                            <NavDropdown title="Settings" id="basic-nav-dropdown">

                                <NavDropdown.Item href="#action/3.2">
                                    logout
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>


                            </NavDropdown>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;