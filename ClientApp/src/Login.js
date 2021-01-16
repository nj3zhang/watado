import React from 'react';
import './Login.scss';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import Ghost from'./assets/Pacman_Ghost_Orange.png'

export const Login = () => {
    return (
        <>
        <h1>Welcome to Tado!</h1>
        <div className="top">
            
            <img src={Ghost}></img>
            <div className= "verticalLine">
                <div className= "userInput">
                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                        readOnly: true,
                    }}/> 
                    
                    <TextField style={{marginTop: "100px"}}
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Test 2"
                        InputProps={{
                    }}/> 
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Login;

