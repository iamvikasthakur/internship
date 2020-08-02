import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { NavLink} from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">T&T</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" activeClassName="active" to='/' exact={true}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" activeClassName="active" to='/delhi'>Delhi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" activeClassName="active" to='mumbai'>Mumbai</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" activeClassName="active" to='/kolkata'>Kolkata</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" activeClassName="active" to='/banglore'>Banglore</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;