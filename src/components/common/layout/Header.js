import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {
  getItemFromStorage,
  removeItemFromStorage,
} from '../../../utils/helper';
import { useAuth } from '../../../hooks/useAuth';
import logo from '../../../assets/images/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userFromStorage = getItemFromStorage('user');

  const toggle = () => setIsOpen(!isOpen);
  const history = useHistory();
  const user = useAuth();
  const onLogout = () => {
    user.logout();
    removeItemFromStorage('user');
    history.push('/');
  };

  return (
    <Navbar className="bg-primary" dark expand="md">
      <NavbarBrand
        className="text-white font-weight-bolder d-flex align-items-center"
        href="/"
      >
        <img src={logo} alt=" React Boilerplate" className="logo" />
        React Boilerplate
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {userFromStorage && userFromStorage.email
                ? userFromStorage.email
                : 'user'}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={onLogout}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
