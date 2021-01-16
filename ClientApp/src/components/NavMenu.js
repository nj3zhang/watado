import React from 'react';
import { Container, Navbar, NavbarBrand} from 'reactstrap';
import MenuDropdown from './MenuDropdown';

import './NavMenu.scss';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';

export default function NavMenu () {
    return (

      <header>
        <Navbar className="tadoBar-color navbar-expand-sm navbar-toggleable-sm" dark>
          <Container>
            <div className="left-bar">
              <IconButton aria-label="Menu" component="span" id="collapsible-button">
              <MenuIcon className="tadoBarLButton"/>
              </IconButton>
              <IconButton aria-label="Friends Statistics" component="span">
              <PeopleIcon className="tadoBarLButton"/>
              </IconButton>
            </div>
            <NavbarBrand className="tadoBrand-color">TaDo</NavbarBrand>   
            <div className="right-bar">
            </div>
            <MenuDropdown/>

          </Container>
        </Navbar>
      </header>
    );
}

