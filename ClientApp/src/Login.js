import React, {useState} from 'react';
import './Login.scss';
import {Button, TextField, InputAdornment} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


import Ghost from'./assets/Blob_Login.png'

export const Login = ({setSessionData}) => {
    const [sessionId, setSessionId] = useState(null);
    const [userName, setUserName] = useState("");
    
    return (
        <>
        <h1>Welcome to Tado!</h1>
        <div className="top">
            
            <img className="login" alt="" src={Ghost}></img>
            <div className= "verticalLine">
                <form className="loginForm" onSubmit={(event) => {
                    event.preventDefault();
                    setSessionData(sessionId, userName);
                }}>
                    <div className= "userInput">
                        <TextField
                            id="Lobby ID"
                            label="Lobby ID"
                            placeholder="e.g. 12345"
                            required
                            onChange={(e) => setSessionId(e.target.value)}
                        />
                        
                        <TextField style={{marginTop: "100px"}}
                            id="standard-read-only-input"
                            label="Name"
                            placeholder="e.g. Caleb"
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                        />
                    </div>
                    <Button variant="contained" type="submit" color="primary">Submit</Button>
                </form>
            </div>
            
        </div>
        </>
    );
}

export default Login;

