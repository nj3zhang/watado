import React, { Component } from 'react';
import BlobIconPNG from './blob.png';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const user = "JCAN";
    const activeFriends = 10;
    const totalPoints = 14;
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton className="tadoBarUser-size" aria-label="User Account" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} component="span">
        <img className="tadoBarUser-size" src={BlobIconPNG}/>
        </IconButton>
        <Menu className="menuItem" id="fade-menu" getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} vertical="bottom" transformOrigin={{ vertical: "top", horizontal: "center" }} anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
          <MenuItem className="menuItem" disabled='true' readOnly= 'true'>Welcome {user}</MenuItem>
          <MenuItem disabled='true'>Friends Active: {activeFriends}</MenuItem>
          <MenuItem disabled='true'>Total Points: {totalPoints}</MenuItem>
          <MenuItem className="menuItem" onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
