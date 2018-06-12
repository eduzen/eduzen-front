import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import './index.css';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">eduzen.com.ar</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to='/'>
                        Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to='/About'>
                        About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} to='/Contact'>
                        Contact
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} to='/Blog'>
                        Blog
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default CustomNavbar;