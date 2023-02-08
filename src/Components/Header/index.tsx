import "./style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useEffect, FC} from 'react';
import {ConnectedProps} from "react-redux";
import {connector} from "Store/auth/mappers";
import {LinkContainer} from "react-router-bootstrap";
import {BackendClient} from "Api/client";



const Header:FC<ConnectedProps<typeof connector>> = ({user_id, updateAuthStatus}) => {
    const client = new BackendClient("http://localhost:8001/v1")
    const link = `/users/${user_id}`
    useEffect(() => {
        client.isAuth().then(updateAuthStatus)
    }, [])
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>PokerHome</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-lg-0 ">
                        {user_id ?
                            <>
                                <LinkContainer to="/tables"><Nav.Link>Tables</Nav.Link></LinkContainer>
                                <LinkContainer to={link}><Nav.Link>Profile</Nav.Link></LinkContainer>
                                <LinkContainer to="/"><Nav.Link onClick={async()=> {
                                    await client.logOut()
                                    updateAuthStatus(null)
                                }}>Logout</Nav.Link></LinkContainer>
                            </> :
                            <>
                                <LinkContainer to="/sign"><Nav.Link>Sign</Nav.Link></LinkContainer>
                                <LinkContainer to="/register"><Nav.Link>Signup</Nav.Link></LinkContainer>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default connector(Header)
