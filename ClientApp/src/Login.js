import React from 'react';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


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
                        placeholder="ABCDEF"
                        /> 
                    
                    <TextField style={{marginTop: "100px", marginBottom: "100px"}}
                        id="standard-read-only-input"
                        label="Name"
                        placeholder="Jeff"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                  <AccountCircle />
                                </InputAdornment>
                              ),
                    }}/> 
                    <Link to="/SignUp">
                        <Button variant="contained" color="primary">
                                Submit
                        </Button>
                    </Link>
                </div>
               
            </div>
            
        </div>
        </>
    );
}

export default Login;

