import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleNavItemClick = () => {
        setExpanded(false);
    };

    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <BootstrapNavbar.Brand>
                <Link to="/home" className="text-decoration-none text-white" onClick={handleNavItemClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="darkblue" class="bi bi-pc-display-horizontal m-3" viewBox="0 0 16 16">
                        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
                    </svg>
                    <h3 className="h3 d-inline m-0.6">TEC-PC</h3>
                </Link>
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="navbar" onClick={handleToggle} />
            <BootstrapNavbar.Collapse id="navbar">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Link to="/home" className="nav-link text-center" onClick={handleNavItemClick}>
                            HOME
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/productos" className="nav-link text-center" onClick={handleNavItemClick}>
                            PRODUCTOS
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/login" className="nav-link text-center" onClick={handleNavItemClick}>
                            LOGIN
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/register" className="nav-link text-center" onClick={handleNavItemClick}>
                            REGISTER
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/all-users" className="nav-link text-center" onClick={handleNavItemClick}>
                            USER
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/User" className="nav-link text-center" onClick={handleNavItemClick}>
                            USER MYD
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/cargadeproducto" className="nav-link text-center" onClick={handleNavItemClick}>
                            CARGA DE PRODUCTOS
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/desarrollador" className="nav-link text-center" onClick={handleNavItemClick}>
                            DESARROLLADOR
                        </Link>
                    </Nav.Item>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;





