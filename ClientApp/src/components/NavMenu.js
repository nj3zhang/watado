
import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import BlobIconPNG from './blob.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
    
  }

  toggleNavbar () {
    this.setState({

    });
  }

  render () {

    return (

      <header>
        <Navbar className="tadoBar-color navbar-expand-sm navbar-toggleable-sm" dark>
          <Container>
            <IconButton aria-label="Menu" component="span">
            <MenuIcon className="tadoBarLButton"/>
            </IconButton>
            <IconButton aria-label="Friends Statistics" component="span">
            <PeopleIcon className="tadoBarLButton"/>
            </IconButton>

            <NavbarBrand className="tadoBrand-color">TaDo</NavbarBrand>   
            
            <IconButton className="tadoBarUser-size" aria-label="User Account" component="span">
            <img className="tadoBarUser-size" src={BlobIconPNG} />
            </IconButton>
            


          </Container>
        </Navbar>
      </header>
    );
  }
}

