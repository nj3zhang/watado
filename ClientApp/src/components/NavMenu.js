import React from 'react';
import { Container, Navbar, NavbarBrand} from 'reactstrap';

import './NavMenu.scss';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@material-ui/icons/People';
import BlobIconPNG from './blob.png';

export default function NavMenu () {
  
    return (

      <header>
        <Navbar className="tadoBar-color navbar-expand-sm navbar-toggleable-sm" dark>
          <Container>
            <div className="left-bar">
              <IconButton aria-label="Menu" component="span">
              <MenuIcon className="tadoBarLButton"/>
              </IconButton>
              <IconButton aria-label="Friends Statistics" component="span">
              <PeopleIcon className="tadoBarLButton"/>
              </IconButton>
            </div>
            <NavbarBrand className="tadoBrand-color">TaDo</NavbarBrand>   
            <div className="right-bar">
              <IconButton className="tadoBarUser-size" aria-label="User Account" component="span">
              <img alt="" className="tadoBarUser-size" src={BlobIconPNG} />
              </IconButton>
            </div>


          </Container>
        </Navbar>
      </header>
    );
}

