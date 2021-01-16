import React from 'react';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Ghost from'./assets/Pacman_Ghost_Orange.png'

export const Login = () => {
    return (
        <>
        <h1>Welcome to Tado!</h1>
        <div className="top">
            
            <img alt="" src={Ghost}></img>
            <div className= "verticalLine">
                <div className= "userInput">
                    <TextField
                        id="Lobby ID"
                        label="Lobby ID"
                        defaultValue="ABCDEF"
                        InputProps={{
                        readOnly: true,
                    }}/> 
                    
                    <TextField style={{marginTop: "100px"}}
                        id="standard-read-only-input"
                        label="Name"
                        defaultValue="Jeff"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                  <AccountCircle />
                                </InputAdornment>
                              ),
                    }}/> 
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Login;

